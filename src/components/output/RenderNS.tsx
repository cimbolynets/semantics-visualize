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
      <Scopes states={states} envs={envs} />
      <div className="overflow-x-auto overflow-y-hidden">
        <MathRenderer>{currentProgramText ?? ""}</MathRenderer>
      </div>
    </>
  );
};
