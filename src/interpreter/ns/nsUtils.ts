import { T, s } from "@/lib/utils/format";
import { formatMemory } from "@/lib/utils/format";
import { Memory } from "@/types";
import { Leaf, Node, Tree } from "./types";
import { addKeywordsPaddingJane } from "@/lib/utils/padding";

export function parseState(stateNumber: number, memory: Memory, startStateNumber?: number) {
  if (typeof startStateNumber !== "number") return `${s(stateNumber)} = ${formatMemory(memory)}`;
  return String.raw`${s(stateNumber)} = ${s(stateNumber - 1)}[DV(D) \mapsto ${s(
    startStateNumber
  )}] = ${formatMemory(memory)}`;
}

export function frac0(num: string, den: string) {
  return String.raw`\genfrac{}{}{0pt}{0}{${num}}{${den}}`;
}

export function frac(num: string, den: string, dividerThickness = 1) {
  return String.raw`\genfrac{}{}{${dividerThickness}pt}{0}{${num}}{${den}}`;
}

export const treeToStringRecursive = (tree: Tree | Tree[]): string => {
  if (!Array.isArray(tree)) {
    return "children" in tree ? frac(treeToStringRecursive(tree.children), tree.text) : tree.text;
  }
  const trees = tree.map((node) => treeToStringRecursive(node));
  return trees.join(" ,\\quad ");
};

export const treeToString = (tree: Tree | Tree[]): string => {
  return addKeywordsPaddingJane(treeToStringRecursive(tree));
};

function transformLeaf(leaf: Leaf): string {
  return leaf.text;
}

function transformNode(node: Node, currentTreeNumber: number): string[] {
  const [first, ...rest] = node.children;
  const [firstTransformed, ...firstRest] = transformTree(first, currentTreeNumber);
  const transformedRest: string[] = [];
  transformedRest.push(...firstRest);
  const currentInstruction = frac(
    [
      firstTransformed,
      ...rest.map((c) => {
        if ("children" in c) {
          const result = T(currentTreeNumber + transformedRest.length + 1);
          transformedRest.push(...transformTree(c, currentTreeNumber + transformedRest.length + 1));
          return result;
        }
        return transformLeaf(c);
      }),
    ].join(", \\quad "),
    node.text
  );
  return [currentInstruction, ...transformedRest];
}

function transformTree(tree: Tree | Tree[], currentTreeNumber: number): string[] {
  const treeArr = Array.isArray(tree) ? tree : [tree];
  return treeArr
    .map((node, i) => {
      return "children" in node ? transformNode(node, currentTreeNumber + i) : transformLeaf(node);
    })
    .flat();
}

export const treeToSequence = (tree: Tree | Tree[]): string[] => {
  return transformTree(tree, 1).map((substitution, i) =>
    addKeywordsPaddingJane(String.raw`${T(i + 1)} = ${substitution} \\ \quad`)
  );
};
