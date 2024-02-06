import { useProgramStorage } from "@/lib/storage/programStorage";
import { Memory } from "@/types";
import { VariableIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

type IVariable = { id: number; name: string; value: string };

function Variable({
  variable,
  setVariable,
}: {
  variable: IVariable;
  setVariable: (v: IVariable) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Input
        placeholder="Name"
        value={variable.name}
        onChange={(e) => setVariable({ ...variable, name: e.target.value })}
      />
      <Input
        placeholder="Value"
        value={variable.value}
        onChange={(e) => setVariable({ ...variable, value: e.target.value })}
      />
    </div>
  );
}

// we're storing the id of the variable, to then use it as a key in the list of variables
let varId = 0;
export default function SetVariables() {
  const [variables, setProgramVariables] = useProgramStorage((state) => [
    state.variables,
    state.setVariables,
  ]);

  // we'll be storing our variables in a list instead of an object, because we want them to be ordered
  // as default object is unordered, when user changes variables, their order might change
  // variable in a list will be in format: [id: 0, name: "", value: ""]
  const [variablesList, setVariablesList] = useState<IVariable[]>([]);

  // we want to the variables from the context to our list on initial render
  useEffect(() => {
    const currentVariablesList = [];
    for (const name in variables) {
      currentVariablesList.push({ id: varId, name, value: String(variables[name]) });
      varId++;
    }
    setVariablesList(currentVariablesList);
  }, [variables]);
  // function will change the variables in the context, according to the variables in the list
  const setVariables = (variablesList: IVariable[]) => {
    const variables: Memory = {};
    for (const variable of variablesList) {
      // if the format of a variable doesn't match the required format, defined in grammar, we'll skip it
      if (
        !(
          variable.name &&
          typeof variable.name === "string" &&
          variable.name.match(/^ *[a-zA-Z][a-zA-Z0-9]* *$/)
        )
      )
        continue;
      if (
        !(
          variable.value &&
          typeof variable.value === "string" &&
          variable.value.match(/^ *[0-9]+ *$/)
        )
      )
        continue;
      variables[variable.name] = Number(variable.value);
    }
    setProgramVariables(variables);
  };
  // add a variable to the list
  const addVar = () => {
    setVariablesList((prev) => [...prev, { name: "", value: "", id: varId }]);
    varId++;
  };
  // remove a variable from the context
  const removeVar = () => {
    if (variablesList.length === 0) return;
    // if a variable wasn't set yet, it won't be in a context but can be in a list, so we'll remove it from the list
    if (variables[variablesList[variablesList.length - 1].name]) {
      setVariables(variablesList.slice(0, -1));
      return;
    }
    setVariablesList((prev) => prev.slice(0, -1));
  };
  // change variable in the list
  const setVar = (variable: IVariable) => {
    setVariablesList((prev) => prev.map((v) => (v.id === variable.id ? variable : v)));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-1">
          <VariableIcon /> Set variables
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="transition-all">
        <SheetHeader className="mb-4">
          <SheetTitle>Set Variables</SheetTitle>
          <SheetDescription>
            Define the set of variables that will be present in initial state.
          </SheetDescription>
          <SheetClose asChild>
            <Button type="submit" onClick={() => setVariables(variablesList)}>
              Apply
            </Button>
          </SheetClose>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => addVar()}>
              Add
            </Button>
            <Button variant="secondary" onClick={() => removeVar()}>
              Remove
            </Button>
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          {variablesList.map((v) => (
            <Variable key={v.id} variable={v} setVariable={setVar} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
