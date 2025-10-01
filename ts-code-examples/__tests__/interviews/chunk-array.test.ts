import { chunkArray } from "../../src/interviews/chunk-array";

describe("Chunk array into smaller arrays", () => {
  it("should return two chunks", () => {
    const chunked = chunkArray([1, 2, 3, 4], 2);

    expect(chunked).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("should return three chunks", () => {
    const chunked = chunkArray([1, 2, 3, 4, 5], 2);

    expect(chunked).toEqual([[1, 2], [3, 4], [5]]);
  });
});
