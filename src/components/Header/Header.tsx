import { useMediaBreakpointUp } from "@/lib/hooks/useMediaBreakpointUp";
import { useOutputOptionsStorage } from "@/lib/storage/displayOptionsStorage";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { tailwindConfig } from "@/lib/tailwindConfig";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Help } from "../Help";
import ThemeContext from "../ThemeContext";
import { Export } from "../export/Export";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DefaultHeaderButton } from "./DefaultHeaderButton";
import { ExampleSelector } from "./ExampleSelect";
import { InterpreterSelector } from "./InterpreterSelector";
import { RunProgram } from "./RunProgram";
import { TranslateProgram } from "./TranslateProgram";

export function Header() {
  const isLarge = useMediaBreakpointUp(tailwindConfig.theme.screens.lg);
  const theme = useContext(ThemeContext) ?? {};
  const reset = useProgramStorage((state) => state.reset);
  const { breakLines, setBreakLines } = useOutputOptionsStorage();

  const lineBreakToggle = (
    <div className="flex items-center gap-2">
      <label htmlFor="line-break-toggle">Break lines</label>
      <Checkbox id="line-break-toggle" checked={breakLines} onCheckedChange={setBreakLines} />
    </div>
  );
  const themeChange = (
    <DefaultHeaderButton
      onClick={() => {
        theme.setThemeName(theme.themeName === "light" ? "dark" : "light");
      }}
    >
      {theme.themeName === "light" ? <Moon size="1rem" /> : <Sun size="1rem" />}
    </DefaultHeaderButton>
  );

  return (
    <header className="flex justify-between items-center bg-secondary rounded-xl lg:pr-1">
      {isLarge ? (
        <>
          <div className="flex">
            <div className="flex items-center gap-2 mr-2">
              <InterpreterSelector />
              <TranslateProgram />
              <ExampleSelector />
            </div>
            <RunProgram />
          </div>
          <div className="flex gap-2">
            {lineBreakToggle}
            <Export />
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
                <TranslateProgram />
                <ExampleSelector />
                <Export />
                <Help />
                {lineBreakToggle}
              </SheetContent>
            </Sheet>
            {themeChange}
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={reset} className="block lg:hidden">
              Reset
            </Button>
            <RunProgram />
          </div>
        </>
      )}
    </header>
  );
}
