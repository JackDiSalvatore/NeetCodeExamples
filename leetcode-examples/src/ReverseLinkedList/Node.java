package ReverseLinkedList;

public class Node {
    Node next;
    int val;

    public Node() {
    }

    public Node(int val) {
        this.val = val;
        this.next = null;
    }

    public Node(int val, Node next) { this.val = val; this.next = next; }
}
