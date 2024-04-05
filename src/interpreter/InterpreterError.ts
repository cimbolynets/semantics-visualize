import { IEditorError } from "@/types";

export class InterpreterError extends Error {
  public errors: IEditorError[];
  constructor(message: string, errors: IEditorError[]) {
    super(message);
    this.errors = errors;
  }
}
