#ifndef LINKEDLIST_H // Include guard
#define LINKEDLIST_H

typedef struct node
{
  struct node *next;
  int val;
} Node;

typedef struct
{
  Node *head;
  Node *tail;
  int length;
} SinglyLinkedList;

// Function declarations

SinglyLinkedList *myListCreate();

void myListGet(SinglyLinkedList *list, int index);
void myListGetValues(SinglyLinkedList *list);

void myListInsert(SinglyLinkedList *list, int index, int val);
void myListRemove(SinglyLinkedList *list, int index);

void myListInsertHead(SinglyLinkedList *list, int val);
void myListInsertTail(SinglyLinkedList *list, int val);

#endif
