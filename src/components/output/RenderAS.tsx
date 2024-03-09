import { FC } from "react";
import MathRenderer from "../MathRenderer";

interface RenderASProps {
  instructions: string[];
}

export const RenderAS: FC<RenderASProps> = ({ instructions }) => {
  return (
    <div className="flex flex-col gap-2">
      {instructions.map((instruction, index) => (
        <MathRenderer key={index} className="">{instruction}</MathRenderer>
      ))}
    </div>
  );
};
