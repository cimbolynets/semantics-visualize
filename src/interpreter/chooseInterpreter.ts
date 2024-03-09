import { Interpreters } from "@/lib/storage/programStorage";
import { MakeSequenceNS } from "./ns/MakeSequenceNS";
// import { MakeSequence } from "./MakeSequence";
import { MakeSequenceAS } from "./as/MakeSequenceAS";

export const chooseInterpreter = (interpreter: Interpreters) => {
  switch (interpreter) {
    case "ns":
      return MakeSequenceNS;
    case "as":
      return MakeSequenceAS;
    default:
      return undefined;
  }
};
