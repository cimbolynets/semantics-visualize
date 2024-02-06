import specialSymbols from "./specialSymbols";

// function will replace normal symbols with special symbols, mostly will be used in visualizing, in order to make
// visualization look consistent, having only one type of each symbol
export function replaceNormalSymbols(str: string) {
    if(!str) return;
    return specialSymbols.reduce((acc, specSymbol) => {
        return acc.replaceAll(specSymbol.normalSymbol, specSymbol.specSymbol);
    }, str);
};
// function will replace special symbols with normal symbols
// Jane language grammar expects only normal symbols, so all special symbols are present only for visual purposes, so
// when executing visualization, special symbols will be replaced with normal symbols, so the program can be interpreted
export function replaceSpecialSymbols(str: string) {
    if(!str) return;
    return specialSymbols.reduce((acc, specSymbol) => {
        return acc.replaceAll(specSymbol.specSymbol, specSymbol.normalSymbol);
    }, str);
};
// function will replace all special symbols text notation(text property in specialSymbols array) with special symbols
// primarily will be used in editor, so that user can type special symbols text notation in editor and they will be replaced with
// special symbols
export function transformToSpecialSymbols(str: string) {
    if(!str) return;
    return specialSymbols.reduce((acc, specSymbol) => {
        return acc.replaceAll(specSymbol.text, specSymbol.specSymbol);
    }, str);
};
// function will replace special symbols with text notation(text property in specialSymbols array)
// will be used when exporting as latex, so latex notation will be used, instead of unicode characters
export function replaceNotationSymbols(str: string) {
    if(!str) return "";
    return specialSymbols.reduce((acc, specSymbol) => {
        return acc.replaceAll(specSymbol.specSymbol, specSymbol.text);
    }, str);
}