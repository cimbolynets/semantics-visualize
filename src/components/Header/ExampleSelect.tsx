import { useProgramStorage } from "@/lib/storage/programStorage";
import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const ExampleSelector: FC = () => {
  const examples = useProgramStorage((state) => state.getActiveExamples());
  const storage = useProgramStorage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-runprogram-1 className="flex gap-2">
          {examples.find((e) => e.value === storage.programText)?.name ??
            "Select example".toUpperCase()}{" "}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {examples.map((e) => (
          <DropdownMenuItem
            key={e.name}
            onClick={() => {
              storage.setProgramText(e.value);
              storage.setVariables(e.variables ?? {});
            }}
          >
            {e.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
