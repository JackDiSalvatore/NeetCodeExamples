package RemoveElement;

/*
    Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
    The order of the elements may be changed.
    Then return the number of elements in nums which are not equal to val.
 */
public class Solution {
    public int removeElement(int[] nums, int val) {
        if (nums.length == 0) return 0;

        int j = 0;

        for (int i = 0; i < nums.length; i++) {

            // Check if element is NOT equal to `val`
            if (nums[i] != val) {
                nums[j] = nums[i];
                j = j + 1;
            }
        }

        return j;
    }
}
