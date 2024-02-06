import { Memory } from "@/types";

export const formatMemory = (variables: Memory) => {
  const kvPairs = Object.entries(variables);

  return (
    String.raw`[ ` +
    kvPairs.map(([k, v]) => String.raw`${k} \mapsto \textbf{${v}}`) +
    String.raw` ]`
  );
};
