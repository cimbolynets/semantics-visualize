import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProgramStorage } from "@/lib/storage/programStorage";
import html2canvas from "html2canvas";
import { Image } from "lucide-react";
import { FC, useMemo, useRef, useState } from "react";
import { SequenceBody } from "../output/SequenceBody";
import { Button } from "../ui/button";
import "./export.css";

type ExportType = "sequence" | "states" | "envs" | "whole";

interface ExportImageProps {
  sequence: string[];
  states: string[];
  envs?: string[];
}

export const ExportImage: FC<ExportImageProps> = ({ sequence, states, envs }) => {
  const withExtensions = useProgramStorage((state) => state.withExtensions);

  const [exportType, setExportType] = useState<ExportType>("whole");
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
    if (withExtensions && exportType === "envs") return envs ?? [];
    return [];
  }, [exportType, withExtensions]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="flex items-center gap-2">
          Download as image <Image />
        </h3>
        <Tabs value={exportType} onValueChange={(v) => setExportType(v as ExportType)}>
          <TabsList>
            <TabsTrigger value="sequence">Only sequence</TabsTrigger>
            <TabsTrigger value="states">Only states</TabsTrigger>
            {envs ? <TabsTrigger value="envs">Only environments</TabsTrigger> : null}
            <TabsTrigger value="whole">Everything</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="secondary" onClick={downloadImage} className="gap-2">
          Download
        </Button>
        {open ? <span>Image is being generated...</span> : null}
      </div>
      <div
        ref={sequenceRef}
        className="z-50 bg-background p-4 rounded-xl top-0 left-[10000%] fixed overflow-initial"
      >
        <SequenceBody sequence={combinedSequence} className="export-math-renderer" />
      </div>
    </>
  );
};
