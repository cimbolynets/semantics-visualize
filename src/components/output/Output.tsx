import { InterpreterError } from "@/interpreter/InterpreterError";
import { ProgramStorage, useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { pick } from "lodash";
import { HTMLAttributes, memo, useEffect, useRef } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { EditorError } from "../EditorError";
import { RenderAM } from "./modes/RenderAM";
import { RenderNS } from "./modes/RenderNS";
import { RenderSOS } from "./modes/RenderSOS";

function ErrorComponent({ error, resetErrorBoundary }: FallbackProps) {
  const prevProgramId = useRef<number | undefined>();
  const programId = useProgramStorage((state) => state.programId);

  useEffect(() => {
    if (
      typeof prevProgramId.current !== "undefined" &&
      error &&
      programId !== prevProgramId.current
    ) {
      resetErrorBoundary();
    }
    prevProgramId.current = programId;
  }, [programId]);

  return (
    <>
      {error instanceof InterpreterError ? (
        error.errors.map((e) => <EditorError key={e.message}>{e.message}</EditorError>)
      ) : (
        <EditorError>{error.message}</EditorError>
      )}
    </>
  );
}

interface OutputProps extends HTMLAttributes<HTMLDivElement> {}

export default memo(function Output(props: OutputProps) {
  const { semanticMethod, programLanguage } = useProgramStorage(
    (state) =>
      pick(state, "semanticMethod", "programLanguage") as Pick<
        ProgramStorage,
        "semanticMethod" | "programLanguage"
      >
  );

  return (
    <div {...props} className={cn("output", props.className)}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        {semanticMethod === "ns" ? (
          <RenderNS />
        ) : semanticMethod === "sos" && programLanguage === "am" ? (
          <RenderAM />
        ) : semanticMethod === "sos" && programLanguage === "jane" ? (
          <RenderSOS />
        ) : null}
      </ErrorBoundary>
    </div>
  );
});
