// Generated from ./src/grammar/as/AbstractMachine.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./AbstractMachineParser";
import { InstructionSequenceContext } from "./AbstractMachineParser";
import { InstructionContext } from "./AbstractMachineParser";
import { PushContext } from "./AbstractMachineParser";
import { AddContext } from "./AbstractMachineParser";
import { MultContext } from "./AbstractMachineParser";
import { SubContext } from "./AbstractMachineParser";
import { EqContext } from "./AbstractMachineParser";
import { LeContext } from "./AbstractMachineParser";
import { AndContext } from "./AbstractMachineParser";
import { NegContext } from "./AbstractMachineParser";
import { FetchContext } from "./AbstractMachineParser";
import { StoreContext } from "./AbstractMachineParser";
import { EmptyopContext } from "./AbstractMachineParser";
import { BranchContext } from "./AbstractMachineParser";
import { LoopContext } from "./AbstractMachineParser";
import { BooleanContext } from "./AbstractMachineParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AbstractMachineParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AbstractMachineVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AbstractMachineParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.instructionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionSequence?: (ctx: InstructionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.push`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPush?: (ctx: PushContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.mult`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMult?: (ctx: MultContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub?: (ctx: SubContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.eq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq?: (ctx: EqContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.le`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLe?: (ctx: LeContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.neg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeg?: (ctx: NegContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.fetch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetch?: (ctx: FetchContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.store`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStore?: (ctx: StoreContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.emptyop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyop?: (ctx: EmptyopContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `AbstractMachineParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
}

