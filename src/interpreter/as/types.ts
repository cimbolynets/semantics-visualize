import { Memory, StackEntry } from "@/types";

export type ProgramReturnType = InstructionSequenceReturnType;

export type InstructionSequenceReturnType = {
  children: InstructionReturnType[];
  text: string;
  type: "instructionSequence";
};

export type InstructionReturnType = {
  value:
    | PushReturnType
    | AddReturnType
    | MultReturnType
    | SubReturnType
    | BooleanReturnType
    | EqReturnType
    | LeReturnType
    | AndReturnType
    | NegReturnType
    | FetchReturnType
    | StoreReturnType
    | EmptyopReturnType
    | BranchReturnType
    | LoopReturnType;
  state: Memory;
  stack: StackEntry[];
  text: string;
  type: "instruction";
};

export type PushReturnType = {
  type: "push";
  text: string;
  stack: StackEntry[];
  value: number;
};

export type AddReturnType = {
  type: "add";
  text: string;
};

export type MultReturnType = {
  type: "mult";
  text: string;
};

export type SubReturnType = {
  type: "sub";
  text: string;
};

export type BooleanReturnType = {
  type: "boolean";
  value?: boolean;
  text: string;
};

export type EqReturnType = {
  type: "eq";
  text: string;
};

export type LeReturnType = {
  type: "le";
  text: string;
};

export type AndReturnType = {
  type: "and";
  text: string;
};

export type NegReturnType = {
  text: string;
  type: "neg";
};

export type FetchReturnType = {
  text: string;
  value: number;
  type: "fetch";
};

export type StoreReturnType = {
  text: string;
  value?: number;
  state?: Memory;
  type: "store";
};

export type EmptyopReturnType = {
  text: string;
  type: "emptyop";
};

export type BranchReturnType = {
  text: string;
  ifBranch: InstructionSequenceReturnType;
  elBranch: InstructionSequenceReturnType;
  type: "branch";
  isTrue: boolean | undefined;
};

export type LoopReturnType = {
  text: string;
  condition: string;
  body: string;
  iterations: InstructionSequenceReturnType[];
  type: "loop";
};
