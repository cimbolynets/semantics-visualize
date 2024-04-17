import { Copy } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const DELIMITER = " \\\\ \n";

interface ExportLatexProps {
  sequence: string[];
  states: string[];
  envs?: string[];
}

export const ExportLatex: FC<ExportLatexProps> = ({ sequence, states, envs }) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    toast({
      title: "Text's been copied to clipboard.",
      duration: 2000,
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="flex items-center gap-2 mb-2">
        Copy <i>LaTex</i> <Copy />
      </h3>
      <Button variant="secondary" onClick={() => copyToClipboard(sequence.join(DELIMITER))}>
        Only sequence
      </Button>
      <Button variant="secondary" onClick={() => copyToClipboard(states.join(DELIMITER))}>
        Only states
      </Button>
      {envs?.length ? (
        <Button variant="secondary" onClick={() => copyToClipboard(envs.join(DELIMITER))}>
          Only environments
        </Button>
      ) : null}
      <Button
        variant="secondary"
        onClick={() => copyToClipboard([...sequence, ...states, ...(envs ?? [])].join(DELIMITER))}
      >
        Copy everything
      </Button>
    </div>
  );
};
