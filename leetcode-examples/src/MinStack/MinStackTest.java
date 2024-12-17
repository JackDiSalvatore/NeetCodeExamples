package MinStack;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class MinStackTest {

    @Test
    public void testPushAndTop() {
        MinStack minStack = new MinStack();
        minStack.push(5);
        assertEquals(5, minStack.top(), "Top should return the last pushed value");

        minStack.push(3);
        assertEquals(3, minStack.top(), "Top should return the last pushed value");

        minStack.push(7);
        assertEquals(7, minStack.top(), "Top should return the last pushed value");
    }

    @Test
    public void testPushAndGetMin() {
        MinStack minStack = new MinStack();
        minStack.push(5);
        assertEquals(5, minStack.getMin(), "Min should return the only element when stack has one value");

        minStack.push(3);
        assertEquals(3, minStack.getMin(), "Min should return the smallest value");

        minStack.push(7);
        assertEquals(3, minStack.getMin(), "Min should remain unchanged if the pushed value is greater than min");
    }

    @Test
    public void testPopAndTop() {
        MinStack minStack = new MinStack();
        minStack.push(5);
        minStack.push(3);
        minStack.push(7);

        assertEquals(7, minStack.top(), "Top should return the last pushed value before pop");
        minStack.pop();
        assertEquals(3, minStack.top(), "Top should return the previous value after pop");

        minStack.pop();
        assertEquals(5, minStack.top(), "Top should return the previous value after another pop");
    }

    @Test
    public void testPopAndGetMin() {
        MinStack minStack = new MinStack();
        minStack.push(5);
        minStack.push(3);
        minStack.push(7);

        assertEquals(3, minStack.getMin(), "Min should return the smallest value before pop");
        minStack.pop();
        assertEquals(3, minStack.getMin(), "Min should remain unchanged if popped value is not the smallest");

        minStack.pop();
        assertEquals(5, minStack.getMin(), "Min should update when the smallest value is popped");
    }

    @Test
    public void testEmptyStackBehavior() {
        MinStack minStack = new MinStack();

        Exception exception1 = assertThrows(NullPointerException.class, minStack::top, "Top should throw NullPointerException when stack is empty");
        assertNotNull(exception1);

        Exception exception2 = assertThrows(NullPointerException.class, minStack::getMin, "GetMin should throw NullPointerException when stack is empty");
        assertNotNull(exception2);
    }
}
