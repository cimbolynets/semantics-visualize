/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memory } from "@/types";

export interface Instruction {
  text: string;
  state: Memory;
}

export type InstructionType = "assign" | "cycle" | "branch" | "skip" | "block";

export type TreeNode =
  | CycleInstruction
  | AssignmentInstruction
  | BlockInstruction
  | SkipInstruction
  | BranchInstruction;

export interface SkipInstruction extends Instruction {
  value: {
    type: "skip";
    text: string;
  };
}

export interface BranchInstruction extends Instruction {
  value: {
    type: "branch";
    conditionText: string;
    ifBranch: any;
    elBranch: any;
    isTrue: boolean;
    text: string;
  };
}

export interface AssignmentInstruction extends Instruction {
  value: {
    text: string;
    id: string;
    value: string;
    type: "assign";
    state: Memory;
  };
}

export interface CycleInstruction extends Instruction {
  value: {
    conditionText: string;
    instrSeqText: string;
    iters: any[];
    text: string;
    type: "cycle";
  };
}

export type Declaration = {
  text: string;
  assignments: Array<AssignmentInstruction["value"]>;
  type: "decl";
};

export interface BlockInstruction extends Instruction {
  value: {
    type: "block";
    memoryBefore: Memory;
    memoryAfter: Memory;
    text: string;
    decl: Declaration;
    body: any;
  };
}

export type MakeSequenceState = {
  id: string;
  memory: Memory;
  startStateNumber?: number;
};
