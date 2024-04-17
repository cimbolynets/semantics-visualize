import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC, useEffect, useMemo } from "react";
import { useHeaderSlots } from "../Header/headerSlots";
import { ExportImage } from "../export/ExportImage";
import { ExportLatex } from "../export/ExportLatex";
import { RenderInMode } from "./modes/RenderInMode";
import { RenderNS } from "./modes/RenderNS";
import { SequenceResult } from "./types";

export interface RenderSequenceProps {
  sequence: SequenceResult;
  states: string[];
  envs?: string[];
}

export const RenderSequence: FC<RenderSequenceProps> = ({ sequence, states, envs }) => {
  const strSequence = Array.isArray(sequence) ? sequence.join("") : sequence;
  const sequenceArr = useMemo(
    () => (sequence ? (!Array.isArray(sequence) ? [sequence] : sequence) : []),
    [strSequence]
  );
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  const setHeaderSlots = useHeaderSlots((state) => state.setHeaderSlots);

  useEffect(() => {
    if (!sequenceArr.length) return;
    setHeaderSlots(
      <>
        <ExportImage sequence={sequenceArr} />
        <ExportLatex sequence={sequenceArr} />
      </>
    );
  }, [sequenceArr]);

  return activeInterpreter === "ns" ? (
    <RenderNS sequence={sequenceArr} states={states} envs={envs ?? []} />
  ) : (
    <RenderInMode sequence={sequenceArr} states={states} />
  );
};
