/* eslint-disable @typescript-eslint/ban-ts-comment */
import { JaneParser } from "@/grammar/jane/JaneParser";
import { text } from "@/lib/utils/format";

const wordPattern = /[A-Za-z]+/;
const startPaddingPattern = /\\langle +\\ +/g;
const endPaddingPattern = /\\ +,/g;

const getKeywordsFromLiteralNames = (literalNames: Array<string | undefined>) => {
  return literalNames
    .map((ln) => ln?.substring(1, ln.length - 1))
    .filter((ln): ln is string => typeof ln === "string" && wordPattern.test(ln));
};

export const addKeywordsPaddingJane = (str: string) => {
  // @ts-ignore
  const keywords = getKeywordsFromLiteralNames(JaneParser._LITERAL_NAMES);
  return keywords.reduce((acc, kw) => {
    const withFormattedKeywords = acc.replaceAll(kw, String.raw` \ ${text(kw)} \ `);
    return withFormattedKeywords
      .replaceAll(startPaddingPattern, "\\langle")
      .replaceAll(endPaddingPattern, ",");
  }, str);
};
