export const s = (n: number) => {
  return `s_{${n}}`;
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
