import { MakeSequenceSOS } from "@/interpreter/sos/MakeSequenceSOS";
import { IConfig } from "@/interpreter/types";
import { useOutputStorage } from "@/lib/storage/outputStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC, useEffect, useState } from "react";
import { RenderInMode } from "./RenderInMode";

interface RenderSOSProps {}

export const RenderSOS: FC<RenderSOSProps> = () => {
  const { programText, variables, programId } = useProgramStorage();
  const [sequence, setSequence] = useState<IConfig[]>([]);
  const [states, setStates] = useState<string[]>([]);

  const setOutput = useOutputStorage((state) => state.setOutput);

  useEffect(() => {
    if (!sequence.length) return;
    setOutput({ sequence: sequence.map((item) => item.text), states });
  }, [sequence, states]);

  useEffect(() => {
    if (!programText) return;
    const ms = new MakeSequenceSOS();
    const sequence = ms.getSequence(programText, variables ?? {});
    setStates(ms.getStates());
    setSequence(sequence);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [programId]);

  return <RenderInMode sequence={sequence} states={states} />;
};
