// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/jane/JaneExtended.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class JaneExtendedParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Begin=1, End=2, Var=3, Whitespace=4, Newline=5, Skip=6, Lpar=7, Rpar=8, 
		And=9, AssignSymbol=10, While=11, Do=12, Then=13, If=14, Else=15, Mult=16, 
		Plus=17, Minus=18, Not=19, Leq=20, Eq=21, Semicolon=22, Id=23, Value=24;
	public static final int
		RULE_instruction = 0, RULE_block = 1, RULE_decl = 2, RULE_program = 3, 
		RULE_instructionSequence = 4, RULE_cycle = 5, RULE_branch = 6, RULE_assign = 7, 
		RULE_skip = 8, RULE_stats = 9, RULE_stat = 10, RULE_expr = 11, RULE_mul = 12, 
		RULE_term = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"instruction", "block", "decl", "program", "instructionSequence", "cycle", 
			"branch", "assign", "skip", "stats", "stat", "expr", "mul", "term"
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

	@Override
	public String getGrammarFileName() { return "JaneExtended.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public JaneExtendedParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
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
		enterRule(_localctx, 0, RULE_instruction);
		try {
			setState(33);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				assign();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(29);
				cycle();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(30);
				branch();
				}
				break;
			case Skip:
				enterOuterAlt(_localctx, 4);
				{
				setState(31);
				skip();
				}
				break;
			case Begin:
				enterOuterAlt(_localctx, 5);
				{
				setState(32);
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
	public static class BlockContext extends ParserRuleContext {
		public TerminalNode Begin() { return getToken(JaneExtendedParser.Begin, 0); }
		public DeclContext decl() {
			return getRuleContext(DeclContext.class,0);
		}
		public TerminalNode Semicolon() { return getToken(JaneExtendedParser.Semicolon, 0); }
		public TerminalNode End() { return getToken(JaneExtendedParser.End, 0); }
		public TerminalNode Lpar() { return getToken(JaneExtendedParser.Lpar, 0); }
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneExtendedParser.Rpar, 0); }
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
		enterRule(_localctx, 2, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(Begin);
			setState(36);
			decl();
			setState(37);
			match(Semicolon);
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(38);
				match(Lpar);
				setState(39);
				instructionSequence();
				setState(40);
				match(Rpar);
				}
				break;
			case Begin:
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(42);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(45);
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
		public TerminalNode Var() { return getToken(JaneExtendedParser.Var, 0); }
		public List<AssignContext> assign() {
			return getRuleContexts(AssignContext.class);
		}
		public AssignContext assign(int i) {
			return getRuleContext(AssignContext.class,i);
		}
		public List<TerminalNode> Semicolon() { return getTokens(JaneExtendedParser.Semicolon); }
		public TerminalNode Semicolon(int i) {
			return getToken(JaneExtendedParser.Semicolon, i);
		}
		public DeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl; }
	}

	public final DeclContext decl() throws RecognitionException {
		DeclContext _localctx = new DeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_decl);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			match(Var);
			setState(48);
			assign();
			setState(53);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(49);
					match(Semicolon);
					setState(50);
					assign();
					}
					} 
				}
				setState(55);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
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
	public static class ProgramContext extends ParserRuleContext {
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode EOF() { return getToken(JaneExtendedParser.EOF, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			instructionSequence();
			setState(57);
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
		public List<TerminalNode> Semicolon() { return getTokens(JaneExtendedParser.Semicolon); }
		public TerminalNode Semicolon(int i) {
			return getToken(JaneExtendedParser.Semicolon, i);
		}
		public InstructionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instructionSequence; }
	}

	public final InstructionSequenceContext instructionSequence() throws RecognitionException {
		InstructionSequenceContext _localctx = new InstructionSequenceContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_instructionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			instruction();
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Semicolon) {
				{
				{
				setState(60);
				match(Semicolon);
				setState(61);
				instruction();
				}
				}
				setState(66);
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
	public static class CycleContext extends ParserRuleContext {
		public TerminalNode While() { return getToken(JaneExtendedParser.While, 0); }
		public StatsContext stats() {
			return getRuleContext(StatsContext.class,0);
		}
		public TerminalNode Do() { return getToken(JaneExtendedParser.Do, 0); }
		public TerminalNode Lpar() { return getToken(JaneExtendedParser.Lpar, 0); }
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneExtendedParser.Rpar, 0); }
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
		enterRule(_localctx, 10, RULE_cycle);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(While);
			setState(68);
			stats();
			setState(69);
			match(Do);
			setState(75);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(70);
				match(Lpar);
				setState(71);
				instructionSequence();
				setState(72);
				match(Rpar);
				}
				break;
			case Begin:
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(74);
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
		public TerminalNode If() { return getToken(JaneExtendedParser.If, 0); }
		public StatsContext stats() {
			return getRuleContext(StatsContext.class,0);
		}
		public TerminalNode Then() { return getToken(JaneExtendedParser.Then, 0); }
		public TerminalNode Else() { return getToken(JaneExtendedParser.Else, 0); }
		public List<TerminalNode> Lpar() { return getTokens(JaneExtendedParser.Lpar); }
		public TerminalNode Lpar(int i) {
			return getToken(JaneExtendedParser.Lpar, i);
		}
		public List<InstructionSequenceContext> instructionSequence() {
			return getRuleContexts(InstructionSequenceContext.class);
		}
		public InstructionSequenceContext instructionSequence(int i) {
			return getRuleContext(InstructionSequenceContext.class,i);
		}
		public List<TerminalNode> Rpar() { return getTokens(JaneExtendedParser.Rpar); }
		public TerminalNode Rpar(int i) {
			return getToken(JaneExtendedParser.Rpar, i);
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
		enterRule(_localctx, 12, RULE_branch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(If);
			setState(78);
			stats();
			setState(79);
			match(Then);
			setState(85);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(80);
				match(Lpar);
				setState(81);
				instructionSequence();
				setState(82);
				match(Rpar);
				}
				break;
			case Begin:
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(84);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(87);
			match(Else);
			setState(93);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(88);
				match(Lpar);
				setState(89);
				instructionSequence();
				setState(90);
				match(Rpar);
				}
				break;
			case Begin:
			case Skip:
			case While:
			case If:
			case Id:
				{
				setState(92);
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
		public TerminalNode Id() { return getToken(JaneExtendedParser.Id, 0); }
		public TerminalNode AssignSymbol() { return getToken(JaneExtendedParser.AssignSymbol, 0); }
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
		enterRule(_localctx, 14, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(Id);
			setState(96);
			match(AssignSymbol);
			setState(97);
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
		public TerminalNode Skip() { return getToken(JaneExtendedParser.Skip, 0); }
		public SkipContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skip; }
	}

	public final SkipContext skip() throws RecognitionException {
		SkipContext _localctx = new SkipContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_skip);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
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
		public List<TerminalNode> And() { return getTokens(JaneExtendedParser.And); }
		public TerminalNode And(int i) {
			return getToken(JaneExtendedParser.And, i);
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
		public TerminalNode Leq() { return getToken(JaneExtendedParser.Leq, 0); }
		public TerminalNode Eq() { return getToken(JaneExtendedParser.Eq, 0); }
		public TerminalNode Lpar() { return getToken(JaneExtendedParser.Lpar, 0); }
		public StatsContext stats() {
			return getRuleContext(StatsContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneExtendedParser.Rpar, 0); }
		public TerminalNode Not() { return getToken(JaneExtendedParser.Not, 0); }
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
		public List<TerminalNode> Plus() { return getTokens(JaneExtendedParser.Plus); }
		public TerminalNode Plus(int i) {
			return getToken(JaneExtendedParser.Plus, i);
		}
		public List<TerminalNode> Minus() { return getTokens(JaneExtendedParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(JaneExtendedParser.Minus, i);
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
		public List<TerminalNode> Mult() { return getTokens(JaneExtendedParser.Mult); }
		public TerminalNode Mult(int i) {
			return getToken(JaneExtendedParser.Mult, i);
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
		public TerminalNode Id() { return getToken(JaneExtendedParser.Id, 0); }
		public TerminalNode Value() { return getToken(JaneExtendedParser.Value, 0); }
		public TerminalNode Lpar() { return getToken(JaneExtendedParser.Lpar, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneExtendedParser.Rpar, 0); }
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
		"\u0004\u0001\u0018\u0098\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000\"\b\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001,\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0005\u00024\b\u0002\n\u0002\f\u00027\t\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0005"+
		"\u0004?\b\u0004\n\u0004\f\u0004B\t\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005L\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006V\b\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006^\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005\ti\b\t\n\t\f\tl\t\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0003\ns\b\n\u0001\n\u0003\nv\b\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0003\n|\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0005\u000b\u0083\b\u000b\n\u000b\f\u000b\u0086\t\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0005\f\u008b\b\f\n\f\f\f\u008e\t\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u0096\b\r\u0001\r\u0000\u0000"+
		"\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u0000\u0000\u009c\u0000!\u0001\u0000\u0000\u0000\u0002#\u0001\u0000"+
		"\u0000\u0000\u0004/\u0001\u0000\u0000\u0000\u00068\u0001\u0000\u0000\u0000"+
		"\b;\u0001\u0000\u0000\u0000\nC\u0001\u0000\u0000\u0000\fM\u0001\u0000"+
		"\u0000\u0000\u000e_\u0001\u0000\u0000\u0000\u0010c\u0001\u0000\u0000\u0000"+
		"\u0012e\u0001\u0000\u0000\u0000\u0014{\u0001\u0000\u0000\u0000\u0016}"+
		"\u0001\u0000\u0000\u0000\u0018\u0087\u0001\u0000\u0000\u0000\u001a\u0095"+
		"\u0001\u0000\u0000\u0000\u001c\"\u0003\u000e\u0007\u0000\u001d\"\u0003"+
		"\n\u0005\u0000\u001e\"\u0003\f\u0006\u0000\u001f\"\u0003\u0010\b\u0000"+
		" \"\u0003\u0002\u0001\u0000!\u001c\u0001\u0000\u0000\u0000!\u001d\u0001"+
		"\u0000\u0000\u0000!\u001e\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000"+
		"\u0000! \u0001\u0000\u0000\u0000\"\u0001\u0001\u0000\u0000\u0000#$\u0005"+
		"\u0001\u0000\u0000$%\u0003\u0004\u0002\u0000%+\u0005\u0016\u0000\u0000"+
		"&\'\u0005\u0007\u0000\u0000\'(\u0003\b\u0004\u0000()\u0005\b\u0000\u0000"+
		"),\u0001\u0000\u0000\u0000*,\u0003\u0000\u0000\u0000+&\u0001\u0000\u0000"+
		"\u0000+*\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-.\u0005\u0002"+
		"\u0000\u0000.\u0003\u0001\u0000\u0000\u0000/0\u0005\u0003\u0000\u0000"+
		"05\u0003\u000e\u0007\u000012\u0005\u0016\u0000\u000024\u0003\u000e\u0007"+
		"\u000031\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u000053\u0001\u0000"+
		"\u0000\u000056\u0001\u0000\u0000\u00006\u0005\u0001\u0000\u0000\u0000"+
		"75\u0001\u0000\u0000\u000089\u0003\b\u0004\u00009:\u0005\u0000\u0000\u0001"+
		":\u0007\u0001\u0000\u0000\u0000;@\u0003\u0000\u0000\u0000<=\u0005\u0016"+
		"\u0000\u0000=?\u0003\u0000\u0000\u0000><\u0001\u0000\u0000\u0000?B\u0001"+
		"\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000"+
		"A\t\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000CD\u0005\u000b\u0000"+
		"\u0000DE\u0003\u0012\t\u0000EK\u0005\f\u0000\u0000FG\u0005\u0007\u0000"+
		"\u0000GH\u0003\b\u0004\u0000HI\u0005\b\u0000\u0000IL\u0001\u0000\u0000"+
		"\u0000JL\u0003\u0000\u0000\u0000KF\u0001\u0000\u0000\u0000KJ\u0001\u0000"+
		"\u0000\u0000L\u000b\u0001\u0000\u0000\u0000MN\u0005\u000e\u0000\u0000"+
		"NO\u0003\u0012\t\u0000OU\u0005\r\u0000\u0000PQ\u0005\u0007\u0000\u0000"+
		"QR\u0003\b\u0004\u0000RS\u0005\b\u0000\u0000SV\u0001\u0000\u0000\u0000"+
		"TV\u0003\u0000\u0000\u0000UP\u0001\u0000\u0000\u0000UT\u0001\u0000\u0000"+
		"\u0000VW\u0001\u0000\u0000\u0000W]\u0005\u000f\u0000\u0000XY\u0005\u0007"+
		"\u0000\u0000YZ\u0003\b\u0004\u0000Z[\u0005\b\u0000\u0000[^\u0001\u0000"+
		"\u0000\u0000\\^\u0003\u0000\u0000\u0000]X\u0001\u0000\u0000\u0000]\\\u0001"+
		"\u0000\u0000\u0000^\r\u0001\u0000\u0000\u0000_`\u0005\u0017\u0000\u0000"+
		"`a\u0005\n\u0000\u0000ab\u0003\u0016\u000b\u0000b\u000f\u0001\u0000\u0000"+
		"\u0000cd\u0005\u0006\u0000\u0000d\u0011\u0001\u0000\u0000\u0000ej\u0003"+
		"\u0014\n\u0000fg\u0005\t\u0000\u0000gi\u0003\u0014\n\u0000hf\u0001\u0000"+
		"\u0000\u0000il\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001"+
		"\u0000\u0000\u0000k\u0013\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000"+
		"\u0000mr\u0003\u0016\u000b\u0000no\u0005\u0014\u0000\u0000os\u0003\u0016"+
		"\u000b\u0000pq\u0005\u0015\u0000\u0000qs\u0003\u0016\u000b\u0000rn\u0001"+
		"\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000s|\u0001\u0000\u0000\u0000"+
		"tv\u0005\u0013\u0000\u0000ut\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000"+
		"\u0000vw\u0001\u0000\u0000\u0000wx\u0005\u0007\u0000\u0000xy\u0003\u0012"+
		"\t\u0000yz\u0005\b\u0000\u0000z|\u0001\u0000\u0000\u0000{m\u0001\u0000"+
		"\u0000\u0000{u\u0001\u0000\u0000\u0000|\u0015\u0001\u0000\u0000\u0000"+
		"}\u0084\u0003\u0018\f\u0000~\u007f\u0005\u0011\u0000\u0000\u007f\u0083"+
		"\u0003\u0018\f\u0000\u0080\u0081\u0005\u0012\u0000\u0000\u0081\u0083\u0003"+
		"\u0018\f\u0000\u0082~\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000"+
		"\u0000\u0000\u0083\u0086\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000"+
		"\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0017\u0001\u0000"+
		"\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0087\u008c\u0003\u001a"+
		"\r\u0000\u0088\u0089\u0005\u0010\u0000\u0000\u0089\u008b\u0003\u001a\r"+
		"\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008b\u008e\u0001\u0000\u0000"+
		"\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000"+
		"\u0000\u008d\u0019\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000"+
		"\u0000\u008f\u0096\u0005\u0017\u0000\u0000\u0090\u0096\u0005\u0018\u0000"+
		"\u0000\u0091\u0092\u0005\u0007\u0000\u0000\u0092\u0093\u0003\u0016\u000b"+
		"\u0000\u0093\u0094\u0005\b\u0000\u0000\u0094\u0096\u0001\u0000\u0000\u0000"+
		"\u0095\u008f\u0001\u0000\u0000\u0000\u0095\u0090\u0001\u0000\u0000\u0000"+
		"\u0095\u0091\u0001\u0000\u0000\u0000\u0096\u001b\u0001\u0000\u0000\u0000"+
		"\u000f!+5@KU]jru{\u0082\u0084\u008c\u0095";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}