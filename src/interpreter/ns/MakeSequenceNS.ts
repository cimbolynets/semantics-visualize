// import { envp, envpa, formatCondition, s } from "@/lib/utils/format";
// import { Memory } from "@/types";
// import { IMakeSequence } from "../IMakeSequence.types";
// import { generateVisitedTreeJane } from "../jane/generateVisitedTree";
// import {
//   AssignmentValue,
//   BlockValue,
//   BranchValue,
//   CycleValue,
//   DeclarationValue,
//   Instruction,
//   InstructionSequence,
//   InstructionValue,
//   ProcCallValue,
//   ProcDefinitionValue,
//   SkipValue,
// } from "../jane/types";
// import { frac, parseState } from "./nsUtils";
// import { IConfig } from "../types";

// export class MakeSequenceNS implements IMakeSequence<IConfig[] | undefined> {
//   private states: string[];
//   private envs: string[];
//   private nextStateNumber: number;
//   private nextEnvNumber: number;
//   private nextEnvNumbersStack: number[];
//   private withoutExtensions: boolean;

//   constructor() {
//     this.states = [];
//     this.envs = [];
//     this.nextStateNumber = 0;
//     this.nextEnvNumber = 0;
//     this.nextEnvNumbersStack = [];
//     this.changeEnv([]);
//     this.nextEnvNumbersStack.push(this.nextEnvNumber);
//     this.withoutExtensions = false;
//   }

//   getStates = () => {
//     return this.states;
//   };

//   getEnvs = () => {
//     return this.envs;
//   };

//   changeState = ({ memory, startStateNumber }: { memory: Memory; startStateNumber?: number }) => {
//     this.states.push(parseState(this.nextStateNumber, memory, startStateNumber));
//     this.nextStateNumber++;
//   };

//   changeEnv = (procs: ProcDefinitionValue[]) => {
//     const formattedProcs = procs.length
//       ? String.raw`\\ ${procs.map((p) => String.raw`\quad \text{${p.text}}`).join(" \\\\ ")}\\`
//       : "";
//     this.envs.push(
//       `${envp(this.getNextEnvNumber(), this.withoutExtensions)} = [${formattedProcs}]`
//     );
//     this.nextEnvNumber++;
//   };

//   getNextEnvNumber = () => {
//     return this.nextEnvNumbersStack.at(-1) ?? 0;
//   };

//   addAssign = (instr: Instruction<AssignmentValue>, last: boolean) => {
//     let result = "";
//     if (!last) {
//       result = String.raw`\langle \text{${instr.text}},\ ${s(
//         this.nextStateNumber - 1
//       )} \rangle\ \rightarrow\ ${s(this.nextStateNumber)}`;
//     }
//     this.changeState({ memory: instr.value.state });
//     return result;
//   };

//   addCycle = (instr: Instruction<CycleValue>): string => {
//     if (instr.value.iters.length === 0) {
//       return formatCondition(instr.value.conditionText, false, this.nextStateNumber - 1);
//     }

//     const condition = formatCondition(instr.value.conditionText, true, this.nextStateNumber - 1);
//     const whileBody = this.traverse(instr.value.iters[0]);
//     const restWhile = this.traverse({
//       children: [
//         {
//           ...instr,
//           value: {
//             ...instr.value,
//             iters: instr.value.iters.slice(1),
//           },
//         },
//       ],
//       type: "instructionSequence",
//       text: "",
//     });
//     return String.raw`${whileBody},\quad ${restWhile},\quad ${condition}`;
//   };

//   addBranch = (instr: Instruction<BranchValue>): string => {
//     const stateBeforeBranch = this.nextStateNumber - 1;
//     const targetBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
//     return String.raw`${this.traverse(targetBranch)}, \quad ${formatCondition(
//       instr.value.conditionText,
//       instr.value.isTrue,
//       stateBeforeBranch
//     )}`;
//   };

//   addSkip = (instr: Instruction<SkipValue>) => {
//     return String.raw`\langle \text{${instr.text}},\ ${s(
//       this.nextStateNumber - 1
//     )} \rangle\ \rightarrow\ ${s(this.nextStateNumber - 1)}`;
//   };

//   addDecl = (decl: DeclarationValue) => {
//     const startStateNumber = this.nextStateNumber - 1;
//     const lastMemoryState = decl.assignments.at(-1)?.state;
//     if (!lastMemoryState) throw new Error("There aren't any declarations: " + decl.text);
//     const instr = String.raw`\langle \text{${decl.text}},\ ${s(
//       startStateNumber
//     )} \rangle\ \rightarrow_D\ ${s(this.nextStateNumber)}`;
//     const varTransitions = decl.assignments.reduce((acc, assignment, index) => {
//       return String.raw`${acc}${index > 0 ? ", " : ""}${assignment.id} \mapsto \mathscr{E}[\![${
//         assignment.value
//       }]\!]s`;
//     }, "");
//     const transitions = String.raw`\langle ${s(startStateNumber)}[ ${varTransitions} ],\ ${s(
//       startStateNumber
//     )} \rangle\ \rightarrow_D\ ${s(this.nextStateNumber)}`;
//     this.changeState({ memory: lastMemoryState });
//     return frac(transitions, instr);
//   };

//   addEnvUpdate = (procs: ProcDefinitionValue[]) => {
//     const text = String.raw`${envp(
//       this.getNextEnvNumber(),
//       this.withoutExtensions
//     )} = update(D_p, ${envp(this.getNextEnvNumber() - 1, this.withoutExtensions)})`;
//     this.changeEnv(procs);
//     return text;
//   };

//   addBlock = (instr: Instruction<BlockValue>) => {
//     if (!instr.value.memoryBefore || !instr.value.memoryAfter) {
//       return instr.text;
//     }
//     const seqStartStateNumber = this.nextStateNumber - 1;
//     const decl = instr.value.decl ? String.raw`${this.addDecl(instr.value.decl)}, \quad ` : "";
//     const envUpdate = instr.value.procs
//       ? String.raw`${this.addEnvUpdate(instr.value.procs)}, \quad `
//       : "";
//     this.nextEnvNumbersStack.push(this.nextEnvNumber);
//     const block = this.traverse(instr.value.body);
//     this.nextEnvNumbersStack.pop();
//     this.changeState({ memory: instr.value.memoryAfter, startStateNumber: seqStartStateNumber });
//     return String.raw`${decl}${envUpdate}${block}`;
//   };

//   addProcCall = (instr: Instruction<ProcCallValue>) => {
//     if (!instr.value.body) throw new Error("Procedure has no body");
//     const parsedBody = this.traverse(instr.value.body);
//     if (!parsedBody) throw new Error("Failed to transform procedure bo");
//     return parsedBody;
//   };

//   chooseInstruction = (instr: Instruction<InstructionValue>, last: boolean): string => {
//     let includeEnv = true;
//     let result: string;

//     switch (instr.value?.type) {
//       case "assign":
//         includeEnv = !last;
//         result = this.addAssign(instr as Instruction<AssignmentValue>, last);
//         break;
//       case "cycle":
//         includeEnv = false;
//         result = this.addCycle(instr as Instruction<CycleValue>);
//         break;
//       case "branch":
//         includeEnv = false;
//         result = this.addBranch(instr as Instruction<BranchValue>);
//         break;
//       case "skip":
//         result = this.addSkip(instr as Instruction<SkipValue>);
//         break;
//       case "block":
//         includeEnv = false;
//         result = this.addBlock(instr as Instruction<BlockValue>);
//         break;
//       case "procCall":
//         includeEnv = false;
//         result = this.addProcCall(instr as Instruction<ProcCallValue>);
//         break;
//       default:
//         throw new Error("Not an instruction: " + instr.text);
//     }
//     return (includeEnv ? envpa(this.getNextEnvNumber() - 1, this.withoutExtensions) : "") + result;
//   };

//   parseInstructionSequence = (
//     tree: InstructionSequence<InstructionValue>,
//     last: boolean
//   ): string => {
//     if (tree.children.length === 0) return "";
//     const [first, ...rest] = tree.children;
//     const firstAndRestText =
//       `\\text{${first.text}}` +
//       rest.reduce((acc: string, node: { text: string }) => acc + "; \\text{" + node.text + "}", "");
//     const currentInstruction = String.raw`${envpa(
//       this.getNextEnvNumber() - 1,
//       this.withoutExtensions
//     )} \langle ${firstAndRestText},\ ${s(this.nextStateNumber - 1)} \rangle`;

//     let resultNominator: string | undefined;
//     if (rest.length !== 0) {
//       const formattedInstruction = this.parseInstruction(first, false);
//       const formattedRestTree = this.traverse(
//         {
//           ...tree,
//           children: rest,
//         },
//         last
//       );
//       resultNominator = String.raw`${formattedInstruction},\quad ${formattedRestTree}`;
//     } else {
//       resultNominator = this.parseInstruction(first, true);
//     }

//     const resultState = s(this.nextStateNumber - 1);

//     return frac(
//       resultNominator ?? "",
//       String.raw`${currentInstruction} \rightarrow ${resultState}`
//     );
//   };

//   parseInstruction = (tree: Instruction<InstructionValue>, last: boolean): string => {
//     const result = this.chooseInstruction(tree, last);
//     return result;
//   };

//   traverse = (
//     tree: Instruction<InstructionValue> | InstructionSequence<InstructionValue>,
//     last = false
//   ): string => {
//     if (!tree) throw new Error("Tree was not provided");
//     if (tree.type === "instructionSequence") {
//       return this.parseInstructionSequence(tree, last);
//     } else if (tree.type === "instruction") {
//       return this.parseInstruction(tree, last);
//     }
//     throw new Error("Incorrect tree type");
//   };

//   getSequence(input: string, variables: Memory, noEval = false, withoutExtensions = false) {
//     const [tree] = generateVisitedTreeJane(input, variables, noEval, withoutExtensions);
//     this.withoutExtensions = withoutExtensions;
//     this.changeState({ memory: variables });
//     const res = this.traverse(tree);
//     return res ? [{ text: res }] : undefined;
//   }
// }

import { envp, envpa, formatCondition, s } from "@/lib/utils/format";
import { Memory } from "@/types";
import { IMakeSequence } from "../IMakeSequence.types";
import { generateVisitedTreeJane } from "../jane/generateVisitedTree";
import {
  AssignmentValue,
  BlockValue,
  BranchValue,
  CycleValue,
  DeclarationValue,
  Instruction,
  InstructionSequence,
  InstructionValue,
  ProcCallValue,
  ProcDefinitionValue,
  SkipValue,
} from "../jane/types";
import { frac, parseState } from "./nsUtils";
import { Leaf, Tree, Node } from "./types";

export class MakeSequenceNS implements IMakeSequence<Tree | Tree[] | undefined> {
  private states: string[];
  private envs: string[];
  private nextStateNumber: number;
  private nextEnvNumber: number;
  private nextEnvNumbersStack: number[];
  private withoutExtensions: boolean;

  constructor() {
    this.states = [];
    this.envs = [];
    this.nextStateNumber = 0;
    this.nextEnvNumber = 0;
    this.nextEnvNumbersStack = [];
    this.changeEnv([]);
    this.nextEnvNumbersStack.push(this.nextEnvNumber);
    this.withoutExtensions = false;
  }

  getStates = () => {
    return this.states;
  };

  getEnvs = () => {
    return this.envs;
  };

  changeState = ({ memory, startStateNumber }: { memory: Memory; startStateNumber?: number }) => {
    this.states.push(parseState(this.nextStateNumber, memory, startStateNumber));
    this.nextStateNumber++;
  };

  changeEnv = (procs: ProcDefinitionValue[]) => {
    const formattedProcs = procs.length
      ? String.raw`\\ ${procs.map((p) => String.raw`\quad \text{${p.text}}`).join(" \\\\ ")}\\`
      : "";
    this.envs.push(
      `${envp(this.getNextEnvNumber(), this.withoutExtensions)} = [${formattedProcs}]`
    );
    this.nextEnvNumber++;
  };

  getNextEnvNumber = () => {
    return this.nextEnvNumbersStack.at(-1) ?? 0;
  };

  addAssign = (instr: Instruction<AssignmentValue>, last: boolean): Leaf => {
    let result = "";
    if (!last) {
      result = String.raw`\langle \text{${instr.text}},\ ${s(
        this.nextStateNumber - 1
      )} \rangle\ \rightarrow\ ${s(this.nextStateNumber)}`;
    }
    this.changeState({ memory: instr.value.state });
    return { text: result };
  };

  addCycle = (instr: Instruction<CycleValue>): Tree[] => {
    if (instr.value.iters.length === 0) {
      return [
        { text: formatCondition(instr.value.conditionText, false, this.nextStateNumber - 1) },
      ];
    }

    const condition = formatCondition(instr.value.conditionText, true, this.nextStateNumber - 1);
    const whileBody = this.traverse(instr.value.iters[0]);
    const restWhile = this.traverse({
      children: [
        {
          ...instr,
          value: {
            ...instr.value,
            iters: instr.value.iters.slice(1),
          },
        },
      ],
      type: "instructionSequence",
      text: "",
    });
    return [
      ...(Array.isArray(whileBody) ? whileBody : [whileBody]),
      ...(Array.isArray(restWhile) ? restWhile : [restWhile]),
      { text: condition },
    ];
  };

  addBranch = (instr: Instruction<BranchValue>): Tree[] => {
    const stateBeforeBranch = this.nextStateNumber - 1;
    const targetBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
    const branchBody = this.traverse(targetBranch);
    return [
      ...(Array.isArray(branchBody) ? branchBody : [branchBody]),
      { text: formatCondition(instr.value.conditionText, instr.value.isTrue, stateBeforeBranch) },
    ];
  };

  addSkip = (instr: Instruction<SkipValue>): Leaf => {
    return {
      text: String.raw`\langle \text{${instr.text}},\ ${s(
        this.nextStateNumber - 1
      )} \rangle\ \rightarrow\ ${s(this.nextStateNumber - 1)}`,
    };
  };

  addDecl = (decl: DeclarationValue) => {
    const startStateNumber = this.nextStateNumber - 1;
    const lastMemoryState = decl.assignments.at(-1)?.state;
    if (!lastMemoryState) throw new Error("There aren't any declarations: " + decl.text);
    const instr = String.raw`\langle \text{${decl.text}},\ ${s(
      startStateNumber
    )} \rangle\ \rightarrow_D\ ${s(this.nextStateNumber)}`;
    const varTransitions = decl.assignments.reduce((acc, assignment, index) => {
      return String.raw`${acc}${index > 0 ? ", " : ""}${assignment.id} \mapsto \mathscr{E}[\![${
        assignment.value
      }]\!]s`;
    }, "");
    const transitions = String.raw`\langle ${s(startStateNumber)}[ ${varTransitions} ],\ ${s(
      startStateNumber
    )} \rangle\ \rightarrow_D\ ${s(this.nextStateNumber)}`;
    this.changeState({ memory: lastMemoryState });
    return frac(transitions, instr);
  };

  addEnvUpdate = (procs: ProcDefinitionValue[]) => {
    const text = String.raw`${envp(
      this.getNextEnvNumber(),
      this.withoutExtensions
    )} = update(D_p, ${envp(this.getNextEnvNumber() - 1, this.withoutExtensions)})`;
    this.changeEnv(procs);
    return text;
  };

  addBlock = (instr: Instruction<BlockValue>): Tree[] => {
    if (!instr.value.memoryBefore || !instr.value.memoryAfter) {
      return [{ text: instr.text }];
    }
    const seqStartStateNumber = this.nextStateNumber - 1;
    const decl = instr.value.decl
      ? String.raw`${this.addDecl(instr.value.decl)}`
      : undefined;
    const envUpdate = instr.value.procs
      ? String.raw`${this.addEnvUpdate(instr.value.procs)}`
      : undefined;
    this.nextEnvNumbersStack.push(this.nextEnvNumber);
    const block = this.traverse(instr.value.body);
    this.nextEnvNumbersStack.pop();
    this.changeState({ memory: instr.value.memoryAfter, startStateNumber: seqStartStateNumber });
    const result = [];
    decl && result.push({ text: decl });
    envUpdate && result.push({ text: envUpdate });
    Array.isArray(block) ? result.push(...block) : result.push(block);
    return result;
  };

  addProcCall = (instr: Instruction<ProcCallValue>) => {
    if (!instr.value.body) throw new Error("Procedure has no body");
    const parsedBody = this.traverse(instr.value.body);
    if (!parsedBody) throw new Error("Failed to transform procedure bo");
    return parsedBody;
  };

  chooseInstruction = (instr: Instruction<InstructionValue>, last: boolean): Tree | Tree[] => {
    let includeEnv = true;
    let result: Tree | Tree[];

    switch (instr.value?.type) {
      case "assign":
        includeEnv = !last;
        result = this.addAssign(instr as Instruction<AssignmentValue>, last);
        break;
      case "cycle":
        includeEnv = false;
        result = this.addCycle(instr as Instruction<CycleValue>);
        break;
      case "branch":
        includeEnv = false;
        result = this.addBranch(instr as Instruction<BranchValue>);
        break;
      case "skip":
        result = this.addSkip(instr as Instruction<SkipValue>);
        break;
      case "block":
        includeEnv = false;
        result = this.addBlock(instr as Instruction<BlockValue>);
        break;
      case "procCall":
        includeEnv = false;
        result = this.addProcCall(instr as Instruction<ProcCallValue>);
        break;
      default:
        throw new Error("Not an instruction: " + instr.text);
    }
    if (includeEnv) {
      const envStr = envpa(this.getNextEnvNumber() - 1, this.withoutExtensions);
      if (Array.isArray(result)) {
        result[0] = {
          ...result[0],
          text: envStr + result[0].text,
        };
      } else {
        result = { ...result, text: envStr + result.text };
      }
    }
    return result;
  };

  parseInstructionSequence = (tree: InstructionSequence<InstructionValue>, last: boolean): Node => {
    if (tree.children.length === 0) return { text: "", children: [] };
    const [first, ...rest] = tree.children;
    const firstAndRestText =
      `\\text{${first.text}}` +
      rest.reduce((acc: string, node: { text: string }) => acc + "; \\text{" + node.text + "}", "");
    const currentInstruction = String.raw`${envpa(
      this.getNextEnvNumber() - 1,
      this.withoutExtensions
    )} \langle ${firstAndRestText},\ ${s(this.nextStateNumber - 1)} \rangle`;

    let children = [];
    if (rest.length !== 0) {
      const instruction = this.parseInstruction(first, false);
      const restTree = this.traverse(
        {
          ...tree,
          children: rest,
        },
        last
      );
      children = [instruction, restTree];
    } else {
      children = [this.parseInstruction(first, true)];
    }
    children = children.flat();
    const resultState = s(this.nextStateNumber - 1);

    return { text: String.raw`${currentInstruction} \rightarrow ${resultState}`, children };
  };

  parseInstruction = (tree: Instruction<InstructionValue>, last: boolean): Tree | Tree[] => {
    return this.chooseInstruction(tree, last);
  };

  traverse = (
    tree: Instruction<InstructionValue> | InstructionSequence<InstructionValue>,
    last = false
  ): Tree | Tree[] => {
    if (!tree) throw new Error("Tree was not provided");
    if (tree.type === "instructionSequence") {
      return this.parseInstructionSequence(tree, last);
    } else if (tree.type === "instruction") {
      return this.parseInstruction(tree, last);
    }
    throw new Error("Incorrect tree type");
  };

  getSequence(input: string, variables: Memory, noEval = false, withoutExtensions = false) {
    const [tree] = generateVisitedTreeJane(input, variables, noEval, withoutExtensions);
    this.withoutExtensions = withoutExtensions;
    this.changeState({ memory: variables });
    const res = this.traverse(tree);
    return res;
  }
}
