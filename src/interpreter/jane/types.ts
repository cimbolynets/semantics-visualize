/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memory } from "@/types";

export interface InstructionSequence<Value extends InstructionValue = InstructionValue> {
  children: Instruction<Value>[];
  text: string;
  type: "instructionSequence";
}

export interface Instruction<Value extends InstructionValue = InstructionValue> {
  text: string;
  state: Memory;
  value: Value;
  type: "instruction";
}

export type InstructionType = "assign" | "cycle" | "branch" | "skip" | "block" | "procCall";

export type InstructionValue =
  | CycleValue
  | AssignmentValue
  | BlockValue
  | SkipValue
  | BranchValue
  | ProcCallValue;

export interface SkipValue {
  type: "skip";
  text: string;
}

export interface BranchValue {
  type: "branch";
  conditionText: string;
  ifBranch: any;
  elBranch: any;
  isTrue: boolean;
  text: string;
}

export interface AssignmentValue {
  text: string;
  id: string;
  value: string;
  type: "assign";
  state: Memory;
}

export interface ProcDefinitionValue {
  type: "procDefinition";
  text: string;
}
export interface ProcCallValue {
  type: "procCall";
  text: string;
  body?: Instruction<InstructionValue> | InstructionSequence<InstructionValue>;
  memoryBefore?: Memory;
  memoryAfter?: Memory;
}

export interface CycleValue {
  conditionText: string;
  instrSeqText: string;
  iters: Array<Instruction<InstructionValue> | InstructionSequence<InstructionValue>>;
  text: string;
  type: "cycle";
}

export type DeclarationValue = {
  text: string;
  assignments: Array<AssignmentValue>;
  type: "decl";
};

export interface BlockValue {
  type: "block";
  memoryBefore?: Memory;
  memoryAfter?: Memory;
  procs?: ProcDefinitionValue[];
  decl?: DeclarationValue;
  body?: any;
  text: string;
}

export type MakeSequenceState = {
  id: string;
  memory: Memory;
  startStateNumber?: number;
};
