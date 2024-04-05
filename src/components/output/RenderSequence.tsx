import { FC } from "react";
import MathRenderer from "../MathRenderer";
import Scopes from "./Scopes";
import States from "./States";
import { useProgramStorage } from "@/lib/storage/programStorage";

interface RenderSequenceProps {
  sequence: string | string[] | undefined;
  states: string[];
  envs?: string[];
}

export const RenderSequence: FC<RenderSequenceProps> = ({ sequence, states, envs }) => {
  const sequenceArr = sequence
    ? !Array.isArray(sequence)
      ? [sequence]
      : sequence
    : ["No sequence"];
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);

  return (
    <>
      <div className="output-controls">
        {activeInterpreter === "ns" ? (
          <Scopes states={states} envs={envs ?? []} />
        ) : (
          <States states={states} />
        )}
      </div>
      <div className="output-sequence">
        {sequenceArr.map((chunk) => (
          <MathRenderer key={chunk}>{chunk}</MathRenderer>
        ))}
      </div>
    </>
  );
};
