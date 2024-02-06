import { MSInstruction, Memory } from "@/types";
import { VisitorResult } from "./Visitor";

export interface IMakeSequence<R> {
  addAssign: <T>(instr: MSInstruction) => T;
  addCycle: <T>(instr: MSInstruction) => T;
  addBranch: <T>(instr: MSInstruction) => T;
  addSkip: <T>(instr: MSInstruction) => T;
  chooseInstruction: <T>(instr: MSInstruction) => T;
  traverse: <T>(tree: VisitorResult) => T;
  getSequence: (input: string, variables: Memory) => R;
}
