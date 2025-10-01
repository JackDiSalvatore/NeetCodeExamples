import { isAnagram } from "../../../src/leetcode/242/valid-anagram";

describe("valid anagram", () => {
  it("should do something", () => {
    expect(isAnagram("racae", "aeacr")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("rac", "car")).toBe(true);

    expect(isAnagram("peterthiel", "thereptile")).toBe(true);
  });
});
