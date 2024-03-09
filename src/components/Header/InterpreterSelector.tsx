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

const interpreters: Interpreters[] = ["ns", "sos", "as"];

export const InterpreterSelector: FC = () => {
  const [active, setActive] = useProgramStorage((state) => [
    state.activeInterpreter,
    state.setActiveInterpreter,
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button color="primary" className="flex gap-2">
          {active.toUpperCase()} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {interpreters.map((i) => (
          <DropdownMenuItem key={i} onClick={() => setActive(i)}>
            {i.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
