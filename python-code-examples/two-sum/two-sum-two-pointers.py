# Given an array of integers `nums` and an integer `target`,
# return the indices `i` and `j` such that 
# `nums[i] + nums[j] == target` and `i != j``

# ex: nums = [3,4,5,6], target = 7
# output: [0,1] (3+4 = 7)

# Brute force method: O(n^2)
# i: 0        i: 1        i: 2
# 3 + 4 = 7   4 + 5 = 9   5 + 6 = 11
# 3 + 5 = 8   4 + 6 = 10
# 3 + 6 = 9

# Two Pointers: O(n)
# Instead of checking every possible combination, we sort the array

# l = nums[0], r = nums[len(nums)-1]
#
#         l     r
# nums = [3,4,5,6]

# if target - l < r : we move right backwards
# ex: 7 - 3 < 6
#         4 < 6  [3 + 4]

#
# ex: nums = [1,1,2,3], target = 5

# if target - r > l : we move left forwards
# ex: 5 - 3 > 1
#     2 > 1

class TwoSumSolution():
    def __init__(self, nums, target):

        left = 0
        right = len(nums) - 1

        while (left <= right):
            # print(nums[left])
            # print(nums[right])

            # move pointers
            current_sum = nums[left] + nums[right]

            if (current_sum == target):
                print(f'Indexes are nums[{left}] and nums[{right}] = {target}')
                return
            
            if (current_sum > target):
                right -= 1
            else:
                left += 1

            # if (target - nums[left] < nums[right]):
            #     right = right - 1
            # elif (target - nums[right] > nums[left]):
            #     left = left + 1

        return

def main():
    # Note: input must be sorted
    solution = TwoSumSolution([3,4,5,6], 7)
    solution = TwoSumSolution([1,1,2,4,5,6], 6)
    print("Done!")

if __name__ == "__main__":
    main()