import {
  allowedCombinations,
  programLanguages,
  semanticMethods,
  useProgramStorage,
} from "@/lib/storage/programStorage";
import { ChevronDownIcon, FunctionSquareIcon, LanguagesIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const InterpreterSelector: FC = () => {
  const { semanticMethod, setSemanticMethod, programLanguage, setProgramLanguage } =
    useProgramStorage();

  const activeMethodName = semanticMethods.find((item) => item.value === semanticMethod)?.name;
  const activeLanguageName = programLanguages.find((item) => item.value === programLanguage)?.name;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button data-runprogram-0="right" className="flex gap-2">
          <FunctionSquareIcon /> {activeMethodName} <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {semanticMethods.map((item) => (
            <DropdownMenuItem key={item.value} onClick={() => setSemanticMethod(item.value)}>
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
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
      </DropdownMenu>
    </>
  );
};
