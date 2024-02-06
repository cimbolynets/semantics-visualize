// Generated from ./src/grammar/jane-extended/JaneExtended.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { InstructionContext } from "./JaneExtendedParser";
import { BlockContext } from "./JaneExtendedParser";
import { DeclContext } from "./JaneExtendedParser";
import { ProgramContext } from "./JaneExtendedParser";
import { InstructionSequenceContext } from "./JaneExtendedParser";
import { CycleContext } from "./JaneExtendedParser";
import { BranchContext } from "./JaneExtendedParser";
import { AssignContext } from "./JaneExtendedParser";
import { SkipContext } from "./JaneExtendedParser";
import { StatsContext } from "./JaneExtendedParser";
import { StatContext } from "./JaneExtendedParser";
import { ExprContext } from "./JaneExtendedParser";
import { MulContext } from "./JaneExtendedParser";
import { TermContext } from "./JaneExtendedParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JaneExtendedParser`.
 */
export interface JaneExtendedListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JaneExtendedParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.instructionSequence`.
	 * @param ctx the parse tree
	 */
	enterInstructionSequence?: (ctx: InstructionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.instructionSequence`.
	 * @param ctx the parse tree
	 */
	exitInstructionSequence?: (ctx: InstructionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.cycle`.
	 * @param ctx the parse tree
	 */
	enterCycle?: (ctx: CycleContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.cycle`.
	 * @param ctx the parse tree
	 */
	exitCycle?: (ctx: CycleContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.skip`.
	 * @param ctx the parse tree
	 */
	enterSkip?: (ctx: SkipContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.skip`.
	 * @param ctx the parse tree
	 */
	exitSkip?: (ctx: SkipContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.stats`.
	 * @param ctx the parse tree
	 */
	enterStats?: (ctx: StatsContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.stats`.
	 * @param ctx the parse tree
	 */
	exitStats?: (ctx: StatsContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.mul`.
	 * @param ctx the parse tree
	 */
	enterMul?: (ctx: MulContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.mul`.
	 * @param ctx the parse tree
	 */
	exitMul?: (ctx: MulContext) => void;

	/**
	 * Enter a parse tree produced by `JaneExtendedParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `JaneExtendedParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
}

