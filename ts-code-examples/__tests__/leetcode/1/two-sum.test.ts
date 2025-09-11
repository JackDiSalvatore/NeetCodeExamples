import { twoSum } from "../../../src/leetcode/1/two-sum";

describe("twoSum", () => {
  describe("basic cases", () => {
    test("should return indices [0, 1] for [2, 7, 11, 15] with target 9", () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test("should return indices [1, 2] for [3, 2, 4] with target 6", () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test("should return indices [0, 1] for [3, 3] with target 6", () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
  });

  describe("positive numbers", () => {
    test("should find sum at beginning of array", () => {
      expect(twoSum([1, 2, 3, 4, 5], 3)).toEqual([0, 1]);
    });

    test("should find sum at end of array", () => {
      expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
    });

    test("should find sum in middle of array", () => {
      expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([2, 3]);
    });

    test("should handle larger arrays", () => {
      expect(twoSum([1, 5, 3, 8, 2, 9, 4], 12)).toEqual([2, 5]);
      expect(twoSum([1, 5, 3, 8, 2, 9, 4], 8)).toEqual([1, 2]);
    });
  });

  describe("negative numbers", () => {
    test("should handle negative numbers", () => {
      expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]); // -3 + -5 = -8
    });

    test("should handle mix of positive and negative", () => {
      expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]); // -3 + 3 = 0
    });

    test("should handle negative target", () => {
      expect(twoSum([1, -3, 2, 4], -2)).toEqual([0, 1]); // 1 + (-3) = -2 ✓
    });
  });

  describe("zero handling", () => {
    test("should handle zeros in array", () => {
      expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]); // 0 + 0 = 0
    });

    test("should handle target zero with non-zero numbers", () => {
      expect(twoSum([-1, 0, 1, 2], 0)).toEqual([0, 2]); // -1 + 1 = 0
    });

    test("should handle zero target", () => {
      expect(twoSum([5, -5, 1, 3], 0)).toEqual([0, 1]); // 5 + (-5) = 0
    });
  });

  describe("duplicate numbers", () => {
    test("should handle duplicate numbers that sum to target", () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test("should handle array with multiple duplicates", () => {
      expect(twoSum([2, 2, 2, 2], 4)).toEqual([0, 1]);
    });

    test("should return first valid pair when multiple solutions exist", () => {
      expect(twoSum([1, 2, 3, 2, 4], 4)).toEqual([0, 2]); // Returns first occurrence: 1 + 3 = 4
    });

    test("should handle duplicates where target requires different indices", () => {
      expect(twoSum([3, 5, 3, 7], 6)).toEqual([0, 2]); // 3 + 3 = 6, using indices 0 and 2
    });
  });

  describe("edge cases", () => {
    test("should return empty array when no solution exists", () => {
      expect(twoSum([1, 2, 3], 10)).toEqual([]);
    });

    test("should handle minimum array size", () => {
      expect(twoSum([1, 2], 3)).toEqual([0, 1]);
    });

    test("should return empty array for impossible targets", () => {
      expect(twoSum([1, 2, 3, 4], 100)).toEqual([]);
      expect(twoSum([5, 5, 5], 1)).toEqual([]);
    });

    test("should handle single element array", () => {
      expect(twoSum([5], 5)).toEqual([]);
    });

    test("should handle empty array", () => {
      expect(twoSum([], 0)).toEqual([]);
    });
  });

  describe("large numbers", () => {
    test("should handle large positive numbers", () => {
      expect(twoSum([1000000, 999999, 1], 1999999)).toEqual([0, 1]);
    });

    test("should handle large negative numbers", () => {
      expect(twoSum([-1000000, -999999, -1], -1999999)).toEqual([0, 1]);
    });
  });

  describe("order verification", () => {
    test("should always return smaller index first", () => {
      const result = twoSum([3, 2, 4], 6);
      expect(result[0]).toBeLessThan(result[1]);
    });

    test("should maintain index order in all cases", () => {
      const testCases = [
        { nums: [2, 7, 11, 15], target: 9 },
        { nums: [3, 2, 4], target: 6 },
        { nums: [1, 5, 3, 2], target: 4 },
      ];

      testCases.forEach(({ nums, target }) => {
        const result = twoSum(nums, target);
        if (result.length === 2) {
          expect(result[0]).toBeLessThan(result[1]);
        }
      });
    });
  });

  describe("return value validation", () => {
    test("should return valid indices that sum to target", () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);

      expect(result).toHaveLength(2);
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test("should return indices within array bounds", () => {
      const nums = [1, 2, 3, 4, 5];
      const target = 8;
      const result = twoSum(nums, target);

      if (result.length === 2) {
        expect(result[0]).toBeGreaterThanOrEqual(0);
        expect(result[0]).toBeLessThan(nums.length);
        expect(result[1]).toBeGreaterThanOrEqual(0);
        expect(result[1]).toBeLessThan(nums.length);
      }
    });
  });
});
