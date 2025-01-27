package DesignSinglyLinkedList;

import java.util.ArrayList;

class Node {
    int value;
    Node next;

    public Node(int value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private Node head;
    private Node tail;

    public LinkedList() {
        this.head = null;
        this.tail = null;
    }

    // return -1 if index is out of bounds
    public int get(int index) {
        Node cur = head;   // skip the 'dummy' node
        int i = 0;

        while (cur != null) {
            if (i == index) {   // found index!
                return cur.value;
            }
            i++;
            cur = cur.next; // move to next node
        }
        return -1; // out of bounds!
    }

    public void insertHead(int val) {
        Node node = new Node(val);

        node.next = head;  // attach new node to head
        head = node;   // head is new node;

        // if list is empty
        if (node.next == null) {
            tail = node;
        }
    }

    public void insertTail(int val) {
        Node node = new Node(val);

        // if list is empty
        if (head == null) {
            head = node;
            tail = node;

            return;
        }

        tail.next = node; // attach new node to tail
        tail = node; // set tail to new node
    }

    /**
     *
     * @param index the index to remove
     * @return true if successfull else false
     */
    public boolean remove(int index) {
        // Invalid state
        if (head == null || index < 0) return false;

        // if removing the `0`th element (head)
        if (index == 0) {
            head = head.next; // move head forward

            if (head == null) tail = head;

            return true;
        }

        Node prev = head; // start from the `head` node as previous
        int i = 0;

        // Find index to remove, which will be right before the `target` node
        while (i < index - 1 && prev != null) { // make sure we are not at the end of the list
            i++;
            prev = prev.next; // move `prev` forward
        }

        // In bounds
        if (prev != null && prev.next != null) {

            // check if we are about to remove the tail
            if (prev.next == tail) {
                tail = prev;
            }

            prev.next = prev.next.next; // attach prev node to next next node
            return true;
        }

        // out of bounds
        return false;

    }

    public ArrayList<Integer> getValues() {
        ArrayList<Integer> values = new ArrayList<Integer>();
        Node cur = head; // start at head

        while (cur != null) {
            values.add(cur.value);
            cur = cur.next; // move forward
        }

        return values;
    }
}
