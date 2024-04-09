import { a, s, text } from "@/lib/utils/format";
import { Memory, StackEntry } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { parseRestProgram, parseStack, parseState } from "./asUtils";
import { generateVisitedTreeAS } from "./generateVisitedTree";
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

export class MakeSequenceAS implements IMakeSequence<string[] | undefined> {
  private states: string[];
  private nextStateNumber: number;
  private configNumber: number;
  private remainingInstructions: string[];

  constructor() {
    this.states = [];
    this.nextStateNumber = 0;
    this.configNumber = 1;
    this.remainingInstructions = [];
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

  parseConfig = (configText: string, stack: StackEntry[]) => {
    const cyclePart = this.remainingInstructions.length
      ? ":" +
        this.remainingInstructions
          .toReversed()
          .map((entry) => entry)
          .join(":")
      : "";
    return String.raw`${a(this.configNumber)} \ =  \ \langle ${text(
      configText + cyclePart
    )}, ${parseStack(stack)}, ${s(this.nextStateNumber - 1)} \rangle \ = \! \gg  ${a(
      this.configNumber + 1
    )}`;
  };

  parseTransition = (
    text: string | undefined,
    stack: StackEntry[],
    rest: InstructionReturnType[]
  ) => {
    const restText = parseRestProgram(rest);
    const result = this.parseConfig(text + String.raw`${rest.length ? ":" + restText : ""}`, stack);
    this.changeConfig();
    return result;
  };

  addPush = (child: PushReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addAdd = (child: AddReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addSub = (child: SubReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addMult = (child: MultReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addBoolean = (child: BooleanReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addEq = (child: EqReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addLe = (child: LeReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addAnd = (child: AndReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addNeg = (child: NegReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addFetch = (child: FetchReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addStore = (child: StoreReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    const result = this.parseTransition(child.text, stack, rest);
    if (child.state) this.changeState(child.state);
    return result;
  };

  addEmptyOp = (child: EmptyopReturnType, stack: StackEntry[], rest: InstructionReturnType[]) => {
    return this.parseTransition(child.text, stack, rest);
  };

  addBranch = (
    child: BranchReturnType,
    stack: StackEntry[],
    rest: InstructionReturnType[]
  ): string[] => {
    const executeBranch = child.isTrue ? child.ifBranch : child.elBranch;
    const branch = this.parseTransition(child.text, stack, rest);
    this.remainingInstructions.push(parseRestProgram(rest));
    const body = this.traverse(executeBranch.children);
    this.remainingInstructions.pop();
    return [branch, ...body];
  };

  transformToBranch = (
    loop: LoopReturnType,
    instructions: InstructionReturnType[],
    conditionResultStack: StackEntry[],
    rest: InstructionReturnType[]
  ) => {
    const parsedBranch = String.raw`BRANCH(${loop.body}:${loop.text},EMPTYOP)`;
    this.remainingInstructions.push(
      parsedBranch + (rest.length ? ":" + parseRestProgram(rest) : "")
    );
    const condition = this.traverse(instructions);
    this.remainingInstructions.pop();
    return [...condition, this.parseTransition(parsedBranch, conditionResultStack, rest)];
  };

  addLoop = (child: LoopReturnType, _: StackEntry[], rest: InstructionReturnType[]): string[] => {
    const result: string[] = [];
    for (const iteration of child.iterations) {
      if (iteration.condition) {
        result.push(this.parseTransition(child.text, iteration.sequence.children[0].stack, rest));
        result.push(
          ...this.transformToBranch(
            child,
            iteration.conditionSequence.children,
            iteration.conditionResultStack,
            rest
          )
        );
        this.remainingInstructions.push(
          child.text + (rest.length ? ":" + parseRestProgram(rest) : "")
        );
        result.push(...this.traverse(iteration.sequence.children));
        this.remainingInstructions.pop();
      } else {
        result.push(this.parseTransition(child.text, child.resultStack, rest));
        result.push(
          ...this.transformToBranch(
            child,
            iteration.conditionSequence.children,
            iteration.conditionResultStack,
            rest
          )
        );
        result.push(this.parseTransition(String.raw`EMPTYOP`, child.resultStack, rest));
      }
    }
    return result;
  };

  traverse = (children?: InstructionReturnType[]) => {
    // if(children.length === 4)debugger
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
    const finalSequence = [
      ...this.traverse(tree?.children),
      this.parseTransition("c", visitor.getStack(), []),
    ];
    return finalSequence;
  }
}
