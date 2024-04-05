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
  const [active, setActive] = useProgramStorage((state) => [
    state.programText,
    state.setProgramText,
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button color="primary" className="flex gap-2">
          {(examples.find((e) => e.value === active)?.name ?? "Select example").toUpperCase()} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {examples.map((e) => (
          <DropdownMenuItem key={e.name} onClick={() => setActive(e.value)}>
            {e.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};