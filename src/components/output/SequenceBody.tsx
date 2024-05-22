import { cn } from "@/lib/utils";
import { forwardRef, memo } from "react";
import MathRenderer from "../MathRenderer";
import { useOutputOptionsStorage } from "@/lib/storage/displayOptionsStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";

interface SequenceBodyProps {
  sequence: string | string[];
  forExport?: boolean;
  className?: string;
}

export const SequenceBody = memo(
  forwardRef<HTMLDivElement, SequenceBodyProps>(
    ({ sequence, forExport = false, className }, ref) => {
      const semanticMethod = useProgramStorage(state => state.semanticMethod)
      const breakLines = useOutputOptionsStorage((state) => state.breakLines);
      if (!sequence) return null;

      return (
        <div ref={ref} className={cn("output-sequence", className)}>
          {(Array.isArray(sequence) ? sequence : [sequence]).map((chunk) => (
            <MathRenderer
              key={chunk}
              className={cn(
                breakLines && !forExport && semanticMethod !== "ns" && "border-b last:border-b-0",
                forExport && "!whitespace-nowrap"
              )}
            >
              {chunk}
            </MathRenderer>
          ))}
        </div>
      );
    }
  )
);
