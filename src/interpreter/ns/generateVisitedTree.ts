import { JaneLexer } from "@/grammar/jane/JaneLexer";
import { JaneParser } from "@/grammar/jane/JaneParser";
import { EditorError } from "@/types";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import Visitor, { VisitorResult } from "./Visitor";

export function generateVisitedTreeNS(
  input: string,
  variables: Record<string, number>
): [VisitorResult, Visitor] {
  const errors: EditorError[] = [];

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
  const visitor = new Visitor(errors, variables);
  const visited = tree.accept(visitor) as VisitorResult;
  if (!visited) {
    throw new Error("Parsing failed");
  }

  return [visited, visitor];
}
