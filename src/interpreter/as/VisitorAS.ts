import {
  AddContext,
  AndContext,
  BooleanContext,
  BranchContext,
  EmptyopContext,
  EqContext,
  FetchContext,
  InstructionContext,
  InstructionSequenceContext,
  LeContext,
  LoopContext,
  MultContext,
  NegContext,
  ProgramContext,
  PushContext,
  StoreContext,
  SubContext,
} from "@/grammar/as/AbstractMachineParser";
import { AbstractMachineVisitor } from "@/grammar/as/AbstractMachineVisitor";
import { notEmpty } from "@/lib/utils/notEmpty";
import { EditorError, Memory, StackEntry } from "@/types";
import { ParserRuleContext } from "antlr4ts";
import { createEditorError } from "../errorUtils";
import {
  AddReturnType,
  AndReturnType,
  BooleanReturnType,
  BranchReturnType,
  EmptyopReturnType,
  EqReturnType,
  FetchReturnType,
  InstructionReturnType,
  InstructionSequenceReturnType,
  LeReturnType,
  LoopReturnType,
  MultReturnType,
  NegReturnType,
  ProgramReturnType,
  PushReturnType,
  StoreReturnType,
  SubReturnType,
} from "./types";

export type VisitorASResult = ReturnType<VisitorAS["visitProgram"]>;

export default class VisitorAS implements AbstractMachineVisitor<object | undefined> {
  private errors: EditorError[];
  private memory: Memory;
  private stack: StackEntry[];

  constructor(errors: EditorError[], variables: Memory) {
    this.memory = { ...variables };
    this.errors = errors ?? [];
    this.stack = [];
  }

  getStack = () => this.stack;

  visit(): object | undefined {
    throw new Error("Method not implemented.");
  }
  visitChildren(): object | undefined {
    throw new Error("Method not implemented.");
  }
  visitTerminal(): object | undefined {
    throw new Error("Method not implemented.");
  }
  visitErrorNode(): object | undefined {
    throw new Error("Method not implemented.");
  }

  visitProgram(ctx: ProgramContext): ProgramReturnType {
    if (this.errors.length !== 0) {
      throw new Error("There are errors in the code");
    }
    return this.visitInstructionSequence(ctx.instructionSequence());
  }

  visitInstructionSequence(
    ctx: InstructionSequenceContext,
    noEval = false
  ): InstructionSequenceReturnType {
    const instrSeq = ctx
      .instruction()
      .map((i) => this.visitInstruction(i, noEval))
      .filter(notEmpty);
    return {
      children: instrSeq,
      text: instrSeq.reduce(
        (acc, instr, i) => (i !== instrSeq.length - 1 ? acc + instr.text + ":" : acc + instr.text),
        ""
      ),
      type: "instructionSequence",
    };
  }

  // Visit a parse tree produced by JaneParser#instruction.
  visitInstruction(ctx: InstructionContext, noEval = false): InstructionReturnType {
    const state = structuredClone(this.memory);
    const stack = structuredClone(this.stack);
    let instr:
      | ReturnType<
          | typeof this.visitPush
          | typeof this.visitAdd
          | typeof this.visitMult
          | typeof this.visitSub
          | typeof this.visitEq
          | typeof this.visitLe
          | typeof this.visitAnd
          | typeof this.visitNeg
          | typeof this.visitFetch
          | typeof this.visitStore
          | typeof this.visitEmptyop
          | typeof this.visitBranch
          | typeof this.visitLoop
          | typeof this.visitBoolean
        >
      | undefined;

    if (ctx.push()) {
      instr = this.visitPush(ctx.push()!, noEval);
    } else if (ctx.add()) {
      instr = this.visitAdd(ctx.add()!, noEval);
    } else if (ctx.mult()) {
      instr = this.visitMult(ctx.mult()!, noEval);
    } else if (ctx.sub()) {
      instr = this.visitSub(ctx.sub()!, noEval);
    } else if (ctx.eq()) {
      instr = this.visitEq(ctx.eq()!, noEval);
    } else if (ctx.le()) {
      instr = this.visitLe(ctx.le()!, noEval);
    } else if (ctx.and()) {
      instr = this.visitAnd(ctx.and()!, noEval);
    } else if (ctx.neg()) {
      instr = this.visitNeg(ctx.neg()!, noEval);
    } else if (ctx.fetch()) {
      instr = this.visitFetch(ctx.fetch()!, noEval);
    } else if (ctx.store()) {
      instr = this.visitStore(ctx.store()!, noEval);
    } else if (ctx.emptyop()) {
      instr = this.visitEmptyop(ctx.emptyop()!);
    } else if (ctx.branch()) {
      instr = this.visitBranch(ctx.branch()!, noEval);
    } else if (ctx.loop()) {
      instr = this.visitLoop(ctx.loop()!, noEval);
    } else if (ctx.boolean()) {
      instr = this.visitBoolean(ctx.boolean()!, noEval);
    }

    if (!instr) {
      this.errors.push(createEditorError(ctx, "Unknown instruction"));
      throw new Error("Unknown instruction");
    }

    return {
      value: instr,
      state,
      stack,
      text: instr.text,
      type: "instruction",
    };
  }

  visitPush(ctx: PushContext, noEval = false): PushReturnType {
    const value = parseInt(ctx.Value().text);
    if (!noEval) {
      this.stack.push(value);
    }

    return {
      type: "push",
      text: ctx.text,
      stack: structuredClone(this.stack),
      value,
    };
  }

  stackReducer<T extends StackEntry>(
    ctx: ParserRuleContext,
    reducer: (...args: T[]) => T,
    valueGuard: (val: StackEntry | undefined) => val is T,
    numberOfValues = 2
  ) {
    if (this.stack.length - numberOfValues < 0) {
      this.errors.push(
        createEditorError(ctx, `Instruction requires ${numberOfValues} values on top of the stack`)
      );
      return undefined;
    }

    const startIndex = this.stack.length - numberOfValues;
    const values = this.stack.slice(startIndex).reverse();
    this.stack.length = startIndex;
    if (!values.every(valueGuard)) {
      this.errors.push(createEditorError(ctx, "One of the values on stack has incorrect type"));
      return undefined;
    }
    const result = reducer(...values);
    this.stack.push(result);
  }

  visitAdd(ctx: AddContext, noEval = false): AddReturnType {
    if (noEval)
      return {
        type: "add",
        text: ctx.text,
      };

    this.stackReducer<number>(
      ctx,
      (val1, val2) => val1 + val2,
      (val): val is number => typeof val === "number"
    );

    return {
      type: "add",
      text: ctx.text,
    };
  }

  visitMult(ctx: MultContext, noEval = false): MultReturnType {
    if (noEval)
      return {
        type: "mult",
        text: ctx.text,
      };

    this.stackReducer<number>(
      ctx,
      (val1, val2) => val1 * val2,
      (val): val is number => typeof val === "number"
    );

    return {
      type: "mult",
      text: ctx.text,
    };
  }

  visitSub(ctx: SubContext, noEval = false): SubReturnType {
    if (noEval)
      return {
        type: "sub",
        text: ctx.text,
      };

    this.stackReducer<number>(
      ctx,
      (val1, val2) => val1 - val2,
      (val): val is number => typeof val === "number"
    );

    return {
      type: "sub",
      text: ctx.text,
    };
  }

  visitBoolean(ctx: BooleanContext, noEval = false): BooleanReturnType {
    if (noEval)
      return {
        type: "boolean",
        text: ctx.text,
      };

    const value = Boolean(ctx.True());
    if (!noEval) {
      this.stack.push(value);
    }

    return {
      type: "boolean",
      value,
      text: ctx.text,
    };
  }

  visitEq(ctx: EqContext, noEval = false): EqReturnType {
    if (noEval)
      return {
        type: "eq",
        text: ctx.text,
      };

    this.stackReducer<boolean>(
      ctx,
      (val1, val2) => val1 === val2,
      (val): val is boolean => typeof val === "number"
    );

    return {
      type: "eq",
      text: ctx.text,
    };
  }

  visitLe(ctx: LeContext, noEval = false): LeReturnType {
    if (noEval)
      return {
        type: "le",
        text: ctx.text,
      };

    this.stackReducer<boolean>(
      ctx,
      (val1, val2) => val1 <= val2,
      (val): val is boolean => typeof val === "number"
    );

    return {
      type: "le",
      text: ctx.text,
    };
  }

  visitAnd(ctx: AndContext, noEval = false): AndReturnType {
    if (noEval)
      return {
        type: "and",
        text: ctx.text,
      };

    this.stackReducer<boolean>(
      ctx,
      (val1, val2) => val1 && val2,
      (val): val is boolean => typeof val === "boolean"
    );

    return {
      type: "and",
      text: ctx.text,
    };
  }

  visitNeg(ctx: NegContext, noEval = false): NegReturnType {
    if (noEval)
      return {
        text: ctx.text,
        type: "neg",
      };

    this.stackReducer<boolean>(
      ctx,
      (val1) => !val1,
      (val): val is boolean => typeof val === "boolean",
      1
    );

    return {
      text: ctx.text,
      type: "neg",
    };
  }
  visitFetch(ctx: FetchContext, noEval = false): FetchReturnType {
    const variable = ctx.Id().text;
    const value = this.memory[variable];

    if (!noEval) {
      if (value === undefined) {
        this.errors.push(createEditorError(ctx, `Variable ${variable} is not defined`));
        throw new Error(`Variable ${variable} is not defined`);
      }
      this.stack.push(value);
    }

    return {
      text: ctx.text,
      value,
      type: "fetch",
    };
  }
  visitStore(ctx: StoreContext, noEval = false): StoreReturnType {
    const variable = ctx.Id().text;

    if (!noEval) {
      const value = this.stack.pop();
      if (value === undefined) {
        this.errors.push(createEditorError(ctx, "Stack is empty"));
        throw new Error("Stack is empty");
      }
      if (typeof value !== "number") {
        this.errors.push(createEditorError(ctx, "Value on stack is not a number"));
        throw new Error("Value on stack is not a number");
      }
      this.memory[variable] = value;

      return {
        text: ctx.text,
        value,
        state: structuredClone(this.memory),
        type: "store",
      };
    }

    return {
      text: ctx.text,
      type: "store",
    };
  }

  visitEmptyop(ctx: EmptyopContext): EmptyopReturnType {
    return {
      text: ctx.text,
      type: "emptyop",
    };
  }

  visitBranch(ctx: BranchContext, noEval = false): BranchReturnType {
    let condition: boolean | undefined;
    if (!noEval) {
      const stackEntry = this.stack.pop();
      if (stackEntry === undefined) {
        this.errors.push(createEditorError(ctx, "Stack is empty"));
        throw new Error("Stack is empty");
      }
      if (typeof stackEntry !== "boolean") {
        this.errors.push(createEditorError(ctx, "Value on stack is not a boolean"));
        throw new Error("Value on stack is not a boolean");
      }
      condition = stackEntry;
    }

    const ifBranch = this.visitInstructionSequence(
      ctx.instructionSequence(0),
      noEval || !condition
    );
    const elBranch = this.visitInstructionSequence(ctx.instructionSequence(1), noEval || condition);

    return {
      text: ctx.text,
      ifBranch,
      elBranch,
      type: "branch",
      isTrue: condition,
    };
  }

  visitLoop(ctx: LoopContext, noEval = false): LoopReturnType {
    const iterations = [];
    let condition = false;
    do {
      this.visitInstructionSequence(ctx.instructionSequence(0), noEval);
      const resultCondition = this.stack.pop();
      if (resultCondition === undefined) {
        this.errors.push(createEditorError(ctx, "Stack is empty"));
        throw new Error("Stack is empty");
      }
      if (typeof resultCondition !== "boolean") {
        this.errors.push(createEditorError(ctx, "Value on stack is not a boolean"));
        throw new Error("Value on stack is not a boolean");
      }
      condition = resultCondition;
      if (condition) {
        iterations.push(this.visitInstructionSequence(ctx.instructionSequence(1), noEval));
      }
    } while (condition);

    return {
      text: ctx.text,
      condition: ctx.instructionSequence(0).text,
      iterations,
      type: "loop",
      body: ctx.instructionSequence(1).text,
      resultStack: structuredClone(this.stack),
    };
  }
}
