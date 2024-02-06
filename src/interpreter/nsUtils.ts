import { CycleInstruction, TreeNode } from "./types";

export const assignPattern = /(.+) +:= +(.+)/;

export function isSkipOrEmptyCycle(instr: TreeNode) {
  return (
    instr.value.type === "skip" ||
    (instr.value.type === "cycle" && (instr.value as CycleInstruction["value"]).iters.length === 0)
  );
}

export function parseState(stateNumber: number) {
  return String.raw`s_${stateNumber}`;
}

export function getCurrentInstructions(text: string, stateNumber: number, sameState = false) {
  return String.raw`\langle ${text},\ ${parseState(stateNumber)} \rangle\ \rightarrow\ ${parseState(
    stateNumber + (!sameState ? 1 : 0)
  )}`;
}

export function formatCondition(text: string, isTrue: boolean, stateNumber: number) {
  return String.raw`\mathscr{B}[\![ ${text} ]\!]${parseState(stateNumber)} = \textbf{${
    isTrue ? "tt" : "ff"
  }}`;
}

// import { Config, State } from "./types";

// export function parseState(state: State) {
//   return String.raw`s${state.number > 0 || !state.primes ? `_${state.number}` : ""}${"'".repeat(
//     state.primes ?? 0
//   )}`;
// }

// export function getCurrentInstructions(text: string, config: Config) {
//   const { state, rootState } = config;
//   return String.raw`\langle ${text},\ ${parseState(state)} \rangle\ \rightarrow\ ${parseState(
//     rootState
//   )}`;
// }

// export function formatCondition(text: string, isTrue: boolean, state: State) {
//   return String.raw`\mathscr{B}[\![ ${text} ]\!]${parseState(state)} = \textbf{${
//     isTrue ? "tt" : "ff"
//   }}`;
// }
