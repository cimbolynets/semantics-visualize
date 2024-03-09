import { formatMemory } from "@/lib/utils/formatMemory";
import { Memory } from "@/types";
import { CycleInstruction, TreeNode } from "./types";

export const assignPattern = /(.+) +:= +(.+)/;

export function isSkipOrEmptyCycle(instr: TreeNode) {
  return (
    instr.value.type === "skip" ||
    (instr.value.type === "cycle" && (instr.value as CycleInstruction["value"]).iters.length === 0)
  );
}

export function parseState(stateNumber: number, memory: Memory, startStateNumber?: number) {
  if (!startStateNumber) return `s_{${stateNumber}} = ${formatMemory(memory)}`;
  return String.raw`s_{${stateNumber}} = s_{${
    stateNumber - 1
  }}[DV(D) \mapsto s_{${startStateNumber}}] = ${formatMemory(memory)}`;
}

export function getCurrentInstructions(text: string, stateNumber: number, sameState = false) {
  return String.raw`\langle ${text},\ s_{${stateNumber}} \rangle\ \rightarrow\ s_{${
    stateNumber + (!sameState ? 1 : 0)
  }}`;
}

export function formatCondition(text: string, isTrue: boolean, stateNumber: number) {
  return String.raw`\mathscr{B}[\![ ${text} ]\!]s_{${stateNumber}} = \textbf{${
    isTrue ? "tt" : "ff"
  }}`;
}

export function frac(num: string, den: string, dividerThickness = 1) {
  return String.raw`\genfrac{}{}{${dividerThickness}pt}{0}{${num}}{${den}}`;
}
