export const s = (n: number) => {
  return `s_{${n}}`;
};

export const a = (n: number) => {
  return `a_{${n}}`;
};

export const envp = (n: number) => {
  return String.raw`envp_{${n}}`;
};

/**
 * Procedure environment application
 * @param n
 * @returns
 */
export const envpa = (n: number) => {
  return String.raw`${envp(n)} \vdash `;
};

export function formatCondition(text: string, isTrue: boolean, stateNumber: number) {
  return String.raw`\mathscr{B}[\![ ${text} ]\!]${s(stateNumber)} = \textbf{${
    isTrue ? "tt" : "ff"
  }}`;
}
