import { Memory } from "@/types";
import { create } from "zustand";
import {
  skipWhileInnerIf,
  withBlock,
  withDynamicProcedureScope,
  blocksAndProcedures,
  abstractionMachineFactorial,
} from "../examples";

const janeExamples = [
  { name: "While&If", value: skipWhileInnerIf },
  { name: "Block", value: withBlock },
  { name: "Procedure", value: withDynamicProcedureScope },
  { name: "Blocks and procedures", value: blocksAndProcedures },
];

const abstractMachineExamples = [
  { name: "Abstract machine factorial", value: abstractionMachineFactorial },
];

export type Interpreters = "ns" | "sos" | "as";

export type ProgramStorage = {
  getActiveExamples: () => Array<{ name: string; value: string }>;
  activeInterpreter: Interpreters;
  setActiveInterpreter: (a: Interpreters) => void;
  programText?: string;
  setProgramText: (v?: string) => void;
  variables: Memory;
  setVariables: (m: Memory) => void;
  programId: number;
  setProgramId: (id: number) => void;
};

export const useProgramStorage = create<ProgramStorage>((set) => ({
  getActiveExamples() {
    switch (this.activeInterpreter) {
      case "ns":
      case "sos":
        return janeExamples;
      case "as":
        return abstractMachineExamples;
      default:
        return [];
    }
  },
  activeInterpreter: "as",
  programText: abstractionMachineFactorial,
  setActiveInterpreter(a) {
    set((state) => ({ ...state, activeInterpreter: a }));
  },
  setProgramText(v) {
    set((state) => ({ ...state, programText: v }));
  },
  variables: {},
  setVariables(m) {
    set((state) => ({ ...state, variables: m }));
  },
  programId: 0,
  setProgramId(id) {
    set((state) => ({ ...state, programId: id }));
  },
}));
