import { FC, ReactNode } from "react";
import { Separator } from "../ui/separator";

interface HelpItemProps {
  children: ReactNode;
  description: string;
}

export const HelpItem: FC<HelpItemProps> = ({ children, description }) => {
  return (
    <div className="grid grid-cols-12 items-center gap-4">
      <div className="col-span-4">{children}</div>
      <Separator className="max-w-[2rem] mx-auto col-span-2" />
      <span className="col-span-6">{description}</span>
    </div>
  );
};
