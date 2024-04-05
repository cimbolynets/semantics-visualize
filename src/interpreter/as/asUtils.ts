import { formatMemory } from "@/lib/utils/formatMemory";
import { Memory, StackEntry } from "@/types";
import { InstructionReturnType } from "./types";
import { s } from "@/lib/utils/format";

export function parseStack(stack: StackEntry[]) {
  return (
    (stack.length
      ? stack
          .toReversed()
          .map((entry) => String.raw`\textbf{${entry}}`)
          .join("\\nobreak:\\nobreak") + "\\nobreak:\\nobreak"
      : "") + String.raw`\mathscr{e}`
  );
}

export function parseState(stateNumber: number, memory: Memory) {
  return String.raw`${s(stateNumber)} = ${formatMemory(memory)}`;
}

export function parseRestProgram(rest: InstructionReturnType[] | undefined) {
  if (!rest?.length) return "";
  return rest.map((entry) => entry.text).join(":");
}
