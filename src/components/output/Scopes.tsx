import { BetweenHorizontalStart } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { EnvsInfo } from "./EnvsInfo";
import { StatesInfo } from "./StatesInfo";

type Tabs = "states" | "envs";

interface ScopesProps {
  states: string[];
  envs: string[];
}

export default function Scopes({ states, envs }: ScopesProps) {
  const [tab, setTab] = useState<Tabs>("states");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-2 self-start">
          <BetweenHorizontalStart /> Show scopes
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="transition-all">
        <ToggleGroup
          type="single"
          value={tab}
          onValueChange={(v: Tabs) => setTab(v)}
          className="my-4 grid grid-cols-2 gap-2 w-full"
        >
          <ToggleGroupItem value="states">States</ToggleGroupItem>
          <ToggleGroupItem value="envs">Environments</ToggleGroupItem>
        </ToggleGroup>
        {tab === "states" ? (
          <StatesInfo states={states} />
        ) : tab === "envs" ? (
          <EnvsInfo envs={envs} />
        ) : (
          "No such tab"
        )}
      </SheetContent>
    </Sheet>
  );
}
