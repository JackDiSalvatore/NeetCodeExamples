package ConcatenationOfArray;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    private Solution solution = new Solution();

    @Test
    @DisplayName("Test empty array")
    void testEmptyArray() {
        int[] nums = {};
        int[] result = solution.getConcatenation(nums);
        assertEquals(0, result.length, "Concatenated empty array should have length 0");
    }

    @Test
    @DisplayName("Test array with single element")
    void testSingleElement() {
        int[] nums = {1};
        int[] result = solution.getConcatenation(nums);
        assertArrayEquals(new int[]{1, 1}, result,
                "Single element array should be duplicated");
        assertEquals(2, result.length,
                "Result should have twice the length of input");
    }

    @Test
    @DisplayName("Test array with multiple elements")
    void testMultipleElements() {
        int[] nums = {1, 2, 3};
        int[] result = solution.getConcatenation(nums);
        assertArrayEquals(new int[]{1, 2, 3, 1, 2, 3}, result,
                "Array should be concatenated with itself");
        assertEquals(6, result.length,
                "Result should have twice the length of input");
    }

    @Test
    @DisplayName("Test array with negative numbers")
    void testNegativeNumbers() {
        int[] nums = {-1, -2, -3};
        int[] result = solution.getConcatenation(nums);
        assertArrayEquals(new int[]{-1, -2, -3, -1, -2, -3}, result,
                "Should handle negative numbers correctly");
    }

    @Test
    @DisplayName("Test array with zeros")
    void testZeros() {
        int[] nums = {0, 0, 0};
        int[] result = solution.getConcatenation(nums);
        assertArrayEquals(new int[]{0, 0, 0, 0, 0, 0}, result,
                "Should handle zeros correctly");
    }

    @Test
    @DisplayName("Test array with mixed numbers")
    void testMixedNumbers() {
        int[] nums = {1, 0, -1};
        int[] result = solution.getConcatenation(nums);
        assertArrayEquals(new int[]{1, 0, -1, 1, 0, -1}, result,
                "Should handle mixed positive, negative, and zero values");
    }

    @Test
    @DisplayName("Test original array remains unchanged")
    void testOriginalArrayUnchanged() {
        int[] nums = {1, 2, 3};
        int[] original = nums.clone();
        int[] result = solution.getConcatenation(nums);
        assertArrayEquals(original, nums,
                "Original array should remain unchanged");
    }

    @Test
    @DisplayName("Test larger array")
    void testLargerArray() {
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] result = solution.getConcatenation(nums);
        assertEquals(20, result.length,
                "Result should have twice the length of input");

        // Check first half matches input
        for (int i = 0; i < nums.length; i++) {
            assertEquals(nums[i], result[i],
                    "First half should match input array");
        }

        // Check second half matches input
        for (int i = 0; i < nums.length; i++) {
            assertEquals(nums[i], result[i + nums.length],
                    "Second half should match input array");
        }
    }
}
