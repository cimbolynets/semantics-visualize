import { IEditorPosition } from "@/types";
import { create } from "zustand";

export type IEditorStorage = {
  selection?: IEditorPosition;
  setSelection: (pos: IEditorPosition | undefined) => void;
};

export const useEditorStorage = create<IEditorStorage>((set) => ({
  setSelection: (pos) => set(() => ({ selection: pos })),
}));
