import { Memory } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  abstractMachineFactorial,
  abstractMachineFibonacci,
  blocksAndProcedures,
  factorialJane,
  factorialProc,
  findMiddleValue,
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
  { name: "Find middle", value: findMiddleValue, variables: { x: 5, y: 10, z: 6 } },
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

const initialState: ProgramStorageState = {
  semanticMethod: "ns",
  programLanguage: "jane",
  programText: "",
  variables: {},
  programId: 0,
};

export type ProgramStorageState = {
  semanticMethod: SemanticMethod;
  programLanguage: ProgramLanguage;
  programText?: string;
  variables: Memory;
  programId: number;
};

export type ProgramStorage = ProgramStorageState & {
  getActiveExamples: () => IExample[];
  setSemanticMethod: (a: SemanticMethod) => void;
  setProgramLanguage: (l: ProgramLanguage) => void;
  setProgramText: (v?: string) => void;
  setVariables: (m: Memory) => void;
  setProgramId: (id: number) => void;
  reset: () => void;
};

export const useProgramStorage = create<ProgramStorage>()(
  persist<ProgramStorage>(
    (set, get) => ({
      ...initialState,
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
      reset() {
        set(() => ({ ...initialState }));
      },
    }),
    {
      name: "program-storage",
    }
  )
);
