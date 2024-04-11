export type IScenarioInstruction = {
  text: string;
};

export type IScenario = {
  scenarioType: string;
  instructions: IScenarioInstruction[];
};

export const scenarioNames: Array<{ name: string; value: string }> = [
  {
    value: "runprogram",
    name: "Run program",
  },
];

export const scenarios: IScenario[] = [
  {
    scenarioType: "runprogram",
    instructions: [
      {
        text: "Select the interpreter.",
      },
      {
        text: "Select an example.",
      },
      {
        text: "Or write the code yourself",
      },
      {
        text: "Run the program",
      },
    ],
  },
];
