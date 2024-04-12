import MathRenderer from "@/components/MathRenderer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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
import { useMediaBreakpointUp } from "@/lib/hooks/useMediaBreakpointUp";
import { tailwindConfig } from "@/lib/tailwindConfig";

type Tab = "whole-sequence" | "step-by-step" | "single-instruction";
const tabs: Array<{ name: string; value: Tab }> = [
  { name: "Whole sequence", value: "whole-sequence" },
  { name: "Step by step", value: "step-by-step" },
  { name: "Single instruction", value: "single-instruction" },
];

interface RenderInModeProps {
  sequence: string[];
  states: string[];
}

export const RenderInMode: FC<RenderInModeProps> = ({ sequence, states }) => {
  const [tab, setTab] = useState<Tab>("step-by-step");
  const isLarge = useMediaBreakpointUp(tailwindConfig.theme.screens.lg);

  const activeTabName = useMemo(() => {
    return tabs.find((t) => t.value === tab)?.name ?? "Select mode";
  }, [tab]);

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => setTab(v as Tab)}
      className="flex flex-col gap-4 h-full"
    >
      <div className="output-controls justify-between items-center">
        <div className="flex gap-4">
          <States states={states} />
          {isLarge ? (
            <TabsList>
              {tabs.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.name}
                </TabsTrigger>
              ))}
            </TabsList>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="gap-2">
                  {activeTabName}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {tabs.map((t) => (
                  <DropdownMenuCheckboxItem
                    key={t.value}
                    checked={tab === t.value}
                    onCheckedChange={() => setTab(t.value)}
                  >
                    {t.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        {isLarge ? (
          <span className="text-base">
            Sequence length: <span className="font-bold">{sequence.length}</span>
          </span>
        ) : null}
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
        <GuessNextConfiguration nextConfig={nextConfig} revealNext={inc} />
        <div className="flex gap-2 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
        </div>
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
