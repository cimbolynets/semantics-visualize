// Generated from ./src/grammar/Jane.g4 by ANTLR 4.9.0-SNAPSHOT

import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

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
  public static readonly Proc = 23;
  public static readonly Is = 24;
  public static readonly Call = 25;
  public static readonly Colon = 26;
  public static readonly Id = 27;
  public static readonly Value = 28;
  public static readonly RULE_program = 0;
  public static readonly RULE_instructionSequence = 1;
  public static readonly RULE_instruction = 2;
  public static readonly RULE_cycle = 3;
  public static readonly RULE_branch = 4;
  public static readonly RULE_assign = 5;
  public static readonly RULE_skip = 6;
  public static readonly RULE_block = 7;
  public static readonly RULE_decl = 8;
  public static readonly RULE_procDefinition = 9;
  public static readonly RULE_procCall = 10;
  public static readonly RULE_stats = 11;
  public static readonly RULE_stat = 12;
  public static readonly RULE_expr = 13;
  public static readonly RULE_mul = 14;
  public static readonly RULE_term = 15;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "program",
    "instructionSequence",
    "instruction",
    "cycle",
    "branch",
    "assign",
    "skip",
    "block",
    "decl",
    "procDefinition",
    "procCall",
    "stats",
    "stat",
    "expr",
    "mul",
    "term",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    "'skip'",
    "'('",
    "')'",
    "'and'",
    "':='",
    "'while'",
    "'do'",
    "'then'",
    "'if'",
    "'else'",
    "'*'",
    "'+'",
    "'-'",
    "'!'",
    "'<='",
    "'='",
    "';'",
    "'begin'",
    "'end'",
    "'var'",
    "'proc'",
    "'is'",
    "'call'",
    "','",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    "Whitespace",
    "Newline",
    "Skip",
    "Lpar",
    "Rpar",
    "And",
    "AssignSymbol",
    "While",
    "Do",
    "Then",
    "If",
    "Else",
    "Mult",
    "Plus",
    "Minus",
    "Not",
    "Leq",
    "Eq",
    "Semicolon",
    "Begin",
    "End",
    "Var",
    "Proc",
    "Is",
    "Call",
    "Colon",
    "Id",
    "Value",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    JaneParser._LITERAL_NAMES,
    JaneParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return JaneParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "Jane.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return JaneParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return JaneParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
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
        this.state = 32;
        this.instructionSequence();
        this.state = 33;
        this.match(JaneParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public instructionSequence(): InstructionSequenceContext {
    let _localctx: InstructionSequenceContext = new InstructionSequenceContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 2, JaneParser.RULE_instructionSequence);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 35;
        this.instruction();
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Semicolon) {
          {
            {
              this.state = 36;
              this.match(JaneParser.Semicolon);
              this.state = 37;
              this.instruction();
            }
          }
          this.state = 42;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public instruction(): InstructionContext {
    let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, JaneParser.RULE_instruction);
    try {
      this.state = 50;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JaneParser.Id:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 43;
            this.assign();
          }
          break;
        case JaneParser.While:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 44;
            this.cycle();
          }
          break;
        case JaneParser.If:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 45;
            this.branch();
          }
          break;
        case JaneParser.Skip:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 46;
            this.skip();
          }
          break;
        case JaneParser.Begin:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 47;
            this.block();
          }
          break;
        case JaneParser.Proc:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 48;
            this.procDefinition();
          }
          break;
        case JaneParser.Call:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 49;
            this.procCall();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 52;
        this.match(JaneParser.While);
        this.state = 53;
        this.stats();
        this.state = 54;
        this.match(JaneParser.Do);
        this.state = 60;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 55;
              this.match(JaneParser.Lpar);
              this.state = 56;
              this.instructionSequence();
              this.state = 57;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Begin:
          case JaneParser.Proc:
          case JaneParser.Call:
          case JaneParser.Id:
            {
              this.state = 59;
              this.instruction();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 62;
        this.match(JaneParser.If);
        this.state = 63;
        this.stats();
        this.state = 64;
        this.match(JaneParser.Then);
        this.state = 70;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 65;
              this.match(JaneParser.Lpar);
              this.state = 66;
              this.instructionSequence();
              this.state = 67;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Begin:
          case JaneParser.Proc:
          case JaneParser.Call:
          case JaneParser.Id:
            {
              this.state = 69;
              this.instruction();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 72;
        this.match(JaneParser.Else);
        this.state = 78;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 73;
              this.match(JaneParser.Lpar);
              this.state = 74;
              this.instructionSequence();
              this.state = 75;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Begin:
          case JaneParser.Proc:
          case JaneParser.Call:
          case JaneParser.Id:
            {
              this.state = 77;
              this.instruction();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 80;
        this.match(JaneParser.Id);
        this.state = 81;
        this.match(JaneParser.AssignSymbol);
        this.state = 82;
        this.expr();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 84;
        this.match(JaneParser.Skip);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 86;
        this.match(JaneParser.Begin);
        this.state = 87;
        this.decl();
        this.state = 88;
        this.match(JaneParser.Semicolon);
        this.state = 94;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 89;
              this.match(JaneParser.Lpar);
              this.state = 90;
              this.instructionSequence();
              this.state = 91;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Begin:
          case JaneParser.Proc:
          case JaneParser.Call:
          case JaneParser.Id:
            {
              this.state = 93;
              this.instruction();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 96;
        this.match(JaneParser.End);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 98;
        this.match(JaneParser.Var);
        this.state = 99;
        this.assign();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Colon) {
          {
            {
              this.state = 100;
              this.match(JaneParser.Colon);
              this.state = 101;
              this.assign();
            }
          }
          this.state = 106;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public procDefinition(): ProcDefinitionContext {
    let _localctx: ProcDefinitionContext = new ProcDefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, JaneParser.RULE_procDefinition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 107;
        this.match(JaneParser.Proc);
        this.state = 108;
        this.match(JaneParser.Id);
        this.state = 109;
        this.match(JaneParser.Is);
        this.state = 115;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 110;
              this.match(JaneParser.Lpar);
              this.state = 111;
              this.instructionSequence();
              this.state = 112;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Begin:
          case JaneParser.Proc:
          case JaneParser.Call:
          case JaneParser.Id:
            {
              this.state = 114;
              this.instruction();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public procCall(): ProcCallContext {
    let _localctx: ProcCallContext = new ProcCallContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, JaneParser.RULE_procCall);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 117;
        this.match(JaneParser.Call);
        this.state = 118;
        this.match(JaneParser.Id);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public stats(): StatsContext {
    let _localctx: StatsContext = new StatsContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, JaneParser.RULE_stats);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 120;
        this.stat();
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.And) {
          {
            {
              this.state = 121;
              this.match(JaneParser.And);
              this.state = 122;
              this.stat();
            }
          }
          this.state = 127;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public stat(): StatContext {
    let _localctx: StatContext = new StatContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, JaneParser.RULE_stat);
    let _la: number;
    try {
      this.state = 142;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 128;
            this.expr();
            this.state = 133;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JaneParser.Leq:
                {
                  this.state = 129;
                  this.match(JaneParser.Leq);
                  this.state = 130;
                  this.expr();
                }
                break;
              case JaneParser.Eq:
                {
                  this.state = 131;
                  this.match(JaneParser.Eq);
                  this.state = 132;
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
            this.state = 136;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JaneParser.Not) {
              {
                this.state = 135;
                this.match(JaneParser.Not);
              }
            }

            this.state = 138;
            this.match(JaneParser.Lpar);
            this.state = 139;
            this.stats();
            this.state = 140;
            this.match(JaneParser.Rpar);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expr(): ExprContext {
    let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, JaneParser.RULE_expr);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 144;
        this.mul();
        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Plus || _la === JaneParser.Minus) {
          {
            this.state = 149;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JaneParser.Plus:
                {
                  this.state = 145;
                  this.match(JaneParser.Plus);
                  this.state = 146;
                  this.mul();
                }
                break;
              case JaneParser.Minus:
                {
                  this.state = 147;
                  this.match(JaneParser.Minus);
                  this.state = 148;
                  this.mul();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 153;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public mul(): MulContext {
    let _localctx: MulContext = new MulContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, JaneParser.RULE_mul);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 154;
        this.term();
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Mult) {
          {
            {
              this.state = 155;
              this.match(JaneParser.Mult);
              this.state = 156;
              this.term();
            }
          }
          this.state = 161;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public term(): TermContext {
    let _localctx: TermContext = new TermContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, JaneParser.RULE_term);
    try {
      this.state = 168;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JaneParser.Id:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 162;
            this.match(JaneParser.Id);
          }
          break;
        case JaneParser.Value:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 163;
            this.match(JaneParser.Value);
          }
          break;
        case JaneParser.Lpar:
          this.enterOuterAlt(_localctx, 3);
          {
            {
              this.state = 164;
              this.match(JaneParser.Lpar);
              this.state = 165;
              this.expr();
              this.state = 166;
              this.match(JaneParser.Rpar);
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xAD\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
    "\x02\x03\x03\x03\x03\x03\x03\x07\x03)\n\x03\f\x03\x0E\x03,\v\x03\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x045\n\x04\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05?\n\x05" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
    "I\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06Q\n\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x03\t\x03\t\x03\t\x05\ta\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07" +
    "\ni\n\n\f\n\x0E\nl\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
    "\x05\vv\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x07\r~\n\r\f\r\x0E\r\x81" +
    "\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x88\n\x0E\x03\x0E" +
    "\x05\x0E\x8B\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x91\n\x0E\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x98\n\x0F\f\x0F\x0E\x0F\x9B" +
    "\v\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xA0\n\x10\f\x10\x0E\x10\xA3\v\x10" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xAB\n\x11\x03" +
    "\x11\x02\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
    "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
    '\x02\x02\x02\xB2\x02"\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x064\x03\x02' +
    "\x02\x02\b6\x03\x02\x02\x02\n@\x03\x02\x02\x02\fR\x03\x02\x02\x02\x0E" +
    "V\x03\x02\x02\x02\x10X\x03\x02\x02\x02\x12d\x03\x02\x02\x02\x14m\x03\x02" +
    "\x02\x02\x16w\x03\x02\x02\x02\x18z\x03\x02\x02\x02\x1A\x90\x03\x02\x02" +
    "\x02\x1C\x92\x03\x02\x02\x02\x1E\x9C\x03\x02\x02\x02 \xAA\x03\x02\x02" +
    '\x02"#\x05\x04\x03\x02#$\x07\x02\x02\x03$\x03\x03\x02\x02\x02%*\x05\x06' +
    "\x04\x02&'\x07\x15\x02\x02')\x05\x06\x04\x02(&\x03\x02\x02\x02),\x03" +
    "\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02+\x05\x03\x02\x02\x02" +
    ",*\x03\x02\x02\x02-5\x05\f\x07\x02.5\x05\b\x05\x02/5\x05\n\x06\x0205\x05" +
    "\x0E\b\x0215\x05\x10\t\x0225\x05\x14\v\x0235\x05\x16\f\x024-\x03\x02\x02" +
    "\x024.\x03\x02\x02\x024/\x03\x02\x02\x0240\x03\x02\x02\x0241\x03\x02\x02" +
    "\x0242\x03\x02\x02\x0243\x03\x02\x02\x025\x07\x03\x02\x02\x0267\x07\n" +
    "\x02\x0278\x05\x18\r\x028>\x07\v\x02\x029:\x07\x06\x02\x02:;\x05\x04\x03" +
    "\x02;<\x07\x07\x02\x02<?\x03\x02\x02\x02=?\x05\x06\x04\x02>9\x03\x02\x02" +
    "\x02>=\x03\x02\x02\x02?\t\x03\x02\x02\x02@A\x07\r\x02\x02AB\x05\x18\r" +
    "\x02BH\x07\f\x02\x02CD\x07\x06\x02\x02DE\x05\x04\x03\x02EF\x07\x07\x02" +
    "\x02FI\x03\x02\x02\x02GI\x05\x06\x04\x02HC\x03\x02\x02\x02HG\x03\x02\x02" +
    "\x02IJ\x03\x02\x02\x02JP\x07\x0E\x02\x02KL\x07\x06\x02\x02LM\x05\x04\x03" +
    "\x02MN\x07\x07\x02\x02NQ\x03\x02\x02\x02OQ\x05\x06\x04\x02PK\x03\x02\x02" +
    "\x02PO\x03\x02\x02\x02Q\v\x03\x02\x02\x02RS\x07\x1D\x02\x02ST\x07\t\x02" +
    "\x02TU\x05\x1C\x0F\x02U\r\x03\x02\x02\x02VW\x07\x05\x02\x02W\x0F\x03\x02" +
    "\x02\x02XY\x07\x16\x02\x02YZ\x05\x12\n\x02Z`\x07\x15\x02\x02[\\\x07\x06" +
    "\x02\x02\\]\x05\x04\x03\x02]^\x07\x07\x02\x02^a\x03\x02\x02\x02_a\x05" +
    "\x06\x04\x02`[\x03\x02\x02\x02`_\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07" +
    "\x17\x02\x02c\x11\x03\x02\x02\x02de\x07\x18\x02\x02ej\x05\f\x07\x02fg" +
    "\x07\x1C\x02\x02gi\x05\f\x07\x02hf\x03\x02\x02\x02il\x03\x02\x02\x02j" +
    "h\x03\x02\x02\x02jk\x03\x02\x02\x02k\x13\x03\x02\x02\x02lj\x03\x02\x02" +
    "\x02mn\x07\x19\x02\x02no\x07\x1D\x02\x02ou\x07\x1A\x02\x02pq\x07\x06\x02" +
    "\x02qr\x05\x04\x03\x02rs\x07\x07\x02\x02sv\x03\x02\x02\x02tv\x05\x06\x04" +
    "\x02up\x03\x02\x02\x02ut\x03\x02\x02\x02v\x15\x03\x02\x02\x02wx\x07\x1B" +
    "\x02\x02xy\x07\x1D\x02\x02y\x17\x03\x02\x02\x02z\x7F\x05\x1A\x0E\x02{" +
    "|\x07\b\x02\x02|~\x05\x1A\x0E\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02" +
    "\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x19\x03\x02\x02\x02" +
    "\x81\x7F\x03\x02\x02\x02\x82\x87\x05\x1C\x0F\x02\x83\x84\x07\x13\x02\x02" +
    "\x84\x88\x05\x1C\x0F\x02\x85\x86\x07\x14\x02\x02\x86\x88\x05\x1C\x0F\x02" +
    "\x87\x83\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x91\x03\x02\x02\x02" +
    "\x89\x8B\x07\x12\x02\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02" +
    "\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x07\x06\x02\x02\x8D\x8E\x05\x18\r\x02" +
    "\x8E\x8F\x07\x07\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x82\x03\x02\x02\x02" +
    "\x90\x8A\x03\x02\x02\x02\x91\x1B\x03\x02\x02\x02\x92\x99\x05\x1E\x10\x02" +
    "\x93\x94\x07\x10\x02\x02\x94\x98\x05\x1E\x10\x02\x95\x96\x07\x11\x02\x02" +
    "\x96\x98\x05\x1E\x10\x02\x97\x93\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02" +
    "\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02" +
    "\x9A\x1D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\xA1\x05 \x11\x02" +
    "\x9D\x9E\x07\x0F\x02\x02\x9E\xA0\x05 \x11\x02\x9F\x9D\x03\x02\x02\x02" +
    "\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02" +
    "\xA2\x1F\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\xAB\x07\x1D\x02\x02" +
    "\xA5\xAB\x07\x1E\x02\x02\xA6\xA7\x07\x06\x02\x02\xA7\xA8\x05\x1C\x0F\x02" +
    "\xA8\xA9\x07\x07\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA4\x03\x02\x02\x02" +
    "\xAA\xA5\x03\x02\x02\x02\xAA\xA6\x03\x02\x02\x02\xAB!\x03\x02\x02\x02" +
    "\x12*4>HP`ju\x7F\x87\x8A\x90\x97\x99\xA1\xAA";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!JaneParser.__ATN) {
      JaneParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(JaneParser._serializedATN)
      );
    }

    return JaneParser.__ATN;
  }
}

export class ProgramContext extends ParserRuleContext {
  public instructionSequence(): InstructionSequenceContext {
    return this.getRuleContext(0, InstructionSequenceContext);
  }
  public EOF(): TerminalNode {
    return this.getToken(JaneParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_program;
  }
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
  public get ruleIndex(): number {
    return JaneParser.RULE_instructionSequence;
  }
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
  public procDefinition(): ProcDefinitionContext | undefined {
    return this.tryGetRuleContext(0, ProcDefinitionContext);
  }
  public procCall(): ProcCallContext | undefined {
    return this.tryGetRuleContext(0, ProcCallContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_instruction;
  }
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
  public While(): TerminalNode {
    return this.getToken(JaneParser.While, 0);
  }
  public stats(): StatsContext {
    return this.getRuleContext(0, StatsContext);
  }
  public Do(): TerminalNode {
    return this.getToken(JaneParser.Do, 0);
  }
  public Lpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Lpar, 0);
  }
  public instructionSequence(): InstructionSequenceContext | undefined {
    return this.tryGetRuleContext(0, InstructionSequenceContext);
  }
  public Rpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Rpar, 0);
  }
  public instruction(): InstructionContext | undefined {
    return this.tryGetRuleContext(0, InstructionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_cycle;
  }
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
  public If(): TerminalNode {
    return this.getToken(JaneParser.If, 0);
  }
  public stats(): StatsContext {
    return this.getRuleContext(0, StatsContext);
  }
  public Then(): TerminalNode {
    return this.getToken(JaneParser.Then, 0);
  }
  public Else(): TerminalNode {
    return this.getToken(JaneParser.Else, 0);
  }
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
  public instructionSequence(
    i?: number
  ): InstructionSequenceContext | InstructionSequenceContext[] {
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
  public get ruleIndex(): number {
    return JaneParser.RULE_branch;
  }
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
  public Id(): TerminalNode {
    return this.getToken(JaneParser.Id, 0);
  }
  public AssignSymbol(): TerminalNode {
    return this.getToken(JaneParser.AssignSymbol, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_assign;
  }
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
  public Skip(): TerminalNode {
    return this.getToken(JaneParser.Skip, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_skip;
  }
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
  public Begin(): TerminalNode {
    return this.getToken(JaneParser.Begin, 0);
  }
  public decl(): DeclContext {
    return this.getRuleContext(0, DeclContext);
  }
  public Semicolon(): TerminalNode {
    return this.getToken(JaneParser.Semicolon, 0);
  }
  public End(): TerminalNode {
    return this.getToken(JaneParser.End, 0);
  }
  public Lpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Lpar, 0);
  }
  public instructionSequence(): InstructionSequenceContext | undefined {
    return this.tryGetRuleContext(0, InstructionSequenceContext);
  }
  public Rpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Rpar, 0);
  }
  public instruction(): InstructionContext | undefined {
    return this.tryGetRuleContext(0, InstructionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_block;
  }
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
  public Var(): TerminalNode {
    return this.getToken(JaneParser.Var, 0);
  }
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
  public get ruleIndex(): number {
    return JaneParser.RULE_decl;
  }
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

export class ProcDefinitionContext extends ParserRuleContext {
  public Proc(): TerminalNode {
    return this.getToken(JaneParser.Proc, 0);
  }
  public Id(): TerminalNode {
    return this.getToken(JaneParser.Id, 0);
  }
  public Is(): TerminalNode {
    return this.getToken(JaneParser.Is, 0);
  }
  public Lpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Lpar, 0);
  }
  public instructionSequence(): InstructionSequenceContext | undefined {
    return this.tryGetRuleContext(0, InstructionSequenceContext);
  }
  public Rpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Rpar, 0);
  }
  public instruction(): InstructionContext | undefined {
    return this.tryGetRuleContext(0, InstructionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_procDefinition;
  }
  // @Override
  public enterRule(listener: JaneListener): void {
    if (listener.enterProcDefinition) {
      listener.enterProcDefinition(this);
    }
  }
  // @Override
  public exitRule(listener: JaneListener): void {
    if (listener.exitProcDefinition) {
      listener.exitProcDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: JaneVisitor<Result>): Result {
    if (visitor.visitProcDefinition) {
      return visitor.visitProcDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ProcCallContext extends ParserRuleContext {
  public Call(): TerminalNode {
    return this.getToken(JaneParser.Call, 0);
  }
  public Id(): TerminalNode {
    return this.getToken(JaneParser.Id, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_procCall;
  }
  // @Override
  public enterRule(listener: JaneListener): void {
    if (listener.enterProcCall) {
      listener.enterProcCall(this);
    }
  }
  // @Override
  public exitRule(listener: JaneListener): void {
    if (listener.exitProcCall) {
      listener.exitProcCall(this);
    }
  }
  // @Override
  public accept<Result>(visitor: JaneVisitor<Result>): Result {
    if (visitor.visitProcCall) {
      return visitor.visitProcCall(this);
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
  public get ruleIndex(): number {
    return JaneParser.RULE_stats;
  }
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
  public Leq(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Leq, 0);
  }
  public Eq(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Eq, 0);
  }
  public Lpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Lpar, 0);
  }
  public stats(): StatsContext | undefined {
    return this.tryGetRuleContext(0, StatsContext);
  }
  public Rpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Rpar, 0);
  }
  public Not(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Not, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_stat;
  }
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
  public get ruleIndex(): number {
    return JaneParser.RULE_expr;
  }
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
  public get ruleIndex(): number {
    return JaneParser.RULE_mul;
  }
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
  public Id(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Id, 0);
  }
  public Value(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Value, 0);
  }
  public Lpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Lpar, 0);
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext);
  }
  public Rpar(): TerminalNode | undefined {
    return this.tryGetToken(JaneParser.Rpar, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return JaneParser.RULE_term;
  }
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
