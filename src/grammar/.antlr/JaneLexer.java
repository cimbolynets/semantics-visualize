// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/Jane.g4 by ANTLR 4.13.1
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
		Leq=17, Eq=18, Semicolon=19, Begin=20, End=21, Var=22, Colon=23, Id=24, 
		Value=25;
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
			"Leq", "Eq", "Semicolon", "Begin", "End", "Var", "Colon", "Id", "Value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'skip'", "'('", "')'", "'and'", "':='", "'while'", 
			"'do'", "'then'", "'if'", "'else'", "'*'", "'+'", "'-'", "'!'", "'<='", 
			"'='", "';'", "'begin'", "'end'", "'var'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Whitespace", "Newline", "Skip", "Lpar", "Rpar", "And", "AssignSymbol", 
			"While", "Do", "Then", "If", "Else", "Mult", "Plus", "Minus", "Not", 
			"Leq", "Eq", "Semicolon", "Begin", "End", "Var", "Colon", "Id", "Value"
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
		"\u0004\u0000\u0019\u009b\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0004\u00005\b\u0000\u000b\u0000"+
		"\f\u00006\u0001\u0000\u0001\u0000\u0001\u0001\u0003\u0001<\b\u0001\u0001"+
		"\u0001\u0001\u0001\u0004\u0001@\b\u0001\u000b\u0001\f\u0001A\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f"+
		"\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0005\u0017\u008d\b\u0017\n\u0017\f\u0017\u0090\t\u0017\u0001"+
		"\u0018\u0001\u0018\u0005\u0018\u0094\b\u0018\n\u0018\f\u0018\u0097\t\u0018"+
		"\u0001\u0018\u0003\u0018\u009a\b\u0018\u0000\u0000\u0019\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010"+
		"!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u0019\u0001"+
		"\u0000\u0005\u0002\u0000\t\t  \u0002\u0000AZaz\u0003\u000009AZaz\u0001"+
		"\u000019\u0001\u000009\u00a1\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001"+
		"\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001"+
		"\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000"+
		"\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000"+
		"\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-"+
		"\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000"+
		"\u0000\u0000\u00014\u0001\u0000\u0000\u0000\u0003?\u0001\u0000\u0000\u0000"+
		"\u0005E\u0001\u0000\u0000\u0000\u0007J\u0001\u0000\u0000\u0000\tL\u0001"+
		"\u0000\u0000\u0000\u000bN\u0001\u0000\u0000\u0000\rR\u0001\u0000\u0000"+
		"\u0000\u000fU\u0001\u0000\u0000\u0000\u0011[\u0001\u0000\u0000\u0000\u0013"+
		"^\u0001\u0000\u0000\u0000\u0015c\u0001\u0000\u0000\u0000\u0017f\u0001"+
		"\u0000\u0000\u0000\u0019k\u0001\u0000\u0000\u0000\u001bm\u0001\u0000\u0000"+
		"\u0000\u001do\u0001\u0000\u0000\u0000\u001fq\u0001\u0000\u0000\u0000!"+
		"s\u0001\u0000\u0000\u0000#v\u0001\u0000\u0000\u0000%x\u0001\u0000\u0000"+
		"\u0000\'z\u0001\u0000\u0000\u0000)\u0080\u0001\u0000\u0000\u0000+\u0084"+
		"\u0001\u0000\u0000\u0000-\u0088\u0001\u0000\u0000\u0000/\u008a\u0001\u0000"+
		"\u0000\u00001\u0099\u0001\u0000\u0000\u000035\u0007\u0000\u0000\u0000"+
		"43\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u000064\u0001\u0000\u0000"+
		"\u000067\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u000089\u0006\u0000"+
		"\u0000\u00009\u0002\u0001\u0000\u0000\u0000:<\u0005\r\u0000\u0000;:\u0001"+
		"\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000"+
		"=@\u0005\n\u0000\u0000>@\u0005\r\u0000\u0000?;\u0001\u0000\u0000\u0000"+
		"?>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000"+
		"\u0000AB\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CD\u0006\u0001"+
		"\u0000\u0000D\u0004\u0001\u0000\u0000\u0000EF\u0005s\u0000\u0000FG\u0005"+
		"k\u0000\u0000GH\u0005i\u0000\u0000HI\u0005p\u0000\u0000I\u0006\u0001\u0000"+
		"\u0000\u0000JK\u0005(\u0000\u0000K\b\u0001\u0000\u0000\u0000LM\u0005)"+
		"\u0000\u0000M\n\u0001\u0000\u0000\u0000NO\u0005a\u0000\u0000OP\u0005n"+
		"\u0000\u0000PQ\u0005d\u0000\u0000Q\f\u0001\u0000\u0000\u0000RS\u0005:"+
		"\u0000\u0000ST\u0005=\u0000\u0000T\u000e\u0001\u0000\u0000\u0000UV\u0005"+
		"w\u0000\u0000VW\u0005h\u0000\u0000WX\u0005i\u0000\u0000XY\u0005l\u0000"+
		"\u0000YZ\u0005e\u0000\u0000Z\u0010\u0001\u0000\u0000\u0000[\\\u0005d\u0000"+
		"\u0000\\]\u0005o\u0000\u0000]\u0012\u0001\u0000\u0000\u0000^_\u0005t\u0000"+
		"\u0000_`\u0005h\u0000\u0000`a\u0005e\u0000\u0000ab\u0005n\u0000\u0000"+
		"b\u0014\u0001\u0000\u0000\u0000cd\u0005i\u0000\u0000de\u0005f\u0000\u0000"+
		"e\u0016\u0001\u0000\u0000\u0000fg\u0005e\u0000\u0000gh\u0005l\u0000\u0000"+
		"hi\u0005s\u0000\u0000ij\u0005e\u0000\u0000j\u0018\u0001\u0000\u0000\u0000"+
		"kl\u0005*\u0000\u0000l\u001a\u0001\u0000\u0000\u0000mn\u0005+\u0000\u0000"+
		"n\u001c\u0001\u0000\u0000\u0000op\u0005-\u0000\u0000p\u001e\u0001\u0000"+
		"\u0000\u0000qr\u0005!\u0000\u0000r \u0001\u0000\u0000\u0000st\u0005<\u0000"+
		"\u0000tu\u0005=\u0000\u0000u\"\u0001\u0000\u0000\u0000vw\u0005=\u0000"+
		"\u0000w$\u0001\u0000\u0000\u0000xy\u0005;\u0000\u0000y&\u0001\u0000\u0000"+
		"\u0000z{\u0005b\u0000\u0000{|\u0005e\u0000\u0000|}\u0005g\u0000\u0000"+
		"}~\u0005i\u0000\u0000~\u007f\u0005n\u0000\u0000\u007f(\u0001\u0000\u0000"+
		"\u0000\u0080\u0081\u0005e\u0000\u0000\u0081\u0082\u0005n\u0000\u0000\u0082"+
		"\u0083\u0005d\u0000\u0000\u0083*\u0001\u0000\u0000\u0000\u0084\u0085\u0005"+
		"v\u0000\u0000\u0085\u0086\u0005a\u0000\u0000\u0086\u0087\u0005r\u0000"+
		"\u0000\u0087,\u0001\u0000\u0000\u0000\u0088\u0089\u0005,\u0000\u0000\u0089"+
		".\u0001\u0000\u0000\u0000\u008a\u008e\u0007\u0001\u0000\u0000\u008b\u008d"+
		"\u0007\u0002\u0000\u0000\u008c\u008b\u0001\u0000\u0000\u0000\u008d\u0090"+
		"\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008e\u008f"+
		"\u0001\u0000\u0000\u0000\u008f0\u0001\u0000\u0000\u0000\u0090\u008e\u0001"+
		"\u0000\u0000\u0000\u0091\u0095\u0007\u0003\u0000\u0000\u0092\u0094\u0007"+
		"\u0004\u0000\u0000\u0093\u0092\u0001\u0000\u0000\u0000\u0094\u0097\u0001"+
		"\u0000\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000\u0095\u0096\u0001"+
		"\u0000\u0000\u0000\u0096\u009a\u0001\u0000\u0000\u0000\u0097\u0095\u0001"+
		"\u0000\u0000\u0000\u0098\u009a\u0007\u0004\u0000\u0000\u0099\u0091\u0001"+
		"\u0000\u0000\u0000\u0099\u0098\u0001\u0000\u0000\u0000\u009a2\u0001\u0000"+
		"\u0000\u0000\b\u00006;?A\u008e\u0095\u0099\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}