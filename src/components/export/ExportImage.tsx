import { useProgramStorage } from "@/lib/storage/programStorage";
import html2canvas from "html2canvas";
import { Image } from "lucide-react";
import { FC, useMemo, useRef, useState } from "react";
import { SequenceBody } from "../output/SequenceBody";
import { Button } from "../ui/button";
import { ExportType } from "./Export";
import "./export.css";

interface ExportImageProps {
  exportType: ExportType;
  sequence: string[];
  states: string[];
  envs?: string[];
}

export const ExportImage: FC<ExportImageProps> = ({ exportType, sequence, states, envs }) => {
  const programLanguage = useProgramStorage((state) => state.programLanguage);

  const sequenceRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const downloadImage = () => {
    const sequence = sequenceRef.current;
    if (!sequence) return;
    setOpen(true);
    html2canvas(sequence).then((canvas) => {
      canvas.style.display = "none";
      const image = canvas.toDataURL("png");
      const a = document.createElement("a");
      a.setAttribute("download", "sequence.png");
      a.setAttribute("href", image);
      a.click();
      setOpen(false);
    });
  };

  const combinedSequence = useMemo(() => {
    switch (exportType) {
      case "sequence":
        return sequence;
      case "states":
        return states;
      case "whole":
        return [...sequence, ...states, ...(envs ?? [])];
    }
    if (programLanguage === "jane-extended" && exportType === "envs") return envs ?? [];
    return [];
  }, [exportType, programLanguage]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <Button variant="secondary" onClick={downloadImage} className="gap-2">
          Download as image <Image />
        </Button>
        {open ? <span>Image is being generated...</span> : null}
      </div>
      <div
        ref={sequenceRef}
        className="z-50 bg-background p-4 rounded-xl top-0 left-[10000%] fixed overflow-initial"
      >
        <SequenceBody forExport sequence={combinedSequence} className="export-math-renderer" />
      </div>
    </>
  );
};
