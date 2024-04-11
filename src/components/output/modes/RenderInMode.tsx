import MathRenderer from "@/components/MathRenderer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollDown } from "@/lib/hooks/useScrollDown";
import { extractStateNumber } from "@/lib/utils/extract";
import { s } from "@/lib/utils/format";
import { ChevronDown } from "lucide-react";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { SequenceBody } from "../SequenceBody";
import States from "../States";
import { ConfigsPagination } from "./ConfigsPagination";
import { GuessNextConfiguration } from "./GuessNextConfiguration";

interface RenderInModeProps {
  sequence: string[];
  states: string[];
}

export const RenderInMode: FC<RenderInModeProps> = ({ sequence, states }) => {
  return (
    <Tabs defaultValue="step-by-step" className="flex flex-col gap-4 h-full">
      <div className="output-controls justify-between items-center">
        <div className="flex gap-4">
          <States states={states} />
          <TabsList>
            <TabsTrigger value="whole-sequence">Whole sequence</TabsTrigger>
            <TabsTrigger value="step-by-step">Step by step</TabsTrigger>
            <TabsTrigger value="single-instruction">Single instruction</TabsTrigger>
          </TabsList>
        </div>
        <span className="text-base">
          Sequence length: <span className="font-bold">{sequence.length}</span>
        </span>
      </div>
      <TabsContent value="whole-sequence" asChild>
        <WholeSequence sequence={sequence} states={states} />
      </TabsContent>
      <TabsContent value="step-by-step" asChild>
        <StepByStep sequence={sequence} states={states} />
      </TabsContent>
      <TabsContent value="single-instruction" asChild>
        <SingleInstruction sequence={sequence} states={states} />
      </TabsContent>
    </Tabs>
  );
};

function WholeSequence({ sequence }: RenderInModeProps) {
  return sequence.length ? (
    <SequenceBody sequence={sequence} />
  ) : (
    <span className="text-xl font-bold">No sequence</span>
  );
}

function StepByStep({ sequence }: RenderInModeProps) {
  const seqRef = useRef<HTMLDivElement | null>(null);
  const [renderedLength, setRenderedLength] = useState(1);

  useEffect(() => {
    setRenderedLength(1);
  }, [sequence]);

  const sequencePart = useMemo(() => {
    return sequence.slice(0, renderedLength);
  }, [sequence, renderedLength]);
  const nextConfig = renderedLength < sequence.length - 1 ? sequence.at(renderedLength) : undefined;

  const inc = () => {
    setRenderedLength((prev) => (prev < sequence.length ? prev + 1 : prev));
  };

  const dec = () => {
    setRenderedLength((prev) => (prev > 1 ? prev - 1 : prev));
  };

  useScrollDown(seqRef, [renderedLength]);

  return sequencePart.length ? (
    <>
      <div className="flex gap-2">
        <Button disabled={renderedLength <= 1} onClick={dec} size="sm" variant="secondary">
          Prev
        </Button>
        <Button
          disabled={renderedLength === sequence.length}
          onClick={inc}
          size="sm"
          variant="secondary"
        >
          Next
        </Button>
        {nextConfig ? <GuessNextConfiguration nextConfig={nextConfig} revealNext={inc} /> : null}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="ml-auto">
            <Button size="sm" variant="secondary" className="gap-2">
              Goto <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!max-h-80 !overflow-y-auto">
            {new Array(sequence.length).fill(0).map((_, index) => (
              <DropdownMenuItem key={index} onClick={() => setRenderedLength(index + 1)}>
                {index + 1}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <SequenceBody ref={seqRef} sequence={sequencePart} />
    </>
  ) : (
    <span className="text-xl font-bold">No sequence</span>
  );
}

function SingleInstruction({ sequence, states }: RenderInModeProps) {
  const [configIndex, setConfigIndex] = useState(0);

  useEffect(() => {
    setConfigIndex(0);
  }, [sequence]);

  const config = useMemo(() => {
    return sequence[configIndex];
  }, [sequence, configIndex]);
  const state = useMemo(() => {
    const targetStateNumber = extractStateNumber(config);
    if (targetStateNumber === undefined) return undefined;
    return states.find((state) => state.includes(s(targetStateNumber)));
  }, [config, states]);

  const inc = () => {
    setConfigIndex((prev) => (prev < sequence.length - 1 ? prev + 1 : prev));
  };

  const dec = () => {
    setConfigIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (!sequence.length) {
    return <span className="text-xl font-bold">No configurations</span>;
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button onClick={dec} size="sm" variant="secondary">
            Prev
          </Button>
          <Button onClick={inc} size="sm" variant="secondary">
            Next
          </Button>
        </div>
        <ConfigsPagination
          count={sequence.length}
          active={configIndex}
          setActive={setConfigIndex}
        />
      </div>
      {state ? (
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">State</span>
          <MathRenderer className="overflow-x-auto overflow-y-hidden">{state}</MathRenderer>
        </div>
      ) : null}
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold">Configuration</span>
        <MathRenderer className="overflow-x-auto overflow-y-hidden">{config}</MathRenderer>
      </div>
    </>
  );
}
