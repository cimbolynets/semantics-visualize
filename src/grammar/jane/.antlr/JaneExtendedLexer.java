// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/jane/JaneExtended.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class JaneExtendedLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Begin=1, End=2, Var=3, Whitespace=4, Newline=5, Skip=6, Lpar=7, Rpar=8, 
		And=9, AssignSymbol=10, While=11, Do=12, Then=13, If=14, Else=15, Mult=16, 
		Plus=17, Minus=18, Not=19, Leq=20, Eq=21, Semicolon=22, Id=23, Value=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"Begin", "End", "Var", "Whitespace", "Newline", "Skip", "Lpar", "Rpar", 
			"And", "AssignSymbol", "While", "Do", "Then", "If", "Else", "Mult", "Plus", 
			"Minus", "Not", "Leq", "Eq", "Semicolon", "Id", "Value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'begin'", "'end'", "'var'", null, null, "'skip'", "'('", "')'", 
			"'and'", "':='", "'while'", "'do'", "'then'", "'if'", "'else'", "'*'", 
			"'+'", "'-'", "'!'", "'<='", "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Begin", "End", "Var", "Whitespace", "Newline", "Skip", "Lpar", 
			"Rpar", "And", "AssignSymbol", "While", "Do", "Then", "If", "Else", "Mult", 
			"Plus", "Minus", "Not", "Leq", "Eq", "Semicolon", "Id", "Value"
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


	public JaneExtendedLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "JaneExtended.g4"; }

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
		"\u0004\u0000\u0018\u0097\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0004\u0003A\b\u0003\u000b\u0003"+
		"\f\u0003B\u0001\u0003\u0001\u0003\u0001\u0004\u0003\u0004H\b\u0004\u0001"+
		"\u0004\u0001\u0004\u0004\u0004L\b\u0004\u000b\u0004\f\u0004M\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001"+
		"\u0016\u0001\u0016\u0005\u0016\u0089\b\u0016\n\u0016\f\u0016\u008c\t\u0016"+
		"\u0001\u0017\u0001\u0017\u0005\u0017\u0090\b\u0017\n\u0017\f\u0017\u0093"+
		"\t\u0017\u0001\u0017\u0003\u0017\u0096\b\u0017\u0000\u0000\u0018\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/"+
		"\u0018\u0001\u0000\u0005\u0002\u0000\t\t  \u0002\u0000AZaz\u0003\u0000"+
		"09AZaz\u0001\u000019\u0001\u000009\u009d\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000"+
		"\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001"+
		"\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000"+
		"\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000"+
		"\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00011"+
		"\u0001\u0000\u0000\u0000\u00037\u0001\u0000\u0000\u0000\u0005;\u0001\u0000"+
		"\u0000\u0000\u0007@\u0001\u0000\u0000\u0000\tK\u0001\u0000\u0000\u0000"+
		"\u000bQ\u0001\u0000\u0000\u0000\rV\u0001\u0000\u0000\u0000\u000fX\u0001"+
		"\u0000\u0000\u0000\u0011Z\u0001\u0000\u0000\u0000\u0013^\u0001\u0000\u0000"+
		"\u0000\u0015a\u0001\u0000\u0000\u0000\u0017g\u0001\u0000\u0000\u0000\u0019"+
		"j\u0001\u0000\u0000\u0000\u001bo\u0001\u0000\u0000\u0000\u001dr\u0001"+
		"\u0000\u0000\u0000\u001fw\u0001\u0000\u0000\u0000!y\u0001\u0000\u0000"+
		"\u0000#{\u0001\u0000\u0000\u0000%}\u0001\u0000\u0000\u0000\'\u007f\u0001"+
		"\u0000\u0000\u0000)\u0082\u0001\u0000\u0000\u0000+\u0084\u0001\u0000\u0000"+
		"\u0000-\u0086\u0001\u0000\u0000\u0000/\u0095\u0001\u0000\u0000\u00001"+
		"2\u0005b\u0000\u000023\u0005e\u0000\u000034\u0005g\u0000\u000045\u0005"+
		"i\u0000\u000056\u0005n\u0000\u00006\u0002\u0001\u0000\u0000\u000078\u0005"+
		"e\u0000\u000089\u0005n\u0000\u00009:\u0005d\u0000\u0000:\u0004\u0001\u0000"+
		"\u0000\u0000;<\u0005v\u0000\u0000<=\u0005a\u0000\u0000=>\u0005r\u0000"+
		"\u0000>\u0006\u0001\u0000\u0000\u0000?A\u0007\u0000\u0000\u0000@?\u0001"+
		"\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000"+
		"BC\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DE\u0006\u0003\u0000"+
		"\u0000E\b\u0001\u0000\u0000\u0000FH\u0005\r\u0000\u0000GF\u0001\u0000"+
		"\u0000\u0000GH\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IL\u0005"+
		"\n\u0000\u0000JL\u0005\r\u0000\u0000KG\u0001\u0000\u0000\u0000KJ\u0001"+
		"\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000"+
		"MN\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0006\u0004\u0000"+
		"\u0000P\n\u0001\u0000\u0000\u0000QR\u0005s\u0000\u0000RS\u0005k\u0000"+
		"\u0000ST\u0005i\u0000\u0000TU\u0005p\u0000\u0000U\f\u0001\u0000\u0000"+
		"\u0000VW\u0005(\u0000\u0000W\u000e\u0001\u0000\u0000\u0000XY\u0005)\u0000"+
		"\u0000Y\u0010\u0001\u0000\u0000\u0000Z[\u0005a\u0000\u0000[\\\u0005n\u0000"+
		"\u0000\\]\u0005d\u0000\u0000]\u0012\u0001\u0000\u0000\u0000^_\u0005:\u0000"+
		"\u0000_`\u0005=\u0000\u0000`\u0014\u0001\u0000\u0000\u0000ab\u0005w\u0000"+
		"\u0000bc\u0005h\u0000\u0000cd\u0005i\u0000\u0000de\u0005l\u0000\u0000"+
		"ef\u0005e\u0000\u0000f\u0016\u0001\u0000\u0000\u0000gh\u0005d\u0000\u0000"+
		"hi\u0005o\u0000\u0000i\u0018\u0001\u0000\u0000\u0000jk\u0005t\u0000\u0000"+
		"kl\u0005h\u0000\u0000lm\u0005e\u0000\u0000mn\u0005n\u0000\u0000n\u001a"+
		"\u0001\u0000\u0000\u0000op\u0005i\u0000\u0000pq\u0005f\u0000\u0000q\u001c"+
		"\u0001\u0000\u0000\u0000rs\u0005e\u0000\u0000st\u0005l\u0000\u0000tu\u0005"+
		"s\u0000\u0000uv\u0005e\u0000\u0000v\u001e\u0001\u0000\u0000\u0000wx\u0005"+
		"*\u0000\u0000x \u0001\u0000\u0000\u0000yz\u0005+\u0000\u0000z\"\u0001"+
		"\u0000\u0000\u0000{|\u0005-\u0000\u0000|$\u0001\u0000\u0000\u0000}~\u0005"+
		"!\u0000\u0000~&\u0001\u0000\u0000\u0000\u007f\u0080\u0005<\u0000\u0000"+
		"\u0080\u0081\u0005=\u0000\u0000\u0081(\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0005=\u0000\u0000\u0083*\u0001\u0000\u0000\u0000\u0084\u0085\u0005;"+
		"\u0000\u0000\u0085,\u0001\u0000\u0000\u0000\u0086\u008a\u0007\u0001\u0000"+
		"\u0000\u0087\u0089\u0007\u0002\u0000\u0000\u0088\u0087\u0001\u0000\u0000"+
		"\u0000\u0089\u008c\u0001\u0000\u0000\u0000\u008a\u0088\u0001\u0000\u0000"+
		"\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b.\u0001\u0000\u0000\u0000"+
		"\u008c\u008a\u0001\u0000\u0000\u0000\u008d\u0091\u0007\u0003\u0000\u0000"+
		"\u008e\u0090\u0007\u0004\u0000\u0000\u008f\u008e\u0001\u0000\u0000\u0000"+
		"\u0090\u0093\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u0096\u0001\u0000\u0000\u0000"+
		"\u0093\u0091\u0001\u0000\u0000\u0000\u0094\u0096\u0007\u0004\u0000\u0000"+
		"\u0095\u008d\u0001\u0000\u0000\u0000\u0095\u0094\u0001\u0000\u0000\u0000"+
		"\u00960\u0001\u0000\u0000\u0000\b\u0000BGKM\u008a\u0091\u0095\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}