import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMediaBreakpointUp } from "@/lib/hooks/useMediaBreakpointUp";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { tailwindConfig } from "@/lib/tailwindConfig";
import html2canvas from "html2canvas";
import { ChevronDown, Image } from "lucide-react";
import { FC, useMemo, useRef, useState } from "react";
import { SequenceBody } from "../output/SequenceBody";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import "./export.css";

type ExportType = "sequence" | "states" | "envs" | "whole";

const exportTypes: Array<{ name: string; value: ExportType }> = [
  { value: "sequence", name: "Only sequence" },
  { value: "states", name: "Only states" },
  { value: "envs", name: "Only environments" },
  { value: "whole", name: "Everything" },
];

interface ExportImageProps {
  sequence: string[];
  states: string[];
  envs?: string[];
}

export const ExportImage: FC<ExportImageProps> = ({ sequence, states, envs }) => {
  const isLarge = useMediaBreakpointUp(tailwindConfig.theme.screens.lg);
  const programLanguage = useProgramStorage((state) => state.programLanguage);

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
    if (programLanguage === "jane-extended" && exportType === "envs") return envs ?? [];
    return [];
  }, [exportType, programLanguage]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="flex items-center gap-2">
          Download as image <Image />
        </h3>
        {isLarge ? (
          <Tabs value={exportType} onValueChange={(v) => setExportType(v as ExportType)}>
            <TabsList>
              {exportTypes.map((et) =>
                !envs && et.value === "envs" ? null : (
                  <TabsTrigger key={et.value} value={et.value}>
                    {et.name}
                  </TabsTrigger>
                )
              )}
            </TabsList>
          </Tabs>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button data-runprogram-0="right" className="flex gap-2">
                {exportTypes.find((et) => et.value === exportType)?.name ?? "Select export type"}{" "}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {exportTypes.map((et) =>
                !envs && et.value === "envs" ? null : (
                  <DropdownMenuItem key={et.value} onClick={() => setExportType(et.value)}>
                    {et.name}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
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
