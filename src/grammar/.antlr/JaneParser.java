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
		Leq=17, Eq=18, Semicolon=19, Begin=20, End=21, Var=22, Proc=23, Is=24, 
		Call=25, Colon=26, Id=27, Value=28;
	public static final int
		RULE_program = 0, RULE_instructionSequence = 1, RULE_instruction = 2, 
		RULE_cycle = 3, RULE_branch = 4, RULE_assign = 5, RULE_skip = 6, RULE_block = 7, 
		RULE_decl = 8, RULE_procDefinition = 9, RULE_procCall = 10, RULE_stats = 11, 
		RULE_stat = 12, RULE_expr = 13, RULE_mul = 14, RULE_term = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "instructionSequence", "instruction", "cycle", "branch", "assign", 
			"skip", "block", "decl", "procDefinition", "procCall", "stats", "stat", 
			"expr", "mul", "term"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'skip'", "'('", "')'", "'and'", "':='", "'while'", 
			"'do'", "'then'", "'if'", "'else'", "'*'", "'+'", "'-'", "'!'", "'<='", 
			"'='", "';'", "'begin'", "'end'", "'var'", "'proc'", "'is'", "'call'", 
			"','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Whitespace", "Newline", "Skip", "Lpar", "Rpar", "And", "AssignSymbol", 
			"While", "Do", "Then", "If", "Else", "Mult", "Plus", "Minus", "Not", 
			"Leq", "Eq", "Semicolon", "Begin", "End", "Var", "Proc", "Is", "Call", 
			"Colon", "Id", "Value"
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
			setState(32);
			instructionSequence();
			setState(33);
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
			setState(35);
			instruction();
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Semicolon) {
				{
				{
				setState(36);
				match(Semicolon);
				setState(37);
				instruction();
				}
				}
				setState(42);
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
		public ProcDefinitionContext procDefinition() {
			return getRuleContext(ProcDefinitionContext.class,0);
		}
		public ProcCallContext procCall() {
			return getRuleContext(ProcCallContext.class,0);
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
			setState(50);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(43);
				assign();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(44);
				cycle();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(45);
				branch();
				}
				break;
			case Skip:
				enterOuterAlt(_localctx, 4);
				{
				setState(46);
				skip();
				}
				break;
			case Begin:
				enterOuterAlt(_localctx, 5);
				{
				setState(47);
				block();
				}
				break;
			case Proc:
				enterOuterAlt(_localctx, 6);
				{
				setState(48);
				procDefinition();
				}
				break;
			case Call:
				enterOuterAlt(_localctx, 7);
				{
				setState(49);
				procCall();
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
			setState(52);
			match(While);
			setState(53);
			stats();
			setState(54);
			match(Do);
			setState(60);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(55);
				match(Lpar);
				setState(56);
				instructionSequence();
				setState(57);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Proc:
			case Call:
			case Id:
				{
				setState(59);
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
			setState(62);
			match(If);
			setState(63);
			stats();
			setState(64);
			match(Then);
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(65);
				match(Lpar);
				setState(66);
				instructionSequence();
				setState(67);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Proc:
			case Call:
			case Id:
				{
				setState(69);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(72);
			match(Else);
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(73);
				match(Lpar);
				setState(74);
				instructionSequence();
				setState(75);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Proc:
			case Call:
			case Id:
				{
				setState(77);
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
			setState(80);
			match(Id);
			setState(81);
			match(AssignSymbol);
			setState(82);
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
			setState(84);
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
			setState(86);
			match(Begin);
			setState(87);
			decl();
			setState(88);
			match(Semicolon);
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(89);
				match(Lpar);
				setState(90);
				instructionSequence();
				setState(91);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Proc:
			case Call:
			case Id:
				{
				setState(93);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(96);
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
			setState(98);
			match(Var);
			setState(99);
			assign();
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				{
				setState(100);
				match(Colon);
				setState(101);
				assign();
				}
				}
				setState(106);
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
	public static class ProcDefinitionContext extends ParserRuleContext {
		public TerminalNode Proc() { return getToken(JaneParser.Proc, 0); }
		public TerminalNode Id() { return getToken(JaneParser.Id, 0); }
		public TerminalNode Is() { return getToken(JaneParser.Is, 0); }
		public TerminalNode Lpar() { return getToken(JaneParser.Lpar, 0); }
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneParser.Rpar, 0); }
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public ProcDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procDefinition; }
	}

	public final ProcDefinitionContext procDefinition() throws RecognitionException {
		ProcDefinitionContext _localctx = new ProcDefinitionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_procDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(Proc);
			setState(108);
			match(Id);
			setState(109);
			match(Is);
			setState(115);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(110);
				match(Lpar);
				setState(111);
				instructionSequence();
				setState(112);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Proc:
			case Call:
			case Id:
				{
				setState(114);
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
	public static class ProcCallContext extends ParserRuleContext {
		public TerminalNode Call() { return getToken(JaneParser.Call, 0); }
		public TerminalNode Id() { return getToken(JaneParser.Id, 0); }
		public ProcCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procCall; }
	}

	public final ProcCallContext procCall() throws RecognitionException {
		ProcCallContext _localctx = new ProcCallContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_procCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(Call);
			setState(118);
			match(Id);
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
		enterRule(_localctx, 22, RULE_stats);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			stat();
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==And) {
				{
				{
				setState(121);
				match(And);
				setState(122);
				stat();
				}
				}
				setState(127);
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
		enterRule(_localctx, 24, RULE_stat);
		int _la;
		try {
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(128);
				expr();
				setState(133);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Leq:
					{
					setState(129);
					match(Leq);
					setState(130);
					expr();
					}
					break;
				case Eq:
					{
					setState(131);
					match(Eq);
					setState(132);
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
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Not) {
					{
					setState(135);
					match(Not);
					}
				}

				setState(138);
				match(Lpar);
				setState(139);
				stats();
				setState(140);
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
		enterRule(_localctx, 26, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			mul();
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Minus) {
				{
				setState(149);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Plus:
					{
					setState(145);
					match(Plus);
					setState(146);
					mul();
					}
					break;
				case Minus:
					{
					setState(147);
					match(Minus);
					setState(148);
					mul();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(153);
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
		enterRule(_localctx, 28, RULE_mul);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			term();
			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Mult) {
				{
				{
				setState(155);
				match(Mult);
				setState(156);
				term();
				}
				}
				setState(161);
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
		enterRule(_localctx, 30, RULE_term);
		try {
			setState(168);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(162);
				match(Id);
				}
				break;
			case Value:
				enterOuterAlt(_localctx, 2);
				{
				setState(163);
				match(Value);
				}
				break;
			case Lpar:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(164);
				match(Lpar);
				setState(165);
				expr();
				setState(166);
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
		"\u0004\u0001\u001c\u00ab\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u0001\'\b\u0001\n\u0001\f\u0001*\t\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u00023\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003=\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004G\b\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004O\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0003\u0007_\b\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0005\bg\b\b\n\b\f\bj\t\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\tt\b\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b|\b\u000b\n"+
		"\u000b\f\u000b\u007f\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003"+
		"\f\u0086\b\f\u0001\f\u0003\f\u0089\b\f\u0001\f\u0001\f\u0001\f\u0001\f"+
		"\u0003\f\u008f\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u0096"+
		"\b\r\n\r\f\r\u0099\t\r\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e"+
		"\u009e\b\u000e\n\u000e\f\u000e\u00a1\t\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00a9\b\u000f\u0001"+
		"\u000f\u0000\u0000\u0010\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e\u0000\u0000\u00b0\u0000 \u0001\u0000"+
		"\u0000\u0000\u0002#\u0001\u0000\u0000\u0000\u00042\u0001\u0000\u0000\u0000"+
		"\u00064\u0001\u0000\u0000\u0000\b>\u0001\u0000\u0000\u0000\nP\u0001\u0000"+
		"\u0000\u0000\fT\u0001\u0000\u0000\u0000\u000eV\u0001\u0000\u0000\u0000"+
		"\u0010b\u0001\u0000\u0000\u0000\u0012k\u0001\u0000\u0000\u0000\u0014u"+
		"\u0001\u0000\u0000\u0000\u0016x\u0001\u0000\u0000\u0000\u0018\u008e\u0001"+
		"\u0000\u0000\u0000\u001a\u0090\u0001\u0000\u0000\u0000\u001c\u009a\u0001"+
		"\u0000\u0000\u0000\u001e\u00a8\u0001\u0000\u0000\u0000 !\u0003\u0002\u0001"+
		"\u0000!\"\u0005\u0000\u0000\u0001\"\u0001\u0001\u0000\u0000\u0000#(\u0003"+
		"\u0004\u0002\u0000$%\u0005\u0013\u0000\u0000%\'\u0003\u0004\u0002\u0000"+
		"&$\u0001\u0000\u0000\u0000\'*\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000"+
		"\u0000()\u0001\u0000\u0000\u0000)\u0003\u0001\u0000\u0000\u0000*(\u0001"+
		"\u0000\u0000\u0000+3\u0003\n\u0005\u0000,3\u0003\u0006\u0003\u0000-3\u0003"+
		"\b\u0004\u0000.3\u0003\f\u0006\u0000/3\u0003\u000e\u0007\u000003\u0003"+
		"\u0012\t\u000013\u0003\u0014\n\u00002+\u0001\u0000\u0000\u00002,\u0001"+
		"\u0000\u0000\u00002-\u0001\u0000\u0000\u00002.\u0001\u0000\u0000\u0000"+
		"2/\u0001\u0000\u0000\u000020\u0001\u0000\u0000\u000021\u0001\u0000\u0000"+
		"\u00003\u0005\u0001\u0000\u0000\u000045\u0005\b\u0000\u000056\u0003\u0016"+
		"\u000b\u00006<\u0005\t\u0000\u000078\u0005\u0004\u0000\u000089\u0003\u0002"+
		"\u0001\u00009:\u0005\u0005\u0000\u0000:=\u0001\u0000\u0000\u0000;=\u0003"+
		"\u0004\u0002\u0000<7\u0001\u0000\u0000\u0000<;\u0001\u0000\u0000\u0000"+
		"=\u0007\u0001\u0000\u0000\u0000>?\u0005\u000b\u0000\u0000?@\u0003\u0016"+
		"\u000b\u0000@F\u0005\n\u0000\u0000AB\u0005\u0004\u0000\u0000BC\u0003\u0002"+
		"\u0001\u0000CD\u0005\u0005\u0000\u0000DG\u0001\u0000\u0000\u0000EG\u0003"+
		"\u0004\u0002\u0000FA\u0001\u0000\u0000\u0000FE\u0001\u0000\u0000\u0000"+
		"GH\u0001\u0000\u0000\u0000HN\u0005\f\u0000\u0000IJ\u0005\u0004\u0000\u0000"+
		"JK\u0003\u0002\u0001\u0000KL\u0005\u0005\u0000\u0000LO\u0001\u0000\u0000"+
		"\u0000MO\u0003\u0004\u0002\u0000NI\u0001\u0000\u0000\u0000NM\u0001\u0000"+
		"\u0000\u0000O\t\u0001\u0000\u0000\u0000PQ\u0005\u001b\u0000\u0000QR\u0005"+
		"\u0007\u0000\u0000RS\u0003\u001a\r\u0000S\u000b\u0001\u0000\u0000\u0000"+
		"TU\u0005\u0003\u0000\u0000U\r\u0001\u0000\u0000\u0000VW\u0005\u0014\u0000"+
		"\u0000WX\u0003\u0010\b\u0000X^\u0005\u0013\u0000\u0000YZ\u0005\u0004\u0000"+
		"\u0000Z[\u0003\u0002\u0001\u0000[\\\u0005\u0005\u0000\u0000\\_\u0001\u0000"+
		"\u0000\u0000]_\u0003\u0004\u0002\u0000^Y\u0001\u0000\u0000\u0000^]\u0001"+
		"\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`a\u0005\u0015\u0000\u0000"+
		"a\u000f\u0001\u0000\u0000\u0000bc\u0005\u0016\u0000\u0000ch\u0003\n\u0005"+
		"\u0000de\u0005\u001a\u0000\u0000eg\u0003\n\u0005\u0000fd\u0001\u0000\u0000"+
		"\u0000gj\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000hi\u0001\u0000"+
		"\u0000\u0000i\u0011\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"kl\u0005\u0017\u0000\u0000lm\u0005\u001b\u0000\u0000ms\u0005\u0018\u0000"+
		"\u0000no\u0005\u0004\u0000\u0000op\u0003\u0002\u0001\u0000pq\u0005\u0005"+
		"\u0000\u0000qt\u0001\u0000\u0000\u0000rt\u0003\u0004\u0002\u0000sn\u0001"+
		"\u0000\u0000\u0000sr\u0001\u0000\u0000\u0000t\u0013\u0001\u0000\u0000"+
		"\u0000uv\u0005\u0019\u0000\u0000vw\u0005\u001b\u0000\u0000w\u0015\u0001"+
		"\u0000\u0000\u0000x}\u0003\u0018\f\u0000yz\u0005\u0006\u0000\u0000z|\u0003"+
		"\u0018\f\u0000{y\u0001\u0000\u0000\u0000|\u007f\u0001\u0000\u0000\u0000"+
		"}{\u0001\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~\u0017\u0001\u0000"+
		"\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u0080\u0085\u0003\u001a\r"+
		"\u0000\u0081\u0082\u0005\u0011\u0000\u0000\u0082\u0086\u0003\u001a\r\u0000"+
		"\u0083\u0084\u0005\u0012\u0000\u0000\u0084\u0086\u0003\u001a\r\u0000\u0085"+
		"\u0081\u0001\u0000\u0000\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0086"+
		"\u008f\u0001\u0000\u0000\u0000\u0087\u0089\u0005\u0010\u0000\u0000\u0088"+
		"\u0087\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000\u0000\u0089"+
		"\u008a\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u0004\u0000\u0000\u008b"+
		"\u008c\u0003\u0016\u000b\u0000\u008c\u008d\u0005\u0005\u0000\u0000\u008d"+
		"\u008f\u0001\u0000\u0000\u0000\u008e\u0080\u0001\u0000\u0000\u0000\u008e"+
		"\u0088\u0001\u0000\u0000\u0000\u008f\u0019\u0001\u0000\u0000\u0000\u0090"+
		"\u0097\u0003\u001c\u000e\u0000\u0091\u0092\u0005\u000e\u0000\u0000\u0092"+
		"\u0096\u0003\u001c\u000e\u0000\u0093\u0094\u0005\u000f\u0000\u0000\u0094"+
		"\u0096\u0003\u001c\u000e\u0000\u0095\u0091\u0001\u0000\u0000\u0000\u0095"+
		"\u0093\u0001\u0000\u0000\u0000\u0096\u0099\u0001\u0000\u0000\u0000\u0097"+
		"\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000\u0098"+
		"\u001b\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000\u0000\u009a"+
		"\u009f\u0003\u001e\u000f\u0000\u009b\u009c\u0005\r\u0000\u0000\u009c\u009e"+
		"\u0003\u001e\u000f\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009e\u00a1"+
		"\u0001\u0000\u0000\u0000\u009f\u009d\u0001\u0000\u0000\u0000\u009f\u00a0"+
		"\u0001\u0000\u0000\u0000\u00a0\u001d\u0001\u0000\u0000\u0000\u00a1\u009f"+
		"\u0001\u0000\u0000\u0000\u00a2\u00a9\u0005\u001b\u0000\u0000\u00a3\u00a9"+
		"\u0005\u001c\u0000\u0000\u00a4\u00a5\u0005\u0004\u0000\u0000\u00a5\u00a6"+
		"\u0003\u001a\r\u0000\u00a6\u00a7\u0005\u0005\u0000\u0000\u00a7\u00a9\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a2\u0001\u0000\u0000\u0000\u00a8\u00a3\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a4\u0001\u0000\u0000\u0000\u00a9\u001f\u0001"+
		"\u0000\u0000\u0000\u0010(2<FN^hs}\u0085\u0088\u008e\u0095\u0097\u009f"+
		"\u00a8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}