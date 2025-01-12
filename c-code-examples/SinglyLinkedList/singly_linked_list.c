#include "singly_linked_list.h"
#include <stdio.h>
#include <stdlib.h>

SinglyLinkedList *create() {
  SinglyLinkedList *list = (SinglyLinkedList *)malloc(sizeof(SinglyLinkedList));
  list->head = NULL;
  return list;
}

void push(SinglyLinkedList *list, int val) {
  Node *n = (Node *)malloc(sizeof(Node));
  n->val = val;

  n->next = list->head;
  list->head = n;
}

void pop(SinglyLinkedList *list) {
  if (list->head == NULL) {
    printf("stack empty");
    return;
  }

  Node *temp = list->head;
  list->head = list->head->next;

  // free memory and null pointer
  free(temp);
  temp = NULL;
}

void display(SinglyLinkedList *list) {
  Node *temp = list->head;

  while (temp != NULL) {
    printf("%d ", temp->val);
    temp = temp->next;
  }
  printf("\r\n");
}

void destroy(SinglyLinkedList *list) {
  Node *temp;

  while (list->head != NULL) {
    temp = list->head;
    list->head = list->head->next;
    free(temp);
  }
}
