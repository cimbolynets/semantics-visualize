import { IEditorPosition, Memory, StackEntry } from "@/types";

export type ProgramReturnType = InstructionSequence;

export interface InstructionSequence<Value extends InstructionValue = InstructionValue> {
  children: Instruction<Value>[];
  text: string;
  type: "instructionSequence";
}

export interface Instruction<Value extends InstructionValue = InstructionValue> {
  value: Value;
  state: Memory;
  stack: StackEntry[];
  text: string;
  position: IEditorPosition;
  type: "instruction";
}

export type InstructionType = "assign" | "cycle" | "branch" | "skip" | "block" | "procCall";

export type InstructionValue =
  | PushValue
  | AddValue
  | MultValue
  | SubValue
  | BooleanValue
  | EqValue
  | LeValue
  | AndValue
  | NegValue
  | FetchValue
  | StoreValue
  | EmptyopValue
  | BranchValue
  | LoopValue;

export type PushValue = {
  type: "push";
  text: string;
  stack: StackEntry[];
  value: number;
};

export type AddValue = {
  type: "add";
  text: string;
};

export type MultValue = {
  type: "mult";
  text: string;
};

export type SubValue = {
  type: "sub";
  text: string;
};

export type BooleanValue = {
  type: "boolean";
  value?: boolean;
  text: string;
};

export type EqValue = {
  type: "eq";
  text: string;
};

export type LeValue = {
  type: "le";
  text: string;
};

export type AndValue = {
  type: "and";
  text: string;
};

export type NegValue = {
  text: string;
  type: "neg";
};

export type FetchValue = {
  text: string;
  value: number;
  type: "fetch";
};

export type StoreValue = {
  text: string;
  value?: number;
  state?: Memory;
  type: "store";
};

export type EmptyopValue = {
  text: string;
  type: "emptyop";
};

export type BranchValue = {
  text: string;
  ifBranch: InstructionSequence;
  elBranch: InstructionSequence;
  type: "branch";
  isTrue: boolean | undefined;
};

export type LoopIteration =
  | {
      condition: true;
      conditionSequence: InstructionSequence;
      conditionResultStack: StackEntry[];
      sequence: InstructionSequence;
    }
  | {
      condition: false;
      conditionSequence: InstructionSequence;
      conditionResultStack: StackEntry[];
      sequence: undefined;
    };

export type LoopValue = {
  text: string;
  conditionText: string;
  body: string;
  iterations: Array<LoopIteration>;
  type: "loop";
  resultStack: StackEntry[];
};
