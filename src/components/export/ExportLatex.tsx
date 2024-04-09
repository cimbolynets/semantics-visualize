import { Copy } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface ExportLatexProps {
  sequence: string[];
}

export const ExportLatex: FC<ExportLatexProps> = ({ sequence }) => {
  const { toast } = useToast();

  return (
    <Button
      variant="secondary"
      onClick={() => {
        toast({
          title: "Text's being copied to clipboard.",
          duration: 2000,
        });
        navigator.clipboard.writeText(sequence.length > 1 ? sequence.join(" \\\\ ") : sequence[0]);
      }}
      className="gap-2"
    >
      Copy <Copy />
    </Button>
  );
};
