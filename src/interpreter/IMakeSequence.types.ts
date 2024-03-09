import { Memory } from "@/types";

export interface IMakeSequence<R> {
  getSequence: (input: string, variables: Memory) => R;
}
