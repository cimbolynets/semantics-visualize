// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/AbstractMachine.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class AbstractMachineLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Whitespace=1, Newline=2, Push=3, Add=4, Mult=5, Sub=6, Eq=7, Le=8, And=9, 
		Neg=10, Fetch=11, Store=12, Emptyop=13, Branch=14, Loop=15, Lpar=16, Rpar=17, 
		Divider=18, VarDivider=19, Colon=20, Id=21, Value=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"Whitespace", "Newline", "Push", "Add", "Mult", "Sub", "Eq", "Le", "And", 
			"Neg", "Fetch", "Store", "Emptyop", "Branch", "Loop", "Lpar", "Rpar", 
			"Divider", "VarDivider", "Colon", "Id", "Value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'PUSH'", "'ADD'", "'MULT'", "'SUB'", "'EQ'", "'LE'", 
			"'AND'", "'NEG'", "'FETCH'", "'STORE'", "'EMPTYOP'", "'BRANCH'", "'LOOP'", 
			"'('", "')'", "':'", "'-'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Whitespace", "Newline", "Push", "Add", "Mult", "Sub", "Eq", "Le", 
			"And", "Neg", "Fetch", "Store", "Emptyop", "Branch", "Loop", "Lpar", 
			"Rpar", "Divider", "VarDivider", "Colon", "Id", "Value"
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


	public AbstractMachineLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "AbstractMachine.g4"; }

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
		"\u0004\u0000\u0016\u009a\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0001\u0000\u0004\u0000/\b\u0000\u000b\u0000"+
		"\f\u00000\u0001\u0000\u0001\u0000\u0001\u0001\u0003\u00016\b\u0001\u0001"+
		"\u0001\u0001\u0001\u0004\u0001:\b\u0001\u000b\u0001\f\u0001;\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014"+
		"\u0001\u0014\u0005\u0014\u008c\b\u0014\n\u0014\f\u0014\u008f\t\u0014\u0001"+
		"\u0015\u0001\u0015\u0005\u0015\u0093\b\u0015\n\u0015\f\u0015\u0096\t\u0015"+
		"\u0001\u0015\u0003\u0015\u0099\b\u0015\u0000\u0000\u0016\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010"+
		"!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016\u0001\u0000\u0005\u0002\u0000"+
		"\t\t  \u0002\u0000AZaz\u0003\u000009AZaz\u0001\u000019\u0001\u000009\u00a0"+
		"\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000"+
		"\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000"+
		"\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000"+
		"\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0001.\u0001\u0000\u0000\u0000\u00039"+
		"\u0001\u0000\u0000\u0000\u0005?\u0001\u0000\u0000\u0000\u0007D\u0001\u0000"+
		"\u0000\u0000\tH\u0001\u0000\u0000\u0000\u000bM\u0001\u0000\u0000\u0000"+
		"\rQ\u0001\u0000\u0000\u0000\u000fT\u0001\u0000\u0000\u0000\u0011W\u0001"+
		"\u0000\u0000\u0000\u0013[\u0001\u0000\u0000\u0000\u0015_\u0001\u0000\u0000"+
		"\u0000\u0017e\u0001\u0000\u0000\u0000\u0019k\u0001\u0000\u0000\u0000\u001b"+
		"s\u0001\u0000\u0000\u0000\u001dz\u0001\u0000\u0000\u0000\u001f\u007f\u0001"+
		"\u0000\u0000\u0000!\u0081\u0001\u0000\u0000\u0000#\u0083\u0001\u0000\u0000"+
		"\u0000%\u0085\u0001\u0000\u0000\u0000\'\u0087\u0001\u0000\u0000\u0000"+
		")\u0089\u0001\u0000\u0000\u0000+\u0098\u0001\u0000\u0000\u0000-/\u0007"+
		"\u0000\u0000\u0000.-\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000\u0000"+
		"0.\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u000012\u0001\u0000\u0000"+
		"\u000023\u0006\u0000\u0000\u00003\u0002\u0001\u0000\u0000\u000046\u0005"+
		"\r\u0000\u000054\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u000067\u0001"+
		"\u0000\u0000\u00007:\u0005\n\u0000\u00008:\u0005\r\u0000\u000095\u0001"+
		"\u0000\u0000\u000098\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000"+
		";9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000"+
		"\u0000=>\u0006\u0001\u0000\u0000>\u0004\u0001\u0000\u0000\u0000?@\u0005"+
		"P\u0000\u0000@A\u0005U\u0000\u0000AB\u0005S\u0000\u0000BC\u0005H\u0000"+
		"\u0000C\u0006\u0001\u0000\u0000\u0000DE\u0005A\u0000\u0000EF\u0005D\u0000"+
		"\u0000FG\u0005D\u0000\u0000G\b\u0001\u0000\u0000\u0000HI\u0005M\u0000"+
		"\u0000IJ\u0005U\u0000\u0000JK\u0005L\u0000\u0000KL\u0005T\u0000\u0000"+
		"L\n\u0001\u0000\u0000\u0000MN\u0005S\u0000\u0000NO\u0005U\u0000\u0000"+
		"OP\u0005B\u0000\u0000P\f\u0001\u0000\u0000\u0000QR\u0005E\u0000\u0000"+
		"RS\u0005Q\u0000\u0000S\u000e\u0001\u0000\u0000\u0000TU\u0005L\u0000\u0000"+
		"UV\u0005E\u0000\u0000V\u0010\u0001\u0000\u0000\u0000WX\u0005A\u0000\u0000"+
		"XY\u0005N\u0000\u0000YZ\u0005D\u0000\u0000Z\u0012\u0001\u0000\u0000\u0000"+
		"[\\\u0005N\u0000\u0000\\]\u0005E\u0000\u0000]^\u0005G\u0000\u0000^\u0014"+
		"\u0001\u0000\u0000\u0000_`\u0005F\u0000\u0000`a\u0005E\u0000\u0000ab\u0005"+
		"T\u0000\u0000bc\u0005C\u0000\u0000cd\u0005H\u0000\u0000d\u0016\u0001\u0000"+
		"\u0000\u0000ef\u0005S\u0000\u0000fg\u0005T\u0000\u0000gh\u0005O\u0000"+
		"\u0000hi\u0005R\u0000\u0000ij\u0005E\u0000\u0000j\u0018\u0001\u0000\u0000"+
		"\u0000kl\u0005E\u0000\u0000lm\u0005M\u0000\u0000mn\u0005P\u0000\u0000"+
		"no\u0005T\u0000\u0000op\u0005Y\u0000\u0000pq\u0005O\u0000\u0000qr\u0005"+
		"P\u0000\u0000r\u001a\u0001\u0000\u0000\u0000st\u0005B\u0000\u0000tu\u0005"+
		"R\u0000\u0000uv\u0005A\u0000\u0000vw\u0005N\u0000\u0000wx\u0005C\u0000"+
		"\u0000xy\u0005H\u0000\u0000y\u001c\u0001\u0000\u0000\u0000z{\u0005L\u0000"+
		"\u0000{|\u0005O\u0000\u0000|}\u0005O\u0000\u0000}~\u0005P\u0000\u0000"+
		"~\u001e\u0001\u0000\u0000\u0000\u007f\u0080\u0005(\u0000\u0000\u0080 "+
		"\u0001\u0000\u0000\u0000\u0081\u0082\u0005)\u0000\u0000\u0082\"\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005:\u0000\u0000\u0084$\u0001\u0000\u0000"+
		"\u0000\u0085\u0086\u0005-\u0000\u0000\u0086&\u0001\u0000\u0000\u0000\u0087"+
		"\u0088\u0005,\u0000\u0000\u0088(\u0001\u0000\u0000\u0000\u0089\u008d\u0007"+
		"\u0001\u0000\u0000\u008a\u008c\u0007\u0002\u0000\u0000\u008b\u008a\u0001"+
		"\u0000\u0000\u0000\u008c\u008f\u0001\u0000\u0000\u0000\u008d\u008b\u0001"+
		"\u0000\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e*\u0001\u0000"+
		"\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0094\u0007\u0003"+
		"\u0000\u0000\u0091\u0093\u0007\u0004\u0000\u0000\u0092\u0091\u0001\u0000"+
		"\u0000\u0000\u0093\u0096\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000"+
		"\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0099\u0001\u0000"+
		"\u0000\u0000\u0096\u0094\u0001\u0000\u0000\u0000\u0097\u0099\u0007\u0004"+
		"\u0000\u0000\u0098\u0090\u0001\u0000\u0000\u0000\u0098\u0097\u0001\u0000"+
		"\u0000\u0000\u0099,\u0001\u0000\u0000\u0000\b\u0000059;\u008d\u0094\u0098"+
		"\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}