grammar AbstractMachine;

program: instructionSequence EOF;

instructionSequence: instruction (Divider instruction)*;

instruction: push | add | mult | sub | eq | le | and | neg | fetch | store | emptyop | branch | loop | boolean;

push: Push VarDivider Value;
add: Add;
mult: Mult;
sub: Sub;
eq: Eq;
le: Le;
and: And;
neg: Neg;
fetch: Fetch VarDivider Id;
store: Store VarDivider Id;
emptyop: Emptyop;
branch: Branch Lpar instructionSequence Colon instructionSequence  Rpar;
loop: Loop Lpar instructionSequence Colon instructionSequence  Rpar;
boolean: True | False;

Whitespace: (' ' | '\t')+ -> skip;
Newline: ('\r'? '\n' | '\r')+ -> skip;

Push: 'PUSH';
Add: 'ADD';
Mult: 'MULT';
Sub: 'SUB';
Eq: 'EQ';
Le: 'LE';
And: 'AND';
Neg: 'NEG';
Fetch: 'FETCH';
Store: 'STORE';
Emptyop: 'EMPTYOP';
Branch: 'BRANCH';
Loop: 'LOOP';
Lpar: '(';
Rpar: ')';
Divider: ':';
VarDivider: '-';
Colon: ',';
True: 'TRUE';
False: 'FALSE';

Id: [A-Za-z][A-Za-z0-9]*;
Value: [1-9][0-9]* | [0-9];
