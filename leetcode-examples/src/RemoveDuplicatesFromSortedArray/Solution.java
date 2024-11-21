package RemoveDuplicatesFromSortedArray;

/*
* Given an integer array nums sorted in non-decreasing order,
* remove the duplicates in-place such that each unique element appears only once.
* The relative order of the elements should be kept the same.
* Then return the number of unique elements in nums.
* */
class Solution {

    public int removeDuplicatesFromSortedArray(int[] nums) {
        if (nums.length == 0) return 0;

        int index = 1;

        for (int i = 0; i < nums.length - 1; i++) {

            // Check if next element is NOT a duplicate
            if (nums[i] != nums[i + 1]) {
                nums[index] = nums[i + 1];    // set uniqueIndex to number of next element
                index = index + 1;
            }
        }

        return index;
    }
}
