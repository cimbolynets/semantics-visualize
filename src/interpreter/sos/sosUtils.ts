import { TreeNode } from "../jane/types";

export function parseRestProgram(rest: TreeNode[] | undefined) {
  if (!rest?.length) return "";
  return String.raw`\text{${rest.map((entry) => entry.text).join("; ")}}`;
}
