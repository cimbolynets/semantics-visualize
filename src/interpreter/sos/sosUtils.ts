import { text } from "@/lib/utils/format";
import { TreeNode } from "../jane/types";

export function parseRestProgram(rest: TreeNode[] | undefined) {
  if (!rest?.length) return "";
  return rest.map((entry) => text(entry.text)).join("; ");
}
