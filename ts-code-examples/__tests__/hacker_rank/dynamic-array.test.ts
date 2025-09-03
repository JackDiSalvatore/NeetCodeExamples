import { dynamicArray } from "../../src/hacker_rank/dynamic-array";

describe("dynamicArray", () => {
  it("should process queries and return correct answers", () => {
    const n = 2;
    const queries = [
      [1, 0, 5], // append 5 to seq[(0^0)%2] -> seq[0]
      [1, 1, 7], // append 7 to seq[(1^0)%2] -> seq[1]
      [1, 0, 3], // append 3 to seq[(0^0)%2] -> seq[0]
      [2, 1, 0], // seq[(1^0)%2] = seq[1] -> [7], lastAnswer=7
      [2, 1, 1], // seq[(1^7)%2] = seq[0] -> [5,3], lastAnswer=3
    ];

    const result = dynamicArray(n, queries);

    expect(result).toEqual([7, 3]);
  });

  it("should handle empty queries", () => {
    expect(dynamicArray(2, [])).toEqual([]);
  });

  it("should handle single query of type 1", () => {
    expect(dynamicArray(1, [[1, 0, 42]])).toEqual([]);
  });
});
