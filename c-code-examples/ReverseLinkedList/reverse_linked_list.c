#include "../SinglyLinkedList/singly_linked_list.h"
#include <stdio.h>
#include <stdlib.h>

Node *reverseList(Node *head) {
  if (head == NULL)
    return NULL;

  Node *prev = NULL;
  // Node *curr = head;

  while (head != NULL) {
    Node *temp = head;
    head = head->next; // curr head forward
    temp->next = prev; // reverse pointer
    prev = temp;       // move prev forward
  }

  return prev;
}

void displayList(Node *head) {
  Node *temp = head;
  while (temp != NULL) {
    printf("%d ", temp->val);
    temp = temp->next;
  }
  printf("\r\n");
}

int main() {
  SinglyLinkedList *list = create();
  push(list, 1);
  push(list, 2);
  push(list, 3);

  display(list); // Should print: 3 2 1

  Node *newHead = reverseList(list->head);

  // traverse new tree
  displayList(newHead);

  // clean up
  destroy(list);
  free(list);

  return 0;
}
