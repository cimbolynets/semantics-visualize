import {
  ProgramLanguage,
  SemanticMethod,
  useProgramStorage
} from "@/lib/storage/programStorage";
import { ChevronDownIcon, FunctionSquareIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Combination = {
  name: string;
  short: string;
  value: CombinationValue;
};

type CombinationValue = { semanticMethod: SemanticMethod; programLanguage: ProgramLanguage };

const combinations: Combination[] = [
  {
    name: "Natural Semantics + Jane",
    value: { semanticMethod: "ns", programLanguage: "jane" },
    short: "NS + Jane",
  },
  {
    name: "Natural Semantics + Jane Extended",
    value: { semanticMethod: "ns", programLanguage: "jane-extended" },
    short: "NS + Jane Extended",
  },
  {
    name: "Structural operational semantics + Jane",
    value: { semanticMethod: "sos", programLanguage: "jane" },
    short: "SOS + Jane",
  },
  {
    name: "Structural operational semantics + Abstract machine",
    value: { semanticMethod: "sos", programLanguage: "am" },
    short: "SOS + AM",
  },
];

export const InterpreterSelector: FC = () => {
  const { semanticMethod, setSemanticMethod, programLanguage, setProgramLanguage } =
    useProgramStorage();

  const activeCombinationShort = combinations.find(
    (c) => c.value.programLanguage === programLanguage && c.value.semanticMethod === semanticMethod
  )?.short;

  const selectInterpreter = (v: CombinationValue) => {
    setSemanticMethod(v.semanticMethod);
    setProgramLanguage(v.programLanguage);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button data-runprogram-0="right" className="flex gap-2">
            <FunctionSquareIcon /> {activeCombinationShort} <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {combinations.map((c) => (
            <DropdownMenuItem
              key={c.value.programLanguage + c.value.semanticMethod}
              onClick={() => selectInterpreter(c.value)}
            >
              {c.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button data-runprogram-0="right" className="flex gap-2">
            <LanguagesIcon /> {activeLanguageName} <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {programLanguages
            .filter((pl) => allowedCombinations[semanticMethod].includes(pl.value))
            .map((item) => (
              <DropdownMenuItem key={item.value} onClick={() => setProgramLanguage(item.value)}>
                {item.name}
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  );
};
