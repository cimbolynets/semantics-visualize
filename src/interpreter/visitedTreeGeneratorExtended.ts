import { JaneExtendedLexer } from "@/grammar/jane-extended/JaneExtendedLexer";
import { JaneExtendedParser } from "@/grammar/jane-extended/JaneExtendedParser";
import { EditorError } from "@/types";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import Visitor, { VisitorResult } from "./Visitor";
import VisitorExtended from "./VisitorExtended";

export default function generateVisitedTreeExtended(
  input: string,
  variables: Record<string, number>
): [VisitorResult, Visitor] {
  const errors: EditorError[] = [];

  const chars = CharStreams.fromString(input);

  const lexer = new JaneExtendedLexer(chars);
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

  const parser = new JaneExtendedParser(tokens);
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
  const visitor = new VisitorExtended(errors, variables);
  const visited = tree.accept(visitor) as VisitorResult;
  if (!visited) {
    throw new Error("Parsing failed");
  }
  return [visited, visitor];
}
