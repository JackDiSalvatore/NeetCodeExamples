# Assuming the array is unsorted, find the matching number that
# completes the sum

# ex: nums = [1,1,2,3], target = 5

# nums[0] = 1 => complement is 4
# nums[1] = 1 => complement is 4
# nums[2] = 2 => complement is 3 (nums[3])
# nums[3] = 3 => complement is 2 (nums[2])

# { num_complement_pair: index }
# complement_map = {
#   1: 0,
#   1: 1,
#   2: 2
# }

from pprint import pprint

DEBUG = False


class TwoSumHashMapSolution:

    def findIndex(self, nums: list[int], target: int) -> tuple[int, int]:
        if DEBUG:
            print(f"Target: {target}\r\nNums: {nums}\r\n")

        # "If you need x to add to the current number to make the target,
        # then look here in the nums arary"
        # { num_complement_pair: index }
        complement_map: dict[int, int] = {}

        for idx, num in enumerate(nums):
            # print(f"idx: {idx}, num: {num}")
            complement: int = target - num

            complement_idx: int | None = complement_map.get(complement)

            if DEBUG:
                pprint(complement_map, width=1, indent=2, depth=2, sort_dicts=False)

            if complement_idx is None:
                complement_map[num] = idx
            else:
                return complement_idx, idx

            #         return complement_map[complement], idx

        raise ValueError(f"no pair sums to {target}")


def main():
    solution = TwoSumHashMapSolution()

    # solution [complement of 1, complement of 3] => (1, 2)
    # complement_map = {
    #   1: 0,
    #   1: 1,
    #   2: 2
    # }
    x, y = solution.findIndex([1, 1, 2, 3], 5)
    print(x, y)  # 1, 2

    # solution [complement of 4, complement of 3] => (0, 1)
    # complement_map = {
    #   4: 0,
    #   3: 1,
    #   2: 2,
    #   1: 3
    # }
    x, y = solution.findIndex([3, 4, 5, 6], 7)
    print(x, y)  # 0, 1


if __name__ == "__main__":
    main()
