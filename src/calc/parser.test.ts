import { parser } from "./parser";

describe("Parser correct cases", () => {
  // it("1 + 32", () => {
  //   expect(parser("1 + 32")).toEqual([1, "+", 32]);
  // });

  // it("11 + 3 * 22", () => {
  //   expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  // });

  // it("1 + 32 - 2 + 2", () => {
  //   expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  // });

  // it("2 **", () => {
  //   expect(parser("2 ** + 4 + 5 * 2")).toEqual([2, "**", "+", 4, "+", 5, "*", 2]);  // есть
  // });

  // it("2 ** + 2 ** + 3 ^ 3", () => {
  //   expect(parser("2 ** + 2 ** + 3 ^ 3")).toEqual([2, "**", "+", 2, "**", "+", 3, "^", 3]);  // есть
  // });

  // it("( 2 ** + 2 ^ 3 + 5 + 2 + 3 * 2 + 2 **)", () => {
  //   expect(parser("( 2 ** + 3 * 2 + 2 ** )")).toEqual(["(",2,"**", "+", 3, "*", 2, "+", 2, "**", ")"]);  // есть
  // });

  // it("2 **", () => {
  //   expect(parser("2 **")).toEqual([2, "**"]);  // есть
  // });

  // it("(23+8* 9) -8+4*(3** +3/1 -6)-2^3", () => {
  //   expect(parser("(23+8* 9) -8+4*(3 +3/1 -6)-2^3")).toEqual(["(", 23, "+", 8, "*", 9, ")", "-", 8, "+", 4, "*", "(", 3, "+", 3, "/", 1, "-", 6, ")", "-", 2, "^", 3]);  // есть
  // });

  it("(23+8* 9) -8+4*(3** +3/1 -6)-2^3", () => {
    expect(parser(" ( 2   3+8* 9) -8 +4* ((3 +3 / 1 -6)- 2^ 3)")).toEqual(["(", 23, "+", 8, "*", 9, ")", "-", 8, "+", 4, "*", "(", "(", 3, "+", 3, "/", 1, "-", 6, ")", "-", 2, "^", 3, ")",]);  // есть
  });

  // it("(1 23+8* 9  5 )- 8", () => {
  //   expect(parser(" (1 2       10 +8* 9  5   0)- 8")).toEqual(["(", 1210, "+", 8, "*", 950, ")", "-", 8]);  // есть
  // });




});

// describe("Parser invalid cases", () => {
//   it("1 + + 33 - 2", () => {
//     expect(() => parser("1 + + 33 - 2")).toThrow(
//       TypeError("Unexpected operator or some literals are typed together (without spaces)")
//     );
//   });

//   it("1 ! 33 - 2", () => {
//     expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected operator or some literals are typed together (without spaces)"));
//   });

// });