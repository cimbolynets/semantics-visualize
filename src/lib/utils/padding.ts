/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AbstractMachineParser } from "@/grammar/am/AbstractMachineParser";
import { JaneParser } from "@/grammar/jane/JaneParser";
import { text, textbf } from "@/lib/utils/format";

const janePatterns = {
  word: /[A-Za-z]+/,
  startPadding: /\\langle +\\ +/g,
  endPadding: /\\ +,/g,
};

const amPatterns = {
  word: /[A-Za-z]+/,
};

const getKeywordsFromLiteralNames = (literalNames: Array<string | undefined>) => {
  return literalNames
    .map((ln) => ln?.substring(1, ln.length - 1))
    .filter((ln): ln is string => typeof ln === "string" && janePatterns.word.test(ln));
};

export const addKeywordsPaddingJane = (str: string) => {
  // @ts-ignore
  const keywords = getKeywordsFromLiteralNames(JaneParser._LITERAL_NAMES);
  return keywords.reduce((acc, kw) => {
    const withFormattedKeywords = acc.replaceAll(
      kw,
      String.raw` \ ${kw === "true" || kw === "false" ? textbf(kw) : text(kw)} \ `
    );
    return withFormattedKeywords
      .replaceAll(janePatterns.startPadding, "\\langle")
      .replaceAll(janePatterns.endPadding, ",");
  }, str);
};

export const addKeywordsPaddingAM = (str: string) => {
  // @ts-ignore
  const keywords = getKeywordsFromLiteralNames(AbstractMachineParser._LITERAL_NAMES);
  return keywords
    .reduce((acc, kw) => {
      const withFormattedKeywords = acc.replaceAll(kw, String.raw`${text(kw)}`);
      return withFormattedKeywords;
    }, str)
    .replaceAll("-", "\\!-\\!");
};
