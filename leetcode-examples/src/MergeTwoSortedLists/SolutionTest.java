package MergeTwoSortedLists;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    private Solution solution = new Solution();

    @Test
    @DisplayName("Test both lists null")
    void testBothNull() {
        assertNull(solution.mergeTwoLists(null, null),
                "Merging null lists should return null");
    }

    @Test
    @DisplayName("Test one list null")
    void testOneNull() {
        ListNode list1 = createList(new int[]{1, 2, 3});
        assertSame(list1, solution.mergeTwoLists(list1, null),
                "Should return non-null list when other is null");

        ListNode list2 = createList(new int[]{1, 2, 3});
        assertSame(list2, solution.mergeTwoLists(null, list2),
                "Should return non-null list when other is null");
    }

    @Test
    @DisplayName("Test equal length lists")
    void testEqualLengthLists() {
        ListNode list1 = createList(new int[]{1, 3, 5});
        ListNode list2 = createList(new int[]{2, 4, 6});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{1, 2, 3, 4, 5, 6}, merged);
    }

    @Test
    @DisplayName("Test different length lists")
    void testDifferentLengthLists() {
        ListNode list1 = createList(new int[]{1, 2});
        ListNode list2 = createList(new int[]{3, 4, 5, 6});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{1, 2, 3, 4, 5, 6}, merged);
    }

    @Test
    @DisplayName("Test lists with duplicate values")
    void testDuplicateValues() {
        ListNode list1 = createList(new int[]{1, 2, 2});
        ListNode list2 = createList(new int[]{2, 3, 3});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{1, 2, 2, 2, 3, 3}, merged);
    }

    @Test
    @DisplayName("Test one empty list")
    void testOneEmptyList() {
        ListNode list1 = createList(new int[]{});
        ListNode list2 = createList(new int[]{1, 2, 3});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{1, 2, 3}, merged);
    }

    @Test
    @DisplayName("Test negative numbers")
    void testNegativeNumbers() {
        ListNode list1 = createList(new int[]{-3, -1, 2});
        ListNode list2 = createList(new int[]{-2, 0, 1});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{-3, -2, -1, 0, 1, 2}, merged);
    }

    @Test
    @DisplayName("Test completely overlapping values")
    void testOverlappingValues() {
        ListNode list1 = createList(new int[]{1, 1, 1});
        ListNode list2 = createList(new int[]{1, 1, 1});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{1, 1, 1, 1, 1, 1}, merged);
    }

    @Test
    @DisplayName("Test single element lists")
    void testSingleElementLists() {
        ListNode list1 = createList(new int[]{1});
        ListNode list2 = createList(new int[]{2});

        ListNode merged = solution.mergeTwoLists(list1, list2);
        assertListEquals(new int[]{1, 2}, merged);
    }

    // Helper method to create a linked list from array
    private ListNode createList(int[] values) {
        if (values == null || values.length == 0) return null;

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        for (int value : values) {
            current.next = new ListNode(value);
            current = current.next;
        }

        return dummy.next;
    }

    // Helper method to assert linked list equals expected array
    private void assertListEquals(int[] expected, ListNode actual) {
        ListNode current = actual;
        for (int value : expected) {
            assertNotNull(current, "List is shorter than expected");
            assertEquals(value, current.val,
                    "Values don't match at position");
            current = current.next;
        }
        assertNull(current, "List is longer than expected");
    }

    @Test
    @DisplayName("Test order preservation")
    void testOrderPreservation() {
        ListNode list1 = createList(new int[]{1, 4, 5});
        ListNode list2 = createList(new int[]{2, 3, 6});

        ListNode merged = solution.mergeTwoLists(list1, list2);

        // Test that the result is still sorted
        ListNode current = merged;
        while (current != null && current.next != null) {
            assertTrue(current.val <= current.next.val,
                    "List should maintain sorted order");
            current = current.next;
        }
    }
}
