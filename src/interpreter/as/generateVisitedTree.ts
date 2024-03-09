import { AbstractMachineLexer } from "@/grammar/as/AbstractMachineLexer";
import { AbstractMachineParser } from "@/grammar/as/AbstractMachineParser";
import { EditorError } from "@/types";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import VisitorAS, { VisitorASResult } from "./VisitorAS";

export function generateVisitedTreeAS(
  input: string,
  variables: Record<string, number>
): [VisitorASResult, VisitorAS] | undefined {
  const errors: EditorError[] = [];

  const chars = CharStreams.fromString(input);

  const lexer = new AbstractMachineLexer(chars);
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

  const parser = new AbstractMachineParser(tokens);
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

  if(errors.length !== 0) {
    return undefined
  }

  const tree = parser.program();
  const visitor = new VisitorAS(errors, variables);
  const visited = tree.accept(visitor);
  if (!visited) {
    throw new Error("Parsing failed");
  }

  return [visited as VisitorASResult, visitor];
}
