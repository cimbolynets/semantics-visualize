// Generated from ./src/grammar/as/AbstractMachine.g4 by ANTLR 4.9.0-SNAPSHOT

import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

import * as Utils from "antlr4ts/misc/Utils";

import { AbstractMachineListener } from "./AbstractMachineListener";
import { AbstractMachineVisitor } from "./AbstractMachineVisitor";

export class AbstractMachineParser extends Parser {
  public static readonly Whitespace = 1;
  public static readonly Newline = 2;
  public static readonly Push = 3;
  public static readonly Add = 4;
  public static readonly Mult = 5;
  public static readonly Sub = 6;
  public static readonly Eq = 7;
  public static readonly Le = 8;
  public static readonly And = 9;
  public static readonly Neg = 10;
  public static readonly Fetch = 11;
  public static readonly Store = 12;
  public static readonly Emptyop = 13;
  public static readonly Branch = 14;
  public static readonly Loop = 15;
  public static readonly Lpar = 16;
  public static readonly Rpar = 17;
  public static readonly Divider = 18;
  public static readonly VarDivider = 19;
  public static readonly Colon = 20;
  public static readonly True = 21;
  public static readonly False = 22;
  public static readonly Id = 23;
  public static readonly Value = 24;
  public static readonly RULE_program = 0;
  public static readonly RULE_instructionSequence = 1;
  public static readonly RULE_instruction = 2;
  public static readonly RULE_push = 3;
  public static readonly RULE_add = 4;
  public static readonly RULE_mult = 5;
  public static readonly RULE_sub = 6;
  public static readonly RULE_eq = 7;
  public static readonly RULE_le = 8;
  public static readonly RULE_and = 9;
  public static readonly RULE_neg = 10;
  public static readonly RULE_fetch = 11;
  public static readonly RULE_store = 12;
  public static readonly RULE_emptyop = 13;
  public static readonly RULE_branch = 14;
  public static readonly RULE_loop = 15;
  public static readonly RULE_boolean = 16;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "program",
    "instructionSequence",
    "instruction",
    "push",
    "add",
    "mult",
    "sub",
    "eq",
    "le",
    "and",
    "neg",
    "fetch",
    "store",
    "emptyop",
    "branch",
    "loop",
    "boolean",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    "'PUSH'",
    "'ADD'",
    "'MULT'",
    "'SUB'",
    "'EQ'",
    "'LE'",
    "'AND'",
    "'NEG'",
    "'FETCH'",
    "'STORE'",
    "'EMPTYOP'",
    "'BRANCH'",
    "'LOOP'",
    "'('",
    "')'",
    "':'",
    "'-'",
    "','",
    "'TRUE'",
    "'FALSE'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    "Whitespace",
    "Newline",
    "Push",
    "Add",
    "Mult",
    "Sub",
    "Eq",
    "Le",
    "And",
    "Neg",
    "Fetch",
    "Store",
    "Emptyop",
    "Branch",
    "Loop",
    "Lpar",
    "Rpar",
    "Divider",
    "VarDivider",
    "Colon",
    "True",
    "False",
    "Id",
    "Value",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    AbstractMachineParser._LITERAL_NAMES,
    AbstractMachineParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return AbstractMachineParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "AbstractMachine.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return AbstractMachineParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return AbstractMachineParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(AbstractMachineParser._ATN, this);
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, AbstractMachineParser.RULE_program);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 34;
        this.instructionSequence();
        this.state = 35;
        this.match(AbstractMachineParser.EOF);
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
    this.enterRule(_localctx, 2, AbstractMachineParser.RULE_instructionSequence);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 37;
        this.instruction();
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AbstractMachineParser.Divider) {
          {
            {
              this.state = 38;
              this.match(AbstractMachineParser.Divider);
              this.state = 39;
              this.instruction();
            }
          }
          this.state = 44;
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
    this.enterRule(_localctx, 4, AbstractMachineParser.RULE_instruction);
    try {
      this.state = 59;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AbstractMachineParser.Push:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 45;
            this.push();
          }
          break;
        case AbstractMachineParser.Add:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 46;
            this.add();
          }
          break;
        case AbstractMachineParser.Mult:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 47;
            this.mult();
          }
          break;
        case AbstractMachineParser.Sub:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 48;
            this.sub();
          }
          break;
        case AbstractMachineParser.Eq:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 49;
            this.eq();
          }
          break;
        case AbstractMachineParser.Le:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 50;
            this.le();
          }
          break;
        case AbstractMachineParser.And:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 51;
            this.and();
          }
          break;
        case AbstractMachineParser.Neg:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 52;
            this.neg();
          }
          break;
        case AbstractMachineParser.Fetch:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 53;
            this.fetch();
          }
          break;
        case AbstractMachineParser.Store:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 54;
            this.store();
          }
          break;
        case AbstractMachineParser.Emptyop:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 55;
            this.emptyop();
          }
          break;
        case AbstractMachineParser.Branch:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 56;
            this.branch();
          }
          break;
        case AbstractMachineParser.Loop:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 57;
            this.loop();
          }
          break;
        case AbstractMachineParser.True:
        case AbstractMachineParser.False:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 58;
            this.boolean();
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
  public push(): PushContext {
    let _localctx: PushContext = new PushContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, AbstractMachineParser.RULE_push);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 61;
        this.match(AbstractMachineParser.Push);
        this.state = 62;
        this.match(AbstractMachineParser.VarDivider);
        this.state = 63;
        this.match(AbstractMachineParser.Value);
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
  public add(): AddContext {
    let _localctx: AddContext = new AddContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, AbstractMachineParser.RULE_add);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 65;
        this.match(AbstractMachineParser.Add);
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
  public mult(): MultContext {
    let _localctx: MultContext = new MultContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, AbstractMachineParser.RULE_mult);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 67;
        this.match(AbstractMachineParser.Mult);
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
  public sub(): SubContext {
    let _localctx: SubContext = new SubContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, AbstractMachineParser.RULE_sub);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 69;
        this.match(AbstractMachineParser.Sub);
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
  public eq(): EqContext {
    let _localctx: EqContext = new EqContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, AbstractMachineParser.RULE_eq);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 71;
        this.match(AbstractMachineParser.Eq);
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
  public le(): LeContext {
    let _localctx: LeContext = new LeContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, AbstractMachineParser.RULE_le);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 73;
        this.match(AbstractMachineParser.Le);
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
  public and(): AndContext {
    let _localctx: AndContext = new AndContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, AbstractMachineParser.RULE_and);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 75;
        this.match(AbstractMachineParser.And);
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
  public neg(): NegContext {
    let _localctx: NegContext = new NegContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, AbstractMachineParser.RULE_neg);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 77;
        this.match(AbstractMachineParser.Neg);
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
  public fetch(): FetchContext {
    let _localctx: FetchContext = new FetchContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, AbstractMachineParser.RULE_fetch);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 79;
        this.match(AbstractMachineParser.Fetch);
        this.state = 80;
        this.match(AbstractMachineParser.VarDivider);
        this.state = 81;
        this.match(AbstractMachineParser.Id);
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
  public store(): StoreContext {
    let _localctx: StoreContext = new StoreContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, AbstractMachineParser.RULE_store);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 83;
        this.match(AbstractMachineParser.Store);
        this.state = 84;
        this.match(AbstractMachineParser.VarDivider);
        this.state = 85;
        this.match(AbstractMachineParser.Id);
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
  public emptyop(): EmptyopContext {
    let _localctx: EmptyopContext = new EmptyopContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, AbstractMachineParser.RULE_emptyop);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 87;
        this.match(AbstractMachineParser.Emptyop);
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
    this.enterRule(_localctx, 28, AbstractMachineParser.RULE_branch);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 89;
        this.match(AbstractMachineParser.Branch);
        this.state = 90;
        this.match(AbstractMachineParser.Lpar);
        this.state = 91;
        this.instructionSequence();
        this.state = 92;
        this.match(AbstractMachineParser.Colon);
        this.state = 93;
        this.instructionSequence();
        this.state = 94;
        this.match(AbstractMachineParser.Rpar);
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
  public loop(): LoopContext {
    let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, AbstractMachineParser.RULE_loop);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 96;
        this.match(AbstractMachineParser.Loop);
        this.state = 97;
        this.match(AbstractMachineParser.Lpar);
        this.state = 98;
        this.instructionSequence();
        this.state = 99;
        this.match(AbstractMachineParser.Colon);
        this.state = 100;
        this.instructionSequence();
        this.state = 101;
        this.match(AbstractMachineParser.Rpar);
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
  public boolean(): BooleanContext {
    let _localctx: BooleanContext = new BooleanContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, AbstractMachineParser.RULE_boolean);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 103;
        _la = this._input.LA(1);
        if (!(_la === AbstractMachineParser.True || _la === AbstractMachineParser.False)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
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

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1Al\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
    "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03+\n\x03\f\x03\x0E" +
    "\x03.\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x03" +
    "\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03" +
    "\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
    "\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04" +
    "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
    '\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02\x02\x03\x03\x02\x17\x18\x02' +
    "h\x02$\x03\x02\x02\x02\x04'\x03\x02\x02\x02\x06=\x03\x02\x02\x02\b?\x03" +
    "\x02\x02\x02\nC\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0EG\x03\x02\x02\x02" +
    "\x10I\x03\x02\x02\x02\x12K\x03\x02\x02\x02\x14M\x03\x02\x02\x02\x16O\x03" +
    "\x02\x02\x02\x18Q\x03\x02\x02\x02\x1AU\x03\x02\x02\x02\x1CY\x03\x02\x02" +
    '\x02\x1E[\x03\x02\x02\x02 b\x03\x02\x02\x02"i\x03\x02\x02\x02$%\x05\x04' +
    "\x03\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02',\x05\x06\x04\x02()\x07" +
    "\x14\x02\x02)+\x05\x06\x04\x02*(\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03" +
    "\x02\x02\x02,-\x03\x02\x02\x02-\x05\x03\x02\x02\x02.,\x03\x02\x02\x02" +
    "/>\x05\b\x05\x020>\x05\n\x06\x021>\x05\f\x07\x022>\x05\x0E\b\x023>\x05" +
    "\x10\t\x024>\x05\x12\n\x025>\x05\x14\v\x026>\x05\x16\f\x027>\x05\x18\r" +
    "\x028>\x05\x1A\x0E\x029>\x05\x1C\x0F\x02:>\x05\x1E\x10\x02;>\x05 \x11" +
    '\x02<>\x05"\x12\x02=/\x03\x02\x02\x02=0\x03\x02\x02\x02=1\x03\x02\x02' +
    "\x02=2\x03\x02\x02\x02=3\x03\x02\x02\x02=4\x03\x02\x02\x02=5\x03\x02\x02" +
    "\x02=6\x03\x02\x02\x02=7\x03\x02\x02\x02=8\x03\x02\x02\x02=9\x03\x02\x02" +
    "\x02=:\x03\x02\x02\x02=;\x03\x02\x02\x02=<\x03\x02\x02\x02>\x07\x03\x02" +
    "\x02\x02?@\x07\x05\x02\x02@A\x07\x15\x02\x02AB\x07\x1A\x02\x02B\t\x03" +
    "\x02\x02\x02CD\x07\x06\x02\x02D\v\x03\x02\x02\x02EF\x07\x07\x02\x02F\r" +
    "\x03\x02\x02\x02GH\x07\b\x02\x02H\x0F\x03\x02\x02\x02IJ\x07\t\x02\x02" +
    "J\x11\x03\x02\x02\x02KL\x07\n\x02\x02L\x13\x03\x02\x02\x02MN\x07\v\x02" +
    "\x02N\x15\x03\x02\x02\x02OP\x07\f\x02\x02P\x17\x03\x02\x02\x02QR\x07\r" +
    "\x02\x02RS\x07\x15\x02\x02ST\x07\x19\x02\x02T\x19\x03\x02\x02\x02UV\x07" +
    "\x0E\x02\x02VW\x07\x15\x02\x02WX\x07\x19\x02\x02X\x1B\x03\x02\x02\x02" +
    "YZ\x07\x0F\x02\x02Z\x1D\x03\x02\x02\x02[\\\x07\x10\x02\x02\\]\x07\x12" +
    "\x02\x02]^\x05\x04\x03\x02^_\x07\x16\x02\x02_`\x05\x04\x03\x02`a\x07\x13" +
    "\x02\x02a\x1F\x03\x02\x02\x02bc\x07\x11\x02\x02cd\x07\x12\x02\x02de\x05" +
    "\x04\x03\x02ef\x07\x16\x02\x02fg\x05\x04\x03\x02gh\x07\x13\x02\x02h!\x03" +
    "\x02\x02\x02ij\t\x02\x02\x02j#\x03\x02\x02\x02\x04,=";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!AbstractMachineParser.__ATN) {
      AbstractMachineParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(AbstractMachineParser._serializedATN)
      );
    }

    return AbstractMachineParser.__ATN;
  }
}

export class ProgramContext extends ParserRuleContext {
  public instructionSequence(): InstructionSequenceContext {
    return this.getRuleContext(0, InstructionSequenceContext);
  }
  public EOF(): TerminalNode {
    return this.getToken(AbstractMachineParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_program;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
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
  public Divider(): TerminalNode[];
  public Divider(i: number): TerminalNode;
  public Divider(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AbstractMachineParser.Divider);
    } else {
      return this.getToken(AbstractMachineParser.Divider, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_instructionSequence;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterInstructionSequence) {
      listener.enterInstructionSequence(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitInstructionSequence) {
      listener.exitInstructionSequence(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitInstructionSequence) {
      return visitor.visitInstructionSequence(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InstructionContext extends ParserRuleContext {
  public push(): PushContext | undefined {
    return this.tryGetRuleContext(0, PushContext);
  }
  public add(): AddContext | undefined {
    return this.tryGetRuleContext(0, AddContext);
  }
  public mult(): MultContext | undefined {
    return this.tryGetRuleContext(0, MultContext);
  }
  public sub(): SubContext | undefined {
    return this.tryGetRuleContext(0, SubContext);
  }
  public eq(): EqContext | undefined {
    return this.tryGetRuleContext(0, EqContext);
  }
  public le(): LeContext | undefined {
    return this.tryGetRuleContext(0, LeContext);
  }
  public and(): AndContext | undefined {
    return this.tryGetRuleContext(0, AndContext);
  }
  public neg(): NegContext | undefined {
    return this.tryGetRuleContext(0, NegContext);
  }
  public fetch(): FetchContext | undefined {
    return this.tryGetRuleContext(0, FetchContext);
  }
  public store(): StoreContext | undefined {
    return this.tryGetRuleContext(0, StoreContext);
  }
  public emptyop(): EmptyopContext | undefined {
    return this.tryGetRuleContext(0, EmptyopContext);
  }
  public branch(): BranchContext | undefined {
    return this.tryGetRuleContext(0, BranchContext);
  }
  public loop(): LoopContext | undefined {
    return this.tryGetRuleContext(0, LoopContext);
  }
  public boolean(): BooleanContext | undefined {
    return this.tryGetRuleContext(0, BooleanContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_instruction;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterInstruction) {
      listener.enterInstruction(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitInstruction) {
      listener.exitInstruction(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitInstruction) {
      return visitor.visitInstruction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PushContext extends ParserRuleContext {
  public Push(): TerminalNode {
    return this.getToken(AbstractMachineParser.Push, 0);
  }
  public VarDivider(): TerminalNode {
    return this.getToken(AbstractMachineParser.VarDivider, 0);
  }
  public Value(): TerminalNode {
    return this.getToken(AbstractMachineParser.Value, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_push;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterPush) {
      listener.enterPush(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitPush) {
      listener.exitPush(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitPush) {
      return visitor.visitPush(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AddContext extends ParserRuleContext {
  public Add(): TerminalNode {
    return this.getToken(AbstractMachineParser.Add, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_add;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterAdd) {
      listener.enterAdd(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitAdd) {
      listener.exitAdd(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitAdd) {
      return visitor.visitAdd(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MultContext extends ParserRuleContext {
  public Mult(): TerminalNode {
    return this.getToken(AbstractMachineParser.Mult, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_mult;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterMult) {
      listener.enterMult(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitMult) {
      listener.exitMult(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitMult) {
      return visitor.visitMult(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SubContext extends ParserRuleContext {
  public Sub(): TerminalNode {
    return this.getToken(AbstractMachineParser.Sub, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_sub;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterSub) {
      listener.enterSub(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitSub) {
      listener.exitSub(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitSub) {
      return visitor.visitSub(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EqContext extends ParserRuleContext {
  public Eq(): TerminalNode {
    return this.getToken(AbstractMachineParser.Eq, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_eq;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterEq) {
      listener.enterEq(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitEq) {
      listener.exitEq(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitEq) {
      return visitor.visitEq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LeContext extends ParserRuleContext {
  public Le(): TerminalNode {
    return this.getToken(AbstractMachineParser.Le, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_le;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterLe) {
      listener.enterLe(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitLe) {
      listener.exitLe(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitLe) {
      return visitor.visitLe(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AndContext extends ParserRuleContext {
  public And(): TerminalNode {
    return this.getToken(AbstractMachineParser.And, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_and;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterAnd) {
      listener.enterAnd(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitAnd) {
      listener.exitAnd(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitAnd) {
      return visitor.visitAnd(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class NegContext extends ParserRuleContext {
  public Neg(): TerminalNode {
    return this.getToken(AbstractMachineParser.Neg, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_neg;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterNeg) {
      listener.enterNeg(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitNeg) {
      listener.exitNeg(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitNeg) {
      return visitor.visitNeg(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FetchContext extends ParserRuleContext {
  public Fetch(): TerminalNode {
    return this.getToken(AbstractMachineParser.Fetch, 0);
  }
  public VarDivider(): TerminalNode {
    return this.getToken(AbstractMachineParser.VarDivider, 0);
  }
  public Id(): TerminalNode {
    return this.getToken(AbstractMachineParser.Id, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_fetch;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterFetch) {
      listener.enterFetch(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitFetch) {
      listener.exitFetch(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitFetch) {
      return visitor.visitFetch(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StoreContext extends ParserRuleContext {
  public Store(): TerminalNode {
    return this.getToken(AbstractMachineParser.Store, 0);
  }
  public VarDivider(): TerminalNode {
    return this.getToken(AbstractMachineParser.VarDivider, 0);
  }
  public Id(): TerminalNode {
    return this.getToken(AbstractMachineParser.Id, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_store;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterStore) {
      listener.enterStore(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitStore) {
      listener.exitStore(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitStore) {
      return visitor.visitStore(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EmptyopContext extends ParserRuleContext {
  public Emptyop(): TerminalNode {
    return this.getToken(AbstractMachineParser.Emptyop, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_emptyop;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterEmptyop) {
      listener.enterEmptyop(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitEmptyop) {
      listener.exitEmptyop(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitEmptyop) {
      return visitor.visitEmptyop(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BranchContext extends ParserRuleContext {
  public Branch(): TerminalNode {
    return this.getToken(AbstractMachineParser.Branch, 0);
  }
  public Lpar(): TerminalNode {
    return this.getToken(AbstractMachineParser.Lpar, 0);
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
  public Colon(): TerminalNode {
    return this.getToken(AbstractMachineParser.Colon, 0);
  }
  public Rpar(): TerminalNode {
    return this.getToken(AbstractMachineParser.Rpar, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_branch;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterBranch) {
      listener.enterBranch(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitBranch) {
      listener.exitBranch(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitBranch) {
      return visitor.visitBranch(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LoopContext extends ParserRuleContext {
  public Loop(): TerminalNode {
    return this.getToken(AbstractMachineParser.Loop, 0);
  }
  public Lpar(): TerminalNode {
    return this.getToken(AbstractMachineParser.Lpar, 0);
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
  public Colon(): TerminalNode {
    return this.getToken(AbstractMachineParser.Colon, 0);
  }
  public Rpar(): TerminalNode {
    return this.getToken(AbstractMachineParser.Rpar, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_loop;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterLoop) {
      listener.enterLoop(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitLoop) {
      listener.exitLoop(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitLoop) {
      return visitor.visitLoop(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BooleanContext extends ParserRuleContext {
  public True(): TerminalNode | undefined {
    return this.tryGetToken(AbstractMachineParser.True, 0);
  }
  public False(): TerminalNode | undefined {
    return this.tryGetToken(AbstractMachineParser.False, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AbstractMachineParser.RULE_boolean;
  }
  // @Override
  public enterRule(listener: AbstractMachineListener): void {
    if (listener.enterBoolean) {
      listener.enterBoolean(this);
    }
  }
  // @Override
  public exitRule(listener: AbstractMachineListener): void {
    if (listener.exitBoolean) {
      listener.exitBoolean(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AbstractMachineVisitor<Result>): Result {
    if (visitor.visitBoolean) {
      return visitor.visitBoolean(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
