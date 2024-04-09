import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC, useMemo } from "react";
import { Export } from "../export/Export";
import Scopes from "./Scopes";
import { SequenceBody } from "./SequenceBody";
import States from "./States";

interface RenderSequenceProps {
  sequence: string | string[] | undefined;
  states: string[];
  envs?: string[];
}

export const RenderSequence: FC<RenderSequenceProps> = ({ sequence, states, envs }) => {
  const strSequence = Array.isArray(sequence) ? sequence.join("") : sequence;
  const sequenceArr = useMemo(
    () => (sequence ? (!Array.isArray(sequence) ? [sequence] : sequence) : ["No sequence"]),
    [strSequence]
  );
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);

  return (
    <>
      <div className="output-controls">
        {activeInterpreter === "ns" ? (
          <Scopes states={states} envs={envs ?? []} />
        ) : (
          <States states={states} />
        )}
        <Export sequence={sequenceArr} />
      </div>
      <SequenceBody sequence={sequenceArr} />
    </>
  );
};
