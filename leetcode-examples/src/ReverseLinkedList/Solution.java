package ReverseLinkedList;

/**
 * Definition for singly-linked list.
 * public class Node {
 *     int val;
 *     Node next;
 *     Node() {}
 *     Node(int val) { this.val = val; }
 *     Node(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class Solution {
    public Node reverseList(Node head) {
        if (head == null) return null;

        Node prev = null;

        while (head != null) {
            Node temp = head;
            head = head.next;  // move head forward
            temp.next = prev;  // reverse pointer
            prev = temp;       // move prev forward
        }

        return prev;
    }
}
