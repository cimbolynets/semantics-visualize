import { cn } from "@/lib/utils";
import katex from "katex";
import { HTMLAttributes, useEffect, useRef } from "react";

interface MathRendererProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export default function MathRenderer({ children, className, ...props }: MathRendererProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    katex.render(children, elementRef.current);
  }, [children]);

  return <div ref={elementRef} {...props} className={cn(className)}></div>;
}
