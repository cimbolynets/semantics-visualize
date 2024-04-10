import { CodeEditor } from "@/components/editor/CodeEditor";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FC, useEffect, useState } from "react";

interface GuessNextConfigurationProps {
  nextConfig: string;
}

export const GuessNextConfiguration: FC<GuessNextConfigurationProps> = ({ nextConfig }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "failure" | undefined>(undefined);
  const [guessedConfig, setGuessedConfig] = useState<string | undefined>("");

  useEffect(() => {
    setStatus(undefined);
  }, [nextConfig]);

  const guess = () => {
    if (!guessedConfig) return;
    try {
      console.log("Guessing");
    } catch (error) {
      setStatus("failure");
      return;
    }
    setGuessedConfig("");
  };

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v)}>
      <PopoverTrigger asChild>
        <Button variant="secondary">Guess next</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[40rem] max-w-full">
        <CodeEditor
          value={guessedConfig}
          setValue={setGuessedConfig}
          height={100}
          fontSize={16}
          variables={{}}
          disableValidation
          className="!min-h-[100px]"
        />
        <div className="flex gap-2 mt-2">
          <Button onClick={guess} size="sm" variant="secondary">
            Go
          </Button>
          <Button onClick={() => setOpen(false)} size="sm" variant="secondary">
            Cancel
          </Button>
          {status ? (
            <div className="ml-auto">
              {status === "success" ? (
                <span className="text-green">Correct!</span>
              ) : (
                <span className="text-red">Wrong</span>
              )}
            </div>
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  );
};
