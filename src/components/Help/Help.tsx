import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, HelpCircle, Play } from "lucide-react";
import { FC, useState } from "react";
import { DefaultHeaderButton } from "../Header/DefaultHeaderButton";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Tabs, TabsContent } from "../ui/tabs";
import { HelpItem } from "./HelpItem";

interface HelpProps {}

export const Help: FC<HelpProps> = () => {
  const [open, setOpen] = useState(false);
  // const { setActiveScenario } = useContext(GuideContext);

  // const selectScenario = (s: string) => {
  //   setActiveScenario?.(s);
  //   setOpen(false);
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="gap-2">
          Help <HelpCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <Tabs value="general" className="flex flex-col gap-4">
          {/* <TabsList className="w-full">
            <TabsTrigger value="general" className="basis-0 grow">
              General
            </TabsTrigger>
          </TabsList> */}
          <TabsContent value="general" className="flex flex-col gap-6">
            <h3>General</h3>
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
            {/* <h3>Interactive guides</h3> */}
            {/* <Select onValueChange={(s) => selectScenario(s)}>
              <SelectTrigger className="max-w-xs">
                <SelectValue placeholder="Select guide" />
              </SelectTrigger>
              <SelectContent>
                {scenarioNames.map((sn) => (
                  <SelectItem key={sn.value} value={sn.value}>
                    {sn.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select> */}
            <h3>Control elements</h3>
            <div className="flex flex-col gap-4">
              <HelpItem description="Select an semantic method or abstract machine.">
                <Button data-runprogram-0="right" color="primary" className="flex gap-2">
                  NS <ChevronDown />
                </Button>
              </HelpItem>
              <HelpItem description="Enable/Disable extensions for Jane.">
                <div className="flex items-center gap-2">
                  <Checkbox id="with-extensions-toggle-example" checked={false} />
                  <label htmlFor="with-extensions-toggle-example">With extensions</label>
                </div>
              </HelpItem>
              <HelpItem description="Run the program.">
                <DefaultHeaderButton data-runprogram-3>
                  <Play className="!w-[1.375rem] !h-[1.375rem] stroke-primary fill-primary hover:brightness-50 transition-all" />
                </DefaultHeaderButton>
              </HelpItem>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
