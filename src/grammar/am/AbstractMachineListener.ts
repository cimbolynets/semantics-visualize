// Generated from ./src/grammar/as/AbstractMachine.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `AbstractMachineParser`.
 */
export interface AbstractMachineListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AbstractMachineParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.instructionSequence`.
	 * @param ctx the parse tree
	 */
	enterInstructionSequence?: (ctx: InstructionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.instructionSequence`.
	 * @param ctx the parse tree
	 */
	exitInstructionSequence?: (ctx: InstructionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.push`.
	 * @param ctx the parse tree
	 */
	enterPush?: (ctx: PushContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.push`.
	 * @param ctx the parse tree
	 */
	exitPush?: (ctx: PushContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.add`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.add`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.mult`.
	 * @param ctx the parse tree
	 */
	enterMult?: (ctx: MultContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.mult`.
	 * @param ctx the parse tree
	 */
	exitMult?: (ctx: MultContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.sub`.
	 * @param ctx the parse tree
	 */
	enterSub?: (ctx: SubContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.sub`.
	 * @param ctx the parse tree
	 */
	exitSub?: (ctx: SubContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.eq`.
	 * @param ctx the parse tree
	 */
	enterEq?: (ctx: EqContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.eq`.
	 * @param ctx the parse tree
	 */
	exitEq?: (ctx: EqContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.le`.
	 * @param ctx the parse tree
	 */
	enterLe?: (ctx: LeContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.le`.
	 * @param ctx the parse tree
	 */
	exitLe?: (ctx: LeContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.and`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.and`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.neg`.
	 * @param ctx the parse tree
	 */
	enterNeg?: (ctx: NegContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.neg`.
	 * @param ctx the parse tree
	 */
	exitNeg?: (ctx: NegContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.fetch`.
	 * @param ctx the parse tree
	 */
	enterFetch?: (ctx: FetchContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.fetch`.
	 * @param ctx the parse tree
	 */
	exitFetch?: (ctx: FetchContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.store`.
	 * @param ctx the parse tree
	 */
	enterStore?: (ctx: StoreContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.store`.
	 * @param ctx the parse tree
	 */
	exitStore?: (ctx: StoreContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.emptyop`.
	 * @param ctx the parse tree
	 */
	enterEmptyop?: (ctx: EmptyopContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.emptyop`.
	 * @param ctx the parse tree
	 */
	exitEmptyop?: (ctx: EmptyopContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `AbstractMachineParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `AbstractMachineParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
}

