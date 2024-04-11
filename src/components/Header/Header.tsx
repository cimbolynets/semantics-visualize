import { useProgramStorage } from "@/lib/storage/programStorage";
import { pick } from "lodash";
import { Moon, Play, Sun } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { Checkbox } from "../ui/checkbox";
import { DefaultHeaderButton } from "./DefaultHeaderButton";
import { ExampleSelector } from "./ExampleSelect";
import { InterpreterSelector } from "./InterpreterSelector";
import { useHeaderSlots } from "./headerSlots";
import { Help } from "../Help";

export function Header() {
  const slots = useHeaderSlots((state) => state.headerSlots);
  const theme = useContext(ThemeContext) ?? {};
  const incrementProgramId = useProgramStorage((state) => {
    return () => state.setProgramId(state.programId + 1);
  });
  const { withExtensions, setWithExtensions, activeInterpreter } = useProgramStorage((state) =>
    pick(state, "withExtensions", "setWithExtensions", "activeInterpreter")
  );

  return (
    <header className="flex justify-between items-center bg-secondary rounded-xl pr-1">
      <div className="flex">
        <div className="flex items-center gap-2 mr-4">
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
        <DefaultHeaderButton data-runprogram-3 onClick={incrementProgramId}>
          <Play className="!w-[1.375rem] !h-[1.375rem] stroke-primary fill-primary hover:brightness-50 transition-all" />
        </DefaultHeaderButton>
      </div>
      <div className="flex gap-2">
        {slots}
        <Help />
        <DefaultHeaderButton
          onClick={() => {
            theme.dispatch?.({
              type: theme.state.name === "light" ? "dark" : "light",
            });
          }}
        >
          {theme.state.name === "light" ? <Moon size="1rem" /> : <Sun size="1rem" />}
        </DefaultHeaderButton>
      </div>
    </header>
  );
}
