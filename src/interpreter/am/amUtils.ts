import { formatMemory } from "@/lib/utils/format";
import { Memory, StackEntry } from "@/types";
import { s } from "@/lib/utils/format";
import { Instruction } from "./types";

export function parseStack(stack: StackEntry[]) {
  return (
    (stack.length
      ? stack
          .toReversed()
          .map((entry) => String.raw`\textbf{${entry}}`)
          .join(":") + ":"
      : "") + String.raw`\mathscr{e}`
  );
}

export function parseState(stateNumber: number, memory: Memory) {
  return String.raw`${s(stateNumber)} = ${formatMemory(memory)}`;
}

export function parseRestProgram(rest: Instruction[] | undefined) {
  if (!rest?.length) return "";
  return rest.map((entry) => entry.text).join(":");
}
