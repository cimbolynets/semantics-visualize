import { s } from "@/lib/utils/format";
import { formatMemory } from "@/lib/utils/formatMemory";
import { Memory } from "@/types";
import { CycleValue, Instruction } from "../jane/types";

export const assignPattern = /(.+) +:= +(.+)/;

export function isSkipOrEmptyCycle(instr: Instruction) {
  return (
    instr.value.type === "skip" ||
    (instr.value.type === "cycle" && (instr.value as CycleValue).iters.length === 0)
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

export function frac0(num: string, den: string) {
  return String.raw`\genfrac{}{}{0pt}{0}{${num}}{${den}}`;
}

const fracPattern = /\\genfrac/g;

export function balanceTrees(tree1: string, tree2: string) {
  const numHeight = [...tree1.matchAll(fracPattern)].length;
  const denHeight = [...tree2.matchAll(fracPattern)].length;
  tree1 = numHeight < denHeight ? frac0("", tree1) : tree1;
  tree2 = numHeight > denHeight ? frac0("", tree2) : tree2;
  return [tree1, tree2];
}

export function frac(num: string, den: string, dividerThickness = 1) {
  return String.raw`\genfrac{}{}{${dividerThickness}pt}{0}{${num}}{${den}}`;
}
