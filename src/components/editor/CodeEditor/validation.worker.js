// import generateVisitedTreeNS from "@/interpreter/visitedTreeGenerator";
// import { replaceSpecialSymbols } from "@/lib/specialSymbols/replaceSymbols";
import { generateVisitedTreeAS } from "@/interpreter/as/generateVisitedTree";
import { generateVisitedTreeJane } from "@/interpreter/jane/generateVisitedTree";
import { InterpreterError } from "@/interpreter/InterpreterError";
import { INTERPRETER_CHANGED } from "./constants";

const DEBOUNCE_DELAY = 700;

let timerId;
let interpreter;
let withoutExtensions = false;
onmessage = (message) => {
  if (!message?.data?.type) return;
  if (message.data.type === INTERPRETER_CHANGED) {
    const { activeInterpreter } = message.data;
    interpreter = activeInterpreter === "as" ? generateVisitedTreeAS : generateVisitedTreeJane;
    withoutExtensions = activeInterpreter !== "ns";
  }
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    if (!message.data.value || !interpreter) return;
    let errors = [];
    try {
      const [, visitor] = interpreter(
        message.data.value,
        message.data.variables,
        withoutExtensions
      );
      errors = visitor.getErrors();
    } catch (error) {
      if (error instanceof InterpreterError) {
        errors = error.errors;
      }
    }
    postMessage(errors);
  }, DEBOUNCE_DELAY);
};
