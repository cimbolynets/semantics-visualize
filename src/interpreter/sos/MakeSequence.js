import parseJane from "./janeVisit";

// the main function is getSequence, which is used to get lists of configs, states and errors
export class MakeSequence {
    constructor() {
        this.configs = [];
        this.stateNumber = 0;
        this.states = [];
        this.statesConditions = [];
        this.configNumber = 1;
        // in case of while or if, when the body of the instruction is executed, the rest of the program is pushed to the stack
        // and then will be appended to the end of the body; this is very important in case of deeper branching in the program
        // because there will be more if and while instructions inside other if and while instructions it will be important to
        // append proper program fragments to the end of the body
        this.whileStack = [];
    }

    getRestInstructions() {
        return this.whileStack[this.whileStack.length - 1] ?? "";
    }

    popRestInstructions() {
        this.whileStack.pop();
    }

    pushRestInstructions(restInstructions) {
        this.whileStack.push(restInstructions);
    }
    // adds new state to the states array
    changeState(newState) {
        this.stateNumber++;
        this.states.push(newState);
    }

    addInstruction(instructionText, configNumber, stateNumber) {
        // if there is corresponding condition for the configuration in case of if or while then add it to the configuration
        let condition = this.statesConditions.find((sc) => sc.configNumber === configNumber);
        this.configs.push({
            instruction: instructionText,
            condition: condition
                ? {
                      condition: condition.condition,
                      conditionText: condition.conditionText,
                      stateNumber: condition.stateNumber,
                  }
                : null,
            stateNumber,
        });
        this.configNumber++;
    }
    // add assign instruction to the configs
    addAssign(instr) {
        this.addInstruction(instr.text + instr.restProgram, this.configNumber, this.stateNumber);
        this.changeState(instr.state);
    }
    // transforms cycle instruction to if instruction, and adds the cycle instruction to the end of the if branch
    transformCycle(cycleInstruction) {
        let cycle = cycleInstruction.value;
        let stats = cycle.conditionText;
        let instructions = cycle.instrSeqText;
        let transformed = `if ${stats} then ( ${instructions}; ${cycleInstruction.text} ) else ( skip )${cycleInstruction.restProgram}`;
        this.addInstruction(transformed, this.configNumber, this.stateNumber);
    }

    addCycle(instr) {
        const cycle = instr.value;
        if (cycle.iters.length !== 0) {
            // add each iteration to the configs
            cycle.iters.forEach((iter) => {
                this.addInstruction(
                    instr.text + instr.restProgram,
                    this.configNumber,
                    this.stateNumber
                );
                // saving the condition, in order to then display it with corresponding configuration
                this.statesConditions.push({
                    condition: true,
                    conditionText: cycle.conditionText,
                    stateNumber: this.stateNumber,
                    configNumber: this.configNumber,
                });
                // transform the cycle instruction to if instruction with cycle appended to the end of if branch
                this.transformCycle(instr);
                // add cycle text and rest of the program to the instructions from the cycle body
                this.pushRestInstructions("; " + instr.text + instr.restProgram);
                // add instructions from the cycle body
                this.traverse(iter);
                this.popRestInstructions();
            });
        }
        // add the last while configuration, for which statements value will be false
        this.addInstruction(instr.text + instr.restProgram, this.configNumber, this.stateNumber);
        this.statesConditions.push({
            condition: false,
            conditionText: cycle.conditionText,
            stateNumber: this.stateNumber,
            configNumber: this.configNumber,
        });
        this.transformCycle(instr);
        // adding skip instruction from the else branch of transformed cycle
        this.addInstruction("skip" + instr.restProgram, this.configNumber, this.stateNumber);
    }

    addBranch(instr) {
        // getting if instruction itself as instr is just an object returned from visitInstruction
        let ifInstruction = instr.value;
        // saving the condition, in order to then display it with corresponding configuration
        this.statesConditions.push({
            condition: ifInstruction.isTrue,
            conditionText: ifInstruction.conditionText,
            stateNumber: this.stateNumber,
            configNumber: this.configNumber,
        });
        // adding if instruction to the configs
        this.addInstruction(instr.text + instr.restProgram, this.configNumber, this.stateNumber);
        // now we need to add the instructions of the branch, that was executed
        if (ifInstruction.isTrue) {
            this.pushRestInstructions(instr.restProgram);
            this.traverse(ifInstruction.ifBranch);
            this.popRestInstructions();
        } else {
            this.pushRestInstructions(instr.restProgram);
            this.traverse(ifInstruction.elBranch);
            this.popRestInstructions();
        }
    }

    addSkip(instr) {
        this.addInstruction(instr.text + instr.restProgram, this.configNumber, this.stateNumber);
    }

    chooseInstruction(instr) {
        // in case of while instruction, while instruction will be replaced with if instruction and while instruction
        // will be added to the end of the program, so getRestInstructions will return the previous while instruction
        instr.restProgram += this.getRestInstructions();
        switch (instr.value.type) {
            case "assign":
                this.addAssign(instr);
                break;
            case "cycle":
                this.addCycle(instr);
                return true;
            case "branch":
                this.addBranch(instr);
                return true;
            case "skip":
                this.addSkip(instr);
                break;
            default:
                console.error("Not an instruction");
        }
    }

    traverse = (tree) => {
        // in case we have instructionSequence each children will be traversed in order to then add it to configs
        // we can have a single instruction in case of while or if instruction
        if (tree.type === "instructionSequence") {
            tree.children.forEach((node, index) => {
                // adding text of other instructions, that follow current instruction
                node.restProgram = tree.children
                    .filter((child, i) => i > index)
                    .reduce((acc, instr) => acc + "; " + instr.text, "");
                this.chooseInstruction(node);
            });
        } else if (tree.type === "instruction") {
            tree.restProgram = "";
            this.chooseInstruction(tree);
        }
    };

    getSequence(input, variables) {
        let [tree, visitor] = parseJane(input, variables);
        this.traverse(tree);
        this.states.push(visitor.memory);
        return [this.configs, this.states, visitor.getErrors()];
    }
}
