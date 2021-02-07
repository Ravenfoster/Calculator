import { firstPrioritiesCalc, secondPrioritiesCalc, zeroPrioritiesCalc, brackets } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  //   it("[1, * 32]", () => {
  //     expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  //   });

  //   it("[32, /, 32]", () => {
  //     expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  //   });

  //   it("[32, + 32]", () => {
  //     expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  //   });
  // });

  // describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  //   it("[32, /, 32, +, 10, *, 10]", () => {
  //     expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
  //       1,
  //       "+",
  //       100,
  //     ]);
  //   });
  // });

  // describe("secondPrioritiesCalc invalid cases", () => {
  //   it("[32, / 32]", () => {
  //     expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
  //       TypeError("Unexpected stack!")
  //     );
  //   });
  // });

  // describe("secondPrioritiesCalc simple cases", () => {
  //   it("[32, + 32]", () => {
  //     expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  //   });

  //   it("[32, - 32]", () => {
  //     expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  //   });

  //   it("[32, - 32, +, 10]", () => {
  //     expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  //   });

  //   it("[5, ^, 2]", () => {
  //     expect(zeroPrioritiesCalc([5, "^", 2])).toEqual([25]);
  //   });

  //   it("[4, ^ ,2, +, 5, +, 7]", () => {
  //     expect(zeroPrioritiesCalc([4, "^", 2, "+", 5, "+", 7])).toEqual([16, "+", 5, "+", 7]);
  //   });

  //   it("[ 7, +, 4, ^,2, +, 5, +, 4, ^, 3]", () => {
  //     expect(zeroPrioritiesCalc([7, "+", 4, "^", 2, "+", 5, "+", 4, "^", 3])).toEqual([7, "+", 16, "+", 5, "+", 64]);
  //   });

  //   it("[ 7, +, 4, *, 2]", () => {
  //     expect(zeroPrioritiesCalc([7, "+", 4, "*", 2])).toEqual([7, "+", 4, "*", 2]);
  //   });

  //   it("[ ( 5 + 2 ) + 3]", () => {
  //     expect(brackets([7, "+", "(", 5, "+", 2, ")", "+", 3])).toEqual([7, "+", 7, "+", 3]);
  //   });

  //   it("[4 + ( 5 + 2 )]", () => {
  //     expect(brackets([4, "+", "(", 5, "+", 2, ")"])).toEqual([4, "+", 7]);
  //   });

  //   it("[ ( 4 + 4 ) + ( 5 + 2 ) + 3]", () => {
  //     expect(brackets(["(", 4, "+", 4, ")", "+", "(", 5, "+", 2, ")", " + ", 3])).toEqual([8, "+", 7, " + ", 3]);
  //   });

  //   it("[ (4 + 4 ) + ( 5 + 2 ) + 3 + ( 5 + 2)]", () => {
  //     expect(brackets(["(", 4, "+", 4, ")", "+", "(", 5, "+", 2, ")", "+", 3, "+", "(", 5, "+", 2, ")",])).toEqual([8, "+", 7, "+", 3, "+", 7]);
  //   });

  //   it("[ (4 - 4 ) + ( 5 + 2 + 3 ) + 3 + ( 5 + 2 - 1) + 3]", () => {
  //     expect(brackets(["(", 4, "-", 4, ")", "+", "(", 5, "+", 2, "+", 3, ")", "+", 3, "+", "(", 5, "+", 2, "-", 1, ")",])).toEqual([0, "+", 10, "+", 3, "+", 6,]);
  //   });

  //   it("[ (4 - 4 + 2 * 2 / 2) + ( 5 + 2 + 3 ) + 3 + ( 5 + 2 - 1) + 3]", () => {
  //     expect(brackets(["(", 4, "-", 4, "+", 2, "*", 2, "/", 2, ")", "+", "(", 5, "+", 2, "+", 3, ")", "+", 3, "+", "(", 5, "+", 2, "-", 1, ")",])).toEqual([2, "+", 10, "+", 3, "+", 6,]);
  //   });

  // it("[(2+3*2)+2]", () => {
  //   expect(brackets(["(", 2, "+", 3, "*", 2, ")", "+", 2])).toEqual([8, "+", 2]);
  // });

  // it("( 2   3+8* 9) -8 +4* (3 +3 / 1 -6)- 2^ 3", () => {
  //   expect(brackets(["(", 23, "+", 8, "*", 9, ")", "-", 8, "+", 4, "*", "(", 3, "+", 3, "/", 1, "-", 6, ")", "-", 2, "^", 3])).toEqual([95, "-", 8, "+", 4, "*", 0, "-", 2, "^", 3]);
  // })

  // it("[95, -, 8, +, 4, *, 0, -, 2, ^, 3]", () => {
  //   expect(zeroPrioritiesCalc([95, "-", 8, "+", 4, "*", 0, "-", 2, "^", 3])).toEqual([95, "-", 8, "+", 4, "*", 0, "-", 8]);
  // })

  // it("[95, -, 8, +, 4, *, 0, -, 8]", () => {
  //   expect(firstPrioritiesCalc([95, "-", 8, "+", 4, "*", 0, "-", 8])).toEqual([95, "-", 8, "+", 0, "-", 8]);
  // })

  it("2 * +2", () => {
    expect(firstPrioritiesCalc([2, "*", "*","+", 2,])).toEqual([4, "+", 2]);
  })


})