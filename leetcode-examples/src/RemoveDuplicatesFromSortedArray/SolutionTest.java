package RemoveDuplicatesFromSortedArray;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    private Solution solution = new Solution();

    @Test
    @DisplayName("Jack Test")
    void testJackArray() {
        int[] nums = {1, 2, 2, 3};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(3, result, "Empty array should return 3");
    }

    @Test
    @DisplayName("Test empty array")
    void testEmptyArray() {
        int[] nums = {};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(0, result, "Empty array should return 0");
    }

    @Test
    @DisplayName("Test array with single element")
    void testSingleElement() {
        int[] nums = {1};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(1, result, "Array with single element should return 1");
        assertEquals(1, nums[0], "First element should remain unchanged");
    }

    @Test
    @DisplayName("Test array with no duplicates")
    void testNoDuplicates() {
        int[] nums = {1, 2, 3, 4, 5};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(5, result, "Array with no duplicates should return original length");
        assertArrayEquals(new int[]{1, 2, 3, 4, 5},
                arraySlice(nums, result),
                "Array should remain unchanged");
    }

    @Test
    @DisplayName("Test array with all duplicates")
    void testAllDuplicates() {
        int[] nums = {1, 1, 1, 1, 1};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(1, result, "Array with all duplicates should return 1");
        assertEquals(1, nums[0], "First element should be 1");
    }

    @Test
    @DisplayName("Test array with some duplicates")
    void testSomeDuplicates() {
        int[] nums = {1, 1, 2, 2, 3};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(3, result, "Should return number of unique elements");
        assertArrayEquals(new int[]{1, 2, 3},
                arraySlice(nums, result),
                "Array should contain unique elements in order");
    }

    @Test
    @DisplayName("Test array with duplicates at different positions")
    void testDuplicatesAtDifferentPositions() {
        int[] nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(5, result, "Should return number of unique elements");
        assertArrayEquals(new int[]{0, 1, 2, 3, 4},
                arraySlice(nums, result),
                "Array should contain unique elements in order");
    }

    @Test
    @DisplayName("Test array with negative numbers")
    void testNegativeNumbers() {
        int[] nums = {-3, -3, -2, -1, -1, 0, 0, 0, 2};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(5, result, "Should return number of unique elements");
        assertArrayEquals(new int[]{-3, -2, -1, 0, 2},
                arraySlice(nums, result),
                "Array should contain unique elements in order");
    }

    @Test
    @DisplayName("Test array with duplicates at edges")
    void testDuplicatesAtEdges() {
        int[] nums = {1, 1, 2, 3, 4, 4};
        int result = solution.removeDuplicatesFromSortedArray(nums);
        assertEquals(4, result, "Should return number of unique elements");
        assertArrayEquals(new int[]{1, 2, 3, 4},
                arraySlice(nums, result),
                "Array should contain unique elements in order");
    }

    // Helper method to get a slice of the array up to the specified length
    private int[] arraySlice(int[] arr, int length) {
        int[] result = new int[length];
        System.arraycopy(arr, 0, result, 0, length);
        return result;
    }
}
