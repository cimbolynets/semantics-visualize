import { InstructionContext, InstructionSequenceContext } from "@/grammar/jane/JaneParser";
import { Memory } from "@/types";

export interface Procedure {
  id: string;
  body: InstructionContext | InstructionSequenceContext;
}

export class Scope {
  public memory: Memory;
  public procedures: Procedure[];

  constructor(memory?: Memory) {
    this.memory = memory ?? {};
    this.procedures = [];
  }

  public getVariable = (name: string) => {
    return this.memory[name];
  };

  public getProcedure = (name: string) => {
    return this.procedures.find((p) => p.id === name);
  };

  public setVariable = (name: string, value: number) => {
    this.memory[name] = value;
    return this;
  };

  public setProcedure = (procedure: Procedure) => {
    const i = this.procedures.findIndex((p) => p.id === procedure.id);
    if (i === -1) {
      this.procedures.push(procedure);
      return this;
    }
    this.procedures[i] = procedure;
    return this;
  };

  public setMemory = (memory: Memory) => {
    this.memory = memory;
    return this;
  };

  public setProcedures = (procedures: Procedure[]) => {
    this.procedures = procedures;
    return this;
  };

  public clone = () => {
    return new Scope(structuredClone(this.memory)).setProcedures([...this.procedures]);
  };
}
