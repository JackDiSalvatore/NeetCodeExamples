import { diagonalDifference } from "../../../src/hacker_rank/problem_solving/diagonal-difference";

describe("diagonal difference", () => {
  it("3x3 matrix", () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ];

    const result = diagonalDifference(arr);

    expect(result).toBe(2);
  });

  it("4x4 matrix", () => {
    const arr = [
      [1, 0, 6, 5],
      [9, 3, 2, 3],
      [8, 4, 7, 2],
      [2, 7, 1, 1],
    ];

    //   12 - 13 = -1
    // abs(-1) = 1

    const result = diagonalDifference(arr);

    expect(result).toBe(1);
  });
});
