package DesignSinglyLinkedList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;

public class LinkedListTest {
    private LinkedList list;

    @BeforeEach
    void setUp() {
        list = new LinkedList();
    }

    @Test
    @DisplayName("Test inserting at head")
    void testInsertHead() {
        list.insertHead(1);
        list.insertHead(2);
        list.insertHead(3);

        ArrayList<Integer> values = list.getValues();
        assertEquals(3, values.size(), "List should have 3 elements");
        assertEquals(3, values.get(0), "First element should be 3");
        assertEquals(2, values.get(1), "Second element should be 2");
        assertEquals(1, values.get(2), "Third element should be 1");
    }

    @Test
    @DisplayName("Test inserting at tail")
    void testInsertTail() {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);

        ArrayList<Integer> values = list.getValues();
        assertEquals(3, values.size(), "List should have 3 elements");
        assertEquals(1, values.get(0), "0th element should be -1");
        assertEquals(2, values.get(1), "First element should be 1");
        assertEquals(3, values.get(2), "Second element should be 2");
    }

    @Test
    @DisplayName("Test getting element at index")
    void testGet() {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);

        assertEquals(1, list.get(0), "First element should be 1");
        assertEquals(2, list.get(1), "Second element should be 2");
        assertEquals(3, list.get(2), "Third element should be 3");
    }

    @Test
    @DisplayName("Test removing elements")
    void testRemove() {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);

        assertTrue(list.remove(1), "Remove should return true for valid index");
        ArrayList<Integer> values = list.getValues();
        assertEquals(2, values.size(), "List should have 2 elements after removal");
        assertEquals(1, values.get(0), "First element should be 1");
        assertEquals(3, values.get(1), "Second element should be 3");
    }

    @Test
    @DisplayName("Test removing head")
    void testRemoveHead() {
        list.insertTail(1);
        list.insertTail(2);

        assertTrue(list.remove(0), "Remove should return true for valid index");
        ArrayList<Integer> values = list.getValues();
        assertEquals(1, values.size(), "List should have 1 element after removal");
        assertEquals(2, values.get(0), "First element should be 2");
    }

    @Test
    @DisplayName("Test removing tail")
    void testRemoveTail() {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);

        assertTrue(list.remove(2), "Remove should return true for valid index");
        ArrayList<Integer> values = list.getValues();
        assertEquals(2, values.size(), "List should have 2 elements after removal");
        assertEquals(1, values.get(0), "First element should be 1");
        assertEquals(2, values.get(1), "Second element should be 2");
    }

    @Test
    @DisplayName("Test getting values from empty list")
    void testGetValuesEmptyList() {
        ArrayList<Integer> values = list.getValues();
        assertTrue(values.isEmpty(), "Empty list should return empty ArrayList");
    }

    @Test
    @DisplayName("Test removing from empty list")
    void testRemoveFromEmptyList() {
        assertFalse(list.remove(0), "Remove should return false for empty list");
    }

    @Test
    @DisplayName("Test removing with invalid index")
    void testRemoveInvalidIndex() {
        list.insertTail(1);
        list.insertTail(2);

        assertFalse(list.remove(3), "Remove should return false for index >= size");
    }

    @Test
    @DisplayName("Test get with invalid index")
    void testGetInvalidIndex() {
        list.insertTail(1);
        list.insertTail(2);

        assertEquals(-1, list.get(-1),
                "Get should throw exception for negative index");
        assertEquals(-1, list.get(2),
                "Get should throw exception for index >= size");
    }

    @Test
    @DisplayName("Test mixed operations")
    void testMixedOperations() {
        list.insertHead(1);  // [1]
        list.insertTail(2);  // [1,2]
        list.insertHead(3);  // [3,1,2]
        list.remove(1);      // [3,2]
        list.insertTail(4);  // [3,2,4]

        ArrayList<Integer> values = list.getValues();
        System.out.println("Values " + values);
        assertEquals(3, values.size(), "List should have 3 elements");
        assertEquals(3, values.get(0), "First element should be 3");
        assertEquals(2, values.get(1), "Second element should be 2");
        assertEquals(4, values.get(2), "Third element should be 4");
    }
}