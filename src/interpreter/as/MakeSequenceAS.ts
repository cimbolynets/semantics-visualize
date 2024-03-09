import { Memory, StackEntry } from "@/types";
import { VisitorASResult } from "./VisitorAS";
import { IMakeSequence } from "../IMakeSequence.types";
import {
  AddReturnType,
  AndReturnType,
  BooleanReturnType,
  BranchReturnType,
  EmptyopReturnType,
  EqReturnType,
  FetchReturnType,
  InstructionReturnType,
  LeReturnType,
  LoopReturnType,
  MultReturnType,
  NegReturnType,
  PushReturnType,
  StoreReturnType,
  SubReturnType,
} from "./types";
import { generateVisitedTreeAS } from "./generateVisitedTree";
import { parseRestProgram, parseStack, parseState } from "./asUtils";

export class MakeSequenceAS implements IMakeSequence<string[] | undefined> {
  private states: string[];
  private nextStateNumber: number;
  private configNumber: number;
  private whileStack: LoopReturnType[];

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

  parseConfig = (text: string, stack: StackEntry[]) => {
    return String.raw`\alpha_{${this.configNumber}} \ = \ \langle \text{${text}${
      this.whileStack.length ? ":" + this.whileStack.at(-1)?.text : ""
    }}, ${parseStack(stack)}, s_{${this.nextStateNumber - 1}} \rangle \ \Rightarrow \ \alpha_{${
      this.configNumber + 1
    }}`;
  };

  parseTransition = (
    child: { text: string } | undefined,
    stack: StackEntry[],
    rest: InstructionReturnType[]
  ) => {
    const restText = parseRestProgram(rest);
    return this.parseConfig(
      (child ? String.raw`\text{${child.text}:}` : "") + String.raw`\text{${restText}}`,
      stack
    );
  };

  addPush = (child: PushReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addAdd = (child: AddReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addSub = (child: SubReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addMult = (child: MultReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addBoolean = (child: BooleanReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addEq = (child: EqReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addLe = (child: LeReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addAnd = (child: AndReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addNeg = (child: NegReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addFetch = (child: FetchReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addStore = (child: StoreReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    const result = this.parseTransition(child, stack, rest);
    if (child.state) this.changeState(child.state);
    return result;
  };

  addEmptyOp = (child: EmptyopReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child, stack, rest);
  };

  addBranch = (
    child: BranchReturnType,
    stack: StackEntry[],
    rest: InstructionReturnType[]
  ): string[] => {
    const executeBranch = child.isTrue ? child.ifBranch : child.elBranch;
    return [this.parseTransition(child, stack, rest), ...this.traverse(executeBranch.children)];
  };

  transformToBranch = (child: LoopReturnType, stack: StackEntry[]) => {
    return this.parseConfig(
      String.raw`${child.condition}:BRANCH(${child.body}:${child.text},EMPTYOP)`,
      stack
    );
  };

  addLoop = (child: LoopReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    const result = [this.parseTransition(child, stack, rest)];
    this.changeConfig();
    for (const iteration of child.iterations) {
      result.push(this.transformToBranch(child, iteration.children[0].stack));
      this.changeConfig();
      this.whileStack.push(child);
      result.push(...this.traverse(iteration.children));
      this.whileStack.pop();
    }
    if (child.iterations.length === 0) {
      result.push(this.parseTransition(child, stack, rest));
      this.changeConfig();
    }
    result.push(this.parseConfig(String.raw`EMPTYOP`, stack));
    return result;
  };

  traverse = (children?: InstructionReturnType[]) => {
    const result = children
      ?.map((child, index, initial) => {
        const value = child?.value;
        if (!value) return undefined;
        let result: string | string[] | undefined;
        switch (value?.type) {
          case "push":
            result = this.addPush(value, child.stack, initial.slice(index + 1));
            break;
          case "add":
            result = this.addAdd(value, child.stack, initial.slice(index + 1));
            break;
          case "sub":
            result = this.addSub(value, child.stack, initial.slice(index + 1));
            break;
          case "mult":
            result = this.addMult(value, child.stack, initial.slice(index + 1));
            break;
          case "boolean":
            result = this.addBoolean(value, child.stack, initial.slice(index + 1));
            break;
          case "eq":
            result = this.addEq(value, child.stack, initial.slice(index + 1));
            break;
          case "le":
            result = this.addLe(value, child.stack, initial.slice(index + 1));
            break;
          case "and":
            result = this.addAnd(value, child.stack, initial.slice(index + 1));
            break;
          case "neg":
            result = this.addNeg(value, child.stack, initial.slice(index + 1));
            break;
          case "fetch":
            result = this.addFetch(value, child.stack, initial.slice(index + 1));
            break;
          case "store":
            result = this.addStore(value, child.stack, initial.slice(index + 1));
            break;
          case "emptyop":
            result = this.addEmptyOp(value, child.stack, initial.slice(index + 1));
            break;
          case "branch":
            result = this.addBranch(value, child.stack, initial.slice(index + 1));
            break;
          case "loop":
            result = this.addLoop(value, child.stack, initial.slice(index + 1));
            break;
          default:
            result = undefined;
        }
        this.changeConfig();
        return result;
      })
      .flat()
      .filter((x): x is string => Boolean(x));
    return result ?? [];
  };

  getSequence(input: string, variables: Memory) {
    const result = generateVisitedTreeAS(input, variables);
    if (!result) return undefined;
    const [tree, visitor] = result;
    this.changeState(variables);
    return [
      ...this.traverse(tree?.children),
      this.parseTransition(undefined, visitor.getStack(), []),
    ];
  }
}
