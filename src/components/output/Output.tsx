import { InterpreterError } from "@/interpreter/InterpreterError";
import { MakeSequenceAM } from "@/interpreter/am/MakeSequenceAM";
import { MakeSequenceNS } from "@/interpreter/ns/MakeSequenceNS";
import { MakeSequenceSOS } from "@/interpreter/sos/MakeSequenceSOS";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { pick } from "lodash";
import { HTMLAttributes, useEffect, useState } from "react";
import { EditorError as EditorErrorComponent } from "../EditorError";
import { RenderSequence } from "./RenderSequence";
import { SequenceResult } from "./types";

interface OutputProps extends HTMLAttributes<HTMLDivElement> {}

export default function Output(props: OutputProps) {
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  const { variables, programText, programId, withExtensions } = useProgramStorage((state) =>
    pick(state, "programText", "variables", "programId", "activeInterpreter", "withExtensions")
  );

  const [sequence, setSequence] = useState<SequenceResult>();
  const [states, setStates] = useState<string[]>([]);
  const [envs, setEnvs] = useState<string[] | undefined>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setSequence(undefined);
    setStates([]);
    setEnvs([]);
  }, [activeInterpreter]);

  useEffect(() => {
    if (!programText) return;
    setErrors([]);
    try {
      const MakeSequence =
        activeInterpreter === "ns"
          ? MakeSequenceNS
          : activeInterpreter === "am"
          ? MakeSequenceAM
          : activeInterpreter === "sos"
          ? MakeSequenceSOS
          : undefined;
      if (!MakeSequence) return;
      const ms = new MakeSequence();
      const sequence = ms.getSequence(programText, variables ?? {}, false, !withExtensions);
      setStates(ms.getStates());
      setEnvs("getEnvs" in ms ? ms.getEnvs() : undefined);
      setSequence(sequence);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof InterpreterError) {
        setErrors(error.errors.map((e) => e.message));
      } else {
        setErrors([error.message]);
      }
    }
  }, [programId, withExtensions]);

  return (
    <div {...props} className={cn("output", props.className)}>
      {!errors.length ? (
        <RenderSequence sequence={sequence} states={states} envs={envs} />
      ) : (
        <>
          {errors.map((e) => (
            <EditorErrorComponent key={e}>{e}</EditorErrorComponent>
          ))}
        </>
      )}
    </div>
  );
}
