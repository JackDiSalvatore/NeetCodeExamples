// Arrays - DS

import {
  reverseArray,
  reverseArrayInPlace,
} from "../../src/hacker_rank/reverse-array";

describe("reverseArray", () => {
  it("should return a new array with elements reversed", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = reverseArray(nums);

    expect(result).toEqual([5, 4, 3, 2, 1]);
    expect(nums).toEqual([1, 2, 3, 4, 5]); // original should remain unchanged
  });

  it("should handle an empty array", () => {
    expect(reverseArray([])).toEqual([]);
  });

  it("should handle a single element array", () => {
    expect(reverseArray([42])).toEqual([42]);
  });
});

describe("reverseArrayInPlace", () => {
  it("should reverse exiting array", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = reverseArrayInPlace(nums);

    expect(result).toEqual([5, 4, 3, 2, 1]);
    expect(nums).toEqual([5, 4, 3, 2, 1]); // original should be reversed
  });

  it("should handle an empty array", () => {
    expect(reverseArrayInPlace([])).toEqual([]);
  });

  it("should handle a single element array", () => {
    expect(reverseArrayInPlace([42])).toEqual([42]);
  });
});
