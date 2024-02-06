import "katex/dist/katex.css";
import { Header } from "./components/Header";
import Editor from "./components/editor/Editor";
import Output from "./components/output/Output";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";

export default function App() {
  return (
    <>
      <Header />
      <main className="my-6">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            <Editor className="p-1" />
          </ResizablePanel>
          <ResizableHandle withHandle className="w-1" />
          <ResizablePanel defaultSize={50}>
            <Output className="p-1" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
