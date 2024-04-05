import { FC } from "react";

interface EditorErrorProps {
  children: string;
}

export const EditorError: FC<EditorErrorProps> = ({ children }) => {
  return <span className="text-lg text-red-600 font-medium">{children}</span>;
};
