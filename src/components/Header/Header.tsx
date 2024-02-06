import { useProgramStorage } from "@/lib/storage/programStorage";
import { Moon, Play, Sun } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { DefaultHeaderButton } from "./DefaultHeaderButton";
import { InterpreterSelector } from "./InterpreterSelector";

export function Header() {
  const theme = useContext(ThemeContext) ?? {};
  const incrementProgramId = useProgramStorage((state) => {
    return () => state.setProgramId(state.programId + 1);
  });

  return (
    <header className="flex justify-between items-center bg-secondary rounded-xl">
      <div className="flex">
        <div className="mr-4">
          <InterpreterSelector />
        </div>
        <DefaultHeaderButton onClick={incrementProgramId}>
          <Play size="1rem" />
        </DefaultHeaderButton>
      </div>
      <div>
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
