// Generated from ./src/grammar/jane/Jane.g4 by ANTLR 4.9.0-SNAPSHOT

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
  public static readonly Id = 20;
  public static readonly Value = 21;
  public static readonly RULE_program = 0;
  public static readonly RULE_instructionSequence = 1;
  public static readonly RULE_instruction = 2;
  public static readonly RULE_cycle = 3;
  public static readonly RULE_branch = 4;
  public static readonly RULE_assign = 5;
  public static readonly RULE_skip = 6;
  public static readonly RULE_stats = 7;
  public static readonly RULE_stat = 8;
  public static readonly RULE_expr = 9;
  public static readonly RULE_mul = 10;
  public static readonly RULE_term = 11;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "program",
    "instructionSequence",
    "instruction",
    "cycle",
    "branch",
    "assign",
    "skip",
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
        this.state = 24;
        this.instructionSequence();
        this.state = 25;
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
        this.state = 27;
        this.instruction();
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Semicolon) {
          {
            {
              this.state = 28;
              this.match(JaneParser.Semicolon);
              this.state = 29;
              this.instruction();
            }
          }
          this.state = 34;
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
      this.state = 39;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JaneParser.Id:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 35;
            this.assign();
          }
          break;
        case JaneParser.While:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 36;
            this.cycle();
          }
          break;
        case JaneParser.If:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 37;
            this.branch();
          }
          break;
        case JaneParser.Skip:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 38;
            this.skip();
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
        this.state = 41;
        this.match(JaneParser.While);
        this.state = 42;
        this.stats();
        this.state = 43;
        this.match(JaneParser.Do);
        this.state = 49;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 44;
              this.match(JaneParser.Lpar);
              this.state = 45;
              this.instructionSequence();
              this.state = 46;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Id:
            {
              this.state = 48;
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
        this.state = 51;
        this.match(JaneParser.If);
        this.state = 52;
        this.stats();
        this.state = 53;
        this.match(JaneParser.Then);
        this.state = 59;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 54;
              this.match(JaneParser.Lpar);
              this.state = 55;
              this.instructionSequence();
              this.state = 56;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Id:
            {
              this.state = 58;
              this.instruction();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 61;
        this.match(JaneParser.Else);
        this.state = 67;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JaneParser.Lpar:
            {
              this.state = 62;
              this.match(JaneParser.Lpar);
              this.state = 63;
              this.instructionSequence();
              this.state = 64;
              this.match(JaneParser.Rpar);
            }
            break;
          case JaneParser.Skip:
          case JaneParser.While:
          case JaneParser.If:
          case JaneParser.Id:
            {
              this.state = 66;
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
        this.state = 69;
        this.match(JaneParser.Id);
        this.state = 70;
        this.match(JaneParser.AssignSymbol);
        this.state = 71;
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
        this.state = 73;
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
  public stats(): StatsContext {
    let _localctx: StatsContext = new StatsContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, JaneParser.RULE_stats);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 75;
        this.stat();
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.And) {
          {
            {
              this.state = 76;
              this.match(JaneParser.And);
              this.state = 77;
              this.stat();
            }
          }
          this.state = 82;
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
    this.enterRule(_localctx, 16, JaneParser.RULE_stat);
    let _la: number;
    try {
      this.state = 97;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 83;
            this.expr();
            this.state = 88;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JaneParser.Leq:
                {
                  this.state = 84;
                  this.match(JaneParser.Leq);
                  this.state = 85;
                  this.expr();
                }
                break;
              case JaneParser.Eq:
                {
                  this.state = 86;
                  this.match(JaneParser.Eq);
                  this.state = 87;
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
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JaneParser.Not) {
              {
                this.state = 90;
                this.match(JaneParser.Not);
              }
            }

            this.state = 93;
            this.match(JaneParser.Lpar);
            this.state = 94;
            this.stats();
            this.state = 95;
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
    this.enterRule(_localctx, 18, JaneParser.RULE_expr);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 99;
        this.mul();
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Plus || _la === JaneParser.Minus) {
          {
            this.state = 104;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JaneParser.Plus:
                {
                  this.state = 100;
                  this.match(JaneParser.Plus);
                  this.state = 101;
                  this.mul();
                }
                break;
              case JaneParser.Minus:
                {
                  this.state = 102;
                  this.match(JaneParser.Minus);
                  this.state = 103;
                  this.mul();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 108;
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
    this.enterRule(_localctx, 20, JaneParser.RULE_mul);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 109;
        this.term();
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JaneParser.Mult) {
          {
            {
              this.state = 110;
              this.match(JaneParser.Mult);
              this.state = 111;
              this.term();
            }
          }
          this.state = 116;
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
    this.enterRule(_localctx, 22, JaneParser.RULE_term);
    try {
      this.state = 123;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JaneParser.Id:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 117;
            this.match(JaneParser.Id);
          }
          break;
        case JaneParser.Value:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 118;
            this.match(JaneParser.Value);
          }
          break;
        case JaneParser.Lpar:
          this.enterOuterAlt(_localctx, 3);
          {
            {
              this.state = 119;
              this.match(JaneParser.Lpar);
              this.state = 120;
              this.expr();
              this.state = 121;
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
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\x80\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
    "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03!\n\x03\f\x03\x0E" +
    "\x03$\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04*\n\x04\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x054\n\x05\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06>" +
    "\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06F\n\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tQ" +
    "\n\t\f\t\x0E\tT\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n[\n\n\x03\n\x05" +
    "\n^\n\n\x03\n\x03\n\x03\n\x03\n\x05\nd\n\n\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x07\vk\n\v\f\v\x0E\vn\v\v\x03\f\x03\f\x03\f\x07\fs\n\f\f\f\x0E\fv\v" +
    "\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r~\n\r\x03\r\x02\x02\x02\x0E" +
    "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x02\x02\x02\x83\x02\x1A\x03\x02\x02\x02\x04\x1D\x03" +
    "\x02\x02\x02\x06)\x03\x02\x02\x02\b+\x03\x02\x02\x02\n5\x03\x02\x02\x02" +
    "\fG\x03\x02\x02\x02\x0EK\x03\x02\x02\x02\x10M\x03\x02\x02\x02\x12c\x03" +
    "\x02\x02\x02\x14e\x03\x02\x02\x02\x16o\x03\x02\x02\x02\x18}\x03\x02\x02" +
    "\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x07\x02\x02\x03\x1C\x03\x03\x02\x02" +
    '\x02\x1D"\x05\x06\x04\x02\x1E\x1F\x07\x15\x02\x02\x1F!\x05\x06\x04\x02' +
    ' \x1E\x03\x02\x02\x02!$\x03\x02\x02\x02" \x03\x02\x02\x02"#\x03\x02' +
    '\x02\x02#\x05\x03\x02\x02\x02$"\x03\x02\x02\x02%*\x05\f\x07\x02&*\x05' +
    "\b\x05\x02'*\x05\n\x06\x02(*\x05\x0E\b\x02)%\x03\x02\x02\x02)&\x03\x02" +
    "\x02\x02)'\x03\x02\x02\x02)(\x03\x02\x02\x02*\x07\x03\x02\x02\x02+,\x07" +
    "\n\x02\x02,-\x05\x10\t\x02-3\x07\v\x02\x02./\x07\x06\x02\x02/0\x05\x04" +
    "\x03\x0201\x07\x07\x02\x0214\x03\x02\x02\x0224\x05\x06\x04\x023.\x03\x02" +
    "\x02\x0232\x03\x02\x02\x024\t\x03\x02\x02\x0256\x07\r\x02\x0267\x05\x10" +
    "\t\x027=\x07\f\x02\x0289\x07\x06\x02\x029:\x05\x04\x03\x02:;\x07\x07\x02" +
    "\x02;>\x03\x02\x02\x02<>\x05\x06\x04\x02=8\x03\x02\x02\x02=<\x03\x02\x02" +
    "\x02>?\x03\x02\x02\x02?E\x07\x0E\x02\x02@A\x07\x06\x02\x02AB\x05\x04\x03" +
    "\x02BC\x07\x07\x02\x02CF\x03\x02\x02\x02DF\x05\x06\x04\x02E@\x03\x02\x02" +
    "\x02ED\x03\x02\x02\x02F\v\x03\x02\x02\x02GH\x07\x16\x02\x02HI\x07\t\x02" +
    "\x02IJ\x05\x14\v\x02J\r\x03\x02\x02\x02KL\x07\x05\x02\x02L\x0F\x03\x02" +
    "\x02\x02MR\x05\x12\n\x02NO\x07\b\x02\x02OQ\x05\x12\n\x02PN\x03\x02\x02" +
    "\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x11\x03\x02" +
    "\x02\x02TR\x03\x02\x02\x02UZ\x05\x14\v\x02VW\x07\x13\x02\x02W[\x05\x14" +
    "\v\x02XY\x07\x14\x02\x02Y[\x05\x14\v\x02ZV\x03\x02\x02\x02ZX\x03\x02\x02" +
    "\x02[d\x03\x02\x02\x02\\^\x07\x12\x02\x02]\\\x03\x02\x02\x02]^\x03\x02" +
    "\x02\x02^_\x03\x02\x02\x02_`\x07\x06\x02\x02`a\x05\x10\t\x02ab\x07\x07" +
    "\x02\x02bd\x03\x02\x02\x02cU\x03\x02\x02\x02c]\x03\x02\x02\x02d\x13\x03" +
    "\x02\x02\x02el\x05\x16\f\x02fg\x07\x10\x02\x02gk\x05\x16\f\x02hi\x07\x11" +
    "\x02\x02ik\x05\x16\f\x02jf\x03\x02\x02\x02jh\x03\x02\x02\x02kn\x03\x02" +
    "\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x15\x03\x02\x02\x02nl\x03" +
    "\x02\x02\x02ot\x05\x18\r\x02pq\x07\x0F\x02\x02qs\x05\x18\r\x02rp\x03\x02" +
    "\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02u\x17\x03" +
    "\x02\x02\x02vt\x03\x02\x02\x02w~\x07\x16\x02\x02x~\x07\x17\x02\x02yz\x07" +
    "\x06\x02\x02z{\x05\x14\v\x02{|\x07\x07\x02\x02|~\x03\x02\x02\x02}w\x03" +
    "\x02\x02\x02}x\x03\x02\x02\x02}y\x03\x02\x02\x02~\x19\x03\x02\x02\x02" +
    '\x0F")3=ERZ]cjlt}';
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