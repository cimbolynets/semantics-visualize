import { useProgramStorage } from "@/lib/storage/programStorage";
import { Play } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

export const RunProgram: FC = () => {
  const incrementProgramId = useProgramStorage((state) => {
    return () => state.setProgramId(state.programId + 1);
  });

  return (
    <Button data-runprogram-3 onClick={incrementProgramId} className="gap-2">
      Visualize
      <Play className="!w-[1.375rem] !h-[1.375rem] stroke-accent fill-accent" />
    </Button>
  );
};
