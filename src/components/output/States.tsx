import { BetweenHorizontalStart } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { StatesInfo } from "./StatesInfo";

interface StatesProps {
  states: string[];
}

export default function States({ states }: StatesProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="gap-2 self-start">
          Show states <BetweenHorizontalStart />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-4 transition-all">
        <StatesInfo states={states} />
      </SheetContent>
    </Sheet>
  );
}
