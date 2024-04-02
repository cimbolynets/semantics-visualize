import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { RenderAS } from "./RenderAS";
import { RenderNS } from "./RenderNS";

interface OutputProps extends HTMLAttributes<HTMLDivElement> {}

export default function Output(props: OutputProps) {
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  return (
    <div {...props} className={cn("flex flex-col gap-4 max-w-full", props.className)}>
      {activeInterpreter === "ns" ? (
        <RenderNS />
      ) : activeInterpreter === "as" ? (
        <RenderAS />
      ) : (
        "No interpreter for the selected option"
      )}
    </div>
  );
}
