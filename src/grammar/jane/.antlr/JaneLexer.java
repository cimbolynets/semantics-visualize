// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/jane/Jane.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class JaneLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Whitespace=1, Newline=2, Skip=3, Lpar=4, Rpar=5, And=6, AssignSymbol=7, 
		While=8, Do=9, Then=10, If=11, Else=12, Mult=13, Plus=14, Minus=15, Not=16, 
		Leq=17, Eq=18, Semicolon=19, Id=20, Value=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"Whitespace", "Newline", "Skip", "Lpar", "Rpar", "And", "AssignSymbol", 
			"While", "Do", "Then", "If", "Else", "Mult", "Plus", "Minus", "Not", 
			"Leq", "Eq", "Semicolon", "Id", "Value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'skip'", "'('", "')'", "'and'", "':='", "'while'", 
			"'do'", "'then'", "'if'", "'else'", "'*'", "'+'", "'-'", "'!'", "'<='", 
			"'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Whitespace", "Newline", "Skip", "Lpar", "Rpar", "And", "AssignSymbol", 
			"While", "Do", "Then", "If", "Else", "Mult", "Plus", "Minus", "Not", 
			"Leq", "Eq", "Semicolon", "Id", "Value"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public JaneLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Jane.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0015\u0083\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0001\u0000\u0004\u0000-\b\u0000\u000b\u0000\f\u0000.\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0003\u00014\b\u0001\u0001\u0001\u0001\u0001\u0004"+
		"\u00018\b\u0001\u000b\u0001\f\u00019\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0005\u0013u\b\u0013\n\u0013\f\u0013x\t\u0013\u0001\u0014\u0001"+
		"\u0014\u0005\u0014|\b\u0014\n\u0014\f\u0014\u007f\t\u0014\u0001\u0014"+
		"\u0003\u0014\u0082\b\u0014\u0000\u0000\u0015\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015\u0001\u0000\u0005\u0002\u0000\t\t  \u0002"+
		"\u0000AZaz\u0003\u000009AZaz\u0001\u000019\u0001\u000009\u0089\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000"+
		"\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0001,\u0001"+
		"\u0000\u0000\u0000\u00037\u0001\u0000\u0000\u0000\u0005=\u0001\u0000\u0000"+
		"\u0000\u0007B\u0001\u0000\u0000\u0000\tD\u0001\u0000\u0000\u0000\u000b"+
		"F\u0001\u0000\u0000\u0000\rJ\u0001\u0000\u0000\u0000\u000fM\u0001\u0000"+
		"\u0000\u0000\u0011S\u0001\u0000\u0000\u0000\u0013V\u0001\u0000\u0000\u0000"+
		"\u0015[\u0001\u0000\u0000\u0000\u0017^\u0001\u0000\u0000\u0000\u0019c"+
		"\u0001\u0000\u0000\u0000\u001be\u0001\u0000\u0000\u0000\u001dg\u0001\u0000"+
		"\u0000\u0000\u001fi\u0001\u0000\u0000\u0000!k\u0001\u0000\u0000\u0000"+
		"#n\u0001\u0000\u0000\u0000%p\u0001\u0000\u0000\u0000\'r\u0001\u0000\u0000"+
		"\u0000)\u0081\u0001\u0000\u0000\u0000+-\u0007\u0000\u0000\u0000,+\u0001"+
		"\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000"+
		"./\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000\u000001\u0006\u0000\u0000"+
		"\u00001\u0002\u0001\u0000\u0000\u000024\u0005\r\u0000\u000032\u0001\u0000"+
		"\u0000\u000034\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u000058\u0005"+
		"\n\u0000\u000068\u0005\r\u0000\u000073\u0001\u0000\u0000\u000076\u0001"+
		"\u0000\u0000\u000089\u0001\u0000\u0000\u000097\u0001\u0000\u0000\u0000"+
		"9:\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000;<\u0006\u0001\u0000"+
		"\u0000<\u0004\u0001\u0000\u0000\u0000=>\u0005s\u0000\u0000>?\u0005k\u0000"+
		"\u0000?@\u0005i\u0000\u0000@A\u0005p\u0000\u0000A\u0006\u0001\u0000\u0000"+
		"\u0000BC\u0005(\u0000\u0000C\b\u0001\u0000\u0000\u0000DE\u0005)\u0000"+
		"\u0000E\n\u0001\u0000\u0000\u0000FG\u0005a\u0000\u0000GH\u0005n\u0000"+
		"\u0000HI\u0005d\u0000\u0000I\f\u0001\u0000\u0000\u0000JK\u0005:\u0000"+
		"\u0000KL\u0005=\u0000\u0000L\u000e\u0001\u0000\u0000\u0000MN\u0005w\u0000"+
		"\u0000NO\u0005h\u0000\u0000OP\u0005i\u0000\u0000PQ\u0005l\u0000\u0000"+
		"QR\u0005e\u0000\u0000R\u0010\u0001\u0000\u0000\u0000ST\u0005d\u0000\u0000"+
		"TU\u0005o\u0000\u0000U\u0012\u0001\u0000\u0000\u0000VW\u0005t\u0000\u0000"+
		"WX\u0005h\u0000\u0000XY\u0005e\u0000\u0000YZ\u0005n\u0000\u0000Z\u0014"+
		"\u0001\u0000\u0000\u0000[\\\u0005i\u0000\u0000\\]\u0005f\u0000\u0000]"+
		"\u0016\u0001\u0000\u0000\u0000^_\u0005e\u0000\u0000_`\u0005l\u0000\u0000"+
		"`a\u0005s\u0000\u0000ab\u0005e\u0000\u0000b\u0018\u0001\u0000\u0000\u0000"+
		"cd\u0005*\u0000\u0000d\u001a\u0001\u0000\u0000\u0000ef\u0005+\u0000\u0000"+
		"f\u001c\u0001\u0000\u0000\u0000gh\u0005-\u0000\u0000h\u001e\u0001\u0000"+
		"\u0000\u0000ij\u0005!\u0000\u0000j \u0001\u0000\u0000\u0000kl\u0005<\u0000"+
		"\u0000lm\u0005=\u0000\u0000m\"\u0001\u0000\u0000\u0000no\u0005=\u0000"+
		"\u0000o$\u0001\u0000\u0000\u0000pq\u0005;\u0000\u0000q&\u0001\u0000\u0000"+
		"\u0000rv\u0007\u0001\u0000\u0000su\u0007\u0002\u0000\u0000ts\u0001\u0000"+
		"\u0000\u0000ux\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000vw\u0001"+
		"\u0000\u0000\u0000w(\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000"+
		"y}\u0007\u0003\u0000\u0000z|\u0007\u0004\u0000\u0000{z\u0001\u0000\u0000"+
		"\u0000|\u007f\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000}~\u0001"+
		"\u0000\u0000\u0000~\u0082\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000"+
		"\u0000\u0080\u0082\u0007\u0004\u0000\u0000\u0081y\u0001\u0000\u0000\u0000"+
		"\u0081\u0080\u0001\u0000\u0000\u0000\u0082*\u0001\u0000\u0000\u0000\b"+
		"\u0000.379v}\u0081\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}