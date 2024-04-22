import {
  AssignContext,
  BranchContext,
  CycleContext,
  ExprContext,
  InstructionContext,
  InstructionSequenceContext,
  MulContext,
  ProgramContext,
  SkipContext,
  StatContext,
  StatsContext,
  TermContext,
} from "@/grammar/jane/JaneParser";
import { JaneVisitor } from "@/grammar/jane/JaneVisitor";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { InterpreterError } from "../InterpreterError";
import { createIEditorError } from "../errorUtils";

export default class JaneToAM implements JaneVisitor<string> {
  constructor() {}

  visitProgram = (ctx: ProgramContext): string => {
    return this.visitInstructionSequence(ctx.instructionSequence());
  };

  visitInstructionSequence = (ctx: InstructionSequenceContext): string => {
    return ctx
      .instruction()
      .map((i) => this.visitInstruction(i))
      .join(":");
  };

  visitInstruction = (ctx: InstructionContext): string => {
    let instr: string;

    if (ctx.branch()) {
      instr = this.visitBranch(ctx.branch()!);
    } else if (ctx.cycle()) {
      instr = this.visitCycle(ctx.cycle()!);
    } else if (ctx.assign()) {
      instr = this.visitAssign(ctx.assign()!);
    } else {
      instr = this.visitSkip(ctx.skip()!);
    }
    if (!instr) {
      throw new InterpreterError("Unable to parse instruction", [
        createIEditorError(ctx, "Unable to parse instruction"),
      ]);
    }
    return instr;
  };

  visitCycle = (ctx: CycleContext): string => {
    const body = ctx.instructionSequence() ?? ctx.instruction();
    if (!body) {
      throw new InterpreterError("while loop was malformed", [
        createIEditorError(ctx, "while loop was malformed"),
      ]);
    }
    return `LOOP(${this.visitStats(ctx.stats())},${
      body instanceof InstructionSequenceContext
        ? this.visitInstructionSequence(body)
        : this.visitInstruction(body)
    })`;
  };

  visitBranch = (ctx: BranchContext): string => {
    if (!ctx.children) {
      throw new InterpreterError("if branch was malformed", [
        createIEditorError(ctx, "if branch was malformed"),
      ]);
    }
    let ifBranch, elBranch;
    let isTerminalNode = ctx.children[3] instanceof TerminalNode;

    let elseBodyStartDecrement = 1;
    const ifBody = isTerminalNode ? ctx.children[4] : ctx.children[3];
    if (isTerminalNode && ifBody instanceof InstructionSequenceContext) {
      elseBodyStartDecrement = 0;
      ifBranch = this.visitInstructionSequence(ifBody);
    } else if (ifBody instanceof InstructionContext) {
      ifBranch = this.visitInstruction(ifBody);
      elseBodyStartDecrement = 2;
    } else {
      throw new InterpreterError("if branch was malformed", [
        createIEditorError(ctx, "if branch was malformed"),
      ]);
    }

    isTerminalNode = ctx.children[7 - elseBodyStartDecrement] instanceof TerminalNode;
    const elseBody = isTerminalNode
      ? ctx.children[8 - elseBodyStartDecrement]
      : ctx.children[7 - elseBodyStartDecrement];
    if (isTerminalNode && elseBody instanceof InstructionSequenceContext) {
      elBranch = this.visitInstructionSequence(elseBody);
    } else if (elseBody instanceof InstructionContext) {
      elBranch = this.visitInstruction(elseBody);
    } else {
      throw new InterpreterError("if branch was malformed", [
        createIEditorError(ctx, "if branch was malformed"),
      ]);
    }
    return `${this.visitStats(ctx.stats())}:BRANCH(${ifBranch},${elBranch})`;
  };

  visitAssign = (ctx: AssignContext): string => {
    return `${this.visitExpr(ctx.expr())}:STORE-${ctx.Id().text}`;
  };

  visitSkip = (ctx: SkipContext): string => {
    if (!ctx.Skip()) {
      throw new InterpreterError("Failed to parse skip", [
        createIEditorError(ctx, "Failed to parse skip"),
      ]);
    }
    return "EMPTYOP";
  };

  visitStats = (ctx: StatsContext): string => {
    const children = ctx.children ?? [];
    if (!children.length) {
      throw new InterpreterError("Failed to parse stats", [
        createIEditorError(ctx, "Failed to parse stats"),
      ]);
    }
    return children.reduce((acc, c, i) => {
      if (c instanceof StatContext) {
        const stat = this.visitStat(c);
        return stat + (i > 1 ? ":" : "") + acc;
      }
      return acc + ":AND";
    }, "");
  };

  visitStat = (ctx: StatContext) => {
    const statsCtx = ctx.stats();
    const exprs = ctx.expr();
    if (ctx.Not() && statsCtx) {
      const stats = this.visitStats(statsCtx);
      return `${stats}:NEG`;
    } else if (ctx.Lpar() && statsCtx) {
      return this.visitStats(statsCtx);
    } else if (exprs.length === 2) {
      const leftOp = this.visitExpr(exprs[0]),
        rightOp = this.visitExpr(exprs[1]);
      if (ctx.Eq()) {
        return `${rightOp}:${leftOp}:EQ`;
      } else if (ctx.Leq()) {
        return `${rightOp}:${leftOp}:LE`;
      }
    }
    throw new InterpreterError("Failed to parse stat", [
      createIEditorError(ctx, "Failed to parse stat"),
    ]);
  };

  visitExpr = (ctx: ExprContext): string => {
    const children = ctx.children ?? [];
    let op = "+";
    return (
      children.reduce((acc, c, i) => {
        if (c instanceof MulContext) {
          const mul = this.visitMul(c);
          return mul + (i > 1 ? ":" : "") + acc;
        }
        op = c.text;
        return acc + ":" + (op === "+" ? "ADD" : "SUB");
      }, "") ?? ""
    );
  };

  visitMul = (ctx: MulContext) => {
    const children = ctx.children ?? [];
    return children.reduce((acc, c, i) => {
      if (c instanceof TermContext) {
        const term = this.visitTerm(c);
        return term + (i > 1 ? ":" : "") + acc;
      }
      return acc + ":MULT";
    }, "");
  };

  visitTerm = (ctx: TermContext): string => {
    const expr = ctx.expr();
    const id = ctx.Id();
    const value = ctx.Value();
    if (expr) {
      return this.visitExpr(expr);
    } else if (value) {
      return `PUSH-${value}`;
    } else if (id) {
      return `FETCH-${id}`;
    }
    throw new InterpreterError("Failed to parse term", [
      createIEditorError(ctx, "Unable to parse term context"),
    ]);
  };

  visit(): string {
    throw new Error("Method not implemented.");
  }
  visitChildren(): string {
    throw new Error("Method not implemented.");
  }
  visitTerminal(): string {
    throw new Error("Method not implemented.");
  }
  visitErrorNode(): string {
    throw new Error("Method not implemented.");
  }
}
