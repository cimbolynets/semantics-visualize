import generateVisitedTree from "@/interpreter/visitedTreeGenerator";
import { replaceSpecialSymbols } from "@/lib/specialSymbols/replaceSymbols";

const DEBOUNCE_DELAY = 700;

let timerId;
onmessage = (message) => {
  if (!message) return;
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    if (!message.data.value) return;
    const [, visitor] = generateVisitedTree(
      replaceSpecialSymbols(message.data.value),
      message.data.variables
    );
    const errors = visitor.getErrors();
    postMessage(errors);
  }, DEBOUNCE_DELAY);
};
