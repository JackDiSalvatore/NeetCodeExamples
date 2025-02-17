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

int myListGet(SinglyLinkedList *list, int index)
{
  // Out of bounds check
  if (index < 0 || index > list->length)
    return 0;

  Node *curr = list->head;

  // go to element at index
  for (int i = 0; i < index; i++)
    curr = curr->next;

  return curr->val;
}

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

void myListRemove(SinglyLinkedList *list, int index)
{
  Node *curr = list->head;
  Node *prev = NULL;

  // Out of bounds
  if (index < 0 || index > list->length)
    return;

  // Remove head (index = 0)
  if (index == 0)
  {
    list->head = curr->next;
  }
  else
  {
    // Find prev and node to remove
    for (int i = 0; i < index; i++)
    {
      prev = curr;
      curr = curr->next;
    }

    // Attach `prev` node to `curr->next` node
    prev->next = curr->next;

    // Update if deleting the tail
    if (index == list->length - 1)
    {
      list->tail = curr;
    }
  }

  // Delete from memory
  curr->next = NULL;
  free(curr);
  curr = NULL;

  list->length--;
}

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
