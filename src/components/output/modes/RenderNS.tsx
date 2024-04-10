import { FC } from "react";
import Scopes from "../Scopes";
import { SequenceBody } from "../SequenceBody";

interface RenderNSProps {
  sequence: string[];
  states: string[];
  envs: string[];
}

export const RenderNS: FC<RenderNSProps> = ({ sequence, states, envs }) => {
  return (
    <>
      <div className="output-controls">
        <Scopes states={states} envs={envs} />
      </div>
      {sequence.length ? (
        <SequenceBody sequence={sequence} />
      ) : (
        <span className="text-xl font-medium">No sequence</span>
      )}
    </>
  );
};
