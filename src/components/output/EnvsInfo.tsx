import { FC } from "react";
import MathRenderer from "../MathRenderer";
import { SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";

interface EnvsInfoProps {
  envs: string[];
}

export const EnvsInfo: FC<EnvsInfoProps> = ({ envs }) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>List of procedure environments</SheetTitle>
        <SheetDescription>Here you can see the list of procedure environments.</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-2 h-full overflow-auto">
        {envs.map((env, index) => {
          return <MathRenderer key={index}>{env}</MathRenderer>;
        })}
      </div>
    </>
  );
};
