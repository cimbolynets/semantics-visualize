import { Memory } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  abstractionMachineFactorial,
  blocksAndProcedures,
  factorialJane,
  factorialProc,
} from "../examples";

const janeBasicExamples = [{ name: "Factorial", value: factorialJane }];

const nsExamples = [
  ...janeBasicExamples,
  { name: "Procedures factorial", value: factorialProc },
  { name: "Blocks and procedures", value: blocksAndProcedures },
];

const sosExamples = [...janeBasicExamples];

const abstractMachineExamples = [
  {
    name: "Abstract machine factorial",
    value: abstractionMachineFactorial,
    variables: { x: 1, y: 3 },
  },
];

export type Interpreters = "ns" | "sos" | "as";

export type ProgramStorage = {
  getActiveExamples: () => Array<{ name: string; value: string; variables?: Memory }>;
  activeInterpreter: Interpreters;
  setActiveInterpreter: (a: Interpreters) => void;
  programText?: string;
  setProgramText: (v?: string) => void;
  variables: Memory;
  setVariables: (m: Memory) => void;
  programId: number;
  setProgramId: (id: number) => void;
};

export const useProgramStorage = create<ProgramStorage>()(
  persist<ProgramStorage>(
    (set) => ({
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
      programText: "",
      variables: {},
      setActiveInterpreter(a) {
        set((state) => ({ ...state, programText: "", activeInterpreter: a }));
      },
      setProgramText(v) {
        set((state) => ({ ...state, programText: v }));
      },
      setVariables(m) {
        set((state) => ({ ...state, variables: m }));
      },
      programId: 0,
      setProgramId(id) {
        set((state) => ({ ...state, programId: id }));
      },
    }),
    {
      name: "program-storage",
    }
  )
);
