import { isAnagramSorted } from "../../src/interviews/anagram-sorted";

describe("anagarm sorted solution", () => {
  it("should test if two strings are valid anagrams", () => {
    expect(isAnagramSorted("abc", "cba")).toBe(true);

    expect(isAnagramSorted("abc", "cbe")).toBe(false);

    expect(isAnagramSorted("room", "mroo")).toBe(true);
  });
});
