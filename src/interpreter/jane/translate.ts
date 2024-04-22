import JaneToAM from "./JaneToAM";
import { createParseTreeJane } from "./generateVisitedTree";

export const janeToAM = (program: string) => {
  const parseTree = createParseTreeJane(program);
  const translated = parseTree.accept(new JaneToAM());
  return translated;
};
