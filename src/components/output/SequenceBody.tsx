import { cn } from "@/lib/utils";
import { forwardRef, memo } from "react";
import MathRenderer from "../MathRenderer";

interface SequenceBodyProps {
  sequence: string | string[];
  className?: string;
}

export const SequenceBody = memo(
  forwardRef<HTMLDivElement, SequenceBodyProps>(({ sequence, className }, ref) => {
    if (!sequence) return null;

    return (
      <div ref={ref} className={cn("output-sequence", className)}>
        {(Array.isArray(sequence) ? sequence : [sequence]).map((chunk) => (
          <MathRenderer key={chunk}>{chunk}</MathRenderer>
        ))}
      </div>
    );
  })
);
