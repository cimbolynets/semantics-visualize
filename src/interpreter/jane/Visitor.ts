// need to import from here, otherwise instance of won't work

import {
  AssignContext,
  BlockContext,
  BranchContext,
  CycleContext,
  DeclContext,
  ExprContext,
  InstructionContext,
  InstructionSequenceContext,
  MulContext,
  ProcCallContext,
  ProcDefinitionContext,
  ProcsContext,
  ProgramContext,
  SkipContext,
  StatContext,
  StatsContext,
  TermContext,
} from "@/grammar/jane/JaneParser";
import { JaneVisitor } from "@/grammar/jane/JaneVisitor";
import { mergeMemory } from "@/lib/utils/mergeMemory";
import { notEmpty } from "@/lib/utils/notEmpty";
import { IEditorError, Memory } from "@/types";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { InterpreterError } from "../InterpreterError";
import { createIEditorError } from "../errorUtils";
import { Scope } from "../ns/Scope";
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
} from "./types";

export type VisitorResult = ReturnType<Visitor["visitInstructionSequence"]>;
export type VisitorInstructionSequenceResult = ReturnType<Visitor["visitInstructionSequence"]>;
export type VisitorInstructionResult = ReturnType<Visitor["visitInstruction"]>;
export type VisitorProcedureCallResult = ReturnType<Visitor["visitProcCall"]>;
export type VisitStatsResult = { value: boolean; text: string };

export default class Visitor implements JaneVisitor<object> {
  private errors: IEditorError[];
  private scope: Scope;
  private scopeStack: Scope[];
  private withoutExtensions: boolean;
  private noEval: boolean;

  constructor(
    errors: IEditorError[],
    variables: Memory,
    withoutExtensions = false,
    noEval = false
  ) {
    this.scope = new Scope({ ...variables });
    this.errors = errors ?? [];
    this.scopeStack = [];
    this.withoutExtensions = withoutExtensions;
    this.noEval = noEval;
  }

  getMemory = () => {
    return this.scope.memory;
  };

  getErrors = () => {
    return this.errors;
  };

  visitProgram = (ctx: ProgramContext): InstructionSequence<InstructionValue> => {
    return this.visitInstructionSequence(ctx.instructionSequence());
  };

  visitInstructionSequence = (
    ctx: InstructionSequenceContext,
    noEval = this.noEval
  ): InstructionSequence<InstructionValue> => {
    const instrSeq = ctx
      .instruction()
      .map((i) => this.visitInstruction(i, noEval))
      .filter(notEmpty);
    return {
      children: instrSeq,
      text: instrSeq.reduce(
        (acc, instr, i) =>
          i !== instrSeq.length - 1 ? acc + instr.text + ";" + " " : acc + instr.text,
        ""
      ),
      type: "instructionSequence",
    };
  };

  // Visit a parse tree produced by JaneParser#instruction.
  visitInstruction = (ctx: InstructionContext, noEval = false): Instruction<InstructionValue> => {
    const state = structuredClone(this.scope.memory);
    let instr: ReturnType<
      | typeof this.visitBranch
      | typeof this.visitCycle
      | typeof this.visitAssign
      | typeof this.visitSkip
      | typeof this.visitBlock
      | typeof this.visitProcDefinition
      | typeof this.visitProcCall
    >;

    if (ctx.branch()) {
      instr = this.visitBranch(ctx.branch()!, noEval);
    } else if (ctx.cycle()) {
      instr = this.visitCycle(ctx.cycle()!, noEval);
    } else if (ctx.assign()) {
      instr = this.visitAssign(ctx.assign()!, noEval);
    } else if (ctx.block()) {
      if (this.withoutExtensions) {
        this.errors.push(createIEditorError(ctx, "Instruction is not supported"));
        throw new InterpreterError("Instruction is not supported", this.errors);
      }
      instr = this.visitBlock(ctx.block()!, noEval);
    } else if (ctx.procCall()) {
      if (this.withoutExtensions) {
        this.errors.push(createIEditorError(ctx, "Instruction is not supported"));
        throw new InterpreterError("Instruction is not supported", this.errors);
      }
      instr = this.visitProcCall(ctx.procCall()!, noEval);
    } else {
      instr = this.visitSkip(ctx.skip()!);
    }
    if (!instr) {
      this.errors.push(createIEditorError(ctx, "Unable to parse instruction"));
      throw new InterpreterError("Unable to parse instruction", this.errors);
    }
    return {
      value: instr,
      state,
      text: instr.text,
      type: "instruction",
    };
  };

  // Visit a parse tree produced by JaneParser#cycle.
  visitCycle = (ctx: CycleContext, noEval = false): CycleValue => {
    const iters = [];
    const instructionSequence = ctx.instructionSequence();
    const instruction = ctx.instruction();
    let stats = this.visitStats(ctx.stats());
    let instrSeqText: string = "";
    let text = "";

    if (instructionSequence) {
      instrSeqText = this.visitInstructionSequence(instructionSequence, true).text;
      let i = 0;

      text = "while " + stats.text + " do ( " + instrSeqText + " )";

      while (stats.value && this.errors.length === 0 && !noEval) {
        if (i >= 100) {
          this.errors.push(createIEditorError(ctx, "Possible infinite loop"));
          break;
        }

        iters.push(JSON.parse(JSON.stringify(this.visitInstructionSequence(instructionSequence))));
        stats = this.visitStats(ctx.stats());
        i++;
      }
    } else if (instruction) {
      instrSeqText = this.visitInstruction(instruction, true)?.text;
      let i = 0;

      text = "while " + stats.text + " do " + instrSeqText;

      while (stats.value && this.errors.length === 0 && !noEval) {
        if (i >= 100) {
          this.errors.push({
            message:
              "Possible infinite loop at line " +
              ctx.start.line +
              ", column " +
              ctx.start.charPositionInLine,
            startLineNumber: ctx.start.line,
            startColumn: ctx.start.charPositionInLine,
            endLineNumber: ctx.stop?.line ?? ctx.start.line,
            endColumn: ctx.stop?.charPositionInLine ?? ctx.start.charPositionInLine,
          });
          break;
        }

        iters.push(JSON.parse(JSON.stringify(this.visitInstruction(instruction))));
        stats = this.visitStats(ctx.stats());
        i++;
      }
    }

    return {
      text,
      iters: iters,
      conditionText: stats.text,
      instrSeqText,
      type: "cycle",
    };
  };

  // Visit a parse tree produced by JaneParser#branch.
  visitBranch = (ctx: BranchContext, noEval = false): BranchValue => {
    const { children } = ctx;
    if (!children) {
      this.errors.push(createIEditorError(ctx, "Branch has no body"));
      throw new InterpreterError("Branch has no body", this.errors);
    }
    const stats = this.visitStats(ctx.stats());
    const isTrue = stats.value;
    let ifBranch, elBranch;
    let text;

    let isTerminalNode = children[3] instanceof TerminalNode;
    //in case there is more than one instruction
    let elseBodyStartDecrement = 1;
    const ifBody = isTerminalNode ? children[4] : children[3];
    if (isTerminalNode && ifBody instanceof InstructionSequenceContext) {
      elseBodyStartDecrement = 0;
      ifBranch = this.visitInstructionSequence(ifBody, !isTrue || noEval);
      text = "if " + stats.text + " then ( " + ifBranch.text + " )";
    } else if (ifBody instanceof InstructionContext) {
      ifBranch = this.visitInstruction(ifBody, !isTrue || noEval);
      text = "if " + stats.text + " then " + ifBranch?.text;
      elseBodyStartDecrement = 2;
    } else {
      this.errors.push(createIEditorError(ctx, "if branch was malformed"));
      throw new InterpreterError("if branch was malformed", this.errors);
    }

    isTerminalNode = children[7 - elseBodyStartDecrement] instanceof TerminalNode;
    const elseBody = isTerminalNode
      ? children[8 - elseBodyStartDecrement]
      : children[7 - elseBodyStartDecrement];
    if (isTerminalNode && elseBody instanceof InstructionSequenceContext) {
      elBranch = this.visitInstructionSequence(elseBody, isTrue || noEval);
      text += " else ( " + elBranch.text + " )";
    } else if (elseBody instanceof InstructionContext) {
      elBranch = this.visitInstruction(elseBody, isTrue || noEval);
      text += " else " + elBranch?.text;
    } else {
      this.errors.push(createIEditorError(ctx, "if branch was malformed"));
      throw new InterpreterError("if branch was malformed", this.errors);
    }

    return {
      text,
      ifBranch,
      elBranch,
      type: "branch",
      conditionText: stats.text,
      isTrue,
    };
  };

  // Visit a parse tree produced by JaneParser#assign.
  visitAssign = (ctx: AssignContext, noEval?: boolean): AssignmentValue => {
    const expr = this.visitExpr(ctx.expr(), noEval);
    const id = ctx.Id().text;
    if (!noEval) this.scope.setVariable(id, expr.value);

    return {
      text: id + " := " + expr.text,
      id,
      value: expr.text,
      type: "assign",
      state: structuredClone(this.scope.memory),
    };
  };

  visitSkip = (ctx: SkipContext): SkipValue => {
    return {
      text: ctx.Skip().text,
      type: "skip",
    };
  };

  visitBlock = (ctx: BlockContext, noEval?: boolean): BlockValue => {
    const declCtx = ctx.decl();
    const procsCtx = ctx.procs();
    if (noEval) {
      return {
        type: "block",
        text: `begin ${ctx ? ctx.text + "; " : ""} ${procsCtx ? procsCtx.text + "; " : ""} ${
          ctx.instructionSequence()
            ? this.visitInstructionSequence(ctx.instructionSequence()!, true)
            : this.visitInstruction(ctx.instruction()!, true)
        } end`,
      };
    }

    this.scopeStack.push(this.scope.clone());
    const memoryBefore = this.scope.clone().memory;
    const decl = declCtx ? this.visitDecl(declCtx) : undefined;
    const procs = procsCtx ? this.visitProcs(procsCtx) : undefined;
    const body = ctx.instructionSequence()
      ? this.visitInstructionSequence(ctx.instructionSequence()!)
      : this.visitInstruction(ctx.instruction()!);

    if (!body) {
      this.errors.push(createIEditorError(ctx, "block body was malformed"));
      throw new InterpreterError("block body was malformed", this.errors);
    }

    const memoryAfter = mergeMemory(
      this.scopeStack.pop()!.memory,
      this.getMemory(),
      decl ? decl.assignments.map((a) => a.id) : []
    );

    this.scope.setMemory(structuredClone(memoryAfter));

    return {
      type: "block",
      text: `begin ${decl ? `var ${decl.text};` : ""}${
        procs ? ` ${procs.map((p) => p?.text).join(",")};` : ""
      } ${body.text} end`,
      decl,
      body,
      procs,
      memoryBefore,
      memoryAfter,
    };
  };

  visitProcs = (ctx: ProcsContext, noEval = false): ProcDefinitionValue[] => {
    return ctx.procDefinition().map((proc) => this.visitProcDefinition(proc, noEval));
  };

  visitProcDefinition = (ctx: ProcDefinitionContext, noEval?: boolean): ProcDefinitionValue => {
    const body = ctx.instruction() ?? ctx.instructionSequence();
    if (!body) {
      throw new InterpreterError("Missing body for procedure", [
        ...this.errors,
        createIEditorError(ctx, "Missing body for procedure"),
      ]);
    }
    const procId = ctx.Id().text;
    if (!noEval) {
      this.scope.setProcedure({
        id: procId,
        body,
      });
    }
    const bodyText = (
      body instanceof InstructionContext
        ? this.visitInstruction(body, true)
        : this.visitInstructionSequence(body, true)
    )?.text;
    return {
      type: "procDefinition",
      text: `proc ${procId} is ${
        body instanceof InstructionContext ? bodyText : "( " + bodyText + " )"
      }`,
    };
  };

  visitProcCall = (ctx: ProcCallContext, noEval?: boolean): ProcCallValue => {
    const procId = ctx.Id().text;
    if (noEval) {
      return { type: "procCall", text: `call ${procId}` };
    }

    this.scopeStack.push(this.scope.clone());
    const memoryBefore = this.scope.clone().memory;

    const procedure = this.scope.getProcedure(procId);
    if (!procedure) {
      this.errors.push(createIEditorError(ctx, `Procedure ${procId} is not defined`));
      throw new InterpreterError(`Procedure ${procId} is not defined`, this.errors);
    }

    const body =
      procedure.body instanceof InstructionContext
        ? this.visitInstruction(procedure.body, noEval)
        : this.visitInstructionSequence(procedure.body, noEval);

    const memoryAfter = mergeMemory(this.scopeStack.pop()!.memory, this.getMemory());
    this.scope.setMemory(structuredClone(memoryAfter));

    return { type: "procCall", text: `call ${procId}`, body, memoryBefore, memoryAfter };
  };

  visitDecl = (ctx: DeclContext, noEval?: boolean): DeclarationValue => {
    const assignments = ctx.assign().map((assignCtx) => this.visitAssign(assignCtx, noEval));

    return {
      text: assignments.map((a) => a.text).join(", "),
      assignments,
      type: "decl",
    };
  };

  // Visit a parse tree produced by JaneParser#stats.
  visitStats = (ctx: StatsContext): VisitStatsResult => {
    const stats = ctx.stat();
    if (!stats) {
      return { value: true, text: "" };
    }
    return stats.reduce(
      (acc, c, i) => {
        const stat = this.visitStat(c);
        return {
          value: acc.value && stat.value,
          text: acc.text + (i > 1 ? " and " : "") + stat.text,
        };
      },
      { value: true, text: "" } as VisitStatsResult
    );
  };

  // Visit a parse tree produced by JaneParser#stat.
  visitStat = (ctx: StatContext) => {
    const statsCtx = ctx.stats();
    const exprs = ctx.expr();
    if (ctx.Not() && statsCtx) {
      const stats = this.visitStats(statsCtx);
      return {
        value: !stats.value,
        text: "!(" + stats.text + ")",
      };
    } else if (ctx.Lpar() && statsCtx) {
      const stats = this.visitStats(statsCtx);
      return {
        value: stats.value,
        text: "(" + stats.text + ")",
      };
    } else if (exprs.length === 2) {
      const leftOp = this.visitExpr(exprs[0]),
        rightOp = this.visitExpr(exprs[1]);
      if (ctx.Eq()) {
        return {
          value: leftOp.value === rightOp.value,
          text: leftOp.text + " = " + rightOp.text,
        };
      } else if (ctx.Leq()) {
        return {
          value: leftOp.value <= rightOp.value,
          text: leftOp.text + " <= " + rightOp.text,
        };
      }
    }
    return {
      value: false,
      text: "",
    };
  };

  // Visit a parse tree produced by JaneParser#expr.
  visitExpr = (ctx: ExprContext, noEval?: boolean): { value: number; text: string } => {
    if (!ctx.children) return { value: 0, text: "" };
    let op = "+";
    return ctx.children.reduce(
      (acc, c) => {
        if (c instanceof MulContext) {
          const mul = this.visitMul(c, noEval);
          return {
            value: acc.value + (op === "+" ? mul.value : -mul.value),
            text: acc.text + mul.text,
          };
        }
        op = c.text;
        return {
          value: acc.value,
          text: acc.text + op,
        };
      },
      { value: 0, text: "" }
    );
  };

  // Visit a parse tree produced by JaneParser#mul.
  visitMul = (ctx: MulContext, noEval?: boolean): { value: number; text: string } => {
    return ctx.term().reduce(
      (acc, c, i) => {
        const term = this.visitTerm(c, noEval);
        return { value: acc.value * term.value, text: acc.text + (i > 0 ? "*" : "") + term.text };
      },
      { value: 1, text: "" }
    );
  };

  // Visit a parse tree produced by JaneParser#term.
  visitTerm = (ctx: TermContext, noEval?: boolean) => {
    const expr = ctx.expr();
    const id = ctx.Id();
    const value = ctx.Value();
    if (expr) {
      return this.visitExpr(expr, noEval);
    } else if (value) {
      return {
        text: ctx.text,
        value: parseInt(ctx.text),
      };
    } else if (id) {
      if (
        !noEval &&
        (this.scope.getVariable(ctx.text) === null ||
          this.scope.getVariable(ctx.text) === undefined)
      ) {
        const errorText = `Variable ${ctx.text} is not initialized`;
        this.errors.push(createIEditorError(ctx, errorText));
        throw new InterpreterError(errorText, this.errors);
      }
      return {
        text: ctx.text,
        value: this.scope.getVariable(ctx.text),
      };
    }
    return {
      text: "",
      value: 0,
    };
  };

  visit(): object {
    throw new Error("Method not implemented.");
  }
  visitChildren(): object {
    throw new Error("Method not implemented.");
  }
  visitTerminal(): object {
    throw new Error("Method not implemented.");
  }
  visitErrorNode(): object {
    throw new Error("Method not implemented.");
  }
}
