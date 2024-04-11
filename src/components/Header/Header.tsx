import { useMediaBreakpointUp } from "@/lib/hooks/useMediaBreakpointUp";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { tailwindConfig } from "@/lib/tailwindConfig";
import { pick } from "lodash";
import { MenuIcon, Moon, Play, Sun } from "lucide-react";
import { useContext } from "react";
import { Help } from "../Help";
import ThemeContext from "../ThemeContext";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DefaultHeaderButton } from "./DefaultHeaderButton";
import { ExampleSelector } from "./ExampleSelect";
import { InterpreterSelector } from "./InterpreterSelector";
import { useHeaderSlots } from "./headerSlots";

export function Header() {
  const isLarge = useMediaBreakpointUp(tailwindConfig.theme.screens.lg);
  const slots = useHeaderSlots((state) => state.headerSlots);
  const theme = useContext(ThemeContext) ?? {};
  const incrementProgramId = useProgramStorage((state) => {
    return () => state.setProgramId(state.programId + 1);
  });
  const { withExtensions, setWithExtensions, activeInterpreter } = useProgramStorage((state) =>
    pick(state, "withExtensions", "setWithExtensions", "activeInterpreter")
  );

  const runProgram = (
    <Button data-runprogram-3 onClick={incrementProgramId} className="gap-2">
      Visualize
      <Play className="!w-[1.375rem] !h-[1.375rem] stroke-accent fill-accent" />
    </Button>
  );
  const themeChange = (
    <DefaultHeaderButton
      onClick={() => {
        theme.dispatch?.({
          type: theme.state.name === "light" ? "dark" : "light",
        });
      }}
    >
      {theme.state.name === "light" ? <Moon size="1rem" /> : <Sun size="1rem" />}
    </DefaultHeaderButton>
  );

  return (
    <header className="flex justify-between items-center bg-secondary rounded-xl pr-1">
      {isLarge ? (
        <>
          <div className="flex">
            <div className="flex items-center gap-2 mr-2">
              <InterpreterSelector />
              {activeInterpreter === "ns" ? (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="with-extensions-toggle"
                    checked={withExtensions}
                    onCheckedChange={setWithExtensions}
                  />
                  <label htmlFor="with-extensions-toggle">With extensions</label>
                </div>
              ) : null}
              <ExampleSelector />
            </div>
            {runProgram}
          </div>
          <div className="flex gap-2">
            {slots}
            <Help />
            {themeChange}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="secondary" className="gap-1">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="max-w-full flex flex-col gap-4 h-full transition-all pt-10"
              >
                <InterpreterSelector />
                {activeInterpreter === "ns" ? (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="with-extensions-toggle"
                      checked={withExtensions}
                      onCheckedChange={setWithExtensions}
                    />
                    <label htmlFor="with-extensions-toggle">With extensions</label>
                  </div>
                ) : null}
                <ExampleSelector />
                <Help />
              </SheetContent>
            </Sheet>
            {themeChange}
          </div>
          {runProgram}
        </>
      )}
    </header>
  );
}
