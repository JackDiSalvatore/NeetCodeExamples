import { firstUniqueChar } from "../../../src/leetcode/387/find-non-repeating-character";

describe("find the index of the first non-repeating character in a string", () => {
  it("should pass", () => {
    expect(firstUniqueChar("mississippi")).toBe(0);
    expect(firstUniqueChar("concussion")).toBe(4);
    expect(firstUniqueChar("aabb")).toBe(-1);
    expect(firstUniqueChar("carcramp")).toBe(6);
  });
});
