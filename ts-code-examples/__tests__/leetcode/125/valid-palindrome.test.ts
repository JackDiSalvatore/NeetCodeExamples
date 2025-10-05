import { isPalindrome } from "../../../src/leetcode/125/valid-palindrome";

describe("isPalindrome", () => {
  describe("given examples", () => {
    test("should return true", () => {
      expect(isPalindrome("panap")).toBe(true);

      expect(isPalindrome("civic")).toBe(true);
      expect(isPalindrome("kayak")).toBe(true);
      expect(isPalindrome("tacocat")).toBe(true);
    });

    // test('should return true for "A man, a plan, a canal: Panama"', () => {
    //   expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    // });

    // test('should return false for "race a car"', () => {
    //   expect(isPalindrome("race a car")).toBe(false);
    // });

    // test('should return true for single space " "', () => {
    //   expect(isPalindrome(" ")).toBe(true);
    // });
  });

  // describe("simple palindromes", () => {
  //   test("should return true for single character", () => {
  //     expect(isPalindrome("a")).toBe(true);
  //     expect(isPalindrome("A")).toBe(true);
  //     expect(isPalindrome("1")).toBe(true);
  //   });

  //   test("should return true for simple palindromes", () => {
  //     expect(isPalindrome("aba")).toBe(true);
  //     expect(isPalindrome("racecar")).toBe(true);
  //     expect(isPalindrome("level")).toBe(true);
  //     expect(isPalindrome("noon")).toBe(true);
  //   });

  //   test("should return true for palindromes with mixed case", () => {
  //     expect(isPalindrome("Aba")).toBe(true);
  //     expect(isPalindrome("RaceCar")).toBe(true);
  //     expect(isPalindrome("MadAm")).toBe(true);
  //   });
  // });

  // describe("non-palindromes", () => {
  //   test("should return false for simple non-palindromes", () => {
  //     expect(isPalindrome("hello")).toBe(false);
  //     expect(isPalindrome("world")).toBe(false);
  //     expect(isPalindrome("abc")).toBe(false);
  //     expect(isPalindrome("abcd")).toBe(false);
  //   });

  //   test("should return false for mixed case non-palindromes", () => {
  //     expect(isPalindrome("Hello")).toBe(false);
  //     expect(isPalindrome("AbC")).toBe(false);
  //   });
  // });

  // describe("palindromes with punctuation and spaces", () => {
  //   test("should return true for palindromes with punctuation", () => {
  //     expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  //     expect(isPalindrome("Madam, I'm Adam")).toBe(true);
  //     expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  //     expect(isPalindrome("No 'x' in Nixon")).toBe(true);
  //   });

  //   test("should return true for palindromes with numbers and special characters", () => {
  //     expect(isPalindrome("A Santa at NASA")).toBe(true);
  //     expect(isPalindrome("12321")).toBe(true);
  //     expect(isPalindrome("1a2b3c3b2a1")).toBe(true);
  //     expect(isPalindrome("@#$%^&*()(*&^%$#@")).toBe(true);
  //   });
  // });

  // describe("edge cases", () => {
  //   test("should return true for empty string", () => {
  //     expect(isPalindrome("")).toBe(true);
  //   });

  //   test("should return true for strings with only non-alphanumeric characters", () => {
  //     expect(isPalindrome("!@#$%^&*()")).toBe(true);
  //     expect(isPalindrome(".,;:")).toBe(true);
  //     expect(isPalindrome("   ")).toBe(true);
  //   });

  //   test("should return true for numeric palindromes", () => {
  //     expect(isPalindrome("12321")).toBe(true);
  //     expect(isPalindrome("1001")).toBe(true);
  //     expect(isPalindrome("7")).toBe(true);
  //   });

  //   test("should return false for numeric non-palindromes", () => {
  //     expect(isPalindrome("123")).toBe(false);
  //     expect(isPalindrome("1234")).toBe(false);
  //   });
  // });

  // describe("mixed alphanumeric cases", () => {
  //   test("should return true for alphanumeric palindromes", () => {
  //     expect(isPalindrome("A1B2b1a")).toBe(true);
  //     expect(isPalindrome("0P0")).toBe(true);
  //   });

  //   test("should return false for alphanumeric non-palindromes", () => {
  //     expect(isPalindrome("A1B2C3")).toBe(false);
  //     expect(isPalindrome("0P1")).toBe(false);
  //   });
  // });

  // describe("whitespace handling", () => {
  //   test("should ignore leading and trailing spaces", () => {
  //     expect(isPalindrome("  aba  ")).toBe(true);
  //     expect(isPalindrome("  racecar  ")).toBe(true);
  //   });

  //   test("should ignore internal spaces", () => {
  //     expect(isPalindrome("a b a")).toBe(true);
  //     expect(isPalindrome("r a c e c a r")).toBe(true);
  //   });

  //   test("should handle multiple spaces", () => {
  //     expect(isPalindrome("a   b   a")).toBe(true);
  //     expect(isPalindrome("   a b a   ")).toBe(true);
  //   });
  // });
});
