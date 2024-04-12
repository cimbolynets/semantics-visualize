import { Memory } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  abstractMachineFactorial,
  abstractMachineFibonacci,
  blocksAndProcedures,
  factorialJane,
  factorialProc,
  swapVariablesJane,
} from "../examples";

const janeBasicExamples = [
  { name: "Factorial", value: factorialJane },
  { name: "Swap variables", value: swapVariablesJane, variables: { x: 5, y: 10 } },
];

const nsExamples = [
  ...janeBasicExamples,
  { name: "Procedures factorial", value: factorialProc },
  { name: "Blocks and procedures", value: blocksAndProcedures },
];

const sosExamples = [...janeBasicExamples];

const abstractMachineExamples = [
  {
    name: "Factorial",
    value: abstractMachineFactorial,
    variables: { x: 1, y: 3 },
  },
  {
    name: "Fibonacci",
    value: abstractMachineFibonacci,
    variables: { length: 7, current: 1, prev: 0, fibNumber: 0 },
  },
];

export type Interpreters = "ns" | "sos" | "am";

export type ProgramStorage = {
  getActiveExamples: () => Array<{ name: string; value: string; variables?: Memory }>;
  activeInterpreter: Interpreters;
  setActiveInterpreter: (a: Interpreters) => void;
  programText?: string;
  setProgramText: (v?: string) => void;
  variables: Memory;
  withExtensions: boolean;
  setWithExtensions: (v: boolean) => void;
  setVariables: (m: Memory) => void;
  programId: number;
  setProgramId: (id: number) => void;
};

export const useProgramStorage = create<ProgramStorage>()(
  persist<ProgramStorage>(
    (set, get) => ({
      getActiveExamples() {
        switch (this.activeInterpreter) {
          case "ns":
            return get().withExtensions ? nsExamples : janeBasicExamples;
          case "sos":
            return sosExamples;
          case "am":
            return abstractMachineExamples;
          default:
            return [];
        }
      },
      activeInterpreter: "ns",
      programText: "",
      variables: {},
      withExtensions: false,
      setWithExtensions(withExtensions) {
        set(() => ({ withExtensions }));
      },
      setActiveInterpreter(a) {
        set(() => ({ programText: "", activeInterpreter: a }));
      },
      setProgramText(v) {
        set(() => ({ programText: v }));
      },
      setVariables(m) {
        set(() => ({ variables: m }));
      },
      programId: 0,
      setProgramId(id) {
        set(() => ({ programId: id }));
      },
    }),
    {
      name: "program-storage",
    }
  )
);
