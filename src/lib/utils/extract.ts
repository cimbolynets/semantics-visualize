const STATE_PATTERN_TARGET_NAME = "stateNumber";
const statePattern = new RegExp(`s_{(?<${STATE_PATTERN_TARGET_NAME}>[0-9]+)}`);

export const extractStateNumber = (str?: string): number | undefined => {
  if (!str) return undefined;
  const stateNumberStr = str.match(statePattern)?.groups?.[STATE_PATTERN_TARGET_NAME];
  return stateNumberStr ? parseInt(stateNumberStr) : undefined;
};
