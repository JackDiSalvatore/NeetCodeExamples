import { capitalizeString } from "../../src/interviews/capitalize-string";

describe("Chunk array into smaller arrays", () => {
  it("should capitalize all words in a sentence", () => {
    const capitalized = capitalizeString(
      "the quick brown fox jumps over the lazy dog"
    );

    // console.log(capitalized);

    expect(capitalized).toEqual("The Quick Brown Fox Jumps Over The Lazy Dog");
  });
});
