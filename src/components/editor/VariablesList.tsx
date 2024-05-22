import { Memory } from "@/types";
import MathRenderer from "../MathRenderer";
import SetVariables from "./SetVariables";
import { formatMemory } from "@/lib/utils/format";
import { s } from "@/lib/utils/format";

interface VariablesListListProps {
  variables: Memory;
}

export default function VariablesList({ variables }: VariablesListListProps) {
  const variablesFormatted = `${s(0)} = ` + formatMemory(variables);

  return (
    <>
      <SetVariables />
      <MathRenderer className="flex gap-2 grow overflow-x-auto whitespace-nowrap">{variablesFormatted}</MathRenderer>
    </>
  );
}
