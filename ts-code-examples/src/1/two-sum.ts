/**
 *
 * @param nums array of integers
 * @param target the target sum of two of the integers in the `num` array
 * @returns the indices of the two numbers that would add up to the `target`
 *
 *             0,1,2
 * ex: nums = [3,2,4], target = 6
 *
 * map = {
 *   num that could be used as a complement: index
 *   3: 0,
 *   2: 1,
 *   4: 2
 * }
 *
 * iterate over map
 * 0: find index in map where num to complement = 3 , save { 3, 0 }
 * 1: find index in map where num to complement = 4 , save { 2, 1 }
 * 2: find index in map where num to complement = 2, return [1, 2]
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i <= nums.length - 1; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) return [map.get(complement)!, i];

    map.set(nums[i], i);
  }

  return [];
}
