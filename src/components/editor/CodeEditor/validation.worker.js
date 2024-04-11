// import generateVisitedTreeNS from "@/interpreter/visitedTreeGenerator";
// import { replaceSpecialSymbols } from "@/lib/specialSymbols/replaceSymbols";
import { generateVisitedTreeAS } from "@/interpreter/as/generateVisitedTree";
import { generateVisitedTreeJane } from "@/interpreter/jane/generateVisitedTree";
import { InterpreterError } from "@/interpreter/InterpreterError";
import { CONFIG_CHANGED } from "./constants";

const DEBOUNCE_DELAY = 700;

function validate(input, variables, interpreter, withoutExtensions) {
  if (typeof input === "undefined" || !interpreter) return;
  if (!input.trim()) return postMessage([]);
  let errors = [];
  try {
    const [, visitor] = interpreter(input, variables, false, withoutExtensions);
    errors = visitor.getErrors();
  } catch (error) {
    if (error instanceof InterpreterError) {
      errors = error.errors;
    }
  }
  postMessage(errors);
}

let timerId;
let interpreter;
let withoutExtensions = false;
let lastMessageData;
onmessage = (message) => {
  if (!message?.data?.type) return;
  if (message.data.type === CONFIG_CHANGED) {
    const { activeInterpreter, withExtensions } = message.data;
    interpreter = activeInterpreter === "as" ? generateVisitedTreeAS : generateVisitedTreeJane;
    withoutExtensions = activeInterpreter !== "ns" || !withExtensions;
    validate(
      lastMessageData?.value,
      lastMessageData?.variables ?? {},
      interpreter,
      withoutExtensions
    );
  }
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    lastMessageData = message.data;
    validate(message.data.value, message.data.variables, interpreter, withoutExtensions);
  }, DEBOUNCE_DELAY);
};
