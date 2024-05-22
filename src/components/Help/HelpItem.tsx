import { FC, ReactNode } from "react";
import { Separator } from "../ui/separator";

interface HelpItemProps {
  children: ReactNode;
  description: string;
}

export const HelpItem: FC<HelpItemProps> = ({ children, description }) => {
  return (
    <div className="flex flex-col lg:grid grid-cols-12 lg:items-center gap-4">
      <div className="lg:col-span-4">{children}</div>
      <Separator className="max-w-[2rem] mx-auto col-span-2 hidden lg:block" />
      <span className="lg:col-span-6">{description}</span>
    </div>
  );
};
