import { FC } from "react";
import MathRenderer from "../MathRenderer";

interface RenderNSProps {
  program: string;
}

export const RenderNS: FC<RenderNSProps> = ({ program }) => {
  return <MathRenderer>{program}</MathRenderer>;
};
