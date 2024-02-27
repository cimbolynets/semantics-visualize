import { Memory } from "@/types";
/**
 * Merge all variables to mem1 from mem2 that are in mem1 and not in declVariables
 * @param mem1 
 * @param mem2 
 * @param declVariables 
 * @returns 
 */
export function mergeMemory(mem1: Memory, mem2: Memory, declVariables: string[] = []) {
  const result = structuredClone(mem1);
  for (const key in mem2) {
    if (!declVariables.includes(key) && key in mem1) {
      result[key] = mem2[key];
    }
  }
  return result;
}
