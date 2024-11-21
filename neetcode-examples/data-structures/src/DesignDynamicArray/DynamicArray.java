package DesignDynamicArray;/*  Dynamic Array
 *  capacity: 4
 *  size: 1 (will always be 1 greater than the index)
 *
 *  ex: [23, 0, 0, 0]
 */

public class DynamicArray {
    private int[] array;    // Actually array
    private int size;       // Size of elements in array
    private int capacity;   // Full size that array can currently hold

    // O(n) where n is the capacity
    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.size = 0;  // nothing in array
        this.array = new int[this.capacity];
    }

    // O(1)
    // Return element at index `i`.  Assume index is valid
    public int get(int i) {
        return array[i];
    }

    // O(1)
    // Set element at index `i`. Assume index is valid
    public void set(int i, int n) {
        array[i] = n;
        return;
    }

    // O(n) when resizing, O(1) every other time
    // Push element `n` to end of the array
    public void pushback(int n) {
        if (size == capacity) {
            // no capacity available
            resize();
            array[size] = n;
        } else {
            // nothing in array or capacity available
            array[size] = n;
        }

        size++;
        return;
    }

    // O(1)
    // Pop and return the element at the end of the array
    // Assume array is non-empty
    public int popback() {
        if (size > 0) {
            int value = array[size - 1];
            // array[size] = 0;    // soft-delete
            size--;
        }

        return array[size];
    }

    // O(n)
    // Safely double the capacity of the array
    private void resize() {
        try {
            capacity = Math.multiplyExact(capacity, 2);
            // copy into a new array
            int[] newArray = new int[capacity];
            for (int i = 0; i < size; i++) {
                newArray[i] = array[i];
            }
            array = newArray;
            return;
        } catch (ArithmeticException e) {
            System.out.println("Overflow occurred!");
        }
    }

    // O(1)
    // Returns the number of elements in the array
    public int getSize() {
        return size;
    }

    // O(1)
    // Returns the entire capacity of the array
    public int getCapacity() {
        return capacity;
    }
}
