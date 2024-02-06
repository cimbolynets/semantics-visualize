import { languages } from "monaco-editor";

export const config: languages.LanguageConfiguration = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  brackets: [["(", ")"]],
  autoClosingPairs: [{ open: "(", close: ")" }],
  surroundingPairs: [{ open: "(", close: ")" }],
  folding: {
    markers: {
      start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
      end: new RegExp("^\\s*\\{\\$ENDREGION\\}"),
    },
  },
};

export const language: languages.IMonarchLanguage = {
  keywords: ["if", "then", "else", "do", "while"],
  defaultToken: "invalid",
  brackets: [
    {
      open: "(",
      close: ")",
      token: "delimiter.parenthesis",
    },
  ],
  operators: ["=", "!", "<=", "¬", "≤", ":=", "*", "-", "+", "and"],
  digits: /[1-9][0-9]*|[0-9]/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z][a-zA-Z0-9]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier",
          },
        },
      ],
      { include: "@whitespace" },
      [/[()]/, "@brackets"],
      [/\d+/, "number"],
      [/[;]/, "delimiter"],
    ],

    whitespace: [[/[ \t\r\n]+/, "white"]],
  },
};
