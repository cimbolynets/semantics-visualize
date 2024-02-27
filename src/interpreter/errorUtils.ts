import { ParserRuleContext } from "antlr4ts";

export function createEditorError(ctx: ParserRuleContext, message: string) {
  return {
    message,
    startLineNumber: ctx.start.line,
    startColumn: ctx.start.charPositionInLine,
    endLineNumber: ctx.stop?.line ?? ctx.start.line,
    endColumn: ctx.stop?.charPositionInLine ?? ctx.start.charPositionInLine,
  };
}
