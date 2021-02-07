import { runner } from "./runner";

describe("Runner simple cases", () => {
    // it("4 **, + 5, * 2", () => {
    //   expect(runner("4 ** + 5 * 2")).toEqual(26);
    // });

    // it("4 **", () => {
    //   expect(runner("4 **")).toEqual(16);
    // });

    // it("2 + 32", () => {
    //   expect(runner("2 + 32")).toEqual(34);
    // });
  });

//   describe("Runner tripled/mixed cases", () => {
    // it("2 * 2 * 3", () => {
    //   expect(runner("2 * 2 * 3")).toEqual(12);
    // });

    // it("2 * 2 + 3", () => {
    //   expect(runner("2 * 2 + 3")).toEqual(7);
    // });

    // it("2 + 2 * 3", () => {
    //   expect(runner("2 + 2 * 3")).toEqual(8);
    // });

  //   it("2 **", () => {
  //     expect(runner("2 **")).toEqual(4);
  //   });

  // });

//   describe("Runner long cases", () => {
//     it("20 + 1 * 10 - 5 * 3", () => {
//       expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
//     });

  // it("20 - 10 * 10 / 5 - 3", () => {
  //   expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  // });

  it("( 2   3+8* 9) -8 +4* (3 +3 / 1 -6)- 2^ 3", () => {
    expect(runner("( 2   3+8* 9) -8 +4* (3 +3 / 1 -6)- 2^ 3")).toEqual(79);
  });

// });