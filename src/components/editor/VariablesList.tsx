import { Memory } from "@/types";
import MathRenderer from "../MathRenderer";
import SetVariables from "./SetVariables";
import { formatMemory } from "@/lib/utils/formatMemory";

interface VariablesListListProps {
  variables: Memory;
}

export default function VariablesList({ variables }: VariablesListListProps) {
  const variablesFormatted = "s_0 = " + formatMemory(variables);

  return (
    <div className="flex items-center gap-4">
      <SetVariables />
      <MathRenderer className="flex gap-2">{variablesFormatted}</MathRenderer>
    </div>
  );
}
