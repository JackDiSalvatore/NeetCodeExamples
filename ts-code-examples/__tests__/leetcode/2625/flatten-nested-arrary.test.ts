import { flat } from "../../../src/leetcode/2625/flatten-nested-array";

describe.only("find the index of the first non-repeating character in a string", () => {
  it("test 1", () => {
    const res = flat([1, 2, 3, [4, 5, 6]], 1);

    // console.log(res);

    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("test 2", () => {
    const res = flat(
      [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
      2
    );

    // console.log(res);

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it("test", () => {
    const res = flat(
      [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
      1
    );
    // console.log(res);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]);
  });
});
