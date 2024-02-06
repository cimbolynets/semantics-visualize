import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Button } from "../ui/button";

export type DefaultHeaderButtonProps = HTMLAttributes<HTMLButtonElement>;

export const DefaultHeaderButton: FC<DefaultHeaderButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button {...props} variant="ghost" className={clsx("default-header-button", className)}>
      {children}
    </Button>
  );
};
