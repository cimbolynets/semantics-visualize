// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/jane/Jane.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class JaneParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Whitespace=1, Newline=2, Skip=3, Lpar=4, Rpar=5, And=6, AssignSymbol=7, 
		While=8, Do=9, Then=10, If=11, Else=12, Mult=13, Plus=14, Minus=15, Not=16, 
		Leq=17, Eq=18, Semicolon=19, Id=20, Value=21;
	public static final int
		RULE_program = 0, RULE_instructionSequence = 1, RULE_instruction = 2, 
		RULE_cycle = 3, RULE_branch = 4, RULE_assign = 5, RULE_skip = 6, RULE_stats = 7, 
		RULE_stat = 8, RULE_expr = 9, RULE_mul = 10, RULE_term = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "instructionSequence", "instruction", "cycle", "branch", "assign", 
			"skip", "stats", "stat", "expr", "mul", "term"
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

	@Override
	public String getGrammarFileName() { return "Jane.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public JaneParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode EOF() { return getToken(JaneParser.EOF, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			instructionSequence();
			setState(25);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstructionSequenceContext extends ParserRuleContext {
		public List<InstructionContext> instruction() {
			return getRuleContexts(InstructionContext.class);
		}
		public InstructionContext instruction(int i) {
			return getRuleContext(InstructionContext.class,i);
		}
		public List<TerminalNode> Semicolon() { return getTokens(JaneParser.Semicolon); }
		public TerminalNode Semicolon(int i) {
			return getToken(JaneParser.Semicolon, i);
		}
		public InstructionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instructionSequence; }
	}

	public final InstructionSequenceContext instructionSequence() throws RecognitionException {
		InstructionSequenceContext _localctx = new InstructionSequenceContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_instructionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			instruction();
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Semicolon) {
				{
				{
				setState(28);
				match(Semicolon);
				setState(29);
				instruction();
				}
				}
				setState(34);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstructionContext extends ParserRuleContext {
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public CycleContext cycle() {
			return getRuleContext(CycleContext.class,0);
		}
		public BranchContext branch() {
			return getRuleContext(BranchContext.class,0);
		}
		public SkipContext skip() {
			return getRuleContext(SkipContext.class,0);
		}
		public InstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruction; }
	}

	public final InstructionContext instruction() throws RecognitionException {
		InstructionContext _localctx = new InstructionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instruction);
		try {
			setState(39);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(35);
				assign();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(36);
				cycle();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(37);
				branch();
				}
				break;
			case Skip:
				enterOuterAlt(_localctx, 4);
				{
				setState(38);
				skip();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CycleContext extends ParserRuleContext {
		public TerminalNode While() { return getToken(JaneParser.While, 0); }
		public StatsContext stats() {
			return getRuleContext(StatsContext.class,0);
		}
		public TerminalNode Do() { return getToken(JaneParser.Do, 0); }
		public TerminalNode Lpar() { return getToken(JaneParser.Lpar, 0); }
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneParser.Rpar, 0); }
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public CycleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cycle; }
	}

	public final CycleContext cycle() throws RecognitionException {
		CycleContext _localctx = new CycleContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_cycle);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(While);
			setState(42);
			stats();
			setState(43);
			match(Do);
			setState(49);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(44);
				match(Lpar);
				setState(45);
				instructionSequence();
				setState(46);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(48);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BranchContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(JaneParser.If, 0); }
		public StatsContext stats() {
			return getRuleContext(StatsContext.class,0);
		}
		public TerminalNode Then() { return getToken(JaneParser.Then, 0); }
		public TerminalNode Else() { return getToken(JaneParser.Else, 0); }
		public List<TerminalNode> Lpar() { return getTokens(JaneParser.Lpar); }
		public TerminalNode Lpar(int i) {
			return getToken(JaneParser.Lpar, i);
		}
		public List<InstructionSequenceContext> instructionSequence() {
			return getRuleContexts(InstructionSequenceContext.class);
		}
		public InstructionSequenceContext instructionSequence(int i) {
			return getRuleContext(InstructionSequenceContext.class,i);
		}
		public List<TerminalNode> Rpar() { return getTokens(JaneParser.Rpar); }
		public TerminalNode Rpar(int i) {
			return getToken(JaneParser.Rpar, i);
		}
		public List<InstructionContext> instruction() {
			return getRuleContexts(InstructionContext.class);
		}
		public InstructionContext instruction(int i) {
			return getRuleContext(InstructionContext.class,i);
		}
		public BranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_branch; }
	}

	public final BranchContext branch() throws RecognitionException {
		BranchContext _localctx = new BranchContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_branch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(If);
			setState(52);
			stats();
			setState(53);
			match(Then);
			setState(59);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(54);
				match(Lpar);
				setState(55);
				instructionSequence();
				setState(56);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(58);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(61);
			match(Else);
			setState(67);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(62);
				match(Lpar);
				setState(63);
				instructionSequence();
				setState(64);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(66);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignContext extends ParserRuleContext {
		public TerminalNode Id() { return getToken(JaneParser.Id, 0); }
		public TerminalNode AssignSymbol() { return getToken(JaneParser.AssignSymbol, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(Id);
			setState(70);
			match(AssignSymbol);
			setState(71);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SkipContext extends ParserRuleContext {
		public TerminalNode Skip() { return getToken(JaneParser.Skip, 0); }
		public SkipContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skip; }
	}

	public final SkipContext skip() throws RecognitionException {
		SkipContext _localctx = new SkipContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_skip);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(Skip);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatsContext extends ParserRuleContext {
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public List<TerminalNode> And() { return getTokens(JaneParser.And); }
		public TerminalNode And(int i) {
			return getToken(JaneParser.And, i);
		}
		public StatsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stats; }
	}

	public final StatsContext stats() throws RecognitionException {
		StatsContext _localctx = new StatsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_stats);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			stat();
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==And) {
				{
				{
				setState(76);
				match(And);
				setState(77);
				stat();
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode Leq() { return getToken(JaneParser.Leq, 0); }
		public TerminalNode Eq() { return getToken(JaneParser.Eq, 0); }
		public TerminalNode Lpar() { return getToken(JaneParser.Lpar, 0); }
		public StatsContext stats() {
			return getRuleContext(StatsContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneParser.Rpar, 0); }
		public TerminalNode Not() { return getToken(JaneParser.Not, 0); }
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_stat);
		int _la;
		try {
			setState(97);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				expr();
				setState(88);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Leq:
					{
					setState(84);
					match(Leq);
					setState(85);
					expr();
					}
					break;
				case Eq:
					{
					setState(86);
					match(Eq);
					setState(87);
					expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Not) {
					{
					setState(90);
					match(Not);
					}
				}

				setState(93);
				match(Lpar);
				setState(94);
				stats();
				setState(95);
				match(Rpar);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public List<MulContext> mul() {
			return getRuleContexts(MulContext.class);
		}
		public MulContext mul(int i) {
			return getRuleContext(MulContext.class,i);
		}
		public List<TerminalNode> Plus() { return getTokens(JaneParser.Plus); }
		public TerminalNode Plus(int i) {
			return getToken(JaneParser.Plus, i);
		}
		public List<TerminalNode> Minus() { return getTokens(JaneParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(JaneParser.Minus, i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			mul();
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Minus) {
				{
				setState(104);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Plus:
					{
					setState(100);
					match(Plus);
					setState(101);
					mul();
					}
					break;
				case Minus:
					{
					setState(102);
					match(Minus);
					setState(103);
					mul();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MulContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<TerminalNode> Mult() { return getTokens(JaneParser.Mult); }
		public TerminalNode Mult(int i) {
			return getToken(JaneParser.Mult, i);
		}
		public MulContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mul; }
	}

	public final MulContext mul() throws RecognitionException {
		MulContext _localctx = new MulContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_mul);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			term();
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Mult) {
				{
				{
				setState(110);
				match(Mult);
				setState(111);
				term();
				}
				}
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermContext extends ParserRuleContext {
		public TerminalNode Id() { return getToken(JaneParser.Id, 0); }
		public TerminalNode Value() { return getToken(JaneParser.Value, 0); }
		public TerminalNode Lpar() { return getToken(JaneParser.Lpar, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneParser.Rpar, 0); }
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_term);
		try {
			setState(123);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(117);
				match(Id);
				}
				break;
			case Value:
				enterOuterAlt(_localctx, 2);
				{
				setState(118);
				match(Value);
				}
				break;
			case Lpar:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(119);
				match(Lpar);
				setState(120);
				expr();
				setState(121);
				match(Rpar);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0015~\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001\u001f\b\u0001\n\u0001\f\u0001\"\t\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002(\b\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u00032\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004<\b\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004D\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007"+
		"O\b\u0007\n\u0007\f\u0007R\t\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\bY\b\b\u0001\b\u0003\b\\\b\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0003\bb\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\ti\b\t\n\t"+
		"\f\tl\t\t\u0001\n\u0001\n\u0001\n\u0005\nq\b\n\n\n\f\nt\t\n\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b"+
		"|\b\u000b\u0001\u000b\u0000\u0000\f\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0000\u0000\u0081\u0000\u0018\u0001\u0000\u0000"+
		"\u0000\u0002\u001b\u0001\u0000\u0000\u0000\u0004\'\u0001\u0000\u0000\u0000"+
		"\u0006)\u0001\u0000\u0000\u0000\b3\u0001\u0000\u0000\u0000\nE\u0001\u0000"+
		"\u0000\u0000\fI\u0001\u0000\u0000\u0000\u000eK\u0001\u0000\u0000\u0000"+
		"\u0010a\u0001\u0000\u0000\u0000\u0012c\u0001\u0000\u0000\u0000\u0014m"+
		"\u0001\u0000\u0000\u0000\u0016{\u0001\u0000\u0000\u0000\u0018\u0019\u0003"+
		"\u0002\u0001\u0000\u0019\u001a\u0005\u0000\u0000\u0001\u001a\u0001\u0001"+
		"\u0000\u0000\u0000\u001b \u0003\u0004\u0002\u0000\u001c\u001d\u0005\u0013"+
		"\u0000\u0000\u001d\u001f\u0003\u0004\u0002\u0000\u001e\u001c\u0001\u0000"+
		"\u0000\u0000\u001f\"\u0001\u0000\u0000\u0000 \u001e\u0001\u0000\u0000"+
		"\u0000 !\u0001\u0000\u0000\u0000!\u0003\u0001\u0000\u0000\u0000\" \u0001"+
		"\u0000\u0000\u0000#(\u0003\n\u0005\u0000$(\u0003\u0006\u0003\u0000%(\u0003"+
		"\b\u0004\u0000&(\u0003\f\u0006\u0000\'#\u0001\u0000\u0000\u0000\'$\u0001"+
		"\u0000\u0000\u0000\'%\u0001\u0000\u0000\u0000\'&\u0001\u0000\u0000\u0000"+
		"(\u0005\u0001\u0000\u0000\u0000)*\u0005\b\u0000\u0000*+\u0003\u000e\u0007"+
		"\u0000+1\u0005\t\u0000\u0000,-\u0005\u0004\u0000\u0000-.\u0003\u0002\u0001"+
		"\u0000./\u0005\u0005\u0000\u0000/2\u0001\u0000\u0000\u000002\u0003\u0004"+
		"\u0002\u00001,\u0001\u0000\u0000\u000010\u0001\u0000\u0000\u00002\u0007"+
		"\u0001\u0000\u0000\u000034\u0005\u000b\u0000\u000045\u0003\u000e\u0007"+
		"\u00005;\u0005\n\u0000\u000067\u0005\u0004\u0000\u000078\u0003\u0002\u0001"+
		"\u000089\u0005\u0005\u0000\u00009<\u0001\u0000\u0000\u0000:<\u0003\u0004"+
		"\u0002\u0000;6\u0001\u0000\u0000\u0000;:\u0001\u0000\u0000\u0000<=\u0001"+
		"\u0000\u0000\u0000=C\u0005\f\u0000\u0000>?\u0005\u0004\u0000\u0000?@\u0003"+
		"\u0002\u0001\u0000@A\u0005\u0005\u0000\u0000AD\u0001\u0000\u0000\u0000"+
		"BD\u0003\u0004\u0002\u0000C>\u0001\u0000\u0000\u0000CB\u0001\u0000\u0000"+
		"\u0000D\t\u0001\u0000\u0000\u0000EF\u0005\u0014\u0000\u0000FG\u0005\u0007"+
		"\u0000\u0000GH\u0003\u0012\t\u0000H\u000b\u0001\u0000\u0000\u0000IJ\u0005"+
		"\u0003\u0000\u0000J\r\u0001\u0000\u0000\u0000KP\u0003\u0010\b\u0000LM"+
		"\u0005\u0006\u0000\u0000MO\u0003\u0010\b\u0000NL\u0001\u0000\u0000\u0000"+
		"OR\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000"+
		"\u0000Q\u000f\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000SX\u0003"+
		"\u0012\t\u0000TU\u0005\u0011\u0000\u0000UY\u0003\u0012\t\u0000VW\u0005"+
		"\u0012\u0000\u0000WY\u0003\u0012\t\u0000XT\u0001\u0000\u0000\u0000XV\u0001"+
		"\u0000\u0000\u0000Yb\u0001\u0000\u0000\u0000Z\\\u0005\u0010\u0000\u0000"+
		"[Z\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000"+
		"\u0000]^\u0005\u0004\u0000\u0000^_\u0003\u000e\u0007\u0000_`\u0005\u0005"+
		"\u0000\u0000`b\u0001\u0000\u0000\u0000aS\u0001\u0000\u0000\u0000a[\u0001"+
		"\u0000\u0000\u0000b\u0011\u0001\u0000\u0000\u0000cj\u0003\u0014\n\u0000"+
		"de\u0005\u000e\u0000\u0000ei\u0003\u0014\n\u0000fg\u0005\u000f\u0000\u0000"+
		"gi\u0003\u0014\n\u0000hd\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000"+
		"il\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000"+
		"\u0000k\u0013\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000mr\u0003"+
		"\u0016\u000b\u0000no\u0005\r\u0000\u0000oq\u0003\u0016\u000b\u0000pn\u0001"+
		"\u0000\u0000\u0000qt\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000"+
		"rs\u0001\u0000\u0000\u0000s\u0015\u0001\u0000\u0000\u0000tr\u0001\u0000"+
		"\u0000\u0000u|\u0005\u0014\u0000\u0000v|\u0005\u0015\u0000\u0000wx\u0005"+
		"\u0004\u0000\u0000xy\u0003\u0012\t\u0000yz\u0005\u0005\u0000\u0000z|\u0001"+
		"\u0000\u0000\u0000{u\u0001\u0000\u0000\u0000{v\u0001\u0000\u0000\u0000"+
		"{w\u0001\u0000\u0000\u0000|\u0017\u0001\u0000\u0000\u0000\r \'1;CPX[a"+
		"hjr{";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}