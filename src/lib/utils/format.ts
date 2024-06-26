import { Memory } from "@/types";

export const T = (n: number | string) => {
  return `T_{${n}}`;
};

export const s = (n: number | string) => {
  return `s_{${n}}`;
};

export const a = (n: number | string) => {
  return String.raw`\alpha_{${n}}`;
};

export const envp = (n: number | string, withoutExtensions = false) => {
  return !withoutExtensions ? String.raw`envp_{${n}}` : "";
};

/**
 * Procedure environment application
 * @param n
 * @returns
 */
export const envpa = (n: number | string, withoutExtensions = false) => {
  return !withoutExtensions ? String.raw`${envp(n)} \vdash ` : "";
};

export function formatCondition(text: string, isTrue: boolean, stateNumber: number) {
  return String.raw`\mathscr{B}[\![ ${text} ]\!]${s(stateNumber)} = \textbf{${
    isTrue ? "tt" : "ff"
  }}`;
}

export const text = (text: string) => {
  return String.raw`\text{${text}}`;
};

export const textbf = (text: string) => {
  return String.raw`\textbf{${text}}`;
};

export const formatMemory = (variables: Memory) => {
  const kvPairs = Object.entries(variables);

  return (
    String.raw`[ ` +
    kvPairs.map(([k, v]) => String.raw`${k} \mapsto \textbf{${v}}`) +
    String.raw` ]`
  );
};
