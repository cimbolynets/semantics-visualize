import { IfConfig } from "@/types";
import { replaceNotationSymbols } from "../specialSymbols/replaceSymbols";

const LBracket = "\\langle";
const RBracket = "\\rangle";
const arrow = "\\Rightarrow";

export default function getInstructionLatex(instr: IfConfig, configNumber: number, last: boolean) {
    const instrText = replaceNotationSymbols(instr.instruction).replaceAll(";", ";\\;");
    const stateNumber = instr.stateNumber;
    const condition = instr.condition;

    function boldKeywords(str: string) {
        const keywords = ["if", "while", "do", "else", "then"];
        return keywords.reduce((acc, keyword) => acc.replaceAll(keyword, `\\;\\textbf{${keyword}}\\;`), str);
    }

    if (last) return `\\alpha_{${configNumber}} = s_{${stateNumber}}`;

    if (condition) return `\\alpha_{${configNumber}} = ${LBracket} ${boldKeywords(instrText)},\\; s_{${stateNumber}} ${RBracket} ${arrow} \\alpha_{${configNumber + 1}},\\; \\mathscr{B}[\\![ ${replaceNotationSymbols(condition.conditionText)} ]\\!] s_{${condition.stateNumber}} = \\textbf{${condition.condition ? "tt" : "ff"}}`;

    return `\\alpha_{${configNumber}} = ${LBracket} ${boldKeywords(instrText)},\\; s_{${stateNumber}} ${RBracket} ${arrow} \\alpha_{${configNumber + 1}}`;
}
