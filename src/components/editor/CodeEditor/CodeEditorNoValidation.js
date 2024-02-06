import Editor from "@monaco-editor/react";
import dark from "monaco-themes/themes/Dracula.json";
import light from "monaco-themes/themes/GitHub.json";
import contrast from "monaco-themes/themes/Vibrant Ink.json";
import {config, language} from "./jane-mode";
import {useRef, useEffect} from 'react';
import specialSymbols from "../../../specialSymbols/specialSymbols";
import { transformToSpecialSymbols } from "../../../specialSymbols/replaceSymbols";

// basically the same code editor as a CodeEditor, but without validation and errors displaying
export default function CodeEditorNoValidation({theme, value, setValue, fontSize, ...props}) {
    let editorRef = useRef(null);

    const initLanguageAndServices = (editor, monaco) => {
        // Register language
        monaco.languages.register({id: "jane"});
        monaco.languages.setMonarchTokensProvider("jane", language);
        monaco.languages.setLanguageConfiguration("jane", config);
        // Define themes
        monaco.editor.defineTheme("dark", dark);
        monaco.editor.defineTheme("light", light);
        monaco.editor.defineTheme("contrast", contrast);
        monaco.editor.setTheme(theme);

        editor.getModel().onDidChangeContent(e => {
            transformIfPasted(e, editor);
        });

        editorRef.current = editor;
    };

    const replaceSpecialSymbol = () => {
        if(editorRef?.current) {
            let currentLine = editorRef.current.getPosition().lineNumber;
            let currentLineContent = editorRef.current.getModel().getLineContent(currentLine);
    
            for(let specialSymbol of specialSymbols) {
                let symIdx = currentLineContent.indexOf(specialSymbol.text);
    
                if(symIdx !== -1) {
                    insertEditorText(
                        editorRef.current, 
                        currentLine, 
                        symIdx+1, 
                        specialSymbol.specSymbol, 
                        {lineNumber: currentLine, column: symIdx+2}, 
                        currentLine, 
                        symIdx+specialSymbol.text.length+1
                    );
                }
            }
        }
    };

    useEffect(() => {
        replaceSpecialSymbol();
    }, [value])

    return (
        <Editor 
            {...props} 
            value={value}
            theme={theme}
            options={{
                ...props.options,
                fontSize: fontSize,
                minimap: {enabled: false}
            }}
            defaultLanguage="jane"
            onChange={value => setValue(value)} 
            onMount={initLanguageAndServices}
            className="code-editor"
        />
    );
}

function insertEditorText(editor, startLine, startColumn, text, cursor, endLine, endColumn) {
    editor.executeEdits(
        '', 
        [
            { 
                range: {
                    startLineNumber: startLine,
                    endLineNumber: endLine ?? startLine,
                    startColumn: startColumn,
                    endColumn: endColumn ?? startColumn
                },
                text: text
            }
        ]
    );
    editor.focus();
    editor.setPosition({lineNumber: cursor?.lineNumber ?? startColumn, column: cursor?.column ?? startColumn});
}

function transformIfPasted(e, editor) {
    if(e.changes[0].text.length > 1 && specialSymbols.some(specSym => e.changes[0].text.includes(specSym.text))) {
        let currentValue = editor.getModel().getValue();
        currentValue = transformToSpecialSymbols(currentValue);
        editor.getModel().setValue(currentValue);
    }
}