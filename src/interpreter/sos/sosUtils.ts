import { Instruction } from "../jane/types";

export function parseRestProgram(rest: Instruction[] | undefined) {
  if (!rest?.length) return "";
  return rest.map((entry) => entry.text).join("; ");
}
