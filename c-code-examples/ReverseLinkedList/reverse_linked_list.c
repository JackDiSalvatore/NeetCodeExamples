#include "../SinglyLinkedList/singly_linked_list.h"
#include <stdio.h>
#include <stdlib.h>

// TODO
// struct Node *reverseList(struct Node *head) {}

int main() {
  SinglyLinkedList *list = create();
  push(list, 1);
  push(list, 2);
  push(list, 3);

  display(list); // Should print: 3 2 1

  // TODO
  // Node *newHead = reverseList(list->head);

  display(list); // Should print: 1 2 3

  // clean up
  destroy(list);
  free(list);

  return 0;
}
