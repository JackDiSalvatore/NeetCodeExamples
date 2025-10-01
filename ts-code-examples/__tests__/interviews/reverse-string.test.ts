import { reverseString } from "../../src/interviews/reverse-string";

describe("Reverse a string", () => {
  it("should reverse string", () => {
    const s = "CodingMonkey";

    const res = reverseString(s);
    // console.log(res);

    expect(res).toBe("yeknoMgnidoC");

    expect(reverseString("Hi")).toBe("iH");
  });
});
