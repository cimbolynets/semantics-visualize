grammar JaneExtended;
import Jane;

instruction: assign | cycle | branch | skip | block;
block: Begin decl Semicolon (Lpar instructionSequence Rpar | instruction) End;
decl: Var assign (Semicolon assign)*;

Begin: 'begin';
End: 'end';
Var: 'var';
