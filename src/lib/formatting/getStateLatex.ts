import { Memory } from "@/types";

export default function getStateLatex(state: Memory, stateNumber: number, prevState: Memory) {
  let vars = "";

  if (!prevState) {
    let i = 0;
    for (const variable in state) {
      vars += `${i !== 0 ? ", \\;" + variable : variable} \\rightarrow ${state[variable]}`;
      i++;
    }

    return `s_{${stateNumber}}[\\; ${vars} \\;]`;
  }

  let i = 0;
  for (const variable in state) {
    if (state[variable] !== prevState[variable]) {
      vars += `${i !== 0 ? ", \\;" + variable : variable} \\rightarrow ${state[variable]}`;
      i++;
    }
  }

  return `s_{${stateNumber}} = s_{${stateNumber - 1}}[\\; ${vars} \\;]`;
}
