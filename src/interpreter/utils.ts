import { IEditorPosition } from "@/types";
import { ParserRuleContext } from "antlr4ts";

export function extractPositionFromCtx(ctx: ParserRuleContext): IEditorPosition {
  if (
    ctx.start.charPositionInLine === ctx.stop?.charPositionInLine &&
    ctx.start.line === ctx.stop.line
  ) {
    return {
      startLineNumber: ctx.start.line,
      startColumn: ctx.start.charPositionInLine + 1,
      endLineNumber: ctx.stop?.line ?? ctx.start.line,
      endColumn: ctx.start.charPositionInLine + (ctx.start.stopIndex - ctx.start.startIndex) + 2,
    };
  }

  return {
    startLineNumber: ctx.start.line,
    startColumn: ctx.start.charPositionInLine + 1,
    endLineNumber: ctx.stop?.line ?? ctx.start.line,
    endColumn: (ctx.stop?.charPositionInLine ?? ctx.start.charPositionInLine) + 2,
  };
}
