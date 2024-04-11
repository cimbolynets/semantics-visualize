"use client";

import { scenarios } from "@/lib/scenarios";
import React, { FC, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";

const GuideContext = React.createContext<{
  activeScenario?: string;
  setActiveScenario?: Dispatch<SetStateAction<string | undefined>>;
}>({});

export default GuideContext;

const getPosition = (dataInstructionValue: string | undefined) => {
  if (!dataInstructionValue || dataInstructionValue === "true") return "top";
  return dataInstructionValue;
};

export const GuideProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeScenario, setActiveScenario] = useState<string | undefined>();
  const [currentInstruction, setCurrentInstruction] = useState<number | undefined>(0);

  useEffect(() => {
    const scenario = scenarios.find((s) => s.scenarioType === activeScenario);
    if (!scenario) return;
    // debugger;
    const instr = scenario.instructions[currentInstruction ?? 0];
    // setCurrentInstruction(i);
    const el: HTMLElement | null = document.querySelector(
      `[data-${scenario.scenarioType}-${currentInstruction}]`
    );
    if (!el || el.querySelector(".instruction")) return;
    el.classList.add("relative");
    const instrEl = document.createElement("div");
    const position = getPosition(el.dataset[`${scenario.scenarioType}-${currentInstruction}`]);
    instrEl.classList.add("instruction", `instruction-${position}`);
    // instrEl.dataset[`instruction-${scenario.scenarioType}-${i}`] = "true";
    instrEl.innerText = instr.text;
    instrEl.onclick = (e) => {
      e.stopPropagation();
      el.removeChild(instrEl);
      setCurrentInstruction((prev) => (prev ?? 0) + 1);
    };
    el.appendChild(instrEl);
  }, [activeScenario, currentInstruction]);

  return (
    <GuideContext.Provider value={{ activeScenario, setActiveScenario }}>
      {children}
    </GuideContext.Provider>
  );
};
