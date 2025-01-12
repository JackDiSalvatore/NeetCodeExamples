#ifndef LINKEDLIST_H // Include guard
#define LINKEDLIST_H

typedef struct node {
  struct node *next;
  int val;
} Node;

typedef struct {
  Node *head;
} SinglyLinkedList;

// Function declarations
SinglyLinkedList *create();
void push(SinglyLinkedList *list, int val);
void pop(SinglyLinkedList *list);
void display(SinglyLinkedList *list);
void destroy(SinglyLinkedList *list);

#endif
