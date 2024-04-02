import "katex/dist/katex.css";
import { Header } from "./components/Header";
import Editor from "./components/editor/Editor";
import Output from "./components/output/Output";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";
import OccupyRestWindowHeight from "./components/OccupyRestWindowHeight";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <OccupyRestWindowHeight className="pt-6">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={40} className="p-1">
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <Editor className="h-full" />
                </ResizablePanel>
                <ResizableHandle withHandle className="!h-1" />
                <ResizablePanel defaultSize={50}></ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle className="w-1" />
            <ResizablePanel defaultSize={60} className="p-1">
              <Output />
            </ResizablePanel>
          </ResizablePanelGroup>
        </OccupyRestWindowHeight>
      </main>
    </>
  );
}
