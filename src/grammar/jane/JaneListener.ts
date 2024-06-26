// Generated from ./src/grammar/jane/Jane.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./JaneParser";
import { InstructionSequenceContext } from "./JaneParser";
import { InstructionContext } from "./JaneParser";
import { CycleContext } from "./JaneParser";
import { BranchContext } from "./JaneParser";
import { AssignContext } from "./JaneParser";
import { SkipContext } from "./JaneParser";
import { BlockContext } from "./JaneParser";
import { ProcsContext } from "./JaneParser";
import { DeclContext } from "./JaneParser";
import { ProcDefinitionContext } from "./JaneParser";
import { ProcCallContext } from "./JaneParser";
import { StatsContext } from "./JaneParser";
import { StatContext } from "./JaneParser";
import { BoolContext } from "./JaneParser";
import { ExprContext } from "./JaneParser";
import { MulContext } from "./JaneParser";
import { TermContext } from "./JaneParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JaneParser`.
 */
export interface JaneListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JaneParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.instructionSequence`.
	 * @param ctx the parse tree
	 */
	enterInstructionSequence?: (ctx: InstructionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.instructionSequence`.
	 * @param ctx the parse tree
	 */
	exitInstructionSequence?: (ctx: InstructionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.cycle`.
	 * @param ctx the parse tree
	 */
	enterCycle?: (ctx: CycleContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.cycle`.
	 * @param ctx the parse tree
	 */
	exitCycle?: (ctx: CycleContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.skip`.
	 * @param ctx the parse tree
	 */
	enterSkip?: (ctx: SkipContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.skip`.
	 * @param ctx the parse tree
	 */
	exitSkip?: (ctx: SkipContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.procs`.
	 * @param ctx the parse tree
	 */
	enterProcs?: (ctx: ProcsContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.procs`.
	 * @param ctx the parse tree
	 */
	exitProcs?: (ctx: ProcsContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.procDefinition`.
	 * @param ctx the parse tree
	 */
	enterProcDefinition?: (ctx: ProcDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.procDefinition`.
	 * @param ctx the parse tree
	 */
	exitProcDefinition?: (ctx: ProcDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.procCall`.
	 * @param ctx the parse tree
	 */
	enterProcCall?: (ctx: ProcCallContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.procCall`.
	 * @param ctx the parse tree
	 */
	exitProcCall?: (ctx: ProcCallContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.stats`.
	 * @param ctx the parse tree
	 */
	enterStats?: (ctx: StatsContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.stats`.
	 * @param ctx the parse tree
	 */
	exitStats?: (ctx: StatsContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.mul`.
	 * @param ctx the parse tree
	 */
	enterMul?: (ctx: MulContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.mul`.
	 * @param ctx the parse tree
	 */
	exitMul?: (ctx: MulContext) => void;

	/**
	 * Enter a parse tree produced by `JaneParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `JaneParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
}

