import { FC, memo } from "react";
import MathRenderer from "../MathRenderer";
import { cn } from "@/lib/utils";

interface SequenceBodyProps {
  sequence: string[];
  className?: string;
}

export const SequenceBody: FC<SequenceBodyProps> = memo(({ sequence, className }) => {
  console.log("rerendering sequence")
  return (
    <div className={cn("output-sequence", className)}>
      {sequence.map((chunk) => (
        <MathRenderer key={chunk}>{chunk}</MathRenderer>
      ))}
    </div>
  );
});
