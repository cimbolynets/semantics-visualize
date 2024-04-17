import { MakeSequenceAM } from "@/interpreter/am/MakeSequenceAM";
import { IConfig } from "@/interpreter/types";
import { useOutputStorage } from "@/lib/storage/outputStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC, useEffect, useState } from "react";
import { RenderInMode } from "./RenderInMode";

interface RenderAMProps {}

export const RenderAM: FC<RenderAMProps> = () => {
  const [sequence, setSequence] = useState<IConfig[]>([]);
  const { programText, variables, programId } = useProgramStorage();
  const [states, setStates] = useState<string[]>([]);
  const setOutput = useOutputStorage((state) => state.setOutput);

  useEffect(() => {
    if (!sequence.length) return;
    setOutput({ sequence: sequence.map((item) => item.text), states });
  }, [sequence, states]);

  useEffect(() => {
    if (!programText) return;
    const ms = new MakeSequenceAM();
    const sequence = ms.getSequence(programText, variables ?? {});
    setStates(ms.getStates());
    setSequence(sequence);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [programId]);

  return <RenderInMode sequence={sequence} states={states} />;
};
