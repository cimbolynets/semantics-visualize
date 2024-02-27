// Generated from ./src/grammar/Jane.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./JaneParser";
import { InstructionSequenceContext } from "./JaneParser";
import { InstructionContext } from "./JaneParser";
import { CycleContext } from "./JaneParser";
import { BranchContext } from "./JaneParser";
import { AssignContext } from "./JaneParser";
import { SkipContext } from "./JaneParser";
import { BlockContext } from "./JaneParser";
import { DeclContext } from "./JaneParser";
import { ProcDefinitionContext } from "./JaneParser";
import { ProcCallContext } from "./JaneParser";
import { StatsContext } from "./JaneParser";
import { StatContext } from "./JaneParser";
import { ExprContext } from "./JaneParser";
import { MulContext } from "./JaneParser";
import { TermContext } from "./JaneParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JaneParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JaneVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JaneParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.instructionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionSequence?: (ctx: InstructionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.cycle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCycle?: (ctx: CycleContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.skip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkip?: (ctx: SkipContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.procDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcDefinition?: (ctx: ProcDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.procCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcCall?: (ctx: ProcCallContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.stats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStats?: (ctx: StatsContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.mul`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by `JaneParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;
}

