package RemoveElement;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
    private Solution solution = new Solution();

    @Test
    @DisplayName("Test empty array")
    void testEmptyArray() {
        int[] nums = {};
        int result = solution.removeElement(nums, 1);
        assertEquals(0, result, "Empty array should return 0");
    }

    @Test
    @DisplayName("Test array with no matches")
    void testNoMatches() {
        int[] nums = {1, 2, 3, 4};
        int result = solution.removeElement(nums, 5);
        assertEquals(4, result, "Should return original length when no elements match");
        assertArrayEquals(new int[]{1, 2, 3, 4},
                arraySlice(nums, result),
                "Array should remain unchanged");
    }

    @Test
    @DisplayName("Test array with all matches")
    void testAllMatches() {
        int[] nums = {2, 2, 2, 2};
        int result = solution.removeElement(nums, 2);
        assertEquals(0, result, "Should return 0 when all elements are removed");
    }

    @Test
    @DisplayName("Test array with single element matching")
    void testSingleMatch() {
        int[] nums = {3, 2, 2, 3};
        int result = solution.removeElement(nums, 3);
        assertEquals(2, result, "Should return count of non-matching elements");
        int[] expected = arraySlice(nums, result);
        assertTrue(containsOnly(expected, 2),
                "Resulting array should only contain 2s");
    }

    @Test
    @DisplayName("Test array with multiple different elements")
    void testMultipleDifferentElements() {
        int[] nums = {0, 1, 2, 2, 3, 0, 4, 2};
        int result = solution.removeElement(nums, 2);
        assertEquals(5, result, "Should return count of non-matching elements");
        int[] resultArray = arraySlice(nums, result);
        assertEquals(5, resultArray.length, "Result array should have correct length");
        assertEquals(0, countOccurrences(resultArray, 2),
                "Result should not contain any 2s");
    }

    @Test
    @DisplayName("Test array with single element")
    void testSingleElement() {
        int[] nums = {1};
        int result = solution.removeElement(nums, 1);
        assertEquals(0, result, "Should return 0 when single element is removed");
    }

    @Test
    @DisplayName("Test array with negative numbers")
    void testNegativeNumbers() {
        int[] nums = {-1, -2, -3, -1};
        int result = solution.removeElement(nums, -1);
        assertEquals(2, result, "Should return count of non-matching elements");
        int[] resultArray = arraySlice(nums, result);
        assertEquals(0, countOccurrences(resultArray, -1),
                "Result should not contain any -1s");
    }

    // Helper method to get a slice of the array up to the specified length
    private int[] arraySlice(int[] arr, int length) {
        int[] result = new int[length];
        System.arraycopy(arr, 0, result, 0, length);
        return result;
    }

    // Helper method to check if array contains only a specific value
    private boolean containsOnly(int[] arr, int value) {
        for (int num : arr) {
            if (num != value) return false;
        }
        return true;
    }

    // Helper method to count occurrences of a value in array
    private int countOccurrences(int[] arr, int value) {
        int count = 0;
        for (int num : arr) {
            if (num == value) count++;
        }
        return count;
    }
}
