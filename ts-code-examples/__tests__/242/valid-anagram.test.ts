import { isAnagram } from "../../src/242/valid-anagram";

describe.only("valid anagram", () => {
  it("should do something", () => {
    expect(isAnagram("racae", "aeacr")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("rac", "car")).toBe(true);
  });
});
