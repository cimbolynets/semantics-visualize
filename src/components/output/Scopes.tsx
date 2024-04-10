import { BetweenHorizontalStart } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { EnvsInfo } from "./EnvsInfo";
import { StatesInfo } from "./StatesInfo";

type Tabs = "states" | "envs";

interface ScopesProps {
  states: string[];
  envs: string[];
}

export default function Scopes({ states, envs }: ScopesProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-2 self-start">
          <BetweenHorizontalStart /> Show scopes
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="transition-all">
        <Tabs defaultValue="states">
          <TabsList className="w-full my-4">
            <TabsTrigger value="states" className="basis-0 grow">States</TabsTrigger>
            <TabsTrigger value="envs" className="basis-0 grow">Environments</TabsTrigger>
          </TabsList>
          <TabsContent value="states" asChild>
            <StatesInfo states={states} />
          </TabsContent>
          <TabsContent value="envs" asChild>
            <EnvsInfo envs={envs} />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
