export const janeBaseGrammar = `program: instructionSequence;

instructionSequence: instruction (";" instruction)*;

instruction: assign | cycle | branch | skip;

cycle: "while" stats "do" ("(" instructionSequence ")" | instruction);
branch: 
    "if" stats "then" ("(" instructionSequence ")" | instruction) 
    "else" ("(" instructionSequence ")" | instruction)
    ;
assign: Id ":=" expr;
skip: "skip";

stats: stat ("and" stat)*;
stat: expr ("<=" expr | "=" expr) | "not"? "(" stats ")";
expr: mul ("+" mul | "-" mul)*;
mul: term ("*" term)*;
term: Id | Value | ("(" expr ")");

Id: [A-Za-z][A-Za-z0-9]*;
Value: [1-9][0-9]* | [0-9];`;

export const janeExtendedGrammar = `program: instructionSequence;

instructionSequence: instruction (";" instruction)*;

instruction: assign | cycle | branch | skip | block | procCall;

cycle: "while" stats "do" ("(" instructionSequence ")" | instruction);
branch: 
    "if" stats "then" ("(" instructionSequence ")" | instruction) 
    "else" ("(" instructionSequence ")" | instruction)
    ;
assign: Id ":=" expr;
skip: "skip";
block: "begin" (decl ";")? (procs ";")? ("(" instructionSequence ")" | instruction) "end";
procs: procDefinition ("," procDefinition)*;
decl: "var" assign ("," assign)*;
procDefinition: "proc" Id "is" ("(" instructionSequence ")" | instruction);
procCall: "call" Id;

stats: stat ("and" stat)*;
stat: expr ("leq" expr | "eq" expr) | "not"? "(" stats ")";
expr: mul ("plus" mul | Minus mul)*;
mul: term ("mult" term)*;
term: Id | Value | ("(" expr ")");

Id: [A-Za-z][A-Za-z0-9]*;
Value: [1-9][0-9]* | [0-9];
`;
export const amGrammar = `program: instructionSequence;

instructionSequence: instruction (":" instruction)*;

instruction: push | add | mult | sub | eq | le | and | neg | fetch | store | emptyop | branch | loop | boolean;

push: "PUSH" "-" Value;
add: "ADD";
mult: "MULT";
sub: "SUB";
eq: "EQ";
le: "LE";
and: "AND";
neg: "NEG";
fetch: "FETCH" "-" Id;
store: "STORE" "-" Id;
emptyop: "EMTPYOP";
branch: "BRANCH" "(" instructionSequence "," instructionSequence  ")";
loop: "LOOP" "(" instructionSequence "," instructionSequence  ")";
boolean: "TRUE" | "FALSE";

Id: [A-Za-z][A-Za-z0-9]*;
Value: [1-9][0-9]* | [0-9];
`;
