import { MakeSequenceNS } from "@/interpreter/ns/MakeSequenceNS";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { pick } from "lodash";
import { FC, useEffect, useState } from "react";
import MathRenderer from "../MathRenderer";
import Scopes from "./Scopes";

interface RenderNSProps {}

export const RenderNS: FC<RenderNSProps> = () => {
  const { variables, programText, programId } = useProgramStorage((state) =>
    pick(state, "programText", "variables", "programId", "activeInterpreter")
  );

  const [currentProgramText, setCurrentProgramText] = useState<string | undefined>();
  const [states, setStates] = useState<string[]>([]);
  const [envs, setEnvs] = useState<string[]>([]);

  useEffect(() => {
    if (!programText) return;
    const ms = new MakeSequenceNS();
    const sequence = ms.getSequence(programText, variables);
    setStates(ms.getStates());
    setEnvs(ms.getEnvs());
    setCurrentProgramText(sequence);
  }, [programId]);

  return (
    <>
      <div className="output-controls">
        <Scopes states={states} envs={envs} />
      </div>
      <div className="output-sequence">
        <MathRenderer>{currentProgramText ?? ""}</MathRenderer>
      </div>
    </>
  );
};
