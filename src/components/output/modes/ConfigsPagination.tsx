import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ConfigsPaginationProps {
  count: number;
  active: number;
  setActive: (v: number) => void;
}

export const ConfigsPagination: FC<ConfigsPaginationProps> = ({ count, active, setActive }) => {
  return (
    <div className="flex flex-wrap">
      {new Array(count).fill(0).map((_, index) => (
        <Button
          size="sm"
          variant={index === active ? "secondary" : "ghost"}
          key={index}
          className={cn("font-bold")}
          onClick={() => setActive(index)}
        >
          α<sub>{index + 1}</sub>
        </Button>
      ))}
    </div>
  );
};
