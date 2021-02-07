export type ScalarOperationType = (first: number, second: number) => number;
export type plainTypeString = { [key: string]: string }

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => second == 0 || second ? first * second : first * first;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const exponation: ScalarOperationType = (first: number, second: number) => Math.pow(first, second)

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": exponation,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": FIRST,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};