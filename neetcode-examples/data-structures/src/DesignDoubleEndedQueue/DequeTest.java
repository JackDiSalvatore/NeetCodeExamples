package DesignDoubleEndedQueue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class DequeTest {
    private Deque deque;

    @BeforeEach
    void setUp() {
        deque = new Deque();
    }

    @Test
    @DisplayName("New deque should be empty")
    void testNewDequeIsEmpty() {
        assertTrue(deque.isEmpty(), "New deque should be empty");
    }

    @Test
    @DisplayName("Test pop and popleft from empty deque")
    void testEmptyDequeOperations() {
        assertEquals(-1, deque.pop(), "Pop from empty deque should return -1");
        assertEquals(-1, deque.popleft(), "Popleft from empty deque should return -1");
    }

    @Test
    @DisplayName("Test basic append and pop")
    void testBasicAppendPop() {
        deque.append(1);
        assertFalse(deque.isEmpty(), "Deque should not be empty after append");
        assertEquals(1, deque.pop(), "Should pop the appended value");
        assertTrue(deque.isEmpty(), "Deque should be empty after pop");
    }

    @Test
    @DisplayName("Test basic appendleft and popleft")
    void testBasicAppendLeftPopLeft() {
        deque.appendleft(1);
        assertFalse(deque.isEmpty(), "Deque should not be empty after appendleft");
        assertEquals(1, deque.popleft(), "Should popleft the appended value");
        assertTrue(deque.isEmpty(), "Deque should be empty after popleft");
    }

    @Test
    @DisplayName("Test multiple append operations")
    void testMultipleAppends() {
        deque.append(1);
        deque.append(2);
        deque.append(3);

        assertFalse(deque.isEmpty(), "Deque should not be empty");
        assertEquals(3, deque.pop(), "Should pop last value first");
        assertEquals(2, deque.pop(), "Should pop second-to-last value");
        assertEquals(1, deque.pop(), "Should pop first value last");
        assertTrue(deque.isEmpty(), "Deque should be empty after all pops");
        assertEquals(-1, deque.pop(), "Pop from empty deque should return -1");
    }

    @Test
    @DisplayName("Test multiple appendleft operations")
    void testMultipleAppendLefts() {
        deque.appendleft(1);
        deque.appendleft(2);
        deque.appendleft(3);

        assertFalse(deque.isEmpty(), "Deque should not be empty");
        assertEquals(3, deque.popleft(), "Should popleft last inserted value first");
        assertEquals(2, deque.popleft(), "Should popleft second-to-last inserted value");
        assertEquals(1, deque.popleft(), "Should popleft first inserted value last");
        assertTrue(deque.isEmpty(), "Deque should be empty after all poplefts");
        assertEquals(-1, deque.popleft(), "Popleft from empty deque should return -1");
    }

    @Test
    @DisplayName("Test mixed operations")
    void testMixedOperations() {
        deque.append(1);      // [1]
        deque.appendleft(2);  // [2,1]
        deque.append(3);      // [2,1,3]

        assertFalse(deque.isEmpty(), "Deque should not be empty");
        assertEquals(3, deque.pop(), "Should pop rightmost value");
        assertEquals(2, deque.popleft(), "Should popleft leftmost value");
        assertEquals(1, deque.pop(), "Should pop remaining value");
        assertTrue(deque.isEmpty(), "Deque should be empty after all operations");
    }

    @Test
    @DisplayName("Test isEmpty updates correctly")
    void testIsEmptyUpdates() {
        assertTrue(deque.isEmpty(), "New deque should be empty");

        deque.append(1);
        assertFalse(deque.isEmpty(), "Deque should not be empty after append");

        deque.pop();
        assertTrue(deque.isEmpty(), "Deque should be empty after popping only element");

        deque.appendleft(1);
        assertFalse(deque.isEmpty(), "Deque should not be empty after appendleft");

        deque.popleft();
        assertTrue(deque.isEmpty(), "Deque should be empty after popping left only element");
    }

    @Test
    @DisplayName("Test mixed append and pop from both ends")
    void testMixedEndsOperations() {
        deque.append(1);      // [1]
        deque.appendleft(2);  // [2,1]
        assertEquals(1, deque.pop(), "Should pop rightmost value");  // [2]
        deque.append(3);      // [2,3]
        assertEquals(2, deque.popleft(), "Should popleft leftmost value");  // [3]
        assertEquals(3, deque.pop(), "Should pop last remaining value");
        assertEquals(-1, deque.pop(), "Pop from empty deque should return -1");
        assertEquals(-1, deque.popleft(), "Popleft from empty deque should return -1");
    }

    @Test
    @DisplayName("Test alternating append and pop")
    void testAlternatingOperations() {
        for (int i = 1; i <= 5; i++) {
            assertTrue(deque.isEmpty(), "Deque should be empty at start of iteration");
            deque.append(i);
            assertFalse(deque.isEmpty(), "Deque should not be empty after append");
            assertEquals(i, deque.pop(), "Should pop the value just appended");
            assertTrue(deque.isEmpty(), "Deque should be empty after pop");
            assertEquals(-1, deque.pop(), "Pop from empty deque should return -1");
        }
    }
}