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
        <DropdownMenuItem onClick={() => setActive("ns")}>NS</DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setActive("ds")}>DS</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
