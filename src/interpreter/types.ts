import { Memory } from "@/types";

export type InstructionType = "assign" | "cycle" | "branch" | "skip";

export type TreeNode =
  | {
      text: string;
      value: {
        text: string;
        type: InstructionType;
      };
    }
  | CycleInstruction;

export type CycleInstruction = {
  text: string;
  value: {
    conditionText: string;
    instrSeqText: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iters: any[];
    text: string;
    type: "cycle";
  };
};

export type MakeSequenceState = {
  id: string;
  memory: Memory;
};
