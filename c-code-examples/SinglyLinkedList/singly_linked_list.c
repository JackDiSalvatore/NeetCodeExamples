#include "singly_linked_list.h"
#include <stdio.h>
#include <stdlib.h>

/*
 *  My Singly Linked List
 *
 *  index: 0    1    2    3    4
 *   node: 5 -> 4 -> 3 -> 1 -> 0
 *         |                   |
 *        head               tail
 */

SinglyLinkedList *myListCreate()
{
  SinglyLinkedList *list = (SinglyLinkedList *)malloc(sizeof(SinglyLinkedList));
  if (list == NULL)
  {
    return NULL; // Check malloc success
  }
  list->head = NULL;
  list->tail = NULL;
  list->length = 0;
  return list;
}

void myListGet(SinglyLinkedList *list, int index);

void myListInsert(SinglyLinkedList *list, int index, int val)
{
  Node *node = (Node *)malloc(sizeof(Node));
  node->val = val;
  node->next = NULL;

  // Out of bounds check
  if (index < 0 || index > list->length)
    return;

  // If index is head
  if (index == 0)
  {
    node->next = list->head; // Attach node to head
    list->head = node;       // Make node head

    // If list is empty
    if (list->tail == NULL)
    {
      list->tail = node; // Make node tail
    }

    list->length++;
    return;
  }

  // Go to position before index to add
  Node *curr = list->head;

  for (int i = 0; i < index - 1; i++)
    curr = curr->next;

  node->next = curr->next; // Attach node to `curr->next`
  curr->next = node;       // Attach curr to node

  // Update tail if inserting at end
  if (index == list->length)
  {
    list->tail = node;
  }

  list->length++;
}

void myListRemove(SinglyLinkedList *list, int index);

void myListInsertHead(SinglyLinkedList *list, int val)
{
  Node *node = (Node *)malloc(sizeof(Node));
  node->val = val;
  node->next = NULL;

  // If list is empty
  if (list->head == NULL)
  {
    list->tail = node;
    list->head = node;
  }
  else
  {
    node->next = list->head; // Attach node to head
    list->head = node;       // Make node head
  }

  list->length++;
}

void myListInsertTail(SinglyLinkedList *list, int val)
{
  Node *node = (Node *)malloc(sizeof(Node));
  node->val = val;
  node->next = NULL;

  // If list is empty
  if (list->head == NULL)
  {
    list->head = node;
    list->tail = node;
  }
  else
  {
    list->tail->next = node; // Attach node to tail
    list->tail = node;       // Make node tail
  }

  list->length++;
}

void myListGetValues(SinglyLinkedList *list)
{
  Node *tmp = list->head;

  while (tmp != NULL)
  {
    printf("%d -> ", tmp->val);
    tmp = tmp->next;
  }
  printf("NULL \r\n");
}
