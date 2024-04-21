import { a, formatCondition, s } from "@/lib/utils/format";
import { Memory } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { generateVisitedTreeJane } from "../jane/generateVisitedTree";
import { AssignmentValue, BranchValue, CycleValue, Instruction, SkipValue } from "../jane/types";
import { parseState } from "../ns/nsUtils";
import { IConfig } from "../types";
import { parseRestProgram } from "./sosUtils";
import { addKeywordsPaddingJane } from "@/lib/utils/padding";

// the main function is getSequence, which is used to get lists of configs, states and errors
export class MakeSequenceSOS implements IMakeSequence<IConfig[] | undefined> {
  private states: string[];
  private nextStateNumber: number;
  private configNumber: number;
  private whileStack: string[];

  constructor() {
    this.states = [];
    this.nextStateNumber = 0;
    this.configNumber = 1;
    this.whileStack = [];
  }

  getStates = () => {
    return this.states;
  };

  changeState = (memory: Memory) => {
    this.states.push(parseState(this.nextStateNumber, memory));
    this.nextStateNumber++;
  };

  changeConfig = () => {
    this.configNumber++;
  };

  parseConfig = (instrText: string, last: boolean, conditionText?: string) => {
    if (last) return String.raw`${a(this.configNumber)} \ = \ ${s(this.nextStateNumber - 1)}`;
    const cyclePart = this.whileStack.length ? "; " + this.whileStack.toReversed().join("; ") : "";

    return (
      String.raw`${a(this.configNumber)} \ = \ \langle ${instrText + cyclePart}, ${s(
        this.nextStateNumber - 1
      )} \rangle \Rightarrow \ ${a(this.configNumber + 1)}` +
      (conditionText ? ",\\;" + conditionText : "")
    );
  };

  parseTransition = (
    instrText: string | undefined,
    rest: Instruction[],
    conditionText?: string
  ) => {
    if (!instrText) return "";
    const restText = parseRestProgram(rest);
    const result = this.parseConfig(
      instrText + (rest.length ? "; " + restText : ""),
      false,
      conditionText
    );
    this.changeConfig();
    return result;
  };

  // add assign instruction to the configs
  addAssign(instr: Instruction<AssignmentValue>, rest: Instruction[]): IConfig {
    const result = this.parseTransition(instr.text, rest);
    this.changeState(instr.value.state);
    return { text: result, reference: instr.position };
  }

  transformToBranch = (cycle: CycleValue, rest: Instruction[], condition: boolean) => {
    const stats = cycle.conditionText;
    const instructions = cycle.instrSeqText;
    return this.parseTransition(
      String.raw`if ${stats} then ( ${instructions}; ${cycle.text} ) else ( skip )`,
      rest,
      formatCondition(cycle.conditionText, condition, this.nextStateNumber - 1)
    );
  };

  addCycle = ({ value, position }: Instruction<CycleValue>, rest: Instruction[]): IConfig[] => {
    const result: IConfig[] = [];
    for (const iteration of value.iters) {
      result.push({ text: this.parseTransition(value.text, rest), reference: position });
      result.push({ text: this.transformToBranch(value, rest, true), reference: position });
      this.whileStack.push(value.text + (rest.length ? "; " + parseRestProgram(rest) : ""));
      result.push(
        ...this.traverse(
          iteration.type === "instructionSequence" ? iteration.children : [iteration]
        )
      );
      this.whileStack.pop();
    }
    result.push({ text: this.parseTransition(value.text, rest), reference: position });
    result.push({ text: this.transformToBranch(value, rest, false), reference: position });
    result.push({ text: this.parseTransition(String.raw`skip`, rest), reference: position });
    return result;
  };

  addBranch(instr: Instruction<BranchValue>, rest: Instruction[]): IConfig[] {
    const executeBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
    const instrText = this.parseTransition(
      instr.text,
      rest,
      formatCondition(instr.value.conditionText, instr.value.isTrue, this.nextStateNumber - 1)
    );
    return [
      {
        text: instrText,
        reference: instr.position,
      },
      ...this.traverse(
        executeBranch.type === "instructionSequence" ? executeBranch.children : [executeBranch]
      ),
    ];
  }

  addSkip(instr: Instruction<SkipValue>, rest: Instruction[]): IConfig {
    return {
      text: this.parseTransition(instr.text, rest),
      reference: instr.position,
    };
  }

  chooseInstruction(instr: Instruction, rest: Instruction[]): IConfig | IConfig[] | undefined {
    switch (instr.value.type) {
      case "assign":
        return this.addAssign(instr as Instruction<AssignmentValue>, rest);
      case "cycle":
        return this.addCycle(instr as Instruction<CycleValue>, rest);
      case "branch":
        return this.addBranch(instr as Instruction<BranchValue>, rest);
      case "skip":
        return this.addSkip(instr as Instruction<SkipValue>, rest);
      default:
        console.error("Not an instruction");
        return undefined;
    }
  }

  traverse = (children: Instruction[] | undefined): IConfig[] => {
    if (!children) return [];
    return children
      .map((c, index, initial) => this.chooseInstruction(c, initial.slice(index + 1)))
      .filter((c): c is IConfig => !!c)
      .flat();
  };

  getSequence(input: string, variables: Memory, noEval = false) {
    const [tree] = generateVisitedTreeJane(input, variables, noEval, true);
    this.changeState(variables);
    const res = this.traverse(tree.children);
    res.push({ text: this.parseConfig("", true) });
    return res.map((c) => {
      c.text = addKeywordsPaddingJane(c.text);
      return c;
    });
  }
}
