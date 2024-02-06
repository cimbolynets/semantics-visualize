// Generated from ./src/grammar/jane-extended/JaneExtended.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JaneExtendedParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JaneExtendedVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JaneExtendedParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.instructionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionSequence?: (ctx: InstructionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.cycle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCycle?: (ctx: CycleContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.skip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkip?: (ctx: SkipContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.stats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStats?: (ctx: StatsContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.mul`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneExtendedParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;
}

