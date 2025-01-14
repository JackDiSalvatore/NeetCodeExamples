package ReverseLinkedList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    private Solution solution = new Solution();

    @Test
    @DisplayName("Test null list")
    void testNullList() {
        assertNull(solution.reverseList(null),
                "Reversing null should return null");
    }

    @Test
    @DisplayName("Test single node")
    void testSingleNode() {
        Node head = new Node(1);
        Node reversed = solution.reverseList(head);
        assertEquals(1, reversed.val, "Value should remain the same");
        assertNull(reversed.next, "Next should be null");
    }

    @Test
    @DisplayName("Test two nodes")
    void testTwoNodes() {
        Node head = new Node(1);
        head.next = new Node(2);

        Node reversed = solution.reverseList(head);
        assertEquals(2, reversed.val, "First node should be 2");
        assertEquals(1, reversed.next.val, "Second node should be 1");
        assertNull(reversed.next.next, "Last node should point to null");
    }

    @Test
    @DisplayName("Test multiple nodes")
    void testMultipleNodes() {
        // Create list: 1 -> 2 -> 3 -> 4 -> 5
        Node head = createLinkedList(new int[]{1, 2, 3, 4, 5});

        // Reverse list
        Node reversed = solution.reverseList(head);

        // Check reversed list: 5 -> 4 -> 3 -> 2 -> 1
        int[] expected = {5, 4, 3, 2, 1};
        assertLinkedListEquals(expected, reversed);
    }

    @Test
    @DisplayName("Test list with duplicate values")
    void testDuplicateValues() {
        // Create list: 1 -> 1 -> 2 -> 2 -> 3
        Node head = createLinkedList(new int[]{1, 1, 2, 2, 3});

        // Reverse list
        Node reversed = solution.reverseList(head);

        // Check reversed list: 3 -> 2 -> 2 -> 1 -> 1
        int[] expected = {3, 2, 2, 1, 1};
        assertLinkedListEquals(expected, reversed);
    }

    @Test
    @DisplayName("Test list maintains values")
    void testValuePreservation() {
        // Create list with various values
        Node head = createLinkedList(new int[]{42, -17, 0, 89, -5});

        // Reverse list
        Node reversed = solution.reverseList(head);

        // Check reversed list
        int[] expected = {-5, 89, 0, -17, 42};
        assertLinkedListEquals(expected, reversed);
    }

    // Helper method to create a linked list from array
    private Node createLinkedList(int[] values) {
        if (values == null || values.length == 0) return null;

        Node head = new Node(values[0]);
        Node current = head;

        for (int i = 1; i < values.length; i++) {
            current.next = new Node(values[i]);
            current = current.next;
        }

        return head;
    }

    // Helper method to assert linked list equals expected array
    private void assertLinkedListEquals(int[] expected, Node actual) {
        Node current = actual;
        for (int value : expected) {
            assertNotNull(current, "List is shorter than expected");
            assertEquals(value, current.val,
                    "Values don't match at position");
            current = current.next;
        }
        assertNull(current, "List is longer than expected");
    }

    @Test
    @DisplayName("Test original list is modified")
    void testOriginalListModified() {
        // Create original list: 1 -> 2 -> 3
        Node head = createLinkedList(new int[]{1, 2, 3});
        Node originalFirst = head;
        Node originalSecond = head.next;
        Node originalThird = head.next.next;

        // Reverse list
        Node reversed = solution.reverseList(head);

        // Verify the original nodes are reused and relinked
        assertSame(originalThird, reversed,
                "First node should be original third node");
        assertSame(originalSecond, reversed.next,
                "Second node should be original second node");
        assertSame(originalFirst, reversed.next.next,
                "Third node should be original first node");
        assertNull(reversed.next.next.next,
                "Last node should point to null");
    }
}
