import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import specialSymbols from "@/lib/specialSymbols/specialSymbols";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { FC, useState } from "react";
import { InterpreterSelector } from "../Header/InterpreterSelector";
import { RunProgram } from "../Header/RunProgram";
import { TranslateProgramButton } from "../Header/TranslateProgram";
import MathRenderer from "../MathRenderer";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { HelpItem } from "./HelpItem";
import { amGrammar, janeBaseGrammar, janeExtendedGrammar } from "./formattedGrammars";

interface HelpProps {}

const sharedClasses = "w-full h-full overflow-auto data-[state=inactive]:hidden";

export const Help: FC<HelpProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="gap-2">
          Help <HelpCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[calc(100%-3rem)] flex flex-col top-6 translate-y-0 max-w-4xl">
        <Tabs defaultValue="general" className="h-full flex flex-col gap-4 pt-4">
          <TabsList className="w-full">
            <TabsTrigger value="general" className="basis-0 grow">
              General
            </TabsTrigger>
            <TabsTrigger value="grammar" className="basis-0 grow">
              Grammar
            </TabsTrigger>
            <TabsTrigger value="special-symbols" className="basis-0 grow">
              Special symbols
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general" className={cn(sharedClasses, "flex flex-col gap-6")}>
            <h3>About</h3>
            <div className="flex flex-col gap-2">
              <p>
                The purpose of this web application is to visualize program interpretation using
                natural semantics(NS) and structural operational semantics(SOS).
              </p>
              <p>
                Programs for SOS and NS can be written in "Jane" programming language, also known as
                "While". NS also supports Jane with extensions, like blocks and procedures with
                dynamic scope.
              </p>
              <p>
                Web application also offers abstract machine(AM) language for structural operational
                semantics.
              </p>
            </div>
            <h3>Control elements</h3>
            <div className="flex flex-col gap-4">
              <HelpItem description="Select semantic method and language combination.">
                <InterpreterSelector />
              </HelpItem>
              <HelpItem description="Translate program written in Jane language to abstract machine instructions.">
                <TranslateProgramButton />
              </HelpItem>
              <HelpItem description="Run the program.">
                <RunProgram />
              </HelpItem>
            </div>
          </TabsContent>
          <TabsContent value="grammar" className={cn(sharedClasses, "[&>*]:mb-6")}>
            <h3>Jane base grammar</h3>
            <pre className="code-block grow">{janeBaseGrammar}</pre>
            <h3>Jane extended grammar</h3>
            <pre className="code-block grow">{janeExtendedGrammar}</pre>
            <h3>Abstract machine grammar</h3>
            <pre className="code-block grow">{amGrammar}</pre>
          </TabsContent>
          <TabsContent value="special-symbols" className={cn(sharedClasses, "[&>*]:mb-6")}>
            <h3>Special symbols</h3>
            <div>
              <p>
                You can use some special symbols in editor. The symbols use TeX notation. To use
                special symbol type any latex notation in editor.
              </p>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>TeX Notation</TableHead>
                  <TableHead>ASCII Symbol</TableHead>
                  <TableHead>Special Symbol</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specialSymbols.map((specSymbol) => (
                  <TableRow key={specSymbol.text}>
                    <TableCell>{specSymbol.text}</TableCell>
                    <TableCell>{specSymbol.normalSymbol}</TableCell>
                    <TableCell>
                      <MathRenderer>{specSymbol.text}</MathRenderer>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
