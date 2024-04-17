import { useOutputStorage } from "@/lib/storage/outputStorage";
import { DownloadIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ExportImage } from "./ExportImage";
import { ExportLatex } from "./ExportLatex";

interface ExportProps {}

export const Export: FC<ExportProps> = () => {
  const output = useOutputStorage();

  if (!output.sequence || !output.states) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="gap-2">
          Export <DownloadIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-8">
        <ExportImage sequence={output.sequence} states={output.states} envs={output.envs} />
        <ExportLatex sequence={output.sequence} states={output.states} envs={output.envs} />
      </DialogContent>
    </Dialog>
  );
};
