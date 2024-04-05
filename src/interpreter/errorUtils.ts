import { IEditorError } from "@/types";
import { ParserRuleContext } from "antlr4ts";

export class EditorError implements IEditorError {
  message: string;
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;

  constructor({ message, startLineNumber, startColumn, endLineNumber, endColumn }: IEditorError) {
    this.message = message;
    this.startLineNumber = startLineNumber;
    this.startColumn = startColumn;
    this.endLineNumber = endLineNumber;
    this.endColumn = endColumn;
  }
}

export function createIEditorError(ctx: ParserRuleContext, message: string): IEditorError {
  return new EditorError({
    message,
    startLineNumber: ctx.start.line,
    startColumn: ctx.start.charPositionInLine,
    endLineNumber: ctx.stop?.line ?? ctx.start.line,
    endColumn: ctx.stop?.charPositionInLine ?? ctx.start.charPositionInLine,
  });
}
