import { chooseInterpreter } from "@/interpreter/chooseInterpreter";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useState } from "react";
import MathRenderer from "../MathRenderer";
import States from "./States";
import { RenderAS } from "./RenderAS";
import { RenderNS } from "./RenderNS";

interface OutputProps extends HTMLAttributes<HTMLDivElement> {}

export default function Output(props: OutputProps) {
  const variables = useProgramStorage((state) => state.variables);
  const programText = useProgramStorage((state) => state.programText);
  const programId = useProgramStorage((state) => state.programId);
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);

  const [currentProgramText, setCurrentProgramText] = useState<string | string[] | undefined>();
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    if (!programText) return;
    const Interpreter = chooseInterpreter(activeInterpreter);
    if (!Interpreter) return;
    const ms = new Interpreter();
    const sequence = ms.getSequence(programText, variables);
    setStates(ms.getStates());
    setCurrentProgramText(sequence);
  }, [programId]);

  return (
    <div {...props} className={cn("flex flex-col gap-4 max-w-full", props.className)}>
      <States states={states} />
      <div className="overflow-x-auto overflow-y-hidden">
        {Array.isArray(currentProgramText) ? (
          <RenderAS instructions={currentProgramText}></RenderAS>
        ) : (
          <RenderNS program={currentProgramText ?? ""} />
        )}
      </div>
    </div>
  );
}
