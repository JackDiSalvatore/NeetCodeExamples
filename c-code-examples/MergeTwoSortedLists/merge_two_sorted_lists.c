#include <stdio.h>
#include <stdlib.h>
#include "../SinglyLinkedList/singly_linked_list.h"

Node *mergeTwoLists(Node *list1, Node *list2)
{
    // Initialize Variables
    Node *newHead = NULL;
    Node *sort = NULL;

    // Return if other list is empty
    if (list1 == NULL)
        return list2;
    if (list2 == NULL)
        return list1;

    // Find where the new Head should start
    // and move the first list pointer
    if (list1->val <= list2->val)
    {
        sort = list1;
        list1 = sort->next;
    }
    else if (list2->val <= list1->val)
    {
        sort = list2;
        list2 = sort->next;
    }

    newHead = sort;

    // Iterate through list while re-arranging pointers
    while (list1 && list2)
    {
        if (list1->val <= list2->val)
        {
            sort->next = list1; // re-arrange pointer
            sort = list1;       // move sort to smaller val
            list1 = sort->next; // move list pointer forward
        }
        else if (list2->val <= list1->val)
        {
            sort->next = list2;
            sort = list2;
            list2 = sort->next;
        }
    }

    // End traversal
    if (list1 == NULL)
        sort->next = list2;
    if (list2 == NULL)
        sort->next = list1;

    return newHead;
}

void displayList(Node *head)
{
    Node *temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->val);
        temp = temp->next;
    }
    printf("\r\n");
}

int main()
{
    SinglyLinkedList *l1 = create();
    SinglyLinkedList *l2 = create();

    push(l1, 70);
    push(l1, 30);
    push(l1, 10);

    push(l2, 50);
    push(l2, 20);

    display(l1); // Should print: 10 30 70
    display(l2); // Should print: 50 20

    Node *head = mergeTwoLists(l1->head, l2->head);

    displayList(head); // Should print: 10 20 30 50 70

    return 0;
}