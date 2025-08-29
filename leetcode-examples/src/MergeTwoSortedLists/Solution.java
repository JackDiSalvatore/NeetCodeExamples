package MergeTwoSortedLists;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     Node next;
 *     Node() {}
 *     Node(int val) { this.val = val; }
 *     Node(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Initialize Variables
        ListNode sort = new ListNode();
        ListNode newHead = new ListNode();

        // Edge-case
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        // Find new head
        if (list1.val <= list2.val) {
            sort = list1;
            list1 = sort.next;
        } else if (list2.val <= list1.val) {
            sort = list2;
            list2 = sort.next;
        }

        newHead = sort;

        // Iterate through lists
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                sort.next = list1;  // re-arrange pointer
                sort = list1;
                list1 = sort.next;
            } else if (list2.val <= list1.val) {
                sort.next = list2;
                sort = list2;
                list2 = sort.next;
            }
        }

        // One of the two lists is NULL
        if (list1 == null) sort.next = list2;
        if (list2 == null) sort.next = list1;

        // return new head
        return newHead;
    }
}
