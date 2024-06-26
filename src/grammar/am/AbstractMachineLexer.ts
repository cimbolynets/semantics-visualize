// Generated from ./src/grammar/as/AbstractMachine.g4 by ANTLR 4.9.0-SNAPSHOT

import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";

import * as Utils from "antlr4ts/misc/Utils";

export class AbstractMachineLexer extends Lexer {
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

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
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
    AbstractMachineLexer._LITERAL_NAMES,
    AbstractMachineLexer._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return AbstractMachineLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(AbstractMachineLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return "AbstractMachine.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return AbstractMachineLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return AbstractMachineLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return AbstractMachineLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return AbstractMachineLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1A\xAB\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x06\x025\n\x02\r\x02\x0E\x02" +
    "6\x03\x02\x03\x02\x03\x03\x05\x03<\n\x03\x03\x03\x03\x03\x06\x03@\n\x03" +
    "\r\x03\x0E\x03A\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
    "\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
    "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
    "\x17\x03\x17\x03\x18\x03\x18\x07\x18\x9D\n\x18\f\x18\x0E\x18\xA0\v\x18" +
    "\x03\x19\x03\x19\x07\x19\xA4\n\x19\f\x19\x0E\x19\xA7\v\x19\x03\x19\x05" +
    "\x19\xAA\n\x19\x02\x02\x02\x1A\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
    "\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
    "\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
    "\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A\x03\x02" +
    '\x07\x04\x02\v\v""\x04\x02C\\c|\x05\x022;C\\c|\x03\x023;\x03\x022;\x02' +
    "\xB1\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
    "\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
    "\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
    "\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
    "\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
    "\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'" +
    "\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02" +
    "\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x034\x03\x02\x02\x02" +
    "\x05?\x03\x02\x02\x02\x07E\x03\x02\x02\x02\tJ\x03\x02\x02\x02\vN\x03\x02" +
    "\x02\x02\rS\x03\x02\x02\x02\x0FW\x03\x02\x02\x02\x11Z\x03\x02\x02\x02" +
    "\x13]\x03\x02\x02\x02\x15a\x03\x02\x02\x02\x17e\x03\x02\x02\x02\x19k\x03" +
    "\x02\x02\x02\x1Bq\x03\x02\x02\x02\x1Dy\x03\x02\x02\x02\x1F\x80\x03\x02" +
    "\x02\x02!\x85\x03\x02\x02\x02#\x87\x03\x02\x02\x02%\x89\x03\x02\x02\x02" +
    "'\x8B\x03\x02\x02\x02)\x8D\x03\x02\x02\x02+\x8F\x03\x02\x02\x02-\x94" +
    "\x03\x02\x02\x02/\x9A\x03\x02\x02\x021\xA9\x03\x02\x02\x0235\t\x02\x02" +
    "\x0243\x03\x02\x02\x0256\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02" +
    "\x0278\x03\x02\x02\x0289\b\x02\x02\x029\x04\x03\x02\x02\x02:<\x07\x0F" +
    "\x02\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=@\x07\f" +
    "\x02\x02>@\x07\x0F\x02\x02?;\x03\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02" +
    "\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02CD\b\x03" +
    "\x02\x02D\x06\x03\x02\x02\x02EF\x07R\x02\x02FG\x07W\x02\x02GH\x07U\x02" +
    "\x02HI\x07J\x02\x02I\b\x03\x02\x02\x02JK\x07C\x02\x02KL\x07F\x02\x02L" +
    "M\x07F\x02\x02M\n\x03\x02\x02\x02NO\x07O\x02\x02OP\x07W\x02\x02PQ\x07" +
    "N\x02\x02QR\x07V\x02\x02R\f\x03\x02\x02\x02ST\x07U\x02\x02TU\x07W\x02" +
    "\x02UV\x07D\x02\x02V\x0E\x03\x02\x02\x02WX\x07G\x02\x02XY\x07S\x02\x02" +
    "Y\x10\x03\x02\x02\x02Z[\x07N\x02\x02[\\\x07G\x02\x02\\\x12\x03\x02\x02" +
    "\x02]^\x07C\x02\x02^_\x07P\x02\x02_`\x07F\x02\x02`\x14\x03\x02\x02\x02" +
    "ab\x07P\x02\x02bc\x07G\x02\x02cd\x07I\x02\x02d\x16\x03\x02\x02\x02ef\x07" +
    "H\x02\x02fg\x07G\x02\x02gh\x07V\x02\x02hi\x07E\x02\x02ij\x07J\x02\x02" +
    "j\x18\x03\x02\x02\x02kl\x07U\x02\x02lm\x07V\x02\x02mn\x07Q\x02\x02no\x07" +
    "T\x02\x02op\x07G\x02\x02p\x1A\x03\x02\x02\x02qr\x07G\x02\x02rs\x07O\x02" +
    "\x02st\x07R\x02\x02tu\x07V\x02\x02uv\x07[\x02\x02vw\x07Q\x02\x02wx\x07" +
    "R\x02\x02x\x1C\x03\x02\x02\x02yz\x07D\x02\x02z{\x07T\x02\x02{|\x07C\x02" +
    "\x02|}\x07P\x02\x02}~\x07E\x02\x02~\x7F\x07J\x02\x02\x7F\x1E\x03\x02\x02" +
    "\x02\x80\x81\x07N\x02\x02\x81\x82\x07Q\x02\x02\x82\x83\x07Q\x02\x02\x83" +
    '\x84\x07R\x02\x02\x84 \x03\x02\x02\x02\x85\x86\x07*\x02\x02\x86"\x03' +
    "\x02\x02\x02\x87\x88\x07+\x02\x02\x88$\x03\x02\x02\x02\x89\x8A\x07<\x02" +
    "\x02\x8A&\x03\x02\x02\x02\x8B\x8C\x07/\x02\x02\x8C(\x03\x02\x02\x02\x8D" +
    "\x8E\x07.\x02\x02\x8E*\x03\x02\x02\x02\x8F\x90\x07V\x02\x02\x90\x91\x07" +
    "T\x02\x02\x91\x92\x07W\x02\x02\x92\x93\x07G\x02\x02\x93,\x03\x02\x02\x02" +
    "\x94\x95\x07H\x02\x02\x95\x96\x07C\x02\x02\x96\x97\x07N\x02\x02\x97\x98" +
    "\x07U\x02\x02\x98\x99\x07G\x02\x02\x99.\x03\x02\x02\x02\x9A\x9E\t\x03" +
    "\x02\x02\x9B\x9D\t\x04\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02" +
    "\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F0\x03\x02" +
    "\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA5\t\x05\x02\x02\xA2\xA4\t\x06\x02" +
    "\x02\xA3\xA2\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02" +
    "\x02\xA5\xA6\x03\x02\x02\x02\xA6\xAA\x03\x02\x02\x02\xA7\xA5\x03\x02\x02" +
    "\x02\xA8\xAA\t\x06\x02\x02\xA9\xA1\x03\x02\x02\x02\xA9\xA8\x03\x02\x02" +
    "\x02\xAA2\x03\x02\x02\x02\n\x026;?A\x9E\xA5\xA9\x03\b\x02\x02";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!AbstractMachineLexer.__ATN) {
      AbstractMachineLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(AbstractMachineLexer._serializedATN)
      );
    }

    return AbstractMachineLexer.__ATN;
  }
}
