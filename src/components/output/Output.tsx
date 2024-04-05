import { MakeSequenceAS } from "@/interpreter/as/MakeSequenceAS";
import { MakeSequenceNS } from "@/interpreter/ns/MakeSequenceNS";
import { MakeSequenceSOS } from "@/interpreter/sos/MakeSequenceSOS";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { pick } from "lodash";
import { HTMLAttributes, useEffect, useState } from "react";
import { RenderSequence } from "./RenderSequence";
import { InterpreterError } from "@/interpreter/InterpreterError";
import { EditorError as EditorErrorComponent } from "../EditorError";
import { EditorError } from "@/interpreter/errorUtils";

interface OutputProps extends HTMLAttributes<HTMLDivElement> {}

export default function Output(props: OutputProps) {
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  const { variables, programText, programId } = useProgramStorage((state) =>
    pick(state, "programText", "variables", "programId", "activeInterpreter")
  );

  const [sequence, setSequence] = useState<string | string[] | undefined>();
  const [states, setStates] = useState<string[]>([]);
  const [envs, setEnvs] = useState<string[] | undefined>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!programText) return;
    setErrors([]);
    try {
      const MakeSequence =
        activeInterpreter === "ns"
          ? MakeSequenceNS
          : activeInterpreter === "as"
          ? MakeSequenceAS
          : activeInterpreter === "sos"
          ? MakeSequenceSOS
          : undefined;
      if (!MakeSequence) return;
      const ms = new MakeSequence();
      const sequence = ms.getSequence(programText, variables);
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
  }, [programId]);

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
