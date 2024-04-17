import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC, useEffect } from "react";
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

export const RenderSequence: FC<RenderSequenceProps> = ({ sequence = [], states, envs }) => {
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  const setHeaderSlots = useHeaderSlots((state) => state.setHeaderSlots);

  useEffect(() => {
    if (!sequence.length) return;
    setHeaderSlots(
      <>
        <ExportImage sequence={sequence.map((item) => item.text)} />
        <ExportLatex sequence={sequence.map((item) => item.text)} />
      </>
    );
  }, [sequence]);

  return activeInterpreter === "ns" ? (
    <RenderNS sequence={sequence} states={states} envs={envs ?? []} />
  ) : (
    <RenderInMode sequence={sequence} states={states} />
  );
};
