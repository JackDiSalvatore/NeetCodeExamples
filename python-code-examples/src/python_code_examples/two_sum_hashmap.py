# Assuming the array is unsorted, find the matching number that
# completes the sum

# ex: nums = [1,1,2,3], target = 5

# nums[0] (1) => complement is 4
# nums[1] (1) => complement is 4
# nums[2] (2) => complement is 3 (nums[3])
# nums[3] (3) => complement is 2 (nums[2])

from pprint import pprint

DEBUG = False


class TwoSumHashMapSolution:

    def findIndex(self, nums, target):
        if DEBUG:
            print(f"Target: {target}\r\nNums: {nums}\r\n")

        # "If you need x to add to the current number to make the target,
        # then look here in the nums arary"
        # { num_complement_pair: index }
        complement_map = {}

        for idx, num in enumerate(nums):
            # print(f"idx: {idx}, num: {num}")
            complement = target - num
            complement_idx = complement_map.get(complement)

            if complement_idx == None:
                complement_map[num] = idx
            else:
                # 5 - nums[0] => 5 - 1 => 4
                # 5 - nums[3] => 5 - 3 => 2 (search map for compl 2 => idx:2)
                # print(target - nums[complement_map[complement]])
                # print(f"nums[idx]: {complement_map[complement]}") # this should be idx[2] => 3

                if num == target - nums[complement_map[complement]]:
                    if DEBUG:
                        print(
                            f"Found {nums[complement_map[complement]]} and {nums[idx]}"
                        )
                        print(f"At: ({complement_map[complement]}, {idx})")
                    return complement_map[complement], idx

        if DEBUG:
            print("--------------")
            pprint(complement_map, width=1, indent=2, depth=2, sort_dicts=False)
            print("--------------\r\n\r\n")

        return 0, 0
