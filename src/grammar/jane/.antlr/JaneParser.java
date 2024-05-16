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
		Whitespace=1, Newline=2, If=3, Then=4, Else=5, While=6, Do=7, Skip=8, 
		Begin=9, End=10, Var=11, Proc=12, Is=13, Call=14, And=15, True=16, False=17, 
		Lpar=18, Rpar=19, AssignSymbol=20, Mult=21, Plus=22, Minus=23, Not=24, 
		Leq=25, Eq=26, Semicolon=27, Colon=28, Id=29, Value=30;
	public static final int
		RULE_program = 0, RULE_instructionSequence = 1, RULE_instruction = 2, 
		RULE_cycle = 3, RULE_branch = 4, RULE_assign = 5, RULE_skip = 6, RULE_block = 7, 
		RULE_procs = 8, RULE_decl = 9, RULE_procDefinition = 10, RULE_procCall = 11, 
		RULE_stats = 12, RULE_stat = 13, RULE_bool = 14, RULE_expr = 15, RULE_mul = 16, 
		RULE_term = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "instructionSequence", "instruction", "cycle", "branch", "assign", 
			"skip", "block", "procs", "decl", "procDefinition", "procCall", "stats", 
			"stat", "bool", "expr", "mul", "term"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'if'", "'then'", "'else'", "'while'", "'do'", "'skip'", 
			"'begin'", "'end'", "'var'", "'proc'", "'is'", "'call'", "'and'", "'true'", 
			"'false'", "'('", "')'", "':='", "'*'", "'+'", "'-'", "'!'", "'<='", 
			"'='", "';'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Whitespace", "Newline", "If", "Then", "Else", "While", "Do", "Skip", 
			"Begin", "End", "Var", "Proc", "Is", "Call", "And", "True", "False", 
			"Lpar", "Rpar", "AssignSymbol", "Mult", "Plus", "Minus", "Not", "Leq", 
			"Eq", "Semicolon", "Colon", "Id", "Value"
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
			setState(36);
			instructionSequence();
			setState(37);
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
			setState(39);
			instruction();
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Semicolon) {
				{
				{
				setState(40);
				match(Semicolon);
				setState(41);
				instruction();
				}
				}
				setState(46);
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
			setState(53);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				assign();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				cycle();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				branch();
				}
				break;
			case Skip:
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				skip();
				}
				break;
			case Begin:
				enterOuterAlt(_localctx, 5);
				{
				setState(51);
				block();
				}
				break;
			case Call:
				enterOuterAlt(_localctx, 6);
				{
				setState(52);
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
			setState(55);
			match(While);
			setState(56);
			stats();
			setState(57);
			match(Do);
			setState(63);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(58);
				match(Lpar);
				setState(59);
				instructionSequence();
				setState(60);
				match(Rpar);
				}
				break;
			case If:
			case While:
			case Skip:
			case Begin:
			case Call:
			case Id:
				{
				setState(62);
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
			setState(65);
			match(If);
			setState(66);
			stats();
			setState(67);
			match(Then);
			setState(73);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(68);
				match(Lpar);
				setState(69);
				instructionSequence();
				setState(70);
				match(Rpar);
				}
				break;
			case If:
			case While:
			case Skip:
			case Begin:
			case Call:
			case Id:
				{
				setState(72);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(75);
			match(Else);
			setState(81);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(76);
				match(Lpar);
				setState(77);
				instructionSequence();
				setState(78);
				match(Rpar);
				}
				break;
			case If:
			case While:
			case Skip:
			case Begin:
			case Call:
			case Id:
				{
				setState(80);
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
			setState(83);
			match(Id);
			setState(84);
			match(AssignSymbol);
			setState(85);
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
			setState(87);
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
			setState(89);
			match(Begin);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var) {
				{
				setState(90);
				decl();
				setState(91);
				match(Semicolon);
				}
			}

			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Proc) {
				{
				setState(95);
				procs();
				setState(96);
				match(Semicolon);
				}
			}

			setState(105);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(100);
				match(Lpar);
				setState(101);
				instructionSequence();
				setState(102);
				match(Rpar);
				}
				break;
			case If:
			case While:
			case Skip:
			case Begin:
			case Call:
			case Id:
				{
				setState(104);
				instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(107);
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
			setState(109);
			procDefinition();
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				{
				setState(110);
				match(Colon);
				setState(111);
				procDefinition();
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
			setState(117);
			match(Var);
			setState(118);
			assign();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				{
				setState(119);
				match(Colon);
				setState(120);
				assign();
				}
				}
				setState(125);
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
			setState(126);
			match(Proc);
			setState(127);
			match(Id);
			setState(128);
			match(Is);
			setState(134);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Lpar:
				{
				setState(129);
				match(Lpar);
				setState(130);
				instructionSequence();
				setState(131);
				match(Rpar);
				}
				break;
			case If:
			case While:
			case Skip:
			case Begin:
			case Call:
			case Id:
				{
				setState(133);
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
			setState(136);
			match(Call);
			setState(137);
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
			setState(139);
			stat();
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==And) {
				{
				{
				setState(140);
				match(And);
				setState(141);
				stat();
				}
				}
				setState(146);
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
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
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
			setState(162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(147);
				bool();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(148);
				expr();
				setState(153);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Leq:
					{
					setState(149);
					match(Leq);
					setState(150);
					expr();
					}
					break;
				case Eq:
					{
					setState(151);
					match(Eq);
					setState(152);
					expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Not) {
					{
					setState(155);
					match(Not);
					}
				}

				setState(158);
				match(Lpar);
				setState(159);
				stats();
				setState(160);
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
	public static class BoolContext extends ParserRuleContext {
		public TerminalNode True() { return getToken(JaneParser.True, 0); }
		public TerminalNode False() { return getToken(JaneParser.False, 0); }
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
	}

	public final BoolContext bool() throws RecognitionException {
		BoolContext _localctx = new BoolContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_bool);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			_la = _input.LA(1);
			if ( !(_la==True || _la==False) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
		enterRule(_localctx, 30, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			mul();
			setState(173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Minus) {
				{
				setState(171);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Plus:
					{
					setState(167);
					match(Plus);
					setState(168);
					mul();
					}
					break;
				case Minus:
					{
					setState(169);
					match(Minus);
					setState(170);
					mul();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(175);
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
		enterRule(_localctx, 32, RULE_mul);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			term();
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Mult) {
				{
				{
				setState(177);
				match(Mult);
				setState(178);
				term();
				}
				}
				setState(183);
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
		enterRule(_localctx, 34, RULE_term);
		try {
			setState(190);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Id:
				enterOuterAlt(_localctx, 1);
				{
				setState(184);
				match(Id);
				}
				break;
			case Value:
				enterOuterAlt(_localctx, 2);
				{
				setState(185);
				match(Value);
				}
				break;
			case Lpar:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(186);
				match(Lpar);
				setState(187);
				expr();
				setState(188);
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
		"\u0004\u0001\u001e\u00c1\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001+\b"+
		"\u0001\n\u0001\f\u0001.\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u00026\b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003@\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004J\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004R\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0003\u0007^\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007c\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0003\u0007j\b\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0005\bq\b\b\n\b\f\bt\t\b\u0001\t\u0001\t\u0001\t\u0001\t\u0005\tz"+
		"\b\t\n\t\f\t}\t\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0003\n\u0087\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0005\f\u008f\b\f\n\f\f\f\u0092\t\f\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u009a\b\r\u0001\r\u0003\r\u009d"+
		"\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00a3\b\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0005"+
		"\u000f\u00ac\b\u000f\n\u000f\f\u000f\u00af\t\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0005\u0010\u00b4\b\u0010\n\u0010\f\u0010\u00b7\t\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003"+
		"\u0011\u00bf\b\u0011\u0001\u0011\u0000\u0000\u0012\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0000"+
		"\u0001\u0001\u0000\u0010\u0011\u00c7\u0000$\u0001\u0000\u0000\u0000\u0002"+
		"\'\u0001\u0000\u0000\u0000\u00045\u0001\u0000\u0000\u0000\u00067\u0001"+
		"\u0000\u0000\u0000\bA\u0001\u0000\u0000\u0000\nS\u0001\u0000\u0000\u0000"+
		"\fW\u0001\u0000\u0000\u0000\u000eY\u0001\u0000\u0000\u0000\u0010m\u0001"+
		"\u0000\u0000\u0000\u0012u\u0001\u0000\u0000\u0000\u0014~\u0001\u0000\u0000"+
		"\u0000\u0016\u0088\u0001\u0000\u0000\u0000\u0018\u008b\u0001\u0000\u0000"+
		"\u0000\u001a\u00a2\u0001\u0000\u0000\u0000\u001c\u00a4\u0001\u0000\u0000"+
		"\u0000\u001e\u00a6\u0001\u0000\u0000\u0000 \u00b0\u0001\u0000\u0000\u0000"+
		"\"\u00be\u0001\u0000\u0000\u0000$%\u0003\u0002\u0001\u0000%&\u0005\u0000"+
		"\u0000\u0001&\u0001\u0001\u0000\u0000\u0000\',\u0003\u0004\u0002\u0000"+
		"()\u0005\u001b\u0000\u0000)+\u0003\u0004\u0002\u0000*(\u0001\u0000\u0000"+
		"\u0000+.\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001\u0000"+
		"\u0000\u0000-\u0003\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000"+
		"/6\u0003\n\u0005\u000006\u0003\u0006\u0003\u000016\u0003\b\u0004\u0000"+
		"26\u0003\f\u0006\u000036\u0003\u000e\u0007\u000046\u0003\u0016\u000b\u0000"+
		"5/\u0001\u0000\u0000\u000050\u0001\u0000\u0000\u000051\u0001\u0000\u0000"+
		"\u000052\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000054\u0001\u0000"+
		"\u0000\u00006\u0005\u0001\u0000\u0000\u000078\u0005\u0006\u0000\u0000"+
		"89\u0003\u0018\f\u00009?\u0005\u0007\u0000\u0000:;\u0005\u0012\u0000\u0000"+
		";<\u0003\u0002\u0001\u0000<=\u0005\u0013\u0000\u0000=@\u0001\u0000\u0000"+
		"\u0000>@\u0003\u0004\u0002\u0000?:\u0001\u0000\u0000\u0000?>\u0001\u0000"+
		"\u0000\u0000@\u0007\u0001\u0000\u0000\u0000AB\u0005\u0003\u0000\u0000"+
		"BC\u0003\u0018\f\u0000CI\u0005\u0004\u0000\u0000DE\u0005\u0012\u0000\u0000"+
		"EF\u0003\u0002\u0001\u0000FG\u0005\u0013\u0000\u0000GJ\u0001\u0000\u0000"+
		"\u0000HJ\u0003\u0004\u0002\u0000ID\u0001\u0000\u0000\u0000IH\u0001\u0000"+
		"\u0000\u0000JK\u0001\u0000\u0000\u0000KQ\u0005\u0005\u0000\u0000LM\u0005"+
		"\u0012\u0000\u0000MN\u0003\u0002\u0001\u0000NO\u0005\u0013\u0000\u0000"+
		"OR\u0001\u0000\u0000\u0000PR\u0003\u0004\u0002\u0000QL\u0001\u0000\u0000"+
		"\u0000QP\u0001\u0000\u0000\u0000R\t\u0001\u0000\u0000\u0000ST\u0005\u001d"+
		"\u0000\u0000TU\u0005\u0014\u0000\u0000UV\u0003\u001e\u000f\u0000V\u000b"+
		"\u0001\u0000\u0000\u0000WX\u0005\b\u0000\u0000X\r\u0001\u0000\u0000\u0000"+
		"Y]\u0005\t\u0000\u0000Z[\u0003\u0012\t\u0000[\\\u0005\u001b\u0000\u0000"+
		"\\^\u0001\u0000\u0000\u0000]Z\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000"+
		"\u0000^b\u0001\u0000\u0000\u0000_`\u0003\u0010\b\u0000`a\u0005\u001b\u0000"+
		"\u0000ac\u0001\u0000\u0000\u0000b_\u0001\u0000\u0000\u0000bc\u0001\u0000"+
		"\u0000\u0000ci\u0001\u0000\u0000\u0000de\u0005\u0012\u0000\u0000ef\u0003"+
		"\u0002\u0001\u0000fg\u0005\u0013\u0000\u0000gj\u0001\u0000\u0000\u0000"+
		"hj\u0003\u0004\u0002\u0000id\u0001\u0000\u0000\u0000ih\u0001\u0000\u0000"+
		"\u0000jk\u0001\u0000\u0000\u0000kl\u0005\n\u0000\u0000l\u000f\u0001\u0000"+
		"\u0000\u0000mr\u0003\u0014\n\u0000no\u0005\u001c\u0000\u0000oq\u0003\u0014"+
		"\n\u0000pn\u0001\u0000\u0000\u0000qt\u0001\u0000\u0000\u0000rp\u0001\u0000"+
		"\u0000\u0000rs\u0001\u0000\u0000\u0000s\u0011\u0001\u0000\u0000\u0000"+
		"tr\u0001\u0000\u0000\u0000uv\u0005\u000b\u0000\u0000v{\u0003\n\u0005\u0000"+
		"wx\u0005\u001c\u0000\u0000xz\u0003\n\u0005\u0000yw\u0001\u0000\u0000\u0000"+
		"z}\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000"+
		"\u0000|\u0013\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000~\u007f"+
		"\u0005\f\u0000\u0000\u007f\u0080\u0005\u001d\u0000\u0000\u0080\u0086\u0005"+
		"\r\u0000\u0000\u0081\u0082\u0005\u0012\u0000\u0000\u0082\u0083\u0003\u0002"+
		"\u0001\u0000\u0083\u0084\u0005\u0013\u0000\u0000\u0084\u0087\u0001\u0000"+
		"\u0000\u0000\u0085\u0087\u0003\u0004\u0002\u0000\u0086\u0081\u0001\u0000"+
		"\u0000\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0087\u0015\u0001\u0000"+
		"\u0000\u0000\u0088\u0089\u0005\u000e\u0000\u0000\u0089\u008a\u0005\u001d"+
		"\u0000\u0000\u008a\u0017\u0001\u0000\u0000\u0000\u008b\u0090\u0003\u001a"+
		"\r\u0000\u008c\u008d\u0005\u000f\u0000\u0000\u008d\u008f\u0003\u001a\r"+
		"\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0092\u0001\u0000\u0000"+
		"\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000"+
		"\u0000\u0091\u0019\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000"+
		"\u0000\u0093\u00a3\u0003\u001c\u000e\u0000\u0094\u0099\u0003\u001e\u000f"+
		"\u0000\u0095\u0096\u0005\u0019\u0000\u0000\u0096\u009a\u0003\u001e\u000f"+
		"\u0000\u0097\u0098\u0005\u001a\u0000\u0000\u0098\u009a\u0003\u001e\u000f"+
		"\u0000\u0099\u0095\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000"+
		"\u0000\u009a\u00a3\u0001\u0000\u0000\u0000\u009b\u009d\u0005\u0018\u0000"+
		"\u0000\u009c\u009b\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009f\u0005\u0012\u0000"+
		"\u0000\u009f\u00a0\u0003\u0018\f\u0000\u00a0\u00a1\u0005\u0013\u0000\u0000"+
		"\u00a1\u00a3\u0001\u0000\u0000\u0000\u00a2\u0093\u0001\u0000\u0000\u0000"+
		"\u00a2\u0094\u0001\u0000\u0000\u0000\u00a2\u009c\u0001\u0000\u0000\u0000"+
		"\u00a3\u001b\u0001\u0000\u0000\u0000\u00a4\u00a5\u0007\u0000\u0000\u0000"+
		"\u00a5\u001d\u0001\u0000\u0000\u0000\u00a6\u00ad\u0003 \u0010\u0000\u00a7"+
		"\u00a8\u0005\u0016\u0000\u0000\u00a8\u00ac\u0003 \u0010\u0000\u00a9\u00aa"+
		"\u0005\u0017\u0000\u0000\u00aa\u00ac\u0003 \u0010\u0000\u00ab\u00a7\u0001"+
		"\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ac\u00af\u0001"+
		"\u0000\u0000\u0000\u00ad\u00ab\u0001\u0000\u0000\u0000\u00ad\u00ae\u0001"+
		"\u0000\u0000\u0000\u00ae\u001f\u0001\u0000\u0000\u0000\u00af\u00ad\u0001"+
		"\u0000\u0000\u0000\u00b0\u00b5\u0003\"\u0011\u0000\u00b1\u00b2\u0005\u0015"+
		"\u0000\u0000\u00b2\u00b4\u0003\"\u0011\u0000\u00b3\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b4\u00b7\u0001\u0000\u0000\u0000\u00b5\u00b3\u0001\u0000\u0000"+
		"\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6!\u0001\u0000\u0000\u0000"+
		"\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b8\u00bf\u0005\u001d\u0000\u0000"+
		"\u00b9\u00bf\u0005\u001e\u0000\u0000\u00ba\u00bb\u0005\u0012\u0000\u0000"+
		"\u00bb\u00bc\u0003\u001e\u000f\u0000\u00bc\u00bd\u0005\u0013\u0000\u0000"+
		"\u00bd\u00bf\u0001\u0000\u0000\u0000\u00be\u00b8\u0001\u0000\u0000\u0000"+
		"\u00be\u00b9\u0001\u0000\u0000\u0000\u00be\u00ba\u0001\u0000\u0000\u0000"+
		"\u00bf#\u0001\u0000\u0000\u0000\u0013,5?IQ]bir{\u0086\u0090\u0099\u009c"+
		"\u00a2\u00ab\u00ad\u00b5\u00be";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}