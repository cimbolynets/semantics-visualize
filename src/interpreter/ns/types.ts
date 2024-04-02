/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memory } from "@/types";
import { Procedure } from "./Scope";

export interface Instruction {
  text: string;
  state: Memory;
}

export type InstructionType = "assign" | "cycle" | "branch" | "skip" | "block" | "procCall";

export type TreeNode =
  | CycleInstruction
  | AssignmentInstruction
  | BlockInstruction
  | SkipInstruction
  | BranchInstruction
  | ProcCallInstruction;

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

export interface ProcDefinitionInstruction extends Instruction {
  value: {
    type: "procDefinition";
    text: string;
  };
}
export interface ProcCallInstruction extends Instruction {
  value: {
    type: "procCall";
    text: string;
    body: Instruction | Instruction[];
    memoryBefore: Memory;
    memoryAfter: Memory;
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
    memoryBefore: Memory | undefined;
    memoryAfter: Memory | undefined;
    text: string;
    decl: Declaration | undefined;
    procs: ProcDefinitionInstruction["value"][] | undefined;
    body: any | undefined;
  };
}

export type MakeSequenceState = {
  id: string;
  memory: Memory;
  startStateNumber?: number;
};
