// Generated from ./src/grammar/jane/Jane.g4 by ANTLR 4.9.0-SNAPSHOT

import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";

import * as Utils from "antlr4ts/misc/Utils";

export class JaneLexer extends Lexer {
  public static readonly Whitespace = 1;
  public static readonly Newline = 2;
  public static readonly If = 3;
  public static readonly Then = 4;
  public static readonly Else = 5;
  public static readonly While = 6;
  public static readonly Do = 7;
  public static readonly Skip = 8;
  public static readonly Begin = 9;
  public static readonly End = 10;
  public static readonly Var = 11;
  public static readonly Proc = 12;
  public static readonly Is = 13;
  public static readonly Call = 14;
  public static readonly And = 15;
  public static readonly True = 16;
  public static readonly False = 17;
  public static readonly Lpar = 18;
  public static readonly Rpar = 19;
  public static readonly AssignSymbol = 20;
  public static readonly Mult = 21;
  public static readonly Plus = 22;
  public static readonly Minus = 23;
  public static readonly Not = 24;
  public static readonly Leq = 25;
  public static readonly Eq = 26;
  public static readonly Semicolon = 27;
  public static readonly Colon = 28;
  public static readonly Id = 29;
  public static readonly Value = 30;

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
    "Whitespace",
    "Newline",
    "If",
    "Then",
    "Else",
    "While",
    "Do",
    "Skip",
    "Begin",
    "End",
    "Var",
    "Proc",
    "Is",
    "Call",
    "And",
    "True",
    "False",
    "Lpar",
    "Rpar",
    "AssignSymbol",
    "Mult",
    "Plus",
    "Minus",
    "Not",
    "Leq",
    "Eq",
    "Semicolon",
    "Colon",
    "Id",
    "Value",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    "'if'",
    "'then'",
    "'else'",
    "'while'",
    "'do'",
    "'skip'",
    "'begin'",
    "'end'",
    "'var'",
    "'proc'",
    "'is'",
    "'call'",
    "'and'",
    "'true'",
    "'false'",
    "'('",
    "')'",
    "':='",
    "'*'",
    "'+'",
    "'-'",
    "'!'",
    "'<='",
    "'='",
    "';'",
    "','",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    "Whitespace",
    "Newline",
    "If",
    "Then",
    "Else",
    "While",
    "Do",
    "Skip",
    "Begin",
    "End",
    "Var",
    "Proc",
    "Is",
    "Call",
    "And",
    "True",
    "False",
    "Lpar",
    "Rpar",
    "AssignSymbol",
    "Mult",
    "Plus",
    "Minus",
    "Not",
    "Leq",
    "Eq",
    "Semicolon",
    "Colon",
    "Id",
    "Value",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    JaneLexer._LITERAL_NAMES,
    JaneLexer._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return JaneLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(JaneLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return "Jane.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return JaneLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return JaneLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return JaneLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return JaneLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02 \xBF\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x06\x02A\n\x02\r\x02" +
    "\x0E\x02B\x03\x02\x03\x02\x03\x03\x05\x03H\n\x03\x03\x03\x03\x03\x06\x03" +
    "L\n\x03\r\x03\x0E\x03M\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
    "\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
    "\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
    "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
    "\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
    "\x1D\x03\x1D\x03\x1E\x03\x1E\x07\x1E\xB1\n\x1E\f\x1E\x0E\x1E\xB4\v\x1E" +
    "\x03\x1F\x03\x1F\x07\x1F\xB8\n\x1F\f\x1F\x0E\x1F\xBB\v\x1F\x03\x1F\x05" +
    "\x1F\xBE\n\x1F\x02\x02\x02 \x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
    "\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
    "\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
    "\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
    '5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 \x03\x02\x07\x04\x02\v\v""' +
    "\x04\x02C\\c|\x05\x022;C\\c|\x03\x023;\x03\x022;\x02\xC5\x02\x03\x03\x02" +
    "\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
    "\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
    "\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
    "\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
    "\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
    "\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02" +
    ")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
    "\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
    "\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
    "\x02\x02\x02\x03@\x03\x02\x02\x02\x05K\x03\x02\x02\x02\x07Q\x03\x02\x02" +
    "\x02\tT\x03\x02\x02\x02\vY\x03\x02\x02\x02\r^\x03\x02\x02\x02\x0Fd\x03" +
    "\x02\x02\x02\x11g\x03\x02\x02\x02\x13l\x03\x02\x02\x02\x15r\x03\x02\x02" +
    "\x02\x17v\x03\x02\x02\x02\x19z\x03\x02\x02\x02\x1B\x7F\x03\x02\x02\x02" +
    "\x1D\x82\x03\x02\x02\x02\x1F\x87\x03\x02\x02\x02!\x8B\x03\x02\x02\x02" +
    "#\x90\x03\x02\x02\x02%\x96\x03\x02\x02\x02'\x98\x03\x02\x02\x02)\x9A" +
    "\x03\x02\x02\x02+\x9D\x03\x02\x02\x02-\x9F\x03\x02\x02\x02/\xA1\x03\x02" +
    "\x02\x021\xA3\x03\x02\x02\x023\xA5\x03\x02\x02\x025\xA8\x03\x02\x02\x02" +
    "7\xAA\x03\x02\x02\x029\xAC\x03\x02\x02\x02;\xAE\x03\x02\x02\x02=\xBD\x03" +
    "\x02\x02\x02?A\t\x02\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03" +
    "\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\b\x02\x02\x02E\x04" +
    "\x03\x02\x02\x02FH\x07\x0F\x02\x02GF\x03\x02\x02\x02GH\x03\x02\x02\x02" +
    "HI\x03\x02\x02\x02IL\x07\f\x02\x02JL\x07\x0F\x02\x02KG\x03\x02\x02\x02" +
    "KJ\x03\x02\x02\x02LM\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02" +
    "NO\x03\x02\x02\x02OP\b\x03\x02\x02P\x06\x03\x02\x02\x02QR\x07k\x02\x02" +
    "RS\x07h\x02\x02S\b\x03\x02\x02\x02TU\x07v\x02\x02UV\x07j\x02\x02VW\x07" +
    "g\x02\x02WX\x07p\x02\x02X\n\x03\x02\x02\x02YZ\x07g\x02\x02Z[\x07n\x02" +
    "\x02[\\\x07u\x02\x02\\]\x07g\x02\x02]\f\x03\x02\x02\x02^_\x07y\x02\x02" +
    "_`\x07j\x02\x02`a\x07k\x02\x02ab\x07n\x02\x02bc\x07g\x02\x02c\x0E\x03" +
    "\x02\x02\x02de\x07f\x02\x02ef\x07q\x02\x02f\x10\x03\x02\x02\x02gh\x07" +
    "u\x02\x02hi\x07m\x02\x02ij\x07k\x02\x02jk\x07r\x02\x02k\x12\x03\x02\x02" +
    "\x02lm\x07d\x02\x02mn\x07g\x02\x02no\x07i\x02\x02op\x07k\x02\x02pq\x07" +
    "p\x02\x02q\x14\x03\x02\x02\x02rs\x07g\x02\x02st\x07p\x02\x02tu\x07f\x02" +
    "\x02u\x16\x03\x02\x02\x02vw\x07x\x02\x02wx\x07c\x02\x02xy\x07t\x02\x02" +
    "y\x18\x03\x02\x02\x02z{\x07r\x02\x02{|\x07t\x02\x02|}\x07q\x02\x02}~\x07" +
    "e\x02\x02~\x1A\x03\x02\x02\x02\x7F\x80\x07k\x02\x02\x80\x81\x07u\x02\x02" +
    "\x81\x1C\x03\x02\x02\x02\x82\x83\x07e\x02\x02\x83\x84\x07c\x02\x02\x84" +
    "\x85\x07n\x02\x02\x85\x86\x07n\x02\x02\x86\x1E\x03\x02\x02\x02\x87\x88" +
    "\x07c\x02\x02\x88\x89\x07p\x02\x02\x89\x8A\x07f\x02\x02\x8A \x03\x02\x02" +
    "\x02\x8B\x8C\x07v\x02\x02\x8C\x8D\x07t\x02\x02\x8D\x8E\x07w\x02\x02\x8E" +
    '\x8F\x07g\x02\x02\x8F"\x03\x02\x02\x02\x90\x91\x07h\x02\x02\x91\x92\x07' +
    "c\x02\x02\x92\x93\x07n\x02\x02\x93\x94\x07u\x02\x02\x94\x95\x07g\x02\x02" +
    "\x95$\x03\x02\x02\x02\x96\x97\x07*\x02\x02\x97&\x03\x02\x02\x02\x98\x99" +
    "\x07+\x02\x02\x99(\x03\x02\x02\x02\x9A\x9B\x07<\x02\x02\x9B\x9C\x07?\x02" +
    "\x02\x9C*\x03\x02\x02\x02\x9D\x9E\x07,\x02\x02\x9E,\x03\x02\x02\x02\x9F" +
    "\xA0\x07-\x02\x02\xA0.\x03\x02\x02\x02\xA1\xA2\x07/\x02\x02\xA20\x03\x02" +
    "\x02\x02\xA3\xA4\x07#\x02\x02\xA42\x03\x02\x02\x02\xA5\xA6\x07>\x02\x02" +
    "\xA6\xA7\x07?\x02\x02\xA74\x03\x02\x02\x02\xA8\xA9\x07?\x02\x02\xA96\x03" +
    "\x02\x02\x02\xAA\xAB\x07=\x02\x02\xAB8\x03\x02\x02\x02\xAC\xAD\x07.\x02" +
    "\x02\xAD:\x03\x02\x02\x02\xAE\xB2\t\x03\x02\x02\xAF\xB1\t\x04\x02\x02" +
    "\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02" +
    "\xB2\xB3\x03\x02\x02\x02\xB3<\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02" +
    "\xB5\xB9\t\x05\x02\x02\xB6\xB8\t\x06\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8" +
    "\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA" +
    "\xBE\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBE\t\x06\x02\x02\xBD" +
    "\xB5\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE>\x03\x02\x02\x02\n\x02" +
    "BGKM\xB2\xB9\xBD\x03\b\x02\x02";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!JaneLexer.__ATN) {
      JaneLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(JaneLexer._serializedATN)
      );
    }

    return JaneLexer.__ATN;
  }
}
