import { useProgramStorage } from "@/lib/storage/programStorage";
import { Moon, Play, Sun } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { DefaultHeaderButton } from "./DefaultHeaderButton";
import { ExampleSelector } from "./ExampleSelect";
import { InterpreterSelector } from "./InterpreterSelector";
import { useHeaderSlots } from "./headerSlots";

export function Header() {
  const slots = useHeaderSlots((state) => state.headerSlots);
  const theme = useContext(ThemeContext) ?? {};
  const incrementProgramId = useProgramStorage((state) => {
    return () => state.setProgramId(state.programId + 1);
  });

  return (
    <header className="flex justify-between items-center bg-secondary rounded-xl">
      <div className="flex">
        <div className="flex gap-2 mr-4">
          <InterpreterSelector />
          <ExampleSelector />
        </div>
        <DefaultHeaderButton onClick={incrementProgramId}>
          <Play className="!w-[1.375rem] !h-[1.375rem] stroke-primary fill-primary hover:brightness-50 transition-all" />
        </DefaultHeaderButton>
      </div>
      <div className="flex gap-2">
        {slots}
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
