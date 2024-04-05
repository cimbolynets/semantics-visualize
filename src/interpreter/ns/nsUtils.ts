import { formatMemory } from "@/lib/utils/formatMemory";
import { Memory } from "@/types";
import { CycleInstruction, TreeNode } from "../jane/types";
import { s } from "@/lib/utils/format";

export const assignPattern = /(.+) +:= +(.+)/;

export function isSkipOrEmptyCycle(instr: TreeNode) {
  return (
    instr.value.type === "skip" ||
    (instr.value.type === "cycle" && (instr.value as CycleInstruction["value"]).iters.length === 0)
  );
}

export function parseState(stateNumber: number, memory: Memory, startStateNumber?: number) {
  if (typeof startStateNumber !== "number") return `${s(stateNumber)} = ${formatMemory(memory)}`;
  return String.raw`${s(stateNumber)} = ${s(stateNumber - 1)}[DV(D) \mapsto ${s(
    startStateNumber
  )}] = ${formatMemory(memory)}`;
}

export function getCurrentInstructions(text: string, stateNumber: number, sameState = false) {
  return String.raw`\langle ${text},\ ${s(stateNumber)} \rangle\ \rightarrow\ ${s(
    stateNumber + (!sameState ? 1 : 0)
  )}`;
}

export function frac(num: string, den: string, dividerThickness = 1) {
  return String.raw`\genfrac{}{}{${dividerThickness}pt}{0}{${num}}{${den}}`;
}
