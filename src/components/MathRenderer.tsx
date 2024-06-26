import { useOutputOptionsStorage } from "@/lib/storage/displayOptionsStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { cn } from "@/lib/utils";
import katex from "katex";
import { HTMLAttributes, memo, useEffect, useRef } from "react";

interface MathRendererProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export default memo(function MathRenderer({ children, className, ...props }: MathRendererProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const breakLines = useOutputOptionsStorage((state) => state.breakLines);
  const semanticMethod = useProgramStorage(state => state.semanticMethod)

  useEffect(() => {
    if (!elementRef.current) return;
    katex.render(children, elementRef.current);
  }, [children]);

  return (
    <div
      ref={elementRef}
      {...props}
      className={cn((!breakLines || semanticMethod === "ns") && "whitespace-nowrap", "p-1", className)}
    ></div>
  );
});
