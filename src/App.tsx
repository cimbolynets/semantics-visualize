import "katex/dist/katex.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import OccupyRestWindowHeight from "./components/OccupyRestWindowHeight";
import Editor from "./components/editor/Editor";
import Output from "./components/output/Output";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { useMediaBreakpointUp } from "./lib/hooks/useMediaBreakpointUp";
import { useProgramStorage } from "./lib/storage/programStorage";
import { tailwindConfig } from "./lib/tailwindConfig";

export default function App() {
  const [tab, setTab] = useState("editor");
  const programId = useProgramStorage((state) => state.programId);

  useEffect(() => {
    setTab("output");
  }, [programId]);

  const isLarge = useMediaBreakpointUp(tailwindConfig.theme.screens.lg);
  const editor = <Editor className="h-full" />;
  const output = <Output />;

  return (
    <>
      <Header />
      <main>
        <OccupyRestWindowHeight className="pt-2 lg:pt-6">
          {isLarge ? (
            <ResizablePanelGroup direction="horizontal" className="max-h-full h-full">
              <ResizablePanel defaultSize={40} className="p-1">
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={50}>{editor}</ResizablePanel>
                  <ResizableHandle withHandle className="!h-1" />
                  <ResizablePanel defaultSize={50}></ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle withHandle className="w-1" />
              <ResizablePanel defaultSize={60} className="p-1">
                {output}
              </ResizablePanel>
            </ResizablePanelGroup>
          ) : (
            <Tabs
              value={tab}
              onValueChange={setTab}
              className="h-full flex flex-col items-center gap-2"
            >
              <TabsList className="w-full max-w-sm">
                <TabsTrigger value="editor" className="basis-0 grow">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="output" className="basis-0 grow">
                  Output
                </TabsTrigger>
              </TabsList>
              <TabsContent value="editor" className="h-full grow w-full p-1">
                {editor}
              </TabsContent>
              <TabsContent value="output" className="h-full grow w-full p-1">
                {output}
              </TabsContent>
            </Tabs>
          )}
        </OccupyRestWindowHeight>
      </main>
    </>
  );
}
