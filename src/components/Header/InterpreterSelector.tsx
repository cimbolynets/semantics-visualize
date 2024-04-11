import { Interpreters, useProgramStorage } from "@/lib/storage/programStorage";
import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const interpreters: Array<{ name: string; value: Interpreters }> = [
  { name: "Natural semantics", value: "ns" },
  { name: "Structural operational semantics", value: "sos" },
  { name: "Abstract machine", value: "am" },
];

export const InterpreterSelector: FC = () => {
  const [active, setActive] = useProgramStorage((state) => [
    state.activeInterpreter,
    state.setActiveInterpreter,
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-runprogram-0="right" className="flex gap-2">
          {active.toUpperCase()} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {interpreters.map((i) => (
          <DropdownMenuItem key={i.value} onClick={() => setActive(i.value)}>
            {i.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
