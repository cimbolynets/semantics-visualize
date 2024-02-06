import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useContext } from "react";
import ThemeContext from "../ThemeContext";
import { CodeEditor } from "./CodeEditor";
import VariablesList from "./VariablesList";

export default function Editor(props: HTMLAttributes<HTMLDivElement>) {
  const theme = useContext(ThemeContext);
  const variables = useProgramStorage((state) => state.variables);
  const [programText, setProgramText] = useProgramStorage((state) => [
    state.programText,
    state.setProgramText,
  ]);

  return (
    <div {...props} className={cn("flex flex-col gap-2", props.className)}>
      <VariablesList variables={variables} />
      <CodeEditor
        value={programText}
        setValue={setProgramText}
        variables={variables}
        theme={theme.state.editorTheme}
        fontSize={16}
      />
    </div>
  );
}
