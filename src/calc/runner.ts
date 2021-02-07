import { parser,  } from "./parser";

import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc, brackets } from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const isBracketsCount = brackets(stack)

  const zeroPrioritiesRes = zeroPrioritiesCalc(isBracketsCount)

  const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);

};