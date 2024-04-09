import { FC } from "react";

interface ExportLatexProps {
  sequence: string[];
}

export const ExportLatex: FC<ExportLatexProps> = ({ sequence }) => {
  return (
    <div className="mx-auto flex flex-col gap-2 bg-background rounded-xl p-6">
      {sequence.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
};
