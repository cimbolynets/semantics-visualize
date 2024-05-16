grammar Jane;

program: instructionSequence EOF;

instructionSequence: instruction (Semicolon instruction)*;

instruction: assign | cycle | branch | skip | block | procCall;

cycle: While stats Do (Lpar instructionSequence Rpar | instruction);
branch: 
    If stats Then (Lpar instructionSequence Rpar | instruction) 
    Else (Lpar instructionSequence Rpar | instruction)
    ;
assign: Id AssignSymbol expr;
skip: Skip;
block: Begin (decl Semicolon)? (procs Semicolon)? (Lpar instructionSequence Rpar | instruction) End;
procs: procDefinition (Colon procDefinition)*;
decl: Var assign (Colon assign)*;
procDefinition: Proc Id Is (Lpar instructionSequence Rpar | instruction);
procCall: Call Id;

stats: stat (And stat)*;
stat: bool | expr (Leq expr | Eq expr) | Not? Lpar stats Rpar;
bool: True | False;
expr: mul (Plus mul | Minus mul)*;
mul: term (Mult term)*;
term: Id | Value | (Lpar expr Rpar);

Whitespace: (' ' | '\t')+ -> skip;
Newline: ('\r'? '\n' | '\r')+ -> skip;

If: 'if';
Then: 'then';
Else: 'else';
While: 'while';
Do: 'do';
Skip: 'skip';
Begin: 'begin';
End: 'end';
Var: 'var';
Proc: 'proc';
Is: 'is';
Call: 'call';
And: 'and';
True: 'true';
False: 'false';
Lpar: '(';
Rpar: ')';
AssignSymbol: ':=';
Mult: '*';
Plus: '+';
Minus: '-';
Not: '!';
Leq: '<=';
Eq: '=';
Semicolon: ';';
Colon: ',';

Id: [A-Za-z][A-Za-z0-9]*;
Value: [1-9][0-9]* | [0-9];
