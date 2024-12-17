package MinStack;

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
class Node {
    Node next;
    Node prev;
    int val;
    int min;

    public Node(int value, int minimum) {
        this.next = null;
        this.prev = null;
        this.val = value;
        this.min = minimum;
    }
}

public class MinStack {
    Node head;

    public MinStack() {
        this.head = null;   // empty stack;
    }

    public void push(int val) {
        if (this.head == null) {
            this.head = new Node(val, val);
        } else {
            Node newNode = new Node(val, Math.min(val, this.head.min));
            newNode.prev = this.head;
            this.head.next = newNode;
            this.head = newNode;
        }
    }

    public void pop() {
        this.head = this.head.prev;
        this.head.next = null;
    }

    public int top() {
        return this.head.val;
    }

    public int getMin() {
        return this.head.min;
    }
}
