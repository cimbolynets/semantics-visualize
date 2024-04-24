import { janeToAM } from "@/interpreter/jane/translate";
import { useProgramStorage } from "@/lib/storage/programStorage";
import { LanguagesIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

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

  return shouldEnableTranslationToAM ? (
    <Button onClick={translateToAM} className="gap-2">
      Translate to AM <LanguagesIcon />
    </Button>
  ) : null;
};
