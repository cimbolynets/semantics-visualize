import { X } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ExportImage } from "./ExportImage";
import { ExportLatex } from "./ExportLatex";

interface ExportProps {
  sequence: string[];
}

export const Export: FC<ExportProps> = ({ sequence }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          Export
        </Button>
      </DialogTrigger>
      <DialogOverlay className="p-6 overflow-y-auto">
        <DialogTrigger asChild className="absolute top-6 right-6">
          <Button size="icon" variant="secondary">
            <X />
          </Button>
        </DialogTrigger>
        <Tabs defaultValue="image" className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 max-w-96 mx-auto">
            <DialogHeader>
              <DialogTitle className="text-white">Select a mode to export sequence</DialogTitle>
            </DialogHeader>
            <TabsList className="w-full">
              <TabsTrigger value="image" className="basis-0 grow">
                Image
              </TabsTrigger>
              <TabsTrigger value="latex" className="basis-0 grow">
                Latex
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="image">
            <ExportImage sequence={sequence} />
          </TabsContent>
          <TabsContent value="latex">
            <ExportLatex sequence={sequence} />
          </TabsContent>
        </Tabs>
      </DialogOverlay>
    </Dialog>
  );
};
