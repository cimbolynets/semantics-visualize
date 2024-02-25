import { Memory } from "@/types";
import { create } from "zustand";
import { withBlock } from "../examples";

export type Interpreters = "ns" | "sos" | "ds";

export type ProgramStorage = {
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
  activeInterpreter: "ns",
  setActiveInterpreter(a) {
    set((state) => ({ ...state, activeInterpreter: a }));
  },
  programText: withBlock,
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
