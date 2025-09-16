import { miniMaxSum } from "../../../src/hacker_rank/problem_solving/mini-max-sum";

describe("mini max sum", () => {
  it("should find minimum and maximum sum", () => {
    const arr = [1, 3, 5, 7, 9];

    miniMaxSum(arr); // 16, 24
  });

  it("should find minimum and maximum sum again", () => {
    const arr = [1, 2, 3, 4, 5];

    miniMaxSum(arr); // 10, 14
  });
});
