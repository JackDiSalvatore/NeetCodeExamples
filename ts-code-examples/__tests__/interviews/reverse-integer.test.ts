import { reverseInteger } from "../../src/interviews/reverse-integer";

describe("Reverse an integer", () => {
  it("should reverse integer", () => {
    const integer = 12345;

    const res = reverseInteger(integer);
    // console.log(res);
    expect(res).toBe(54321);

    expect(reverseInteger(314572)).toBe(275413);

    expect(reverseInteger(-15)).toBe(-51);
  });
});
