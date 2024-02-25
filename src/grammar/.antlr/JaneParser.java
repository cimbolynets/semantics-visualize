// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/Jane.g4 by ANTLR 4.13.1
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
		Leq=17, Eq=18, Semicolon=19, Begin=20, End=21, Var=22, Colon=23, Id=24, 
		Value=25;
	public static final int
		RULE_program = 0, RULE_instructionSequence = 1, RULE_instruction = 2, 
		RULE_cycle = 3, RULE_branch = 4, RULE_assign = 5, RULE_skip = 6, RULE_block = 7, 
		RULE_decl = 8, RULE_stats = 9, RULE_stat = 10, RULE_expr = 11, RULE_mul = 12, 
		RULE_term = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "instructionSequence", "instruction", "cycle", "branch", "assign", 
			"skip", "block", "decl", "stats", "stat", "expr", "mul", "term"
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
			setState(28);
			instructionSequence();
			setState(29);
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
			setState(31);
			instruction();
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Semicolon) {
				{
				{
				setState(32);
				match(Semicolon);
				setState(33);
				instruction();
				}
				}
				setState(38);
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
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
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
			setState(44);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				assign();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				cycle();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				branch();
				}
				break;
			case Skip:
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
				skip();
				}
				break;
			case Begin:
				enterOuterAlt(_localctx, 5);
				{
				setState(43);
				block();
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
			setState(46);
			match(While);
			setState(47);
			stats();
			setState(48);
			match(Do);
			setState(54);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(49);
				match(Lpar);
				setState(50);
				instructionSequence();
				setState(51);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Id:
				{
				setState(53);
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
			setState(56);
			match(If);
			setState(57);
			stats();
			setState(58);
			match(Then);
			setState(64);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(59);
				match(Lpar);
				setState(60);
				instructionSequence();
				setState(61);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Id:
				{
				setState(63);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(66);
			match(Else);
			setState(72);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(67);
				match(Lpar);
				setState(68);
				instructionSequence();
				setState(69);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Id:
				{
				setState(71);
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
			setState(74);
			match(Id);
			setState(75);
			match(AssignSymbol);
			setState(76);
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
			setState(78);
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
	public static class BlockContext extends ParserRuleContext {
		public TerminalNode Begin() { return getToken(JaneParser.Begin, 0); }
		public DeclContext decl() {
			return getRuleContext(DeclContext.class,0);
		}
		public TerminalNode Semicolon() { return getToken(JaneParser.Semicolon, 0); }
		public TerminalNode End() { return getToken(JaneParser.End, 0); }
		public TerminalNode Lpar() { return getToken(JaneParser.Lpar, 0); }
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneParser.Rpar, 0); }
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(Begin);
			setState(81);
			decl();
			setState(82);
			match(Semicolon);
			setState(88);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(83);
				match(Lpar);
				setState(84);
				instructionSequence();
				setState(85);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Id:
				{
				setState(87);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(90);
			match(End);
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
	public static class DeclContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(JaneParser.Var, 0); }
		public List<AssignContext> assign() {
			return getRuleContexts(AssignContext.class);
		}
		public AssignContext assign(int i) {
			return getRuleContext(AssignContext.class,i);
		}
		public List<TerminalNode> Colon() { return getTokens(JaneParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(JaneParser.Colon, i);
		}
		public DeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl; }
	}

	public final DeclContext decl() throws RecognitionException {
		DeclContext _localctx = new DeclContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(Var);
			setState(93);
			assign();
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				{
				setState(94);
				match(Colon);
				setState(95);
				assign();
				}
				}
				setState(100);
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
		enterRule(_localctx, 18, RULE_stats);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			stat();
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==And) {
				{
				{
				setState(102);
				match(And);
				setState(103);
				stat();
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
		enterRule(_localctx, 20, RULE_stat);
		int _la;
		try {
			setState(123);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(109);
				expr();
				setState(114);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Leq:
					{
					setState(110);
					match(Leq);
					setState(111);
					expr();
					}
					break;
				case Eq:
					{
					setState(112);
					match(Eq);
					setState(113);
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
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Not) {
					{
					setState(116);
					match(Not);
					}
				}

				setState(119);
				match(Lpar);
				setState(120);
				stats();
				setState(121);
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
		enterRule(_localctx, 22, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			mul();
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Minus) {
				{
				setState(130);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Plus:
					{
					setState(126);
					match(Plus);
					setState(127);
					mul();
					}
					break;
				case Minus:
					{
					setState(128);
					match(Minus);
					setState(129);
					mul();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(134);
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
		enterRule(_localctx, 24, RULE_mul);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			term();
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Mult) {
				{
				{
				setState(136);
				match(Mult);
				setState(137);
				term();
				}
				}
				setState(142);
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
		enterRule(_localctx, 26, RULE_term);
		try {
			setState(149);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				match(Id);
				}
				break;
			case Value:
				enterOuterAlt(_localctx, 2);
				{
				setState(144);
				match(Value);
				}
				break;
			case Lpar:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(145);
				match(Lpar);
				setState(146);
				expr();
				setState(147);
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
		"\u0004\u0001\u0019\u0098\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0005\u0001#\b\u0001\n\u0001\f\u0001&\t"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u0002-\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00037\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004A\b\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004I\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0003\u0007Y\b\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0005\ba\b\b\n\b\f\bd\t\b\u0001\t\u0001\t\u0001"+
		"\t\u0005\ti\b\t\n\t\f\tl\t\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003"+
		"\ns\b\n\u0001\n\u0003\nv\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n|"+
		"\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005"+
		"\u000b\u0083\b\u000b\n\u000b\f\u000b\u0086\t\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0005\f\u008b\b\f\n\f\f\f\u008e\t\f\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0003\r\u0096\b\r\u0001\r\u0000\u0000\u000e\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0000"+
		"\u009c\u0000\u001c\u0001\u0000\u0000\u0000\u0002\u001f\u0001\u0000\u0000"+
		"\u0000\u0004,\u0001\u0000\u0000\u0000\u0006.\u0001\u0000\u0000\u0000\b"+
		"8\u0001\u0000\u0000\u0000\nJ\u0001\u0000\u0000\u0000\fN\u0001\u0000\u0000"+
		"\u0000\u000eP\u0001\u0000\u0000\u0000\u0010\\\u0001\u0000\u0000\u0000"+
		"\u0012e\u0001\u0000\u0000\u0000\u0014{\u0001\u0000\u0000\u0000\u0016}"+
		"\u0001\u0000\u0000\u0000\u0018\u0087\u0001\u0000\u0000\u0000\u001a\u0095"+
		"\u0001\u0000\u0000\u0000\u001c\u001d\u0003\u0002\u0001\u0000\u001d\u001e"+
		"\u0005\u0000\u0000\u0001\u001e\u0001\u0001\u0000\u0000\u0000\u001f$\u0003"+
		"\u0004\u0002\u0000 !\u0005\u0013\u0000\u0000!#\u0003\u0004\u0002\u0000"+
		"\" \u0001\u0000\u0000\u0000#&\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000"+
		"\u0000$%\u0001\u0000\u0000\u0000%\u0003\u0001\u0000\u0000\u0000&$\u0001"+
		"\u0000\u0000\u0000\'-\u0003\n\u0005\u0000(-\u0003\u0006\u0003\u0000)-"+
		"\u0003\b\u0004\u0000*-\u0003\f\u0006\u0000+-\u0003\u000e\u0007\u0000,"+
		"\'\u0001\u0000\u0000\u0000,(\u0001\u0000\u0000\u0000,)\u0001\u0000\u0000"+
		"\u0000,*\u0001\u0000\u0000\u0000,+\u0001\u0000\u0000\u0000-\u0005\u0001"+
		"\u0000\u0000\u0000./\u0005\b\u0000\u0000/0\u0003\u0012\t\u000006\u0005"+
		"\t\u0000\u000012\u0005\u0004\u0000\u000023\u0003\u0002\u0001\u000034\u0005"+
		"\u0005\u0000\u000047\u0001\u0000\u0000\u000057\u0003\u0004\u0002\u0000"+
		"61\u0001\u0000\u0000\u000065\u0001\u0000\u0000\u00007\u0007\u0001\u0000"+
		"\u0000\u000089\u0005\u000b\u0000\u00009:\u0003\u0012\t\u0000:@\u0005\n"+
		"\u0000\u0000;<\u0005\u0004\u0000\u0000<=\u0003\u0002\u0001\u0000=>\u0005"+
		"\u0005\u0000\u0000>A\u0001\u0000\u0000\u0000?A\u0003\u0004\u0002\u0000"+
		"@;\u0001\u0000\u0000\u0000@?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000"+
		"\u0000BH\u0005\f\u0000\u0000CD\u0005\u0004\u0000\u0000DE\u0003\u0002\u0001"+
		"\u0000EF\u0005\u0005\u0000\u0000FI\u0001\u0000\u0000\u0000GI\u0003\u0004"+
		"\u0002\u0000HC\u0001\u0000\u0000\u0000HG\u0001\u0000\u0000\u0000I\t\u0001"+
		"\u0000\u0000\u0000JK\u0005\u0018\u0000\u0000KL\u0005\u0007\u0000\u0000"+
		"LM\u0003\u0016\u000b\u0000M\u000b\u0001\u0000\u0000\u0000NO\u0005\u0003"+
		"\u0000\u0000O\r\u0001\u0000\u0000\u0000PQ\u0005\u0014\u0000\u0000QR\u0003"+
		"\u0010\b\u0000RX\u0005\u0013\u0000\u0000ST\u0005\u0004\u0000\u0000TU\u0003"+
		"\u0002\u0001\u0000UV\u0005\u0005\u0000\u0000VY\u0001\u0000\u0000\u0000"+
		"WY\u0003\u0004\u0002\u0000XS\u0001\u0000\u0000\u0000XW\u0001\u0000\u0000"+
		"\u0000YZ\u0001\u0000\u0000\u0000Z[\u0005\u0015\u0000\u0000[\u000f\u0001"+
		"\u0000\u0000\u0000\\]\u0005\u0016\u0000\u0000]b\u0003\n\u0005\u0000^_"+
		"\u0005\u0017\u0000\u0000_a\u0003\n\u0005\u0000`^\u0001\u0000\u0000\u0000"+
		"ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000"+
		"\u0000c\u0011\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000ej\u0003"+
		"\u0014\n\u0000fg\u0005\u0006\u0000\u0000gi\u0003\u0014\n\u0000hf\u0001"+
		"\u0000\u0000\u0000il\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"jk\u0001\u0000\u0000\u0000k\u0013\u0001\u0000\u0000\u0000lj\u0001\u0000"+
		"\u0000\u0000mr\u0003\u0016\u000b\u0000no\u0005\u0011\u0000\u0000os\u0003"+
		"\u0016\u000b\u0000pq\u0005\u0012\u0000\u0000qs\u0003\u0016\u000b\u0000"+
		"rn\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000s|\u0001\u0000\u0000"+
		"\u0000tv\u0005\u0010\u0000\u0000ut\u0001\u0000\u0000\u0000uv\u0001\u0000"+
		"\u0000\u0000vw\u0001\u0000\u0000\u0000wx\u0005\u0004\u0000\u0000xy\u0003"+
		"\u0012\t\u0000yz\u0005\u0005\u0000\u0000z|\u0001\u0000\u0000\u0000{m\u0001"+
		"\u0000\u0000\u0000{u\u0001\u0000\u0000\u0000|\u0015\u0001\u0000\u0000"+
		"\u0000}\u0084\u0003\u0018\f\u0000~\u007f\u0005\u000e\u0000\u0000\u007f"+
		"\u0083\u0003\u0018\f\u0000\u0080\u0081\u0005\u000f\u0000\u0000\u0081\u0083"+
		"\u0003\u0018\f\u0000\u0082~\u0001\u0000\u0000\u0000\u0082\u0080\u0001"+
		"\u0000\u0000\u0000\u0083\u0086\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0017\u0001"+
		"\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0087\u008c\u0003"+
		"\u001a\r\u0000\u0088\u0089\u0005\r\u0000\u0000\u0089\u008b\u0003\u001a"+
		"\r\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008b\u008e\u0001\u0000\u0000"+
		"\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000"+
		"\u0000\u008d\u0019\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000"+
		"\u0000\u008f\u0096\u0005\u0018\u0000\u0000\u0090\u0096\u0005\u0019\u0000"+
		"\u0000\u0091\u0092\u0005\u0004\u0000\u0000\u0092\u0093\u0003\u0016\u000b"+
		"\u0000\u0093\u0094\u0005\u0005\u0000\u0000\u0094\u0096\u0001\u0000\u0000"+
		"\u0000\u0095\u008f\u0001\u0000\u0000\u0000\u0095\u0090\u0001\u0000\u0000"+
		"\u0000\u0095\u0091\u0001\u0000\u0000\u0000\u0096\u001b\u0001\u0000\u0000"+
		"\u0000\u000f$,6@HXbjru{\u0082\u0084\u008c\u0095";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}