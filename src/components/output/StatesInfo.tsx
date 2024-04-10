import { FC } from "react";
import MathRenderer from "../MathRenderer";
import { SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";

interface StatesInfoProps {
  states: string[];
}

export const StatesInfo: FC<StatesInfoProps> = ({ states }) => {
  return (
    <>
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
    </>
  );
};
