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

type IExample = {
  name: string;
  value: string;
  variables?: Memory;
};

const janeBasicExamples: IExample[] = [
  { name: "Factorial", value: factorialJane },
  { name: "Swap variables", value: swapVariablesJane, variables: { x: 5, y: 10 } },
];

const janeExtendedExamples: IExample[] = [
  ...janeBasicExamples,
  { name: "Procedures factorial", value: factorialProc },
  { name: "Blocks and procedures", value: blocksAndProcedures },
];

const abstractMachineExamples: IExample[] = [
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

export type SemanticMethod = "ns" | "sos";
export type ProgramLanguage = "jane" | "jane-extended" | "am";

export const semanticMethods: Array<{ name: string; value: SemanticMethod }> = [
  { name: "Natural semantics", value: "ns" },
  { name: "Structural operational semantics", value: "sos" },
];

export const programLanguages: Array<{ name: string; value: ProgramLanguage }> = [
  { name: "Jane", value: "jane" },
  { name: "Jane Extended", value: "jane-extended" },
  { name: "Abstract Machine", value: "am" },
];

export const allowedCombinations: Record<SemanticMethod, ProgramLanguage[]> = {
  ns: ["jane", "jane-extended"],
  sos: ["jane", "am"],
};

export type ProgramStorage = {
  getActiveExamples: () => IExample[];
  semanticMethod: SemanticMethod;
  setSemanticMethod: (a: SemanticMethod) => void;
  programLanguage: ProgramLanguage;
  setProgramLanguage: (l: ProgramLanguage) => void;
  programText?: string;
  setProgramText: (v?: string) => void;
  variables: Memory;
  setVariables: (m: Memory) => void;
  programId: number;
  setProgramId: (id: number) => void;
};

export const useProgramStorage = create<ProgramStorage>()(
  persist<ProgramStorage>(
    (set, get) => ({
      getActiveExamples() {
        const lang = get().programLanguage;
        switch (lang) {
          case "jane":
            return janeBasicExamples;
          case "jane-extended":
            return janeExtendedExamples;
          case "am":
            return abstractMachineExamples;
          default:
            return [];
        }
      },
      programText: "",
      variables: {},
      semanticMethod: "ns",
      setSemanticMethod: (method: SemanticMethod) => {
        set((state) => {
          return {
            semanticMethod: method,
            programLanguage: allowedCombinations[method].includes(state.programLanguage)
              ? state.programLanguage
              : allowedCombinations[method][0],
            programText: "",
            variables: {},
          };
        });
      },
      programLanguage: "jane",
      setProgramLanguage: (lang: ProgramLanguage) => {
        set((state) => {
          return {
            programLanguage: allowedCombinations[state.semanticMethod].includes(lang)
              ? lang
              : state.programLanguage,
            programText: "",
            variables: {},
          };
        });
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
