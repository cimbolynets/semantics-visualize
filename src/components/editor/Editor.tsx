import { useEditorStorage } from "@/lib/storage/editorStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { CodeEditor } from "./CodeEditor";
import VariablesList from "./VariablesList";
import { Button } from "../ui/button";

export default function Editor(props: HTMLAttributes<HTMLDivElement>) {
  const selection = useEditorStorage((state) => state.selection);
  const variables = useProgramStorage((state) => state.variables);
  const [programText, setProgramText] = useProgramStorage((state) => [
    state.programText,
    state.setProgramText,
  ]);
  const reset = useProgramStorage((state) => state.reset);

  return (
    <div {...props} className={cn("flex flex-col gap-2", props.className)}>
      <div className="flex gap-2 items-center wrap">
        <VariablesList variables={variables} />
        <Button variant="secondary" size="sm" onClick={reset} className="hidden lg:block ml-auto">
          Reset
        </Button>
      </div>
      <CodeEditor
        currentSelection={selection}
        data-runprogram-2
        value={programText}
        setValue={setProgramText}
        variables={variables}
        fontSize={16}
      />
    </div>
  );
}
