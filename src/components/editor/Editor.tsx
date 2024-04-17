import { useEditorStorage } from "@/lib/storage/editorStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { CodeEditor } from "./CodeEditor";
import VariablesList from "./VariablesList";

export default function Editor(props: HTMLAttributes<HTMLDivElement>) {
  const selection = useEditorStorage((state) => state.selection);
  const variables = useProgramStorage((state) => state.variables);
  const [programText, setProgramText] = useProgramStorage((state) => [
    state.programText,
    state.setProgramText,
  ]);

  return (
    <div {...props} className={cn("flex flex-col gap-2", props.className)}>
      <VariablesList variables={variables} />
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
