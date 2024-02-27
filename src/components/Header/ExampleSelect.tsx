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
import {
  blocksAndProcedures,
  skipWhileInnerIf,
  withBlock,
  withDynamicProcedureScope,
} from "@/lib/examples";

const examples = [
  { name: "While&If", value: skipWhileInnerIf },
  { name: "Block", value: withBlock },
  { name: "Procedure", value: withDynamicProcedureScope },
  { name: "Blocks and procedures", value: blocksAndProcedures },
];

export const ExampleSelector: FC = () => {
  const [active, setActive] = useProgramStorage((state) => [
    state.programText,
    state.setProgramText,
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button color="primary" className="flex gap-2">
          {(examples.find((e) => e.value === active)?.name ?? "None").toUpperCase()} <ChevronDown />
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
