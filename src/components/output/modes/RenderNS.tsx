import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MakeSequenceNS } from "@/interpreter/ns/MakeSequenceNS";
import { treeToSequence, treeToString } from "@/interpreter/ns/nsUtils";
import { Tree } from "@/interpreter/ns/types";
import { useOutputStorage } from "@/lib/storage/outputStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { FC, useEffect, useMemo, useState } from "react";
import Scopes from "../Scopes";
import { SequenceBody } from "../SequenceBody";
import States from "../States";

type Mode = "tree" | "sequence";

interface RenderNSProps {}

export const RenderNS: FC<RenderNSProps> = () => {
  const [mode, setMode] = useState<Mode>("tree");
  const [tree, setTree] = useState<Tree | Tree[] | undefined>();
  const { programText, variables, programId, programLanguage } = useProgramStorage();
  const [states, setStates] = useState<string[]>([]);
  const [envs, setEnvs] = useState<string[] | undefined>([]);
  const setOutput = useOutputStorage((state) => state.setOutput);

  useEffect(() => {
    if (!programText) return;
    const ms = new MakeSequenceNS();
    const tree = ms.getSequence(programText, variables ?? {}, false, programLanguage === "jane");
    setStates(ms.getStates());
    setEnvs(programLanguage === "jane-extended" ? ms.getEnvs() : undefined);
    setTree(tree);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [programId]);

  const sequence = useMemo(() => {
    if (!tree) return [];
    return mode === "tree" ? [treeToString(tree)] : treeToSequence(tree);
  }, [tree, mode]);

  useEffect(() => {
    setOutput({ sequence, states, envs });
  }, [sequence, states, envs]);

  return (
    <>
      <div className="output-controls">
        {programLanguage === "jane-extended" ? (
          <Scopes states={states} envs={envs ?? []} />
        ) : (
          <States states={states} />
        )}
        <Tabs value={mode} onValueChange={(v) => setMode(v as Mode)}>
          <TabsList>
            <TabsTrigger value="tree">Tree</TabsTrigger>
            <TabsTrigger value="sequence">Sequence</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {sequence.length ? (
        <SequenceBody sequence={sequence} />
      ) : (
        <span className="text-xl font-medium">No sequence</span>
      )}
    </>
  );
};
