import MathRenderer from "@/components/MathRenderer";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MakeSequenceAS } from "@/interpreter/as/MakeSequenceAS";
import { MakeSequenceSOS } from "@/interpreter/sos/MakeSequenceSOS";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { extractSequence } from "@/lib/utils/extract";
import { a, s } from "@/lib/utils/format";
import { InfoIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface GuessNextConfigurationProps {
  nextConfig: string;
  revealNext: () => void;
}

export const GuessNextConfiguration: FC<GuessNextConfigurationProps> = ({
  nextConfig,
  revealNext,
}) => {
  const activeInterpreter = useProgramStorage((state) => state.activeInterpreter);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "failure" | undefined>(undefined);
  const [guessedConfig, setGuessedConfig] = useState<string | undefined>("");

  useEffect(() => {
    setStatus(undefined);
  }, [open]);

  const guess = () => {
    if (!guessedConfig) return;
    try {
      const MakeSequence =
        activeInterpreter === "as"
          ? MakeSequenceAS
          : activeInterpreter === "sos"
          ? MakeSequenceSOS
          : undefined;
      if (!MakeSequence) return;
      const seq = new MakeSequence().getSequence(guessedConfig, {}, true);
      const targetSequence = extractSequence(nextConfig);
      const guessedSequence = extractSequence(seq?.[0]);
      setStatus(guessedSequence === targetSequence ? "success" : "failure");
    } catch (error) {
      console.log(error);
      setStatus("failure");
      return;
    } finally {
      revealNext();
    }
    setGuessedConfig("");
  };

  const inputExample =
    activeInterpreter === "sos" ? (
      <>
        <MathRenderer className="!p-0">{String.raw`${a("i")} = \langle `}</MathRenderer>
        <span className="bg-blue-400">...</span>
        <MathRenderer className="!p-0">{String.raw`, ${s("j")}\rangle \Rightarrow ${a(
          "i+1"
        )}`}</MathRenderer>
      </>
    ) : activeInterpreter === "as" ? (
      <>
        <MathRenderer className="!p-0">{String.raw`${a("i")} = \langle `}</MathRenderer>
        <span className="bg-blue-400">...</span>
        <MathRenderer className="!p-0">{String.raw`, \mathscr{e}, ${s("j")}\rangle = \! \gg ${a(
          "i+1"
        )}`}</MathRenderer>
      </>
    ) : null;

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v)}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          Guess next
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[40rem] max-w-full flex flex-col gap-2">
        {inputExample ? (
          <div className="flex flex-wrap">
            <span className="mr-2">Enter only highlighted instruction part: </span>
            {inputExample}
          </div>
        ) : null}
        <CodeEditor
          value={guessedConfig}
          setValue={setGuessedConfig}
          height={100}
          fontSize={16}
          variables={{}}
          disableValidation
          className="!min-h-[100px]"
        />
        <div className="flex items-center gap-2">
          <Button onClick={guess} size="sm" variant="secondary">
            Go
          </Button>
          <Button onClick={() => setOpen(false)} size="sm" variant="secondary">
            Cancel
          </Button>
          <div className="flex gap-2 items-center ml-auto">
            {status ? (
              status === "success" ? (
                <span className="text-green-500">Correct!</span>
              ) : (
                <span className="text-red-600">Wrong guess.</span>
              )
            ) : null}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <InfoIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-80">
                  <p>
                    When transforming while loop to branch, you must include parentheses for else
                    condition - <pre>else ( skip )</pre>
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
