import { create } from "zustand";

export type IOutputState = {
  sequence?: string[];
  states?: string[];
  envs?: string[];
};

export type IOutputStorage = IOutputState & {
  setOutput: (o: IOutputState) => void;
  setSequence: (s: string[] | undefined) => void;
  setStates: (s: string[] | undefined) => void;
  setEnvs: (e: string[] | undefined) => void;
};

export const useOutputStorage = create<IOutputStorage>((set) => ({
  setSequence: (s) => set(() => ({ sequence: s })),
  setStates: (s) => set(() => ({ states: s })),
  setEnvs: (e) => set(() => ({ envs: e })),
  setOutput: (o: IOutputState) => set(() => o),
}));
