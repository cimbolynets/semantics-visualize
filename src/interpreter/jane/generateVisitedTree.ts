import { JaneLexer } from "@/grammar/jane/JaneLexer";
import { JaneParser } from "@/grammar/jane/JaneParser";
import { IEditorError } from "@/types";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { InterpreterError } from "../InterpreterError";
import Visitor, { VisitorResult } from "./Visitor";
import { InstructionSequence } from "./types";

export function generateVisitedTreeJane(
  input: string,
  variables: Record<string, number>
): [VisitorResult, Visitor] {
  const errors: IEditorError[] = [];

  const chars = CharStreams.fromString(input);

  const lexer = new JaneLexer(chars);
  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError: (_, __, line, column, msg) => {
      errors.push({
        message: `Line ${line}, col ${column}: ${msg}`,
        startLineNumber: line,
        startColumn: column + 1,
        endLineNumber: line,
        endColumn: column + 1,
      });
    },
  });
  const tokens = new CommonTokenStream(lexer);

  const parser = new JaneParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: (_, __, line, column, msg) => {
      errors.push({
        message: `Line ${line}, col ${column}: ${msg}`,
        startLineNumber: line,
        startColumn: column + 1,
        endLineNumber: line,
        endColumn: column + 1,
      });
    },
  });
  parser.buildParseTree = true;

  
  const tree = parser.program();

  if (errors.length) {
    throw new InterpreterError("An error occurred during parsing", errors);
  }
  const visitor = new Visitor(errors, variables);
  const visited = tree.accept(visitor) as InstructionSequence;

  return [visited, visitor];
}
