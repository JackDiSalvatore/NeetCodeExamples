package DesignDynamicArray;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class DynamicArrayTest {
    private DynamicArray dynamicArray;
    private static final int INITIAL_CAPACITY = 4;

    @BeforeEach
    public void setUp() {
        dynamicArray = new DynamicArray(INITIAL_CAPACITY);
    }

    @Test
    @DisplayName("Test initial array state")
    public void testInitialization() {
        assertEquals(0, dynamicArray.getSize(), "Initial size should be 0");
        assertEquals(INITIAL_CAPACITY, dynamicArray.getCapacity(),
                "Initial capacity should be " + INITIAL_CAPACITY);
    }

    @Test
    @DisplayName("Test pushback within initial capacity")
    public void testPushbackWithinCapacity() {
        dynamicArray.pushback(1);
        dynamicArray.pushback(2);
        dynamicArray.pushback(3);

        assertEquals(3, dynamicArray.getSize(),
                "Size should be 3 after pushing 3 elements");
        assertEquals(1, dynamicArray.get(0),
                "First element should be 1");
        assertEquals(2, dynamicArray.get(1),
                "Second element should be 2");
        assertEquals(3, dynamicArray.get(2),
                "Third element should be 3");
    }

    @Test
    @DisplayName("Test pushback triggering resize")
    public void testPushbackWithResize() {
        // Fill the array to capacity
        for (int i = 0; i < INITIAL_CAPACITY; i++) {
            dynamicArray.pushback(i);
        }

        // Push one more element to trigger resize
        dynamicArray.pushback(INITIAL_CAPACITY);

        assertEquals(INITIAL_CAPACITY * 2, dynamicArray.getCapacity(),
                "Capacity should double after resize");
        assertEquals(INITIAL_CAPACITY + 1, dynamicArray.getSize(),
                "Size should be INITIAL_CAPACITY + 1");
        assertEquals(INITIAL_CAPACITY, dynamicArray.get(INITIAL_CAPACITY),
                "Last element should be " + INITIAL_CAPACITY);
    }

    @Test
    @DisplayName("Test popback functionality")
    public void testPopback() {
        dynamicArray.pushback(1);
        dynamicArray.pushback(2);
        dynamicArray.pushback(3);

        int popped = dynamicArray.popback();
        assertEquals(3, popped, "Popped value should be 3");
        assertEquals(2, dynamicArray.getSize(),
                "Size should decrease after pop");
    }

    @Test
    @DisplayName("Test set and get operations")
    public void testSetAndGet() {
        dynamicArray.pushback(1);
        dynamicArray.set(0, 100);
        assertEquals(100, dynamicArray.get(0),
                "Element should be updated after set");
    }

    @Test
    @DisplayName("Test multiple resize operations")
    public void testMultipleResizes() {
        // Test multiple resize operations
        for (int i = 0; i < 10; i++) {
            dynamicArray.pushback(i);
        }

        assertEquals(16, dynamicArray.getCapacity(),
                "Capacity should be 16 after multiple resizes");
        assertEquals(10, dynamicArray.getSize(),
                "Size should be 10");

        // Verify all elements are preserved
        for (int i = 0; i < 10; i++) {
            assertEquals(i, dynamicArray.get(i),
                    "Element at index " + i + " should be " + i);
        }
    }

    @Test
    @DisplayName("Test sequential push and pop operations")
    public void testSequentialPushAndPop() {
        // Push elements
        dynamicArray.pushback(1);
        dynamicArray.pushback(2);

        // Pop elements
        int secondPopped = dynamicArray.popback();
        int firstPopped = dynamicArray.popback();

        assertEquals(2, secondPopped,
                "Second popped value should be 2");
        assertEquals(1, firstPopped,
                "First popped value should be 1");
        assertEquals(0, dynamicArray.getSize(),
                "Size should be 0 after popping all elements");
    }

    @Test
    @DisplayName("Test resize preserves elements")
    public void testResizePreservesElements() {
        // Fill initial array
        for (int i = 0; i < INITIAL_CAPACITY; i++) {
            dynamicArray.pushback(i);
        }

        // Force resize
        dynamicArray.pushback(100);

        // Verify all elements are preserved
        for (int i = 0; i < INITIAL_CAPACITY; i++) {
            assertEquals(i, dynamicArray.get(i),
                    "Element at index " + i + " should be " + i);
        }
        assertEquals(100, dynamicArray.get(INITIAL_CAPACITY),
                "New element should be 100");
    }
}