import { a, s, text } from "@/lib/utils/format";
import { Memory, StackEntry } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { IConfig } from "../types";
import { parseRestProgram, parseStack, parseState } from "./amUtils";
import { generateVisitedTreeAM } from "./generateVisitedTree";
import {
  AddValue,
  AndValue,
  BooleanValue,
  BranchValue,
  EmptyopValue,
  EqValue,
  FetchValue,
  Instruction,
  LeValue,
  LoopValue,
  MultValue,
  NegValue,
  PushValue,
  StoreValue,
  SubValue,
} from "./types";

export class MakeSequenceAM implements IMakeSequence<IConfig[]> {
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

  parseTransition = (text: string | undefined, stack: StackEntry[], rest: Instruction[]) => {
    const restText = parseRestProgram(rest);
    const result = this.parseConfig(text + String.raw`${rest.length ? ":" + restText : ""}`, stack);
    this.changeConfig();
    return result;
  };

  addPush = (child: Instruction<PushValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addAdd = (child: Instruction<AddValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addSub = (child: Instruction<SubValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addMult = (child: Instruction<MultValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addBoolean = (
    child: Instruction<BooleanValue>,
    stack: StackEntry[],
    rest: Instruction[]
  ): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addEq = (child: Instruction<EqValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addLe = (child: Instruction<LeValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addAnd = (child: Instruction<AndValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addNeg = (child: Instruction<NegValue>, stack: StackEntry[], rest: Instruction[]): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addFetch = (
    child: Instruction<FetchValue>,
    stack: StackEntry[],
    rest: Instruction[]
  ): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addStore = (
    child: Instruction<StoreValue>,
    stack: StackEntry[],
    rest: Instruction[]
  ): IConfig => {
    const result = this.parseTransition(child.text, stack, rest);
    if (child.state) this.changeState(child.state);
    return { text: result, reference: child.position };
  };

  addEmptyOp = (
    child: Instruction<EmptyopValue>,
    stack: StackEntry[],
    rest: Instruction[]
  ): IConfig => {
    return { text: this.parseTransition(child.text, stack, rest), reference: child.position };
  };

  addBranch = (
    { value, position }: Instruction<BranchValue>,
    stack: StackEntry[],
    rest: Instruction[]
  ): IConfig[] => {
    const executeBranch = value.isTrue ? value.ifBranch : value.elBranch;
    const branch = this.parseTransition(value.text, stack, rest);
    this.remainingInstructions.push(parseRestProgram(rest));
    const body = this.traverse(executeBranch.children);
    this.remainingInstructions.pop();
    return [{ text: branch, reference: position }, ...body];
  };

  transformToBranch = (
    loop: Instruction<LoopValue>,
    instructions: Instruction[],
    conditionResultStack: StackEntry[],
    rest: Instruction[]
  ): IConfig[] => {
    const parsedBranch = String.raw`BRANCH(${loop.value.body}:${loop.text},EMPTYOP)`;
    this.remainingInstructions.push(
      parsedBranch + (rest.length ? ":" + parseRestProgram(rest) : "")
    );
    const condition = this.traverse(instructions);
    this.remainingInstructions.pop();
    return [
      ...condition,
      {
        text: this.parseTransition(parsedBranch, conditionResultStack, rest),
      },
    ];
  };

  addLoop = (child: Instruction<LoopValue>, _: StackEntry[], rest: Instruction[]): IConfig[] => {
    const { value, position } = child;
    const result: IConfig[] = [];
    for (const iteration of value.iterations) {
      if (iteration.condition) {
        result.push({
          text: this.parseTransition(value.text, iteration.sequence.children[0].stack, rest),
          reference: child.position,
        });
        result.push(
          ...this.transformToBranch(
            child,
            iteration.conditionSequence.children,
            iteration.conditionResultStack,
            rest
          )
        );
        this.remainingInstructions.push(
          value.text + (rest.length ? ":" + parseRestProgram(rest) : "")
        );
        result.push(...this.traverse(iteration.sequence.children));
        this.remainingInstructions.pop();
      } else {
        result.push({
          text: this.parseTransition(value.text, value.resultStack, rest),
          reference: position,
        });
        result.push(
          ...this.transformToBranch(
            child,
            iteration.conditionSequence.children,
            iteration.conditionResultStack,
            rest
          )
        );
        result.push({
          text: this.parseTransition(String.raw`EMPTYOP`, value.resultStack, rest),
          reference: position,
        });
      }
    }
    return result;
  };

  traverse = (children?: Instruction[]): IConfig[] => {
    const result = children
      ?.map((child, index, initial) => {
        if (!child.value) return undefined;
        let result: IConfig | IConfig[] | undefined;
        switch (child.value?.type) {
          case "push":
            result = this.addPush(
              child as Instruction<PushValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "add":
            result = this.addAdd(
              child as Instruction<AddValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "sub":
            result = this.addSub(
              child as Instruction<SubValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "mult":
            result = this.addMult(
              child as Instruction<MultValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "boolean":
            result = this.addBoolean(
              child as Instruction<BooleanValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "eq":
            result = this.addEq(
              child as Instruction<EqValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "le":
            result = this.addLe(
              child as Instruction<LeValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "and":
            result = this.addAnd(
              child as Instruction<AndValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "neg":
            result = this.addNeg(
              child as Instruction<NegValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "fetch":
            result = this.addFetch(
              child as Instruction<FetchValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "store":
            result = this.addStore(
              child as Instruction<StoreValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "emptyop":
            result = this.addEmptyOp(
              child as Instruction<EmptyopValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "branch":
            result = this.addBranch(
              child as Instruction<BranchValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          case "loop":
            result = this.addLoop(
              child as Instruction<LoopValue>,
              child.stack,
              initial.slice(index + 1)
            );
            break;
          default:
            result = undefined;
        }
        return result;
      })
      .flat()
      .filter((x): x is IConfig => Boolean(x));
    return result ?? [];
  };

  getSequence(input: string, variables: Memory, noEval = false) {
    const result = generateVisitedTreeAM(input, variables, noEval);
    const [tree, visitor] = result;
    this.changeState(variables);
    const finalSequence = [
      ...this.traverse(tree?.children),
      { text: this.parseTransition("c", visitor.getStack(), []) },
    ];
    return finalSequence;
  }
}
