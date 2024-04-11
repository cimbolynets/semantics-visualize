import { useMediaQuery } from "@uidotdev/usehooks";

export const useMediaBreakpointUp = (screenSize: string) => {
  const query = `screen and (min-width: ${screenSize})`;
  return useMediaQuery(query);
};
