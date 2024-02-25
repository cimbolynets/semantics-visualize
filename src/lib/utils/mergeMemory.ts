import { Memory } from "@/types";

export function mergeMemory(mem1: Memory, mem2: Memory, declVariables: string[]) {
  const result = structuredClone(mem1);
  for (const key in mem2) {
    if (!declVariables.includes(key) && key in mem1) {
      result[key] = mem2[key];
    }
  }
  return result;
}
