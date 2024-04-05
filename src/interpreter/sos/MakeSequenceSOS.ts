import { a, formatCondition, s } from "@/lib/utils/format";
import { Memory } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { generateVisitedTreeJane } from "../jane/generateVisitedTree";
import {
  AssignmentInstruction,
  BranchInstruction,
  CycleInstruction,
  SkipInstruction,
  TreeNode,
} from "../jane/types";
import { parseState } from "../ns/nsUtils";
import { parseRestProgram } from "./sosUtils";

// the main function is getSequence, which is used to get lists of configs, states and errors
export class MakeSequenceSOS implements IMakeSequence<string[] | undefined> {
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

  parseConfig = (text: string, last: boolean, conditionText?: string) => {
    if (last) return String.raw`${a(this.configNumber)} \ = \ ${s(this.nextStateNumber - 1)}`;
    const cyclePart = this.whileStack.length
      ? "; " +
        this.whileStack
          .toReversed()
          .map((entry) => entry)
          .join("; ")
      : "";
    return (
      String.raw`${a(this.configNumber)} \ = \ \langle \text{${text}${cyclePart}}, ${s(
        this.nextStateNumber - 1
      )} \rangle \Rightarrow \ ${a(this.configNumber + 1)}` +
      (conditionText ? ",\\;" + conditionText : "")
    );
  };

  parseTransition = (text: string | undefined, rest: TreeNode[], conditionText?: string) => {
    if (!text) return "";
    const restText = parseRestProgram(rest);
    const result = this.parseConfig(
      String.raw`\text{${text}}` + (rest.length ? "; " + restText : ""),
      false,
      conditionText
    );
    this.changeConfig();
    return result;
  };

  // add assign instruction to the configs
  addAssign(instr: AssignmentInstruction, rest: TreeNode[]) {
    const result = this.parseTransition(instr.text, rest);
    this.changeState(instr.value.state);
    return result;
  }

  transformToBranch = (cycle: CycleInstruction["value"], rest: TreeNode[], condition: boolean) => {
    const stats = cycle.conditionText;
    const instructions = cycle.instrSeqText;
    return this.parseTransition(
      String.raw`if ${stats} then ( ${instructions}; ${cycle.text} ) else ( skip )`,
      rest,
      formatCondition(cycle.conditionText, condition, this.nextStateNumber - 1)
    );
  };

  addCycle = ({ value }: CycleInstruction, rest: TreeNode[]) => {
    const result = [];
    for (const iteration of value.iters) {
      result.push(this.parseTransition(value.text, rest));
      result.push(this.transformToBranch(value, rest, true));
      this.whileStack.push(value.text + (rest.length ? "; " + parseRestProgram(rest) : ""));
      result.push(
        ...this.traverse(
          iteration.type === "instructionSequence" ? iteration.children : [iteration]
        )
      );
      this.whileStack.pop();
    }
    result.push(this.parseTransition(value.text, rest));
    result.push(this.transformToBranch(value, rest, false));
    result.push(this.parseTransition(String.raw`skip`, rest));
    return result;
  };

  addBranch(instr: BranchInstruction, rest: TreeNode[]): string[] {
    const executeBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
    return [
      this.parseTransition(
        instr.text,
        rest,
        formatCondition(instr.value.conditionText, instr.value.isTrue, this.nextStateNumber - 1)
      ),
      ...this.traverse(
        executeBranch.type === "instructionSequence" ? executeBranch.children : [executeBranch]
      ),
    ];
  }

  addSkip(instr: SkipInstruction, rest: TreeNode[]) {
    return this.parseTransition(instr.text, rest);
  }

  chooseInstruction(instr: TreeNode, rest: TreeNode[]): string | string[] | undefined {
    switch (instr.value.type) {
      case "assign":
        return this.addAssign(instr as AssignmentInstruction, rest);
      case "cycle":
        return this.addCycle(instr as CycleInstruction, rest);
      case "branch":
        return this.addBranch(instr as BranchInstruction, rest);
      case "skip":
        return this.addSkip(instr as SkipInstruction, rest);
      default:
        console.error("Not an instruction");
        return undefined;
    }
  }

  traverse = (children: TreeNode[] | undefined): string[] => {
    if (!children) return [];
    return children
      .map((c, index, initial) => this.chooseInstruction(c, initial.slice(index + 1)))
      .filter((c): c is string => !!c)
      .flat();
  };

  getSequence(input: string, variables: Memory) {
    const [tree] = generateVisitedTreeJane(input, variables);
    this.changeState(variables);
    const res = this.traverse(tree.children as TreeNode[]);
    res.push(this.parseConfig("", true));
    return res;
  }
}
