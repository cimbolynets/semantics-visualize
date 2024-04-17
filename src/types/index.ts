import { IRange } from "monaco-editor";

export type IEditorPosition = IRange;

export interface IEditorError extends IEditorPosition {
  message: string;
}

export type StackEntry = string | number | boolean;

export type Memory = Record<string, number>;

export type IfConfig = {
  instruction: string;
  condition: {
    condition: boolean;
    conditionText: string;
    stateNumber: number;
  } | null;
  stateNumber: number;
};

export type MSInstruction = {
  text: string;
  state: Memory;
  type: string;
  value?: {
    type: string;
  };
};

export type MSAssign = {
  text: string;
  state: Memory;
  type: string;
  value: {
    type: string;
  };
};
