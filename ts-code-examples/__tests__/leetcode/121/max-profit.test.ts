import { maxProfit } from "../../../src/leetcode/121/max-profit";

describe("maxProfit", () => {
  describe("basic cases", () => {
    test("should buy on day 2 and sell on day 5 for a profit of 5", () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
    });

    test("should return 0 when prices are descending", () => {
      expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    });

    test("should return 0 for single day prices", () => {
      expect(maxProfit([5])).toEqual(0);
    });

    test("should return 0 for empty prices array", () => {
      expect(maxProfit([])).toEqual(0);
    });

    test("should return correct profit for two days increasing", () => {
      expect(maxProfit([1, 2])).toEqual(1);
    });

    test("should return correct profit for two days decreasing", () => {
      expect(maxProfit([2, 1])).toEqual(0);
    });

    test("should handle multiple peaks and valleys", () => {
      expect(maxProfit([3, 2, 6, 1, 4])).toEqual(4);
    });

    test("should handle all prices being the same", () => {
      expect(maxProfit([5, 5, 5, 5, 5])).toEqual(0);
    });
  });

  describe("edge cases", () => {
    test("should handle large input", () => {
      const prices = Array.from({ length: 10000 }, (_, i) => i);
      expect(maxProfit(prices)).toEqual(9999);
    });

    test("should handle negative prices (if allowed)", () => {
      expect(maxProfit([-3, -2, -1, 0, 1])).toEqual(4);
    });
  });
});
