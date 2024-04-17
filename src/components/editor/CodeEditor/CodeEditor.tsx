import ThemeContext from "@/components/ThemeContext";
import { transformToSpecialSymbols } from "@/lib/specialSymbols/replaceSymbols";
import specialSymbols from "@/lib/specialSymbols/specialSymbols";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import { IEditorError, IEditorPosition, Memory } from "@/types";
import { Editor, EditorProps, Monaco } from "@monaco-editor/react";
import { IPosition, Selection, editor } from "monaco-editor";
import { useContext, useEffect, useRef } from "react";
import { CODE_CHANGED, CONFIG_CHANGED } from "./constants";
import { config, language } from "./jane-mode";
import ValidationWorker from "./validation.worker?worker";

// start line and end line mostly will be the same, but start column and end column will depend on latex notation text length;
// cursor will tell us where to place the cursor after the text will be replaced
function insertEditorText(
  editor: editor.IStandaloneCodeEditor,
  startLine: number,
  startColumn: number,
  text: string,
  cursor: IPosition,
  endLine: number | undefined,
  endColumn: number | undefined
) {
  editor.executeEdits("", [
    {
      // replacing text in defined range
      range: {
        startLineNumber: startLine,
        endLineNumber: endLine ?? startLine,
        startColumn: startColumn,
        endColumn: endColumn ?? startColumn,
      },
      text: text,
    },
  ]);
  // making cursor visible as after executing the edit, the cursor is hidden
  editor.focus();
  // setting the cursor position after pasted text
  editor.setPosition({
    lineNumber: cursor?.lineNumber ?? startColumn,
    column: cursor?.column ?? startColumn,
  });
}

// here the function will replace latex notations like \neg in the text, that was pasted to the editor
function transformIfPasted(
  e: editor.IModelContentChangedEvent,
  editor: editor.IStandaloneCodeEditor
) {
  // if the inserted text length would be less that 2, there can be only one symbol, but in case of notation there
  // should be at least two symbols like \g to replace it and also in the second statement after && we want to check if
  // the inserted text contains any latex notation
  if (
    e.changes[0].text.length > 1 &&
    specialSymbols.some((specSym) => e.changes[0].text.includes(specSym.text))
  ) {
    let currentValue = editor.getModel()?.getValue();
    if (!currentValue) return;
    currentValue = transformToSpecialSymbols(currentValue);
    editor.getModel()?.setValue(currentValue ?? "");
  }
}

export type CodeEditorProps = {
  currentSelection?: IEditorPosition;
  variables: Memory;
  value?: string;
  setValue: (v?: string) => void;
  fontSize: number;
  disableValidation?: boolean;
} & EditorProps;

// variables must be defined outside of the component scope, because they will be used in the worker
let variables: Memory = {};
export default function CodeEditor({
  currentSelection,
  variables: variablesProp,
  value,
  setValue,
  fontSize,
  disableValidation = false,
  ...props
}: CodeEditorProps) {
  // creating a worker, that will be doing code validation and then sending an array of errors to the main thread, so we
  // can display them in the editor by using standard error display mechanism of monaco editor
  const validation = useRef<Worker | undefined>(undefined);
  const editorRef = useRef<editor.IStandaloneCodeEditor>(null);
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  const withExtensions = useProgramStorage((state) => state.withExtensions);
  const theme = useContext(ThemeContext).state.editorTheme;

  useEffect(() => {
    if (!editorRef.current) return;
    if (!currentSelection) {
      editorRef.current.setSelection(new Selection(0, 0, 0, 0));
      return;
    }
    editorRef.current.setSelection(currentSelection);
  }, [currentSelection]);

  useEffect(() => {
    if (disableValidation) return;
    validation.current = new ValidationWorker();
    return () => {
      validation.current?.terminate();
    };
  }, []);

  useEffect(() => {
    validation.current?.postMessage({
      type: CONFIG_CHANGED,
      activeInterpreter,
      withExtensions,
    });
  }, [activeInterpreter, withExtensions]);

  // update errors when variables are changed
  useEffect(() => {
    variables = variablesProp;
    if (editorRef?.current) {
      validation.current?.postMessage({
        type: CODE_CHANGED,
        value: editorRef.current.getModel()?.getValue(),
        variables,
      });
    }
  }, [variablesProp]);

  const initLanguageAndServices = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    // Register language
    monaco.languages.register({ id: "jane" });
    monaco.languages.setMonarchTokensProvider("jane", language);
    monaco.languages.setLanguageConfiguration("jane", config);
    // sending initial code for validation.current
    validation.current?.postMessage({
      type: CONFIG_CHANGED,
      activeInterpreter,
      withExtensions,
    });
    validation.current?.postMessage({
      type: CODE_CHANGED,
      value: editor.getModel()?.getValue(),
      variables,
    });
    // setting up an event listener for sending code to the worker every time the editor value changes
    editor.getModel()?.onDidChangeContent((e) => {
      transformIfPasted(e, editor);
      validation.current?.postMessage({
        type: CODE_CHANGED,
        value: editor.getModel()?.getValue(),
        variables,
      });
    });
    // an event listener, that will be called, when the worker will send an array of errors to the main thread
    if (validation.current) {
      validation.current.onmessage = (message: { data: IEditorError[] }) => {
        const model = editor.getModel();
        if (!message || !model) return;
        if (message) {
          monaco.editor.setModelMarkers(
            model,
            "owner",
            // we're marking all the errors as monaco.MarkerSeverity.Error, but we can also distinguish it in monaco editor,
            // for example for some problems we can use just warning as in case of possible infinite loop
            message.data.map((err) => ({ ...err, severity: monaco.MarkerSeverity.Error }))
          );
        }
      };
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    editorRef.current = editor;
  };
  // replace a latex notation, that user typed with a special symbol
  const replaceSpecialSymbol = () => {
    if (!editorRef.current) return;
    // if there are multiple cursors in the editor, we're going to replace the text for each cursor
    for (const selection of editorRef.current.getSelections() ?? []) {
      const currentLine = selection.startLineNumber;
      if (!currentLine) return;
      const currentLineContent = editorRef.current.getModel()?.getLineContent(currentLine);
      if (!currentLineContent) return;
      // trying to find a corresponding special symbol for the notation, that was typed
      for (const specialSymbol of specialSymbols) {
        const symIdx = currentLineContent.indexOf(specialSymbol.text);

        if (symIdx !== -1) {
          insertEditorText(
            editorRef.current,
            currentLine,
            symIdx + 1,
            specialSymbol.specSymbol,
            { lineNumber: currentLine, column: symIdx + 2 },
            currentLine,
            symIdx + specialSymbol.text.length + 1
          );
        }
      }
    }
  };
  // if editor value changes we want to replace a latex notation, that user typed with a special symbol
  useEffect(() => {
    replaceSpecialSymbol();
  }, [value]);

  return (
    <Editor
      {...props}
      value={value}
      theme={theme}
      options={{
        fontSize,
        minimap: { enabled: false },
      }}
      defaultLanguage="jane"
      onChange={setValue}
      onMount={initLanguageAndServices}
      className={cn("code-editor", props.className)}
    />
  );
}
