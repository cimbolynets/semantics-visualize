const STATE_PATTERN_TARGET_NAME = "stateNumber";
const statePattern = new RegExp(`s_{(?<${STATE_PATTERN_TARGET_NAME}>[0-9]+)}`);

export const extractStateNumber = (str?: string): number | undefined => {
  if (!str) return undefined;
  const stateNumberStr = str.match(statePattern)?.groups?.[STATE_PATTERN_TARGET_NAME];
  return stateNumberStr ? parseInt(stateNumberStr) : undefined;
};

const SEQUENCE_PATTERN_TARGET_NAME = "seq";
const sequencePattern = new RegExp(
  String.raw`\\langle +\\text{(?<${SEQUENCE_PATTERN_TARGET_NAME}>.+)},.+,.+\\rangle`
);

export const extractSequence = (str?: string) => {
  if (!str) return undefined;
  return str.match(sequencePattern)?.groups?.[SEQUENCE_PATTERN_TARGET_NAME];
};
