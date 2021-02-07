
export const isNumber = (item: string | number): boolean => !isNaN(Number(item)) && item !== " "
export const isSpace = (item: string): boolean => item === " "

export const isBrackets = (item: string): boolean => {
  if (item === '(' || item === ')') return true
  return false
}
export const isOpenBracket = (item: string | number): boolean => item === '(' ? true : false
export const isCloseBracket = (item: string | number): boolean => item === ')' ? true : false
export const Toggle = (item: boolean): boolean => !item
