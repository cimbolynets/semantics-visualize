import { MakeSequenceAS } from "@/interpreter/as/MakeSequenceAS";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { pick } from "lodash";
import { FC, useEffect, useState } from "react";
import MathRenderer from "../MathRenderer";
import States from "./States";

interface RenderASProps {}

export const RenderAS: FC<RenderASProps> = () => {
  const { variables, programText, programId } = useProgramStorage((state) =>
    pick(state, "programText", "variables", "programId", "activeInterpreter")
  );

  const [instructions, setInstructions] = useState<string[] | undefined>();
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    if (!programText) return;
    const ms = new MakeSequenceAS();
    const sequence = ms.getSequence(programText, variables);
    setStates(ms.getStates());
    setInstructions(sequence);
  }, [programId]);

  return (
    <>
      <div className="output-controls">
        <States states={states} />
      </div>
      <div className="output-sequence">
        {(instructions ?? []).map((instruction, index) => (
          <MathRenderer key={index} className="">
            {instruction}
          </MathRenderer>
        ))}
      </div>
    </>
  );
};
