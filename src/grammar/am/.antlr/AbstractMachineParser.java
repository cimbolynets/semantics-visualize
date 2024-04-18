// Generated from /Users/hotovo/personal/semantics-visualize/src/grammar/am/AbstractMachine.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class AbstractMachineParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Whitespace=1, Newline=2, Push=3, Add=4, Mult=5, Sub=6, Eq=7, Le=8, And=9, 
		Neg=10, Fetch=11, Store=12, Emptyop=13, Branch=14, Loop=15, Lpar=16, Rpar=17, 
		Divider=18, VarDivider=19, Colon=20, True=21, False=22, Id=23, Value=24;
	public static final int
		RULE_program = 0, RULE_instructionSequence = 1, RULE_instruction = 2, 
		RULE_push = 3, RULE_add = 4, RULE_mult = 5, RULE_sub = 6, RULE_eq = 7, 
		RULE_le = 8, RULE_and = 9, RULE_neg = 10, RULE_fetch = 11, RULE_store = 12, 
		RULE_emptyop = 13, RULE_branch = 14, RULE_loop = 15, RULE_boolean = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "instructionSequence", "instruction", "push", "add", "mult", 
			"sub", "eq", "le", "and", "neg", "fetch", "store", "emptyop", "branch", 
			"loop", "boolean"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'PUSH'", "'ADD'", "'MULT'", "'SUB'", "'EQ'", "'LE'", 
			"'AND'", "'NEG'", "'FETCH'", "'STORE'", "'EMPTYOP'", "'BRANCH'", "'LOOP'", 
			"'('", "')'", "':'", "'-'", "','", "'TRUE'", "'FALSE'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Whitespace", "Newline", "Push", "Add", "Mult", "Sub", "Eq", "Le", 
			"And", "Neg", "Fetch", "Store", "Emptyop", "Branch", "Loop", "Lpar", 
			"Rpar", "Divider", "VarDivider", "Colon", "True", "False", "Id", "Value"
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
	public String getGrammarFileName() { return "AbstractMachine.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public AbstractMachineParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public InstructionSequenceContext instructionSequence() {
			return getRuleContext(InstructionSequenceContext.class,0);
		}
		public TerminalNode EOF() { return getToken(AbstractMachineParser.EOF, 0); }
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
		public List<TerminalNode> Divider() { return getTokens(AbstractMachineParser.Divider); }
		public TerminalNode Divider(int i) {
			return getToken(AbstractMachineParser.Divider, i);
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
			while (_la==Divider) {
				{
				{
				setState(38);
				match(Divider);
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
		public PushContext push() {
			return getRuleContext(PushContext.class,0);
		}
		public AddContext add() {
			return getRuleContext(AddContext.class,0);
		}
		public MultContext mult() {
			return getRuleContext(MultContext.class,0);
		}
		public SubContext sub() {
			return getRuleContext(SubContext.class,0);
		}
		public EqContext eq() {
			return getRuleContext(EqContext.class,0);
		}
		public LeContext le() {
			return getRuleContext(LeContext.class,0);
		}
		public AndContext and() {
			return getRuleContext(AndContext.class,0);
		}
		public NegContext neg() {
			return getRuleContext(NegContext.class,0);
		}
		public FetchContext fetch() {
			return getRuleContext(FetchContext.class,0);
		}
		public StoreContext store() {
			return getRuleContext(StoreContext.class,0);
		}
		public EmptyopContext emptyop() {
			return getRuleContext(EmptyopContext.class,0);
		}
		public BranchContext branch() {
			return getRuleContext(BranchContext.class,0);
		}
		public LoopContext loop() {
			return getRuleContext(LoopContext.class,0);
		}
		public BooleanContext boolean_() {
			return getRuleContext(BooleanContext.class,0);
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
			setState(59);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Push:
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				push();
				}
				break;
			case Add:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				add();
				}
				break;
			case Mult:
				enterOuterAlt(_localctx, 3);
				{
				setState(47);
				mult();
				}
				break;
			case Sub:
				enterOuterAlt(_localctx, 4);
				{
				setState(48);
				sub();
				}
				break;
			case Eq:
				enterOuterAlt(_localctx, 5);
				{
				setState(49);
				eq();
				}
				break;
			case Le:
				enterOuterAlt(_localctx, 6);
				{
				setState(50);
				le();
				}
				break;
			case And:
				enterOuterAlt(_localctx, 7);
				{
				setState(51);
				and();
				}
				break;
			case Neg:
				enterOuterAlt(_localctx, 8);
				{
				setState(52);
				neg();
				}
				break;
			case Fetch:
				enterOuterAlt(_localctx, 9);
				{
				setState(53);
				fetch();
				}
				break;
			case Store:
				enterOuterAlt(_localctx, 10);
				{
				setState(54);
				store();
				}
				break;
			case Emptyop:
				enterOuterAlt(_localctx, 11);
				{
				setState(55);
				emptyop();
				}
				break;
			case Branch:
				enterOuterAlt(_localctx, 12);
				{
				setState(56);
				branch();
				}
				break;
			case Loop:
				enterOuterAlt(_localctx, 13);
				{
				setState(57);
				loop();
				}
				break;
			case True:
			case False:
				enterOuterAlt(_localctx, 14);
				{
				setState(58);
				boolean_();
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
	public static class PushContext extends ParserRuleContext {
		public TerminalNode Push() { return getToken(AbstractMachineParser.Push, 0); }
		public TerminalNode VarDivider() { return getToken(AbstractMachineParser.VarDivider, 0); }
		public TerminalNode Value() { return getToken(AbstractMachineParser.Value, 0); }
		public PushContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_push; }
	}

	public final PushContext push() throws RecognitionException {
		PushContext _localctx = new PushContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_push);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(Push);
			setState(62);
			match(VarDivider);
			setState(63);
			match(Value);
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
	public static class AddContext extends ParserRuleContext {
		public TerminalNode Add() { return getToken(AbstractMachineParser.Add, 0); }
		public AddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add; }
	}

	public final AddContext add() throws RecognitionException {
		AddContext _localctx = new AddContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_add);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(Add);
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
	public static class MultContext extends ParserRuleContext {
		public TerminalNode Mult() { return getToken(AbstractMachineParser.Mult, 0); }
		public MultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mult; }
	}

	public final MultContext mult() throws RecognitionException {
		MultContext _localctx = new MultContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_mult);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(Mult);
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
	public static class SubContext extends ParserRuleContext {
		public TerminalNode Sub() { return getToken(AbstractMachineParser.Sub, 0); }
		public SubContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sub; }
	}

	public final SubContext sub() throws RecognitionException {
		SubContext _localctx = new SubContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_sub);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(Sub);
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
	public static class EqContext extends ParserRuleContext {
		public TerminalNode Eq() { return getToken(AbstractMachineParser.Eq, 0); }
		public EqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eq; }
	}

	public final EqContext eq() throws RecognitionException {
		EqContext _localctx = new EqContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_eq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(Eq);
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
	public static class LeContext extends ParserRuleContext {
		public TerminalNode Le() { return getToken(AbstractMachineParser.Le, 0); }
		public LeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_le; }
	}

	public final LeContext le() throws RecognitionException {
		LeContext _localctx = new LeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_le);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(Le);
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
	public static class AndContext extends ParserRuleContext {
		public TerminalNode And() { return getToken(AbstractMachineParser.And, 0); }
		public AndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and; }
	}

	public final AndContext and() throws RecognitionException {
		AndContext _localctx = new AndContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_and);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(And);
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
	public static class NegContext extends ParserRuleContext {
		public TerminalNode Neg() { return getToken(AbstractMachineParser.Neg, 0); }
		public NegContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_neg; }
	}

	public final NegContext neg() throws RecognitionException {
		NegContext _localctx = new NegContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_neg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(Neg);
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
	public static class FetchContext extends ParserRuleContext {
		public TerminalNode Fetch() { return getToken(AbstractMachineParser.Fetch, 0); }
		public TerminalNode VarDivider() { return getToken(AbstractMachineParser.VarDivider, 0); }
		public TerminalNode Id() { return getToken(AbstractMachineParser.Id, 0); }
		public FetchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fetch; }
	}

	public final FetchContext fetch() throws RecognitionException {
		FetchContext _localctx = new FetchContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_fetch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(Fetch);
			setState(80);
			match(VarDivider);
			setState(81);
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
	public static class StoreContext extends ParserRuleContext {
		public TerminalNode Store() { return getToken(AbstractMachineParser.Store, 0); }
		public TerminalNode VarDivider() { return getToken(AbstractMachineParser.VarDivider, 0); }
		public TerminalNode Id() { return getToken(AbstractMachineParser.Id, 0); }
		public StoreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_store; }
	}

	public final StoreContext store() throws RecognitionException {
		StoreContext _localctx = new StoreContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_store);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(Store);
			setState(84);
			match(VarDivider);
			setState(85);
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
	public static class EmptyopContext extends ParserRuleContext {
		public TerminalNode Emptyop() { return getToken(AbstractMachineParser.Emptyop, 0); }
		public EmptyopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyop; }
	}

	public final EmptyopContext emptyop() throws RecognitionException {
		EmptyopContext _localctx = new EmptyopContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_emptyop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(Emptyop);
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
		public TerminalNode Branch() { return getToken(AbstractMachineParser.Branch, 0); }
		public TerminalNode Lpar() { return getToken(AbstractMachineParser.Lpar, 0); }
		public List<InstructionSequenceContext> instructionSequence() {
			return getRuleContexts(InstructionSequenceContext.class);
		}
		public InstructionSequenceContext instructionSequence(int i) {
			return getRuleContext(InstructionSequenceContext.class,i);
		}
		public TerminalNode Colon() { return getToken(AbstractMachineParser.Colon, 0); }
		public TerminalNode Rpar() { return getToken(AbstractMachineParser.Rpar, 0); }
		public BranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_branch; }
	}

	public final BranchContext branch() throws RecognitionException {
		BranchContext _localctx = new BranchContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_branch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(Branch);
			setState(90);
			match(Lpar);
			setState(91);
			instructionSequence();
			setState(92);
			match(Colon);
			setState(93);
			instructionSequence();
			setState(94);
			match(Rpar);
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
	public static class LoopContext extends ParserRuleContext {
		public TerminalNode Loop() { return getToken(AbstractMachineParser.Loop, 0); }
		public TerminalNode Lpar() { return getToken(AbstractMachineParser.Lpar, 0); }
		public List<InstructionSequenceContext> instructionSequence() {
			return getRuleContexts(InstructionSequenceContext.class);
		}
		public InstructionSequenceContext instructionSequence(int i) {
			return getRuleContext(InstructionSequenceContext.class,i);
		}
		public TerminalNode Colon() { return getToken(AbstractMachineParser.Colon, 0); }
		public TerminalNode Rpar() { return getToken(AbstractMachineParser.Rpar, 0); }
		public LoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loop; }
	}

	public final LoopContext loop() throws RecognitionException {
		LoopContext _localctx = new LoopContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_loop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(Loop);
			setState(97);
			match(Lpar);
			setState(98);
			instructionSequence();
			setState(99);
			match(Colon);
			setState(100);
			instructionSequence();
			setState(101);
			match(Rpar);
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
	public static class BooleanContext extends ParserRuleContext {
		public TerminalNode True() { return getToken(AbstractMachineParser.True, 0); }
		public TerminalNode False() { return getToken(AbstractMachineParser.False, 0); }
		public BooleanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolean; }
	}

	public final BooleanContext boolean_() throws RecognitionException {
		BooleanContext _localctx = new BooleanContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_boolean);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
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

	public static final String _serializedATN =
		"\u0004\u0001\u0018j\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0005\u0001)\b\u0001\n\u0001\f\u0001,\t\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002<\b\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0000\u0000\u0011\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0000"+
		"\u0001\u0001\u0000\u0015\u0016f\u0000\"\u0001\u0000\u0000\u0000\u0002"+
		"%\u0001\u0000\u0000\u0000\u0004;\u0001\u0000\u0000\u0000\u0006=\u0001"+
		"\u0000\u0000\u0000\bA\u0001\u0000\u0000\u0000\nC\u0001\u0000\u0000\u0000"+
		"\fE\u0001\u0000\u0000\u0000\u000eG\u0001\u0000\u0000\u0000\u0010I\u0001"+
		"\u0000\u0000\u0000\u0012K\u0001\u0000\u0000\u0000\u0014M\u0001\u0000\u0000"+
		"\u0000\u0016O\u0001\u0000\u0000\u0000\u0018S\u0001\u0000\u0000\u0000\u001a"+
		"W\u0001\u0000\u0000\u0000\u001cY\u0001\u0000\u0000\u0000\u001e`\u0001"+
		"\u0000\u0000\u0000 g\u0001\u0000\u0000\u0000\"#\u0003\u0002\u0001\u0000"+
		"#$\u0005\u0000\u0000\u0001$\u0001\u0001\u0000\u0000\u0000%*\u0003\u0004"+
		"\u0002\u0000&\'\u0005\u0012\u0000\u0000\')\u0003\u0004\u0002\u0000(&\u0001"+
		"\u0000\u0000\u0000),\u0001\u0000\u0000\u0000*(\u0001\u0000\u0000\u0000"+
		"*+\u0001\u0000\u0000\u0000+\u0003\u0001\u0000\u0000\u0000,*\u0001\u0000"+
		"\u0000\u0000-<\u0003\u0006\u0003\u0000.<\u0003\b\u0004\u0000/<\u0003\n"+
		"\u0005\u00000<\u0003\f\u0006\u00001<\u0003\u000e\u0007\u00002<\u0003\u0010"+
		"\b\u00003<\u0003\u0012\t\u00004<\u0003\u0014\n\u00005<\u0003\u0016\u000b"+
		"\u00006<\u0003\u0018\f\u00007<\u0003\u001a\r\u00008<\u0003\u001c\u000e"+
		"\u00009<\u0003\u001e\u000f\u0000:<\u0003 \u0010\u0000;-\u0001\u0000\u0000"+
		"\u0000;.\u0001\u0000\u0000\u0000;/\u0001\u0000\u0000\u0000;0\u0001\u0000"+
		"\u0000\u0000;1\u0001\u0000\u0000\u0000;2\u0001\u0000\u0000\u0000;3\u0001"+
		"\u0000\u0000\u0000;4\u0001\u0000\u0000\u0000;5\u0001\u0000\u0000\u0000"+
		";6\u0001\u0000\u0000\u0000;7\u0001\u0000\u0000\u0000;8\u0001\u0000\u0000"+
		"\u0000;9\u0001\u0000\u0000\u0000;:\u0001\u0000\u0000\u0000<\u0005\u0001"+
		"\u0000\u0000\u0000=>\u0005\u0003\u0000\u0000>?\u0005\u0013\u0000\u0000"+
		"?@\u0005\u0018\u0000\u0000@\u0007\u0001\u0000\u0000\u0000AB\u0005\u0004"+
		"\u0000\u0000B\t\u0001\u0000\u0000\u0000CD\u0005\u0005\u0000\u0000D\u000b"+
		"\u0001\u0000\u0000\u0000EF\u0005\u0006\u0000\u0000F\r\u0001\u0000\u0000"+
		"\u0000GH\u0005\u0007\u0000\u0000H\u000f\u0001\u0000\u0000\u0000IJ\u0005"+
		"\b\u0000\u0000J\u0011\u0001\u0000\u0000\u0000KL\u0005\t\u0000\u0000L\u0013"+
		"\u0001\u0000\u0000\u0000MN\u0005\n\u0000\u0000N\u0015\u0001\u0000\u0000"+
		"\u0000OP\u0005\u000b\u0000\u0000PQ\u0005\u0013\u0000\u0000QR\u0005\u0017"+
		"\u0000\u0000R\u0017\u0001\u0000\u0000\u0000ST\u0005\f\u0000\u0000TU\u0005"+
		"\u0013\u0000\u0000UV\u0005\u0017\u0000\u0000V\u0019\u0001\u0000\u0000"+
		"\u0000WX\u0005\r\u0000\u0000X\u001b\u0001\u0000\u0000\u0000YZ\u0005\u000e"+
		"\u0000\u0000Z[\u0005\u0010\u0000\u0000[\\\u0003\u0002\u0001\u0000\\]\u0005"+
		"\u0014\u0000\u0000]^\u0003\u0002\u0001\u0000^_\u0005\u0011\u0000\u0000"+
		"_\u001d\u0001\u0000\u0000\u0000`a\u0005\u000f\u0000\u0000ab\u0005\u0010"+
		"\u0000\u0000bc\u0003\u0002\u0001\u0000cd\u0005\u0014\u0000\u0000de\u0003"+
		"\u0002\u0001\u0000ef\u0005\u0011\u0000\u0000f\u001f\u0001\u0000\u0000"+
		"\u0000gh\u0007\u0000\u0000\u0000h!\u0001\u0000\u0000\u0000\u0002*;";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}