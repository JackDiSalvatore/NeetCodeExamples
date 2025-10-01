import { maxChar } from "../../src/interviews/max-char";

describe("Max character count in a string", () => {
  it("should return max character", () => {
    const max = maxChar("queen");

    expect(max).toBe("e");
  });
});
