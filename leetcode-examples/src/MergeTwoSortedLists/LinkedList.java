package MergeTwoSortedLists;

public class LinkedList {
    ListNode head;

    public LinkedList() {
        head = null;
    }

    public void push(int val) {
        ListNode node = new ListNode(val);

        if (head == null) {
            node.next = null;
            head = node;
        } else {
            node.next = head;
            head = node;
        }
    }
}
