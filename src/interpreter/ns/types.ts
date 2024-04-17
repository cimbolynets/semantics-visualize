export type Leaf = { text: string };
export type Node = { text: string; children: Tree[] };
export type Tree = Leaf | Node;
