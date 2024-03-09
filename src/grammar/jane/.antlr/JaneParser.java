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
		Leq=17, Eq=18, Semicolon=19, Begin=20, End=21, Var=22, Proc=23, Is=24, 
		Call=25, Colon=26, Id=27, Value=28;
	public static final int
		RULE_program = 0, RULE_instructionSequence = 1, RULE_instruction = 2, 
		RULE_cycle = 3, RULE_branch = 4, RULE_assign = 5, RULE_skip = 6, RULE_block = 7, 
		RULE_procs = 8, RULE_decl = 9, RULE_procDefinition = 10, RULE_procCall = 11, 
		RULE_stats = 12, RULE_stat = 13, RULE_expr = 14, RULE_mul = 15, RULE_term = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "instructionSequence", "instruction", "cycle", "branch", "assign", 
			"skip", "block", "procs", "decl", "procDefinition", "procCall", "stats", 
			"stat", "expr", "mul", "term"
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
			setState(34);
			instructionSequence();
			setState(35);
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
			setState(37);
			instruction();
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Semicolon) {
				{
				{
				setState(38);
				match(Semicolon);
				setState(39);
				instruction();
				}
				}
				setState(44);
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
			setState(51);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				assign();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				cycle();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(47);
				branch();
				}
				break;
			case Skip:
				enterOuterAlt(_localctx, 4);
				{
				setState(48);
				skip();
				}
				break;
			case Begin:
				enterOuterAlt(_localctx, 5);
				{
				setState(49);
				block();
				}
				break;
			case Call:
				enterOuterAlt(_localctx, 6);
				{
				setState(50);
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
			setState(53);
			match(While);
			setState(54);
			stats();
			setState(55);
			match(Do);
			setState(61);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(56);
				match(Lpar);
				setState(57);
				instructionSequence();
				setState(58);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Call:
			case Id:
				{
				setState(60);
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
			setState(63);
			match(If);
			setState(64);
			stats();
			setState(65);
			match(Then);
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(66);
				match(Lpar);
				setState(67);
				instructionSequence();
				setState(68);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Call:
			case Id:
				{
				setState(70);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(73);
			match(Else);
			setState(79);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(74);
				match(Lpar);
				setState(75);
				instructionSequence();
				setState(76);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Call:
			case Id:
				{
				setState(78);
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
			setState(81);
			match(Id);
			setState(82);
			match(AssignSymbol);
			setState(83);
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
			setState(85);
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
		public TerminalNode End() { return getToken(JaneParser.End, 0); }
		public TerminalNode Lpar() { return getToken(JaneParser.Lpar, 0); }
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode Rpar() { return getToken(JaneParser.Rpar, 0); }
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public DeclContext decl() {
			return getRuleContext(DeclContext.class,0);
		}
		public List<TerminalNode> Semicolon() { return getTokens(JaneParser.Semicolon); }
		public TerminalNode Semicolon(int i) {
			return getToken(JaneParser.Semicolon, i);
		}
		public ProcsContext procs() {
			return getRuleContext(ProcsContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(Begin);
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var) {
				{
				setState(88);
				decl();
				setState(89);
				match(Semicolon);
				}
			}

			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Proc) {
				{
				setState(93);
				procs();
				setState(94);
				match(Semicolon);
				}
			}

			setState(103);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(98);
				match(Lpar);
				setState(99);
				instructionSequence();
				setState(100);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Call:
			case Id:
				{
				setState(102);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(105);
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
	public static class ProcsContext extends ParserRuleContext {
		public List<ProcDefinitionContext> procDefinition() {
			return getRuleContexts(ProcDefinitionContext.class);
		}
		public ProcDefinitionContext procDefinition(int i) {
			return getRuleContext(ProcDefinitionContext.class,i);
		}
		public List<TerminalNode> Colon() { return getTokens(JaneParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(JaneParser.Colon, i);
		}
		public ProcsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procs; }
	}

	public final ProcsContext procs() throws RecognitionException {
		ProcsContext _localctx = new ProcsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_procs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			procDefinition();
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				{
				setState(108);
				match(Colon);
				setState(109);
				procDefinition();
				}
				}
				setState(114);
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
		enterRule(_localctx, 18, RULE_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(Var);
			setState(116);
			assign();
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				{
				setState(117);
				match(Colon);
				setState(118);
				assign();
				}
				}
				setState(123);
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
		enterRule(_localctx, 20, RULE_procDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(Proc);
			setState(125);
			match(Id);
			setState(126);
			match(Is);
			setState(132);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(127);
				match(Lpar);
				setState(128);
				instructionSequence();
				setState(129);
				match(Rpar);
				}
				break;
			case Skip:
			case While:
			case If:
			case Begin:
			case Call:
			case Id:
				{
				setState(131);
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
		enterRule(_localctx, 22, RULE_procCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(Call);
			setState(135);
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
		enterRule(_localctx, 24, RULE_stats);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			stat();
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==And) {
				{
				{
				setState(138);
				match(And);
				setState(139);
				stat();
				}
				}
				setState(144);
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
		enterRule(_localctx, 26, RULE_stat);
		int _la;
		try {
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
				expr();
				setState(150);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Leq:
					{
					setState(146);
					match(Leq);
					setState(147);
					expr();
					}
					break;
				case Eq:
					{
					setState(148);
					match(Eq);
					setState(149);
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
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Not) {
					{
					setState(152);
					match(Not);
					}
				}

				setState(155);
				match(Lpar);
				setState(156);
				stats();
				setState(157);
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
		enterRule(_localctx, 28, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			mul();
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Minus) {
				{
				setState(166);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Plus:
					{
					setState(162);
					match(Plus);
					setState(163);
					mul();
					}
					break;
				case Minus:
					{
					setState(164);
					match(Minus);
					setState(165);
					mul();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(170);
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
		enterRule(_localctx, 30, RULE_mul);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			term();
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Mult) {
				{
				{
				setState(172);
				match(Mult);
				setState(173);
				term();
				}
				}
				setState(178);
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
		enterRule(_localctx, 32, RULE_term);
		try {
			setState(185);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(179);
				match(Id);
				}
				break;
			case Value:
				enterOuterAlt(_localctx, 2);
				{
				setState(180);
				match(Value);
				}
				break;
			case Lpar:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(181);
				match(Lpar);
				setState(182);
				expr();
				setState(183);
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
		"\u0004\u0001\u001c\u00bc\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0005\u0001)\b\u0001\n\u0001\f\u0001,\t"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u00024\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003>\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004H\b\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004P\b"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\\\b"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007a\b\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007h\b"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0005\bo\b\b\n"+
		"\b\f\br\t\b\u0001\t\u0001\t\u0001\t\u0001\t\u0005\tx\b\t\n\t\f\t{\t\t"+
		"\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003"+
		"\n\u0085\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0005\f\u008d\b\f\n\f\f\f\u0090\t\f\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0003\r\u0097\b\r\u0001\r\u0003\r\u009a\b\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0003\r\u00a0\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0005\u000e\u00a7\b\u000e\n\u000e\f\u000e\u00aa\t\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f\u00af\b\u000f\n\u000f"+
		"\f\u000f\u00b2\t\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0003\u0010\u00ba\b\u0010\u0001\u0010\u0000\u0000"+
		"\u0011\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \u0000\u0000\u00c2\u0000\"\u0001\u0000\u0000\u0000"+
		"\u0002%\u0001\u0000\u0000\u0000\u00043\u0001\u0000\u0000\u0000\u00065"+
		"\u0001\u0000\u0000\u0000\b?\u0001\u0000\u0000\u0000\nQ\u0001\u0000\u0000"+
		"\u0000\fU\u0001\u0000\u0000\u0000\u000eW\u0001\u0000\u0000\u0000\u0010"+
		"k\u0001\u0000\u0000\u0000\u0012s\u0001\u0000\u0000\u0000\u0014|\u0001"+
		"\u0000\u0000\u0000\u0016\u0086\u0001\u0000\u0000\u0000\u0018\u0089\u0001"+
		"\u0000\u0000\u0000\u001a\u009f\u0001\u0000\u0000\u0000\u001c\u00a1\u0001"+
		"\u0000\u0000\u0000\u001e\u00ab\u0001\u0000\u0000\u0000 \u00b9\u0001\u0000"+
		"\u0000\u0000\"#\u0003\u0002\u0001\u0000#$\u0005\u0000\u0000\u0001$\u0001"+
		"\u0001\u0000\u0000\u0000%*\u0003\u0004\u0002\u0000&\'\u0005\u0013\u0000"+
		"\u0000\')\u0003\u0004\u0002\u0000(&\u0001\u0000\u0000\u0000),\u0001\u0000"+
		"\u0000\u0000*(\u0001\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+\u0003"+
		"\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000-4\u0003\n\u0005\u0000"+
		".4\u0003\u0006\u0003\u0000/4\u0003\b\u0004\u000004\u0003\f\u0006\u0000"+
		"14\u0003\u000e\u0007\u000024\u0003\u0016\u000b\u00003-\u0001\u0000\u0000"+
		"\u00003.\u0001\u0000\u0000\u00003/\u0001\u0000\u0000\u000030\u0001\u0000"+
		"\u0000\u000031\u0001\u0000\u0000\u000032\u0001\u0000\u0000\u00004\u0005"+
		"\u0001\u0000\u0000\u000056\u0005\b\u0000\u000067\u0003\u0018\f\u00007"+
		"=\u0005\t\u0000\u000089\u0005\u0004\u0000\u00009:\u0003\u0002\u0001\u0000"+
		":;\u0005\u0005\u0000\u0000;>\u0001\u0000\u0000\u0000<>\u0003\u0004\u0002"+
		"\u0000=8\u0001\u0000\u0000\u0000=<\u0001\u0000\u0000\u0000>\u0007\u0001"+
		"\u0000\u0000\u0000?@\u0005\u000b\u0000\u0000@A\u0003\u0018\f\u0000AG\u0005"+
		"\n\u0000\u0000BC\u0005\u0004\u0000\u0000CD\u0003\u0002\u0001\u0000DE\u0005"+
		"\u0005\u0000\u0000EH\u0001\u0000\u0000\u0000FH\u0003\u0004\u0002\u0000"+
		"GB\u0001\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000"+
		"\u0000IO\u0005\f\u0000\u0000JK\u0005\u0004\u0000\u0000KL\u0003\u0002\u0001"+
		"\u0000LM\u0005\u0005\u0000\u0000MP\u0001\u0000\u0000\u0000NP\u0003\u0004"+
		"\u0002\u0000OJ\u0001\u0000\u0000\u0000ON\u0001\u0000\u0000\u0000P\t\u0001"+
		"\u0000\u0000\u0000QR\u0005\u001b\u0000\u0000RS\u0005\u0007\u0000\u0000"+
		"ST\u0003\u001c\u000e\u0000T\u000b\u0001\u0000\u0000\u0000UV\u0005\u0003"+
		"\u0000\u0000V\r\u0001\u0000\u0000\u0000W[\u0005\u0014\u0000\u0000XY\u0003"+
		"\u0012\t\u0000YZ\u0005\u0013\u0000\u0000Z\\\u0001\u0000\u0000\u0000[X"+
		"\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\`\u0001\u0000\u0000"+
		"\u0000]^\u0003\u0010\b\u0000^_\u0005\u0013\u0000\u0000_a\u0001\u0000\u0000"+
		"\u0000`]\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000ag\u0001\u0000"+
		"\u0000\u0000bc\u0005\u0004\u0000\u0000cd\u0003\u0002\u0001\u0000de\u0005"+
		"\u0005\u0000\u0000eh\u0001\u0000\u0000\u0000fh\u0003\u0004\u0002\u0000"+
		"gb\u0001\u0000\u0000\u0000gf\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000"+
		"\u0000ij\u0005\u0015\u0000\u0000j\u000f\u0001\u0000\u0000\u0000kp\u0003"+
		"\u0014\n\u0000lm\u0005\u001a\u0000\u0000mo\u0003\u0014\n\u0000nl\u0001"+
		"\u0000\u0000\u0000or\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000"+
		"pq\u0001\u0000\u0000\u0000q\u0011\u0001\u0000\u0000\u0000rp\u0001\u0000"+
		"\u0000\u0000st\u0005\u0016\u0000\u0000ty\u0003\n\u0005\u0000uv\u0005\u001a"+
		"\u0000\u0000vx\u0003\n\u0005\u0000wu\u0001\u0000\u0000\u0000x{\u0001\u0000"+
		"\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000z\u0013"+
		"\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000|}\u0005\u0017\u0000"+
		"\u0000}~\u0005\u001b\u0000\u0000~\u0084\u0005\u0018\u0000\u0000\u007f"+
		"\u0080\u0005\u0004\u0000\u0000\u0080\u0081\u0003\u0002\u0001\u0000\u0081"+
		"\u0082\u0005\u0005\u0000\u0000\u0082\u0085\u0001\u0000\u0000\u0000\u0083"+
		"\u0085\u0003\u0004\u0002\u0000\u0084\u007f\u0001\u0000\u0000\u0000\u0084"+
		"\u0083\u0001\u0000\u0000\u0000\u0085\u0015\u0001\u0000\u0000\u0000\u0086"+
		"\u0087\u0005\u0019\u0000\u0000\u0087\u0088\u0005\u001b\u0000\u0000\u0088"+
		"\u0017\u0001\u0000\u0000\u0000\u0089\u008e\u0003\u001a\r\u0000\u008a\u008b"+
		"\u0005\u0006\u0000\u0000\u008b\u008d\u0003\u001a\r\u0000\u008c\u008a\u0001"+
		"\u0000\u0000\u0000\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u008c\u0001"+
		"\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000\u008f\u0019\u0001"+
		"\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0096\u0003"+
		"\u001c\u000e\u0000\u0092\u0093\u0005\u0011\u0000\u0000\u0093\u0097\u0003"+
		"\u001c\u000e\u0000\u0094\u0095\u0005\u0012\u0000\u0000\u0095\u0097\u0003"+
		"\u001c\u000e\u0000\u0096\u0092\u0001\u0000\u0000\u0000\u0096\u0094\u0001"+
		"\u0000\u0000\u0000\u0097\u00a0\u0001\u0000\u0000\u0000\u0098\u009a\u0005"+
		"\u0010\u0000\u0000\u0099\u0098\u0001\u0000\u0000\u0000\u0099\u009a\u0001"+
		"\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009b\u009c\u0005"+
		"\u0004\u0000\u0000\u009c\u009d\u0003\u0018\f\u0000\u009d\u009e\u0005\u0005"+
		"\u0000\u0000\u009e\u00a0\u0001\u0000\u0000\u0000\u009f\u0091\u0001\u0000"+
		"\u0000\u0000\u009f\u0099\u0001\u0000\u0000\u0000\u00a0\u001b\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a8\u0003\u001e\u000f\u0000\u00a2\u00a3\u0005\u000e"+
		"\u0000\u0000\u00a3\u00a7\u0003\u001e\u000f\u0000\u00a4\u00a5\u0005\u000f"+
		"\u0000\u0000\u00a5\u00a7\u0003\u001e\u000f\u0000\u00a6\u00a2\u0001\u0000"+
		"\u0000\u0000\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a7\u00aa\u0001\u0000"+
		"\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a9\u001d\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000"+
		"\u0000\u0000\u00ab\u00b0\u0003 \u0010\u0000\u00ac\u00ad\u0005\r\u0000"+
		"\u0000\u00ad\u00af\u0003 \u0010\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000"+
		"\u00af\u00b2\u0001\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000"+
		"\u00b0\u00b1\u0001\u0000\u0000\u0000\u00b1\u001f\u0001\u0000\u0000\u0000"+
		"\u00b2\u00b0\u0001\u0000\u0000\u0000\u00b3\u00ba\u0005\u001b\u0000\u0000"+
		"\u00b4\u00ba\u0005\u001c\u0000\u0000\u00b5\u00b6\u0005\u0004\u0000\u0000"+
		"\u00b6\u00b7\u0003\u001c\u000e\u0000\u00b7\u00b8\u0005\u0005\u0000\u0000"+
		"\u00b8\u00ba\u0001\u0000\u0000\u0000\u00b9\u00b3\u0001\u0000\u0000\u0000"+
		"\u00b9\u00b4\u0001\u0000\u0000\u0000\u00b9\u00b5\u0001\u0000\u0000\u0000"+
		"\u00ba!\u0001\u0000\u0000\u0000\u0013*3=GO[`gpy\u0084\u008e\u0096\u0099"+
		"\u009f\u00a6\u00a8\u00b0\u00b9";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}