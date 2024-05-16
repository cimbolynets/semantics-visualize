import { Copy } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { ExportType } from "./Export";

const DELIMITER = " \\\\ \n";

interface ExportLatexProps {
  exportType: ExportType;
  sequence: string[];
  states: string[];
  envs?: string[];
}

export const ExportLatex: FC<ExportLatexProps> = ({ exportType, sequence, states, envs }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    let text: string;
    switch (exportType) {
      case "sequence":
        text = sequence.join(DELIMITER);
        break;
      case "states":
        text = states.join(DELIMITER);
        break;
      case "envs":
        if (!envs) return;
        text = envs.join(DELIMITER);
        break;
      default:
        text = [...sequence, ...states, ...(envs ?? [])].join(DELIMITER);
    }
    toast({
      title: "Text's been copied to clipboard.",
      duration: 2000,
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col gap-2">
      <Button variant="secondary" onClick={copyToClipboard}>
        Copy <i>LaTex</i> <Copy />
      </Button>
    </div>
  );
};
