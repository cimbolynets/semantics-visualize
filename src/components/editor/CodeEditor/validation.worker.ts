import { InterpreterError } from "@/interpreter/InterpreterError";
import { generateVisitedTreeAM } from "@/interpreter/am/generateVisitedTree";
import { generateVisitedTreeJane } from "@/interpreter/jane/generateVisitedTree";
import { ProgramLanguage, SemanticMethod } from "@/lib/storage/programStorage";
import { IEditorError, Memory } from "@/types";
import { CODE_CHANGED, CONFIG_CHANGED, CodeChanged, ConfigChanged } from "./constants";

type MessageDataCodeChanged = {
  type: CodeChanged;
  value: string | undefined;
  variables: Memory;
};

type MessageData =
  | {
      type: ConfigChanged;
      semanticMethod: SemanticMethod;
      programLanguage: ProgramLanguage;
    }
  | MessageDataCodeChanged;

const DEBOUNCE_DELAY = 700;

function validate(input: string | undefined, variables: Memory, programLanguage: ProgramLanguage) {
  if (typeof input === "undefined") return;
  if (!input.trim()) return postMessage([]);
  let errors: IEditorError[] = [];
  try {
    const interpreter = programLanguage === "am" ? generateVisitedTreeAM : generateVisitedTreeJane;
    const [, visitor] = interpreter(input, variables, false, programLanguage === "jane");
    errors = visitor.getErrors();
  } catch (error) {
    if (error instanceof InterpreterError) {
      errors = error.errors;
    }
  }
  postMessage(errors);
}

let timerId: NodeJS.Timeout;
let lastProgramLanguage: ProgramLanguage;
let lastMessageData: MessageDataCodeChanged | undefined;
onmessage = (message) => {
  if (!message?.data?.type) return;
  const data = message.data as MessageData;
  if (data.type === CONFIG_CHANGED) {
    const { programLanguage } = data;
    lastProgramLanguage = programLanguage;
    validate(lastMessageData?.value, lastMessageData?.variables ?? {}, lastProgramLanguage);
  }
  if (data.type === CODE_CHANGED) lastMessageData = data;
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    validate(lastMessageData?.value, lastMessageData?.variables ?? {}, lastProgramLanguage);
  }, DEBOUNCE_DELAY);
};
