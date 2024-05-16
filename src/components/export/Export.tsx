import { useOutputStorage } from "@/lib/storage/outputStorage";
import { ChevronDown, DownloadIcon } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ExportImage } from "./ExportImage";
import { ExportLatex } from "./ExportLatex";
import { useMediaBreakpointUp } from "@/lib/hooks/useMediaBreakpointUp";
import { tailwindConfig } from "@/lib/tailwindConfig";

export type ExportType = "sequence" | "states" | "envs" | "whole";

const exportTypes: Array<{ name: string; value: ExportType }> = [
  { value: "sequence", name: "Only sequence" },
  { value: "states", name: "Only states" },
  { value: "envs", name: "Only environments" },
  { value: "whole", name: "Everything" },
];

interface ExportProps {}

export const Export: FC<ExportProps> = () => {
  const isLarge = useMediaBreakpointUp(tailwindConfig.theme.screens.lg);
  const [exportType, setExportType] = useState<ExportType>("whole");
  const output = useOutputStorage();

  if (!output.sequence || !output.states) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="gap-2">
          Export <DownloadIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4">
        <h3>Export output</h3>
        <div className="mb-4">
          {isLarge ? (
            <Tabs value={exportType} onValueChange={(v) => setExportType(v as ExportType)}>
              <TabsList>
                {exportTypes.map((et) =>
                  !output.envs && et.value === "envs" ? null : (
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
                  !output.envs && et.value === "envs" ? null : (
                    <DropdownMenuItem key={et.value} onClick={() => setExportType(et.value)}>
                      {et.name}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <ExportImage
          exportType={exportType}
          sequence={output.sequence}
          states={output.states}
          envs={output.envs}
        />
        <ExportLatex
          exportType={exportType}
          sequence={output.sequence}
          states={output.states}
          envs={output.envs}
        />
      </DialogContent>
    </Dialog>
  );
};
