import { InstructionContext } from "@/grammar/jane-extended/JaneExtendedParser";
import { JaneExtendedVisitor } from "@/grammar/jane-extended/JaneExtendedVisitor";
import { Memory } from "@/types";
import Visitor from "./Visitor";

export default class VisitorExtended
  extends Visitor
  implements JaneExtendedVisitor<object | undefined>
{
  // private blockStack: Memory[] = [];

  visitInstruction(
    ctx: InstructionContext,
    noEval = false
  ):
    | {
        value: object;
        state: Memory;
        text: string;
        type: "instruction";
      }
    | undefined {
    const state = JSON.parse(JSON.stringify(this.getMemory()));
    ctx.branch;
    let instr: ReturnType<
      | typeof this.visitBranch
      | typeof this.visitCycle
      | typeof this.visitAssign
      | typeof this.visitSkip
    >;
    if (ctx.branch()) {
      instr = this.visitBranch(ctx.branch()!, noEval);
    } else if (ctx.cycle()) {
      instr = this.visitCycle(ctx.cycle()!, noEval);
    } else if (ctx.assign()) {
      instr = this.visitAssign(ctx.assign()!, noEval);
      // } else if (ctx.block()) {
      //   instr = this.visitBlock(ctx.block()!, noEval);
    } else {
      instr = this.visitSkip(ctx.skip()!);
    }
    if (!instr) return undefined;
    return {
      value: instr,
      state,
      text: instr.text,
      type: "instruction",
    };
  }

  // visitBlock(ctx: BlockContext, noEval?: boolean) {
  //   if (noEval) {
  //     return {
  //       type: "block",
  //       text: `begin ${ctx.decl().text}; ${
  //         ctx.instructionSequence()
  //           ? this.visitInstructionSequence(ctx.instructionSequence()!, true)
  //           : this.visitInstruction(ctx.instruction()!, true)
  //       } end`,
  //     };
  //   }

  //   this.blockStack.push({ ...this.getMemory() });

  //   const memoryBefore = this.getMemory();
  //   const decl = this.visitDecl(ctx.decl());
  //   const body = ctx.instructionSequence()
  //     ? this.visitInstructionSequence(ctx.instructionSequence()!)
  //     : this.visitInstruction(ctx.instruction()!);

  //   const memoryAfter = merge(this.blockStack.pop(), this.getMemory());
  //   this.setMemory(memoryAfter);

  //   return {
  //     type: "block",
  //     text:
  //   }
  // }
}
