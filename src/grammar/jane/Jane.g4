grammar Jane;

program: instructionSequence EOF;

instructionSequence: instruction (Semicolon instruction)*;

instruction: assign | cycle | branch | skip;

cycle: While stats Do (Lpar instructionSequence Rpar | instruction);
branch: 
    If stats Then (Lpar instructionSequence Rpar | instruction) 
    Else (Lpar instructionSequence Rpar | instruction)
    ;
assign: Id AssignSymbol expr;
skip: Skip;

stats: stat (And stat)*;
stat: expr (Leq expr | Eq expr) | Not? Lpar stats Rpar;
expr: mul (Plus mul | Minus mul)*;
mul: term (Mult term)*;
term: Id | Value | (Lpar expr Rpar);

Whitespace: (' ' | '\t')+ -> skip;
Newline: ('\r'? '\n' | '\r')+ -> skip;

Skip: 'skip';
Lpar: '(';
Rpar: ')';
And: 'and';
AssignSymbol: ':=';
While: 'while';
Do: 'do';
Then: 'then';
If: 'if';
Else: 'else';
Mult: '*';
Plus: '+';
Minus: '-';
Not: '!';
Leq: '<=';
Eq: '=';
Semicolon: ';';
Id: [A-Za-z][A-Za-z0-9]*;
Value: [1-9][0-9]* | [0-9];