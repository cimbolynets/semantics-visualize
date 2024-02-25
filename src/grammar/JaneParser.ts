// Generated from ./src/grammar/Jane.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JaneListener } from "./JaneListener";
import { JaneVisitor } from "./JaneVisitor";


export class JaneParser extends Parser {
	public static readonly Whitespace = 1;
	public static readonly Newline = 2;
	public static readonly Skip = 3;
	public static readonly Lpar = 4;
	public static readonly Rpar = 5;
	public static readonly And = 6;
	public static readonly AssignSymbol = 7;
	public static readonly While = 8;
	public static readonly Do = 9;
	public static readonly Then = 10;
	public static readonly If = 11;
	public static readonly Else = 12;
	public static readonly Mult = 13;
	public static readonly Plus = 14;
	public static readonly Minus = 15;
	public static readonly Not = 16;
	public static readonly Leq = 17;
	public static readonly Eq = 18;
	public static readonly Semicolon = 19;
	public static readonly Begin = 20;
	public static readonly End = 21;
	public static readonly Var = 22;
	public static readonly Colon = 23;
	public static readonly Id = 24;
	public static readonly Value = 25;
	public static readonly RULE_program = 0;
	public static readonly RULE_instructionSequence = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_cycle = 3;
	public static readonly RULE_branch = 4;
	public static readonly RULE_assign = 5;
	public static readonly RULE_skip = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_decl = 8;
	public static readonly RULE_stats = 9;
	public static readonly RULE_stat = 10;
	public static readonly RULE_expr = 11;
	public static readonly RULE_mul = 12;
	public static readonly RULE_term = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "instructionSequence", "instruction", "cycle", "branch", "assign", 
		"skip", "block", "decl", "stats", "stat", "expr", "mul", "term",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'skip'", "'('", "')'", "'and'", "':='", 
		"'while'", "'do'", "'then'", "'if'", "'else'", "'*'", "'+'", "'-'", "'!'", 
		"'<='", "'='", "';'", "'begin'", "'end'", "'var'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Whitespace", "Newline", "Skip", "Lpar", "Rpar", "And", "AssignSymbol", 
		"While", "Do", "Then", "If", "Else", "Mult", "Plus", "Minus", "Not", "Leq", 
		"Eq", "Semicolon", "Begin", "End", "Var", "Colon", "Id", "Value",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JaneParser._LITERAL_NAMES, JaneParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JaneParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Jane.g4"; }

	// @Override
	public get ruleNames(): string[] { return JaneParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JaneParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JaneParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JaneParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.instructionSequence();
			this.state = 29;
			this.match(JaneParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionSequence(): InstructionSequenceContext {
		let _localctx: InstructionSequenceContext = new InstructionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JaneParser.RULE_instructionSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.instruction();
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JaneParser.Semicolon) {
				{
				{
				this.state = 32;
				this.match(JaneParser.Semicolon);
				this.state = 33;
				this.instruction();
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JaneParser.RULE_instruction);
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JaneParser.Id:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.assign();
				}
				break;
			case JaneParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 40;
				this.cycle();
				}
				break;
			case JaneParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 41;
				this.branch();
				}
				break;
			case JaneParser.Skip:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 42;
				this.skip();
				}
				break;
			case JaneParser.Begin:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 43;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cycle(): CycleContext {
		let _localctx: CycleContext = new CycleContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JaneParser.RULE_cycle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(JaneParser.While);
			this.state = 47;
			this.stats();
			this.state = 48;
			this.match(JaneParser.Do);
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JaneParser.Lpar:
				{
				this.state = 49;
				this.match(JaneParser.Lpar);
				this.state = 50;
				this.instructionSequence();
				this.state = 51;
				this.match(JaneParser.Rpar);
				}
				break;
			case JaneParser.Skip:
			case JaneParser.While:
			case JaneParser.If:
			case JaneParser.Begin:
			case JaneParser.Id:
				{
				this.state = 53;
				this.instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public branch(): BranchContext {
		let _localctx: BranchContext = new BranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JaneParser.RULE_branch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(JaneParser.If);
			this.state = 57;
			this.stats();
			this.state = 58;
			this.match(JaneParser.Then);
			this.state = 64;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JaneParser.Lpar:
				{
				this.state = 59;
				this.match(JaneParser.Lpar);
				this.state = 60;
				this.instructionSequence();
				this.state = 61;
				this.match(JaneParser.Rpar);
				}
				break;
			case JaneParser.Skip:
			case JaneParser.While:
			case JaneParser.If:
			case JaneParser.Begin:
			case JaneParser.Id:
				{
				this.state = 63;
				this.instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 66;
			this.match(JaneParser.Else);
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JaneParser.Lpar:
				{
				this.state = 67;
				this.match(JaneParser.Lpar);
				this.state = 68;
				this.instructionSequence();
				this.state = 69;
				this.match(JaneParser.Rpar);
				}
				break;
			case JaneParser.Skip:
			case JaneParser.While:
			case JaneParser.If:
			case JaneParser.Begin:
			case JaneParser.Id:
				{
				this.state = 71;
				this.instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JaneParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(JaneParser.Id);
			this.state = 75;
			this.match(JaneParser.AssignSymbol);
			this.state = 76;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skip(): SkipContext {
		let _localctx: SkipContext = new SkipContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JaneParser.RULE_skip);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(JaneParser.Skip);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JaneParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(JaneParser.Begin);
			this.state = 81;
			this.decl();
			this.state = 82;
			this.match(JaneParser.Semicolon);
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JaneParser.Lpar:
				{
				this.state = 83;
				this.match(JaneParser.Lpar);
				this.state = 84;
				this.instructionSequence();
				this.state = 85;
				this.match(JaneParser.Rpar);
				}
				break;
			case JaneParser.Skip:
			case JaneParser.While:
			case JaneParser.If:
			case JaneParser.Begin:
			case JaneParser.Id:
				{
				this.state = 87;
				this.instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 90;
			this.match(JaneParser.End);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let _localctx: DeclContext = new DeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JaneParser.RULE_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(JaneParser.Var);
			this.state = 93;
			this.assign();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JaneParser.Colon) {
				{
				{
				this.state = 94;
				this.match(JaneParser.Colon);
				this.state = 95;
				this.assign();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stats(): StatsContext {
		let _localctx: StatsContext = new StatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JaneParser.RULE_stats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.stat();
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JaneParser.And) {
				{
				{
				this.state = 102;
				this.match(JaneParser.And);
				this.state = 103;
				this.stat();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JaneParser.RULE_stat);
		let _la: number;
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.expr();
				this.state = 114;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JaneParser.Leq:
					{
					this.state = 110;
					this.match(JaneParser.Leq);
					this.state = 111;
					this.expr();
					}
					break;
				case JaneParser.Eq:
					{
					this.state = 112;
					this.match(JaneParser.Eq);
					this.state = 113;
					this.expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JaneParser.Not) {
					{
					this.state = 116;
					this.match(JaneParser.Not);
					}
				}

				this.state = 119;
				this.match(JaneParser.Lpar);
				this.state = 120;
				this.stats();
				this.state = 121;
				this.match(JaneParser.Rpar);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JaneParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.mul();
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JaneParser.Plus || _la === JaneParser.Minus) {
				{
				this.state = 130;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JaneParser.Plus:
					{
					this.state = 126;
					this.match(JaneParser.Plus);
					this.state = 127;
					this.mul();
					}
					break;
				case JaneParser.Minus:
					{
					this.state = 128;
					this.match(JaneParser.Minus);
					this.state = 129;
					this.mul();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mul(): MulContext {
		let _localctx: MulContext = new MulContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JaneParser.RULE_mul);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.term();
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JaneParser.Mult) {
				{
				{
				this.state = 136;
				this.match(JaneParser.Mult);
				this.state = 137;
				this.term();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JaneParser.RULE_term);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JaneParser.Id:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.match(JaneParser.Id);
				}
				break;
			case JaneParser.Value:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.match(JaneParser.Value);
				}
				break;
			case JaneParser.Lpar:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 145;
				this.match(JaneParser.Lpar);
				this.state = 146;
				this.expr();
				this.state = 147;
				this.match(JaneParser.Rpar);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\x9A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04/\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x059\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06C\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06K\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t[\n\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x07\nc\n\n\f\n\x0E\nf\v\n\x03\v\x03\v\x03\v" +
		"\x07\vk\n\v\f\v\x0E\vn\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fu\n\f\x03" +
		"\f\x05\fx\n\f\x03\f\x03\f\x03\f\x03\f\x05\f~\n\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x07\r\x85\n\r\f\r\x0E\r\x88\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\x8D\n\x0E\f\x0E\x0E\x0E\x90\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\x98\n\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x02\x02\x02\x9E\x02\x1E\x03\x02\x02\x02\x04!\x03" +
		"\x02\x02\x02\x06.\x03\x02\x02\x02\b0\x03\x02\x02\x02\n:\x03\x02\x02\x02" +
		"\fL\x03\x02\x02\x02\x0EP\x03\x02\x02\x02\x10R\x03\x02\x02\x02\x12^\x03" +
		"\x02\x02\x02\x14g\x03\x02\x02\x02\x16}\x03\x02\x02\x02\x18\x7F\x03\x02" +
		"\x02\x02\x1A\x89\x03\x02\x02\x02\x1C\x97\x03\x02\x02\x02\x1E\x1F\x05\x04" +
		"\x03\x02\x1F \x07\x02\x02\x03 \x03\x03\x02\x02\x02!&\x05\x06\x04\x02\"" +
		"#\x07\x15\x02\x02#%\x05\x06\x04\x02$\"\x03\x02\x02\x02%(\x03\x02\x02\x02" +
		"&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'\x05\x03\x02\x02\x02(&\x03\x02" +
		"\x02\x02)/\x05\f\x07\x02*/\x05\b\x05\x02+/\x05\n\x06\x02,/\x05\x0E\b\x02" +
		"-/\x05\x10\t\x02.)\x03\x02\x02\x02.*\x03\x02\x02\x02.+\x03\x02\x02\x02" +
		".,\x03\x02\x02\x02.-\x03\x02\x02\x02/\x07\x03\x02\x02\x0201\x07\n\x02" +
		"\x0212\x05\x14\v\x0228\x07\v\x02\x0234\x07\x06\x02\x0245\x05\x04\x03\x02" +
		"56\x07\x07\x02\x0269\x03\x02\x02\x0279\x05\x06\x04\x0283\x03\x02\x02\x02" +
		"87\x03\x02\x02\x029\t\x03\x02\x02\x02:;\x07\r\x02\x02;<\x05\x14\v\x02" +
		"<B\x07\f\x02\x02=>\x07\x06\x02\x02>?\x05\x04\x03\x02?@\x07\x07\x02\x02" +
		"@C\x03\x02\x02\x02AC\x05\x06\x04\x02B=\x03\x02\x02\x02BA\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DJ\x07\x0E\x02\x02EF\x07\x06\x02\x02FG\x05\x04\x03\x02" +
		"GH\x07\x07\x02\x02HK\x03\x02\x02\x02IK\x05\x06\x04\x02JE\x03\x02\x02\x02" +
		"JI\x03\x02\x02\x02K\v\x03\x02\x02\x02LM\x07\x1A\x02\x02MN\x07\t\x02\x02" +
		"NO\x05\x18\r\x02O\r\x03\x02\x02\x02PQ\x07\x05\x02\x02Q\x0F\x03\x02\x02" +
		"\x02RS\x07\x16\x02\x02ST\x05\x12\n\x02TZ\x07\x15\x02\x02UV\x07\x06\x02" +
		"\x02VW\x05\x04\x03\x02WX\x07\x07\x02\x02X[\x03\x02\x02\x02Y[\x05\x06\x04" +
		"\x02ZU\x03\x02\x02\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07\x17" +
		"\x02\x02]\x11\x03\x02\x02\x02^_\x07\x18\x02\x02_d\x05\f\x07\x02`a\x07" +
		"\x19\x02\x02ac\x05\f\x07\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03" +
		"\x02\x02\x02de\x03\x02\x02\x02e\x13\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"gl\x05\x16\f\x02hi\x07\b\x02\x02ik\x05\x16\f\x02jh\x03\x02\x02\x02kn\x03" +
		"\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x15\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02ot\x05\x18\r\x02pq\x07\x13\x02\x02qu\x05\x18\r\x02r" +
		"s\x07\x14\x02\x02su\x05\x18\r\x02tp\x03\x02\x02\x02tr\x03\x02\x02\x02" +
		"u~\x03\x02\x02\x02vx\x07\x12\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02yz\x07\x06\x02\x02z{\x05\x14\v\x02{|\x07\x07\x02\x02" +
		"|~\x03\x02\x02\x02}o\x03\x02\x02\x02}w\x03\x02\x02\x02~\x17\x03\x02\x02" +
		"\x02\x7F\x86\x05\x1A\x0E\x02\x80\x81\x07\x10\x02\x02\x81\x85\x05\x1A\x0E" +
		"\x02\x82\x83\x07\x11\x02\x02\x83\x85\x05\x1A\x0E\x02\x84\x80\x03\x02\x02" +
		"\x02\x84\x82\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02" +
		"\x02\x86\x87\x03\x02\x02\x02\x87\x19\x03\x02\x02\x02\x88\x86\x03\x02\x02" +
		"\x02\x89\x8E\x05\x1C\x0F\x02\x8A\x8B\x07\x0F\x02\x02\x8B\x8D\x05\x1C\x0F" +
		"\x02\x8C\x8A\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02" +
		"\x02\x8E\x8F\x03\x02\x02\x02\x8F\x1B\x03\x02\x02\x02\x90\x8E\x03\x02\x02" +
		"\x02\x91\x98\x07\x1A\x02\x02\x92\x98\x07\x1B\x02\x02\x93\x94\x07\x06\x02" +
		"\x02\x94\x95\x05\x18\r\x02\x95\x96\x07\x07\x02\x02\x96\x98\x03\x02\x02" +
		"\x02\x97\x91\x03\x02\x02\x02\x97\x92\x03\x02\x02\x02\x97\x93\x03\x02\x02" +
		"\x02\x98\x1D\x03\x02\x02\x02\x11&.8BJZdltw}\x84\x86\x8E\x97";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JaneParser.__ATN) {
			JaneParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JaneParser._serializedATN));
		}

		return JaneParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public instructionSequence(): InstructionSequenceContext {
		return this.getRuleContext(0, InstructionSequenceContext);
	}
	public EOF(): TerminalNode { return this.getToken(JaneParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_program; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionSequenceContext extends ParserRuleContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	public Semicolon(): TerminalNode[];
	public Semicolon(i: number): TerminalNode;
	public Semicolon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Semicolon);
		} else {
			return this.getToken(JaneParser.Semicolon, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_instructionSequence; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterInstructionSequence) {
			listener.enterInstructionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitInstructionSequence) {
			listener.exitInstructionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitInstructionSequence) {
			return visitor.visitInstructionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public cycle(): CycleContext | undefined {
		return this.tryGetRuleContext(0, CycleContext);
	}
	public branch(): BranchContext | undefined {
		return this.tryGetRuleContext(0, BranchContext);
	}
	public skip(): SkipContext | undefined {
		return this.tryGetRuleContext(0, SkipContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_instruction; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CycleContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(JaneParser.While, 0); }
	public stats(): StatsContext {
		return this.getRuleContext(0, StatsContext);
	}
	public Do(): TerminalNode { return this.getToken(JaneParser.Do, 0); }
	public Lpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Lpar, 0); }
	public instructionSequence(): InstructionSequenceContext | undefined {
		return this.tryGetRuleContext(0, InstructionSequenceContext);
	}
	public Rpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Rpar, 0); }
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_cycle; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterCycle) {
			listener.enterCycle(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitCycle) {
			listener.exitCycle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitCycle) {
			return visitor.visitCycle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(JaneParser.If, 0); }
	public stats(): StatsContext {
		return this.getRuleContext(0, StatsContext);
	}
	public Then(): TerminalNode { return this.getToken(JaneParser.Then, 0); }
	public Else(): TerminalNode { return this.getToken(JaneParser.Else, 0); }
	public Lpar(): TerminalNode[];
	public Lpar(i: number): TerminalNode;
	public Lpar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Lpar);
		} else {
			return this.getToken(JaneParser.Lpar, i);
		}
	}
	public instructionSequence(): InstructionSequenceContext[];
	public instructionSequence(i: number): InstructionSequenceContext;
	public instructionSequence(i?: number): InstructionSequenceContext | InstructionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionSequenceContext);
		} else {
			return this.getRuleContext(i, InstructionSequenceContext);
		}
	}
	public Rpar(): TerminalNode[];
	public Rpar(i: number): TerminalNode;
	public Rpar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Rpar);
		} else {
			return this.getToken(JaneParser.Rpar, i);
		}
	}
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_branch; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterBranch) {
			listener.enterBranch(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitBranch) {
			listener.exitBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitBranch) {
			return visitor.visitBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public Id(): TerminalNode { return this.getToken(JaneParser.Id, 0); }
	public AssignSymbol(): TerminalNode { return this.getToken(JaneParser.AssignSymbol, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_assign; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipContext extends ParserRuleContext {
	public Skip(): TerminalNode { return this.getToken(JaneParser.Skip, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_skip; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterSkip) {
			listener.enterSkip(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitSkip) {
			listener.exitSkip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitSkip) {
			return visitor.visitSkip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public Begin(): TerminalNode { return this.getToken(JaneParser.Begin, 0); }
	public decl(): DeclContext {
		return this.getRuleContext(0, DeclContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(JaneParser.Semicolon, 0); }
	public End(): TerminalNode { return this.getToken(JaneParser.End, 0); }
	public Lpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Lpar, 0); }
	public instructionSequence(): InstructionSequenceContext | undefined {
		return this.tryGetRuleContext(0, InstructionSequenceContext);
	}
	public Rpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Rpar, 0); }
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_block; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	public Var(): TerminalNode { return this.getToken(JaneParser.Var, 0); }
	public assign(): AssignContext[];
	public assign(i: number): AssignContext;
	public assign(i?: number): AssignContext | AssignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignContext);
		} else {
			return this.getRuleContext(i, AssignContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Colon);
		} else {
			return this.getToken(JaneParser.Colon, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_decl; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterDecl) {
			listener.enterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitDecl) {
			listener.exitDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitDecl) {
			return visitor.visitDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatsContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.And);
		} else {
			return this.getToken(JaneParser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_stats; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterStats) {
			listener.enterStats(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitStats) {
			listener.exitStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitStats) {
			return visitor.visitStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public Leq(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Leq, 0); }
	public Eq(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Eq, 0); }
	public Lpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Lpar, 0); }
	public stats(): StatsContext | undefined {
		return this.tryGetRuleContext(0, StatsContext);
	}
	public Rpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Rpar, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_stat; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitStat) {
			return visitor.visitStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public mul(): MulContext[];
	public mul(i: number): MulContext;
	public mul(i?: number): MulContext | MulContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MulContext);
		} else {
			return this.getRuleContext(i, MulContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Plus);
		} else {
			return this.getToken(JaneParser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Minus);
		} else {
			return this.getToken(JaneParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_expr; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public Mult(): TerminalNode[];
	public Mult(i: number): TerminalNode;
	public Mult(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JaneParser.Mult);
		} else {
			return this.getToken(JaneParser.Mult, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_mul; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterMul) {
			listener.enterMul(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitMul) {
			listener.exitMul(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public Id(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Id, 0); }
	public Value(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Value, 0); }
	public Lpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Lpar, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public Rpar(): TerminalNode | undefined { return this.tryGetToken(JaneParser.Rpar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JaneParser.RULE_term; }
	// @Override
	public enterRule(listener: JaneListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: JaneListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JaneVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


