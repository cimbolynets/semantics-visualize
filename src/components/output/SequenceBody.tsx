import { cn } from "@/lib/utils";
import { forwardRef, memo } from "react";
import MathRenderer from "../MathRenderer";

interface SequenceBodyProps {
  sequence: string[];
  className?: string;
}

export const SequenceBody = memo(
  forwardRef<HTMLDivElement, SequenceBodyProps>(({ sequence, className }, ref) => {
    return (
      <div ref={ref} className={cn("output-sequence", className)}>
        {sequence.map((chunk) => (
          <MathRenderer key={chunk}>{chunk}</MathRenderer>
        ))}
      </div>
    );
  })
);
