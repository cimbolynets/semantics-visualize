import { envp, envpa, formatCondition, s } from "@/lib/utils/format";
import { Memory } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { generateVisitedTreeJane } from "../jane/generateVisitedTree";
import {
  AssignmentValue,
  BlockValue,
  BranchValue,
  CycleValue,
  DeclarationValue,
  Instruction,
  InstructionSequence,
  InstructionValue,
  ProcCallValue,
  ProcDefinitionValue,
  SkipValue,
} from "../jane/types";
import { frac, parseState } from "./nsUtils";

export class MakeSequenceNS implements IMakeSequence<string | undefined> {
  private states: string[];
  private envs: string[];
  private nextStateNumber: number;
  private nextEnvNumber: number;
  private nextEnvNumbersStack: number[];

  constructor() {
    this.states = [];
    this.envs = [];
    this.nextStateNumber = 0;
    this.nextEnvNumber = 0;
    this.nextEnvNumbersStack = [];
    this.changeEnv([]);
    this.nextEnvNumbersStack.push(this.nextEnvNumber);
  }

  getStates = () => {
    return this.states;
  };

  getEnvs = () => {
    return this.envs;
  };

  changeState = ({ memory, startStateNumber }: { memory: Memory; startStateNumber?: number }) => {
    this.states.push(parseState(this.nextStateNumber, memory, startStateNumber));
    this.nextStateNumber++;
  };

  changeEnv = (procs: ProcDefinitionValue[]) => {
    const formattedProcs = procs.length
      ? String.raw`\\ ${procs.map((p) => String.raw`\quad \text{${p.text}}`).join(" \\\\ ")}\\`
      : "";
    this.envs.push(`${envp(this.getNextEnvNumber())} = [${formattedProcs}]`);
    this.nextEnvNumber++;
  };

  getNextEnvNumber = () => {
    return this.nextEnvNumbersStack.at(-1) ?? 0;
  };

  addAssign = (instr: Instruction<AssignmentValue>, last: boolean) => {
    let result = "";
    if (!last) {
      result = String.raw`\langle \text{${instr.text}},\ ${s(
        this.nextStateNumber - 1
      )} \rangle\ \rightarrow\ ${s(this.nextStateNumber)}`;
    }
    this.changeState({ memory: instr.value.state });
    return result;
  };

  addCycle = (instr: Instruction<CycleValue>): string => {
    if (instr.value.iters.length === 0) {
      return formatCondition(instr.value.conditionText, false, this.nextStateNumber - 1);
    }

    const condition = formatCondition(instr.value.conditionText, true, this.nextStateNumber - 1);
    const whileBody = this.traverse(instr.value.iters[0]);
    const restWhile = this.traverse({
      children: [
        {
          ...instr,
          value: {
            ...instr.value,
            iters: instr.value.iters.slice(1),
          },
        },
      ],
      type: "instructionSequence",
      text: "",
    });
    return String.raw`${envpa(
      this.getNextEnvNumber() - 1
    )}${whileBody},\quad ${restWhile},\quad ${condition}`;
  };

  addBranch = (instr: Instruction<BranchValue>): string => {
    const stateBeforeBranch = this.nextStateNumber - 1;
    const targetBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
    return String.raw`${this.traverse(targetBranch)}, \quad ${formatCondition(
      instr.value.conditionText,
      instr.value.isTrue,
      stateBeforeBranch
    )}`;
  };

  addSkip = (instr: Instruction<SkipValue>) => {
    return String.raw`\langle \text{${instr.text}},\ ${s(
      this.nextStateNumber - 1
    )} \rangle\ \rightarrow\ ${s(this.nextStateNumber - 1)}`;
  };

  addDecl = (decl: DeclarationValue) => {
    const startStateNumber = this.nextStateNumber - 1;
    const lastMemoryState = decl.assignments.at(-1)?.state;
    if (!lastMemoryState) throw new Error("There aren't any declarations: " + decl.text);
    const instr = String.raw`\langle \text{${decl.text}},\ ${s(
      startStateNumber
    )} \rangle\ \rightarrow_D\ ${s(this.nextStateNumber)}`;
    const varTransitions = decl.assignments.reduce((acc, assignment, index) => {
      return String.raw`${acc}${index > 0 ? ", " : ""}${assignment.id} \mapsto \mathscr{E}[\![${
        assignment.value
      }]\!]s`;
    }, "");
    const transitions = String.raw`\langle ${s(startStateNumber)}[ ${varTransitions} ],\ ${s(
      startStateNumber
    )} \rangle\ \rightarrow_D\ ${s(this.nextStateNumber)}`;
    this.changeState({ memory: lastMemoryState });
    return frac(transitions, instr);
  };

  addEnvUpdate = (procs: ProcDefinitionValue[]) => {
    const text = String.raw`${envp(this.getNextEnvNumber())} = update(D_p, ${envp(
      this.getNextEnvNumber() - 1
    )})`;
    this.changeEnv(procs);
    return text;
  };

  addBlock = (instr: Instruction<BlockValue>) => {
    if (!instr.value.memoryBefore || !instr.value.memoryAfter) {
      return instr.text;
    }
    const seqStartStateNumber = this.nextStateNumber - 1;
    const decl = instr.value.decl ? String.raw`${this.addDecl(instr.value.decl)}, \quad ` : "";
    const envUpdate = instr.value.procs
      ? String.raw`${this.addEnvUpdate(instr.value.procs)}, \quad `
      : "";
    this.nextEnvNumbersStack.push(this.nextEnvNumber);
    const block = this.traverse(instr.value.body);
    this.nextEnvNumbersStack.pop();
    this.changeState({ memory: instr.value.memoryAfter, startStateNumber: seqStartStateNumber });
    return String.raw`${decl}${envUpdate}${block}`;
  };

  addProcCall = (instr: Instruction<ProcCallValue>) => {
    const parsedBody = instr.value.body ? this.traverse(instr.value.body) : undefined;
    if (!parsedBody) return undefined;
    return frac(parsedBody, String.raw`\text{${instr.text}}`);
  };

  chooseInstruction = (instr: Instruction<InstructionValue>, last: boolean) => {
    let includeEnv = true;
    let result: string | undefined;
    switch (instr.value?.type) {
      case "assign":
        includeEnv = !last;
        result = this.addAssign(instr as Instruction<AssignmentValue>, last);
        break;
      case "cycle":
        includeEnv = false;
        result = this.addCycle(instr as Instruction<CycleValue>);
        break;
      case "branch":
        result = this.addBranch(instr as Instruction<BranchValue>);
        break;
      case "skip":
        result = this.addSkip(instr as Instruction<SkipValue>);
        break;
      case "block":
        includeEnv = false;
        result = this.addBlock(instr as Instruction<BlockValue>);
        break;
      case "procCall":
        result = this.addProcCall(instr as Instruction<ProcCallValue>);
        break;
      default:
        console.error("Not an instruction:", instr.text);
        result = undefined;
    }
    return (includeEnv ? envpa(this.getNextEnvNumber() - 1) : "") + result;
  };

  parseInstructionSequence = (tree: InstructionSequence<InstructionValue>, last: boolean) => {
    if (tree.children.length === 0) return "";
    const [first, ...rest] = tree.children;
    const firstAndRestText =
      `\\text{${first.text}}` +
      rest.reduce((acc: string, node: { text: string }) => acc + "; \\text{" + node.text + "}", "");
    const currentInstruction = String.raw`${envpa(
      this.getNextEnvNumber() - 1
    )} \langle ${firstAndRestText},\ ${s(this.nextStateNumber - 1)} \rangle`;

    let resultNominator: string | undefined;
    if (rest.length !== 0) {
      const formattedInstruction = this.parseInstruction(first, false);
      const formattedRestTree = this.traverse(
        {
          ...tree,
          children: rest,
        },
        last
      );
      resultNominator = String.raw`${formattedInstruction},\quad ${formattedRestTree}`;
    } else {
      resultNominator = this.parseInstruction(first, true);
    }

    const resultState = s(this.nextStateNumber - 1);

    return frac(
      resultNominator ?? "",
      String.raw`${currentInstruction} \rightarrow ${resultState}`
    );
  };

  parseInstruction = (tree: Instruction<InstructionValue>, last: boolean) => {
    return this.chooseInstruction(tree, last);
  };

  traverse = (
    tree: Instruction<InstructionValue> | InstructionSequence<InstructionValue>,
    last = false
  ): string | undefined => {
    if (!tree) return;
    if (tree.type === "instructionSequence") {
      return this.parseInstructionSequence(tree, last);
    } else if (tree.type === "instruction") {
      return this.parseInstruction(tree, last);
    }
  };

  getSequence(input: string, variables: Memory) {
    const [tree] = generateVisitedTreeJane(input, variables);
    this.changeState({ memory: variables });
    const res = this.traverse(tree);
    return res;
  }
}