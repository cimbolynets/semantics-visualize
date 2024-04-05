import { BetweenHorizontalStart } from "lucide-react";
import MathRenderer from "../MathRenderer";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface StatesProps {
  states: string[];
}

export default function States({ states }: StatesProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-2 self-start">
          <BetweenHorizontalStart /> Show states
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="transition-all">
        <SheetHeader className="mb-4">
          <SheetTitle>List of program states</SheetTitle>
          <SheetDescription>
            Here you can see the according memory states, where the state identifier matches the one
            you see in a tree.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 overflow-x-auto">
          {states.map((state, index) => (
            <MathRenderer key={index}>{state}</MathRenderer>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
