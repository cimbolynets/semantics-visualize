import { IConfig } from "@/interpreter/types";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC } from "react";
import Scopes from "../Scopes";
import { SequenceBody } from "../SequenceBody";
import States from "../States";

interface RenderNSProps {
  sequence: IConfig[];
  states: string[];
  envs: string[];
}

export const RenderNS: FC<RenderNSProps> = ({ sequence, states, envs }) => {
  const withExtensions = useProgramStorage((state) => state.withExtensions);
  
  return (
    <>
      <div className="output-controls">
        {withExtensions ? <Scopes states={states} envs={envs} /> : <States states={states} />}
      </div>
      {sequence.length ? (
        <SequenceBody sequence={sequence.map((s) => s.text)} />
      ) : (
        <span className="text-xl font-medium">No sequence</span>
      )}
    </>
  );
};
