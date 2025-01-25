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
        // Init the list with a 'dumy' node
        this.head = new Node(-1);
        this.tail = this.head;
    }

    public int get(int index) {
        Node cur = head.next;   // skip the 'dummy' node
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

        node.next = head.next;  // skip over 'dummy' node
        head.next = node;

        // if list is empty
        if (node.next == null) {
            tail = node;
        }
    }

    public void insertTail(int val) {
        tail.next = new Node(val);
        tail = tail.next;
    }

    public boolean remove(int index) {
        Node prev = head;   // using 'dummy' node as previous
        int i = 0;

        // Find index to remove
        while (i < index && prev != null) { // make sure we are not at the end of the list
            i++;
            prev = prev.next; // move to DesignSinglyLinkedList.Node right before the 'target' node to delete
        }

        // In bounds
        if (prev != null && prev.next != null) {

            // check if we are about to remove the tail
            if (prev.next == tail) {
                tail = prev;
            }

            prev.next = prev.next.next;
            return true;
        }

        // out of bounds
        return false;

    }

    public ArrayList<Integer> getValues() {
        ArrayList<Integer> values = new ArrayList<Integer>();
        Node cur = head.next;   // We need to skip the 'dummy' node

        while (cur != null) {
            values.add(cur.value);
            cur = cur.next; // move forward
        }

        return values;
    }
}
