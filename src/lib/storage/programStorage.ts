import { Memory } from "@/types";
import { create } from "zustand";
import {
  abstractionMachineFactorial,
  blocksAndProcedures,
  factorialProc,
  skipWhileInnerIf,
  withBlock,
  withDynamicProcedureScope,
} from "../examples";

const janeBasicExamples = [{ name: "While&If", value: skipWhileInnerIf }];

const nsExamples = [
  ...janeBasicExamples,
  { name: "Procedures factorial", value: factorialProc },
  { name: "Block", value: withBlock },
  { name: "Procedure", value: withDynamicProcedureScope },
  { name: "Blocks and procedures", value: blocksAndProcedures },
];

const sosExamples = [...janeBasicExamples];

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
        return nsExamples;
      case "sos":
        return sosExamples;
      case "as":
        return abstractMachineExamples;
      default:
        return [];
    }
  },
  activeInterpreter: "ns",
  programText: withBlock,
  setActiveInterpreter(a) {
    set((state) => ({ ...state, programText: "", activeInterpreter: a }));
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
