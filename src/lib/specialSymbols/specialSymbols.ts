// special symbols that can be used in the code by typing corresponding text value from special symbols array, 
// also when visualizing, normal symbols will be replaced with special symbols and 
const specialSymbols = [
    {
        text: "\\neg",
        specSymbol: "¬",
        normalSymbol: "!"
    },
    {
        text: "\\leq",
        specSymbol: "≤",
        normalSymbol: "<="
    },
    {
        text: "\\wedge",
        specSymbol: "∧",
        normalSymbol: "and"
    }
]

export default specialSymbols;