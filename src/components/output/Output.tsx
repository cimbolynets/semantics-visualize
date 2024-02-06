import { MakeSequenceNS } from "@/interpreter/MakeSequenceNS";
import { MakeSequenceState } from "@/interpreter/types";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useState } from "react";
import MathRenderer from "../MathRenderer";
import States from "./States";

interface OutputProps extends HTMLAttributes<HTMLDivElement> {}

export default function Output(props: OutputProps) {
  const variables = useProgramStorage((state) => state.variables);
  const programText = useProgramStorage((state) => state.programText);
  const programId = useProgramStorage((state) => state.programId);

  const [currentProgramText, setCurrentProgramText] = useState<string | undefined>();
  const [states, setStates] = useState<MakeSequenceState[]>([]);

  useEffect(() => {
    if (!programText) return;
    const ms = new MakeSequenceNS();
    const sequence = ms.getSequence(programText, variables);
    setStates(ms.getStates());
    setCurrentProgramText(sequence);
  }, [programId]);

  return (
    <div {...props} className={cn("flex flex-col gap-4 max-w-full", props.className)}>
      <States states={states} />
      <div className="overflow-x-auto overflow-y-hidden">
        <MathRenderer>{currentProgramText ?? ""}</MathRenderer>
      </div>
    </div>
  );
}
