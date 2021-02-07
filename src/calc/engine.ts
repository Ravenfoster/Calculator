import { ParsedLineType } from "./parser"
import { isNumber, isOpenBracket, isCloseBracket, Toggle } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [ZERO, FIRST, SECOND] = mathPriorities;

export const brackets = (stack: ParsedLineType): ParsedLineType => {
  let isCountIncideBrackets: boolean = false
  let arg: ParsedLineType

 return stack.reduce<ParsedLineType>((result, currentItem): ParsedLineType => {

    const isBracket = isOpenBracket(currentItem) || isCloseBracket(currentItem)

    if (isBracket) {
      isCountIncideBrackets = Toggle(isCountIncideBrackets)
      isOpenBracket(currentItem) ? arg = [] : arg

      if (arg.length > 1) {
        // const zeroPrioritiesRes = zeroPrioritiesCalc(arg)
        const firstPrioritiesRes = firstPrioritiesCalc(arg);
        result = [
          ...result,
          secondPrioritiesCalc(firstPrioritiesRes)
        ]
      }

    } else if (isCountIncideBrackets) {
      arg.push(currentItem)

    } else {
      result.push(currentItem)
    }

    return result
  }, [])

}

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, currentItem) => {
    const prevprevItem = result[result.length - 2];
    const prevItem = result[result.length - 1];

    if (!isNumber(String(prevItem)) && mathOperatorsPriorities[prevItem] === ZERO) {

      if (!mathOperators[prevItem]) {
        throw new TypeError("Unexpected stack!");
      }

      result = [
        ...result.slice(0, -2),
        mathOperators[prevItem](Number([prevprevItem]), Number(currentItem)),
      ]

    } else {
      result.push(currentItem);
    }

    return result
  }, [])



export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }

    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));