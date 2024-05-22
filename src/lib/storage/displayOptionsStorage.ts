import { create } from "zustand";
import { persist } from "zustand/middleware";

export type IOutputOptionsStorage = {
  breakLines: boolean;
  setBreakLines: (breakLines: boolean) => void;
};

export const useOutputOptionsStorage = create<IOutputOptionsStorage>()(
  persist(
    (set) => ({
      breakLines: true,
      setBreakLines: (breakLines) => set(() => ({ breakLines })),
    }),
    { name: "output-options-storage" }
  )
);
