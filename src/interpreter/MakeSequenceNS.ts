/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memory } from "@/types";
import { formatCondition, getCurrentInstructions, isSkipOrEmptyCycle, parseState } from "./nsUtils";
import { CycleInstruction, MakeSequenceState, TreeNode } from "./types";
import generateVisitedTree from "./visitedTreeGenerator";

export class MakeSequenceNS {
  private states: MakeSequenceState[];
  private stateNumber: number;

  constructor() {
    this.states = [];
    this.stateNumber = 0;
  }

  getStates = () => {
    return this.states;
  };

  addAssign = (instr: any, last: boolean) => {
    let result = "";
    if (!last) {
      result = String.raw`\langle ${instr.text},\ ${parseState(
        this.stateNumber
      )} \rangle\ \rightarrow\ ${parseState(this.stateNumber + 1)}`;
    }
    this.states.push({
      id: `s_${this.stateNumber}`,
      memory: instr.state,
    });
    this.stateNumber++;
    return result;
  };

  addCycle = (instr: CycleInstruction): string => {
    if (instr.value.iters.length === 0) {
      return formatCondition(instr.value.conditionText, false, this.stateNumber);
    }

    const condition = formatCondition(instr.value.conditionText, true, this.stateNumber);
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
    });
    return String.raw`${whileBody},\quad ${restWhile},\quad ${condition}`;
  };

  addBranch = (instr: {
    value: { conditionText: string; ifBranch: any; elBranch: any; isTrue: boolean; text: string };
  }): string => {
    const stateBeforeBranch = this.stateNumber;
    const targetBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
    return String.raw`${this.traverse(targetBranch)}, \quad ${formatCondition(
      instr.value.conditionText,
      instr.value.isTrue,
      stateBeforeBranch
    )}`;
  };

  addSkip = (instr: any) => {
    return String.raw`\langle \text{${instr.text}},\ s_${this.stateNumber} \rangle\ \rightarrow\ s_${this.stateNumber}`;
  };

  chooseInstruction = (instr: any, last: boolean) => {
    switch (instr.value?.type) {
      case "assign":
        return this.addAssign(instr, last);
      case "cycle":
        return this.addCycle(instr);
      case "branch":
        return this.addBranch(instr);
      case "skip":
        return this.addSkip(instr);
      default:
        console.error("Not an instruction:", instr.text);
        return undefined;
    }
  };

  parseInstructionSequence = (tree: TreeNode & { children: TreeNode[] }, last: boolean) => {
    if (tree.children.length === 0) return "";
    const [first, ...rest] = tree.children;
    const currentInstruction = getCurrentInstructions(
      `\\text{${first.text}}` +
        rest.reduce(
          (acc: string, node: { text: string }) => acc + "; \\text{" + node.text + "}",
          ""
        ),
      this.stateNumber,
      isSkipOrEmptyCycle(first)
    );
    return rest.length !== 0
      ? String.raw`\genfrac{}{}{1pt}{0}{${this.chooseInstruction(
          first,
          false
        )},\quad ${this.traverse(
          {
            ...tree,
            children: rest,
          },
          last
        )}}{${currentInstruction}}`
      : String.raw`\genfrac{}{}{1pt}{0}{${this.chooseInstruction(
          first,
          true
        )}}{${currentInstruction}}`;
  };

  parseInstruction = (tree: any, last: boolean) => {
    return this.chooseInstruction(tree, last);
  };

  traverse = (tree: any, last = false): string | undefined => {
    if (!tree) return;
    if (tree.type === "instructionSequence") {
      return this.parseInstructionSequence(tree, last);
    } else if (tree.type === "instruction") {
      return this.parseInstruction(tree, last);
    }
  };

  getSequence(input: string, variables: Memory) {
    const [tree, visitor] = generateVisitedTree(input, variables);
    const res = this.traverse(tree);
    this.states.push({ id: `s_${this.stateNumber}`, memory: visitor.getMemory() });
    console.log(this.states);
    return res;
  }
}

// export class MakeSequenceNS {
//   private states: Memory[];
//   private currentState: State;
//   private whileStack: Array<{
//     rootState: State;
//   }>;
//   private stateCounter: number;

//   constructor() {
//     this.states = [];
//     this.currentState = {
//       number: 0,
//     };
//     this.whileStack = [];
//     this.stateCounter = 0;
//   }

//   getCurrentRootState = () => {
//     return this.whileStack.at(-1)?.rootState ?? { number: 0, primes: 1 };
//   };

//   changeState = (newState: Memory, noAdd = false) => {
//     this.stateCounter++;
//     this.currentState = {
//       number: this.stateCounter,
//     };
//     !noAdd && this.states.push(newState);
//   };

//   addAssign = (instr: any, last: boolean) => {
//     if (last) return "";
//     // const [variable, expression] = instr.value.text.match(assignPattern).slice(1);
//     // const result = String.raw`${parseState(
//     //   this.currentState
//     // )}[${variable} \mapsto \mathscr{E}[\![${expression}]\!]${parseState(
//     //   this.currentState
//     // )}] \rightarrow\ ${parseState({
//     //   // ...this.currentState,
//     //   number: this.currentState.number + 1,
//     // })}`;
//     // const result = getCurrentInstructions(instr.text, {
//     //   state: this.currentState,
//     //   rootState: this.getCurrentRootState(),
//     // });
//     const result = String.raw`\langle ${instr.text},\ ${parseState(
//       this.currentState
//     )} \rangle\ \rightarrow\ ${parseState({
//       ...this.currentState,
//       number: this.stateCounter + 1,
//     })}`;
//     this.changeState(instr.state);
//     return result;
//   };

//   addCycle = (instr: CycleInstruction, last: boolean): string => {
//     if (instr.value.iters.length === 0) {
//       return formatCondition(instr.value.conditionText, false, this.currentState);
//     }
//     const stateForInstruction = {
//       number: this.currentState.number,
//       primes: 0,
//     };
//     const resultState = {
//       rootState: {
//         number: this.currentState.number + 1,
//         primes: 0,
//       },
//     };
//     debugger
//     this.changeState(this.currentState, true);
//     const condition = formatCondition(instr.value.conditionText, true, this.currentState);
//     this.whileStack.push(resultState);
//     this.currentState = stateForInstruction;
//     const whileBody = this.traverse(instr.value.iters[0]);
//     this.whileStack.pop();
//     this.currentState = resultState.rootState;
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
//     });
//     return String.raw`${whileBody},\quad ${restWhile},\quad ${condition}`;
//   };

//   addBranch = (instr: {
//     value: { conditionText: string; ifBranch: any; elBranch: any; isTrue: boolean; text: string };
//   }): string => {
//     const stateBeforeBranch = this.currentState;
//     const targetBranch = instr.value.isTrue ? instr.value.ifBranch : instr.value.elBranch;
//     return String.raw`${this.traverse(targetBranch)}, \quad ${formatCondition(
//       instr.value.conditionText,
//       instr.value.isTrue,
//       stateBeforeBranch
//     )}`;
//   };

//   addSkip = (instr: any) => {
//     return String.raw`\langle \text{${instr.text}},\ s_${
//       this.currentState.number
//     } \rangle\ \rightarrow\ s_${this.getCurrentRootState()}`;
//   };

//   chooseInstruction = (instr: any, last: boolean) => {
//     switch (instr.value?.type) {
//       case "assign":
//         return this.addAssign(instr, last);
//       case "cycle":
//         return this.addCycle(instr, last);
//       case "branch":
//         return this.addBranch(instr);
//       case "skip":
//         return this.addSkip(instr);
//       default:
//         console.error("Not an instruction:", instr.text);
//         return undefined;
//     }
//   };

//   parseInstructionSequence = (tree: TreeNode & { children: TreeNode[] }, last: boolean) => {
//     if (tree.children.length === 0) return "";
//     const [first, ...rest] = tree.children;
//     const currentInstruction = getCurrentInstructions(
//       `\\text{${first.text}}` +
//         rest.reduce(
//           (acc: string, node: { text: string }) => acc + "; \\text{" + node.text + "}",
//           ""
//         ),
//       {
//         state: this.currentState,
//         rootState: this.getCurrentRootState(),
//       }
//     );
//     return rest.length !== 0
//       ? String.raw`\genfrac{}{}{1pt}{0}{${this.chooseInstruction(
//           first,
//           false
//         )},\quad ${this.traverse(
//           {
//             ...tree,
//             children: rest,
//           },
//           last
//         )}}{${currentInstruction}}`
//       : String.raw`\genfrac{}{}{1pt}{0}{${this.chooseInstruction(
//           first,
//           true
//         )}}{${currentInstruction}}`;
//   };

//   parseInstruction = (tree: any) => {
//     if (tree.value.type === "assign") {
//       return getCurrentInstructions(`\\text{${tree.value.text}}`, {
//         state: this.currentState,
//         rootState: this.getCurrentRootState(),
//       });
//     }
//     return this.chooseInstruction(tree, true);
//   };

//   traverse = (tree: any, last = false): string | undefined => {
//     if (!tree) return;
//     if (tree.type === "instructionSequence") {
//       return this.parseInstructionSequence(tree, last);
//     } else if (tree.type === "instruction") {
//       this.parseInstruction(tree);
//     }
//   };

//   getSequence(input: string, variables: Memory) {
//     const [tree, visitor] = generateVisitedTree(input, variables);
//     const res = this.traverse(tree);
//     this.states.push(visitor.getMemory());
//     return res;
//   }
// }
