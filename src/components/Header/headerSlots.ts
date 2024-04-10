import { ReactNode } from "react";
import { create } from "zustand";

export const useHeaderSlots = create<{
  headerSlots: ReactNode | undefined;
  setHeaderSlots: (slots: ReactNode | undefined) => void;
}>((set) => ({
  headerSlots: undefined,
  setHeaderSlots: (slots) => set({ headerSlots: slots }),
}));
