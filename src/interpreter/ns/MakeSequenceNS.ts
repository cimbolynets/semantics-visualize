/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memory } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { generateVisitedTreeNS } from "./generateVisitedTree";
import { formatCondition, frac, parseState } from "./nsUtils";
import {
  AssignmentInstruction,
  BlockInstruction,
  BranchInstruction,
  CycleInstruction,
  Declaration,
  ProcCallInstruction,
  SkipInstruction,
  TreeNode,
} from "./types";

export class MakeSequenceNS implements IMakeSequence<string | undefined> {
  private states: string[];
  private nextStateNumber: number;
  private envNumber: number;

  constructor() {
    this.states = [];
    this.nextStateNumber = 0;
    this.envNumber = 0;
  }

  getStates = () => {
    return this.states;
  };

  changeState = ({ memory, startStateNumber }: { memory: Memory; startStateNumber?: number }) => {
    this.states.push(parseState(this.nextStateNumber, memory, startStateNumber));
    this.nextStateNumber++;
  };

  addAssign = (instr: AssignmentInstruction, last: boolean) => {
    let result = "";
    if (!last) {
      result = String.raw`\langle \text{${instr.text}},\ s_{${
        this.nextStateNumber - 1
      }} \rangle\ \rightarrow\ s_${this.nextStateNumber}`;
    }
    this.changeState({ memory: instr.value.state });
    return result;
  };

  addCycle = (instr: CycleInstruction): string => {
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
    });
    return String.raw`${whileBody},\quad ${restWhile},\quad ${condition}`;
  };

  addBranch = (instr: BranchInstruction): string => {
    const stateBeforeBranch = this.nextStateNumber - 1;
    const targetBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
    return String.raw`${this.traverse(targetBranch)}, \quad ${formatCondition(
      instr.value.conditionText,
      instr.value.isTrue,
      stateBeforeBranch
    )}`;
  };

  addSkip = (instr: SkipInstruction) => {
    return String.raw`\langle \text{${instr.text}},\ s_{${
      this.nextStateNumber - 1
    }} \rangle\ \rightarrow\ s_{${this.nextStateNumber - 1}}`;
  };

  addDecl = (decl: Declaration) => {
    const startStateNumber = this.nextStateNumber - 1;
    const lastMemoryState = decl.assignments.at(-1)?.state;
    if (!lastMemoryState) throw new Error("There aren't any declarations: " + decl.text);
    const instr = String.raw`\langle \text{${decl.text}},\ s_{${startStateNumber}} \rangle\ \rightarrow_D\ s_{${this.nextStateNumber}}`;
    const varTransitions = decl.assignments.reduce((acc, assignment, index) => {
      return String.raw`${acc}${index > 0 ? ", " : ""}${assignment.id} \mapsto \mathscr{E}[\![${
        assignment.value
      }]\!]s`;
    }, "");
    const transitions = String.raw`\langle s_{${startStateNumber}}[ ${varTransitions} ],\ s_{${startStateNumber}} \rangle\ \rightarrow_D\ s_{${this.nextStateNumber}}`;
    this.changeState({ memory: lastMemoryState });
    return frac(transitions, instr);
  };

  addBlock = (instr: BlockInstruction) => {
    const seqStartStateNumber = this.nextStateNumber - 1;
    const decl = this.addDecl(instr.value.decl);
    const block = this.traverse(instr.value.body);
    this.changeState({ memory: instr.value.memoryAfter, startStateNumber: seqStartStateNumber });
    return String.raw`${decl},\quad ${block}`;
  };

  addProcCall = (instr: ProcCallInstruction) => {
    return String.raw`\text{${instr.text}}`;
  };

  chooseInstruction = (instr: any, last: boolean) => {
    switch (instr.value?.type) {
      case "assign":
        return this.addAssign(instr, last);
      case "cycle":
        return this.addCycle(instr);
      case "branch":
        return this.addBranch(instr);
      case "skip":
        return this.addSkip(instr);
      case "block":
        return this.addBlock(instr);
      case "procCall":
        return this.addProcCall(instr);
      default:
        console.error("Not an instruction:", instr.text);
        return undefined;
    }
  };

  parseInstructionSequence = (tree: TreeNode & { children: TreeNode[] }, last: boolean) => {
    if (tree.children.length === 0) return "";
    const [first, ...rest] = tree.children;
    const firstAndRestText =
      `\\text{${first.text}}` +
      rest.reduce((acc: string, node: { text: string }) => acc + "; \\text{" + node.text + "}", "");
    const currentInstruction = String.raw`\langle ${firstAndRestText},\ s_{${
      this.nextStateNumber - 1
    }} \rangle`;

    let resultNominator: string | undefined;
    if (rest.length !== 0) {
      const formattedInstruction = this.chooseInstruction(first, false);
      const formattedRestTree = this.traverse(
        {
          ...tree,
          children: rest,
        },
        last
      );
      resultNominator = String.raw`${formattedInstruction},\quad ${formattedRestTree}`;
    } else {
      resultNominator = this.chooseInstruction(first, true);
    }

    const resultState = `s_${this.nextStateNumber - 1}`;

    return frac(
      resultNominator ?? "",
      String.raw`${currentInstruction} \rightarrow ${resultState}`
    );
  };

  parseInstruction = (tree: any, last: boolean) => {
    return this.chooseInstruction(tree, last);
  };

  traverse = (tree: any, last = false): string | undefined => {
    if (!tree) return;
    if (tree.type === "instructionSequence") {
      return this.parseInstructionSequence(tree, last);
    } else if (tree.type === "instruction") {
      return this.parseInstruction(tree, last);
    }
  };

  getSequence(input: string, variables: Memory) {
    const [tree] = generateVisitedTreeNS(input, variables);
    this.changeState({ memory: variables });
    const res = this.traverse(tree);
    return res;
  }
}
