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

  return <div ref={elementRef} {...props} className={cn(className, "whitespace-nowrap p-1")}></div>;
}

// import { cn } from "@/lib/utils";
// import { MathJax } from "better-react-mathjax";
// import { HTMLAttributes } from "react";

// interface MathRendererProps extends HTMLAttributes<HTMLDivElement> {
//   children: string;
// }

// export default function MathRenderer({ children, className, ...props }: MathRendererProps) {
//   return (
//     <MathJax {...props} className={cn(className)}>
//       {String.raw`\[\begin{flalign}&${children}&\end{flalign}\]`}
//     </MathJax>
//   );
// }
