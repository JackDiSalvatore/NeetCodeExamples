#include <stdio.h>
#include <stdlib.h>

/*
 *  Nodes
 *  0x00: {prev: NULL, val: 5, min: 5},
 *  0x04: {prev: 0x00, val: 3, min: 3},
 *  0x08: {prev: 0x04, val: 7, min: 3}
 */

typedef struct node {
  struct node *prev;
  int val;
  int min;
} Node;

typedef struct {
  Node *top;
} MinStack;

MinStack *minStackCreate() {
  MinStack *obj = (MinStack *)malloc(sizeof(MinStack));
  obj->top = NULL;
  return obj;
}

void minStackPush(MinStack *obj, int val) {
  Node *n = (Node *)malloc(sizeof(Node));
  n->val = val;

  // is this the first node to be pushed
  if (obj->top == NULL) {
    n->min = val;
  } else {
    // compare top node min against val
    n->min = val < obj->top->min ? val : obj->top->min;
  }

  n->prev = obj->top;
  obj->top = n;
}

void minStackPop(MinStack *obj) {
  if (obj->top == NULL) {
    printf("stack empty");
    return;
  }

  Node *temp = obj->top;
  obj->top = obj->top->prev;

  // free memory and null pointer
  free(temp);
  temp = NULL;
}

int minStackTop(MinStack *obj) {
  if (obj->top == NULL)
    return -1;
  return obj->top->val;
}

int minStackGetMin(MinStack *obj) {
  if (obj->top == NULL)
    return -1;

  return obj->top->min;
}

void minStackFree(MinStack *obj) {
  free(obj);
  obj = NULL;
}

/**
 * Your MinStack struct will be instantiated and called as such:
 * MinStack* obj = minStackCreate();
 * minStackPush(obj, val);

 * minStackPop(obj);

 * int param_3 = minStackTop(obj);

 * int param_4 = minStackGetMin(obj);

 * minStackFree(obj);
*/

int main() {
  MinStack *stack = minStackCreate();

  minStackPush(stack, 5);

  int param = minStackTop(stack);
  printf("Top value: %d\r\n", param);

  minStackPush(stack, 7);
  printf("Min value: %d\r\n", minStackGetMin(stack));

  minStackPush(stack, 3);
  printf("Min value: %d\r\n", minStackGetMin(stack));

  minStackFree(stack);

  return 0;
}
