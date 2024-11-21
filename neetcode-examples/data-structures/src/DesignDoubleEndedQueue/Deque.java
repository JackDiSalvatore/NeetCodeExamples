package DesignDoubleEndedQueue;

class Node {
    int value;
    DesignDoubleEndedQueue.Node next;
    DesignDoubleEndedQueue.Node prev;

    public Node(int value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    private Node dummyHead;
    private Node dummyTail;

    // initialize an empty queue
    public Deque() {
        this.dummyHead = new Node(0);
        this.dummyTail = new Node(0);
    }

    // return whether the queue is empty or not.
    public boolean isEmpty() {
        return (dummyHead.next == null || dummyTail.prev == null) ? true : false;
    }

    // insert value at the end of the queue.
    public void append(int value) {
        Node newNode = new Node(value);

        // if queue is empty
        if (dummyTail.prev == null || dummyHead.next == null) {
            // Attach newNode to dummyHead
            dummyHead.next = newNode;
            newNode.prev = dummyHead;
        } else {
            // Attach previous to newNode
            Node prev = dummyTail.prev;
            prev.next = newNode;
            newNode.prev = prev;
        }

        // Attach newNode to dummyTail
        newNode.next = dummyTail;
        dummyTail.prev = newNode;
    }

    // insert value at the beginning of the queue.
    public void appendleft(int value) {
        Node newNode = new Node(value);
        Node after = dummyHead.next;

        if (this.isEmpty()) {
            // Attach dummyTail
            newNode.next = dummyTail;
            dummyTail.prev = newNode;
        } else {
            // Attach newNode to "after" node
            newNode.next = after;
            // Attach "after" node to newNode
            after.prev = newNode;
        }

        // Move dummyHead to front of queue
        dummyHead.next = newNode;
        newNode.prev = dummyHead;
    }

    // remove and return the value at the end of the queue. If the queue is empty, return -1.
    public int pop() {
        // if queue is empty
        if (this.isEmpty())
            return -1;

        Node returnNode = dummyTail.prev;
        Node prev = returnNode.prev;

        // attach prev to dummy Tail
        prev.next = dummyTail;
        // attach dummyTail to prev
        dummyTail.prev = prev;

        if (prev == dummyHead) {
            // detach dummyHead
            dummyHead.next = null;
            // detach tail
            dummyTail.prev = null;
        }

        return returnNode.value;
    }

    // remove and return the value at the beginning of the queue. If the queue is empty, return -1.
    public int popleft() {
        // if queue is empty
        if (this.isEmpty())
            return -1;

        Node returnNode = dummyHead.next;
        Node after = returnNode.next;

        // Attach dummyHead to after
        dummyHead.next = after;
        after.prev = dummyHead;

        if (after == dummyTail) {
            // detach dummyHead
            dummyHead.next = null;
            // detach tail
            dummyTail.prev = null;
        }

        return returnNode.value;
    }
}