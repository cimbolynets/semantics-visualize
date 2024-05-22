import { janeToAM } from "@/interpreter/jane/translate";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { ArrowLeftRightIcon } from "lucide-react";
import { FC } from "react";
import { Button, ButtonProps } from "../ui/button";

export const TranslateProgramButton = ({ onClick }: Pick<ButtonProps, "onClick">) => {
  return (
    <Button onClick={onClick} className="gap-2">
      Translate to AM <ArrowLeftRightIcon />
    </Button>
  );
};

interface TranslateProgramProps {}

export const TranslateProgram: FC<TranslateProgramProps> = () => {
  const {
    variables,
    setVariables,
    programText,
    setProgramText,
    setSemanticMethod,
    programLanguage,
    setProgramLanguage,
  } = useProgramStorage();

  const shouldEnableTranslationToAM = programLanguage === "jane";

  const translateToAM = () => {
    if (!programText || !shouldEnableTranslationToAM) return;
    const prevVariables = variables;
    setSemanticMethod("sos");
    setProgramLanguage("am");
    setVariables(prevVariables);
    setProgramText(janeToAM(programText));
  };

  return shouldEnableTranslationToAM ? <TranslateProgramButton onClick={translateToAM} /> : null;
};
