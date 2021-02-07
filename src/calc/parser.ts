import { isNumber, isBrackets, isSpace } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {

  const stack = line.trim().split("")

  return stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    const isValidOperatorPush = !isNumber(item) && mathOperators.hasOwnProperty(item)

    if (isBrackets(item) || isValidOperatorPush) {

      result.push(item);

    } else if (isNumber(item) && !isSpace(item)) {

      result.push(Number(item))

      if (isNumber(prevItem)) {
        result = [
          ...result.slice(0, -2)
        ]

        const res = prevItem + item
        result.push(Number(res))
      }

    } else if (isSpace(item)) {

      return result
    }

    return result;
  }, []);


};