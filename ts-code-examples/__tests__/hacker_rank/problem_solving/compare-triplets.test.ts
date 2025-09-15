import { compareTriplets } from "../../../src/hacker_rank/problem_solving/compare-triplets";

describe("compare triplets", () => {
  it("shall calcuate alice and bobs score", () => {
    const a = [1, 2, 3];
    const b = [3, 2, 1];

    const result = compareTriplets(a, b);
    expect(result).toEqual([1, 1]);
  });

  it("another test case", () => {
    const a = [5, 6, 7];
    const b = [3, 6, 10];

    const result = compareTriplets(a, b);
    expect(result).toEqual([1, 1]);
  });

  it("another test case", () => {
    const a = [17, 28, 30];
    const b = [99, 16, 8];

    const result = compareTriplets(a, b);
    expect(result).toEqual([2, 1]);
  });
});
