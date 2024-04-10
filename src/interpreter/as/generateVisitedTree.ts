import { AbstractMachineLexer } from "@/grammar/as/AbstractMachineLexer";
import { AbstractMachineParser } from "@/grammar/as/AbstractMachineParser";
import { IEditorError } from "@/types";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import VisitorAS, { VisitorASResult } from "./VisitorAS";
import { InterpreterError } from "../InterpreterError";

export function generateVisitedTreeAS(
  input: string,
  variables: Record<string, number>,
  noEval = false
): [VisitorASResult, VisitorAS] | undefined {
  const errors: IEditorError[] = [];

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

  const tree = parser.program();
  if (errors.length) {
    throw new InterpreterError("An error occurred during parsing", errors);
  }
  const visitor = new VisitorAS(errors, variables, noEval);
  const visited = tree.accept(visitor);

  return [visited as VisitorASResult, visitor];
}
