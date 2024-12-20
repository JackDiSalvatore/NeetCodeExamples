#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int *items;
  int capacity;
  int top;
} Stack;

Stack *createStack(int size) {
  // Initialize fixed memory for Stack object
  Stack *s = (Stack *)malloc(sizeof(Stack));

  if (s == NULL) {
    printf("Memory allocation failed for Stack\r\n");
    return NULL;
  }

  // Initial fixed memory for Stack items;
  s->items = (int *)malloc(size * sizeof(int));

  if (s->items == NULL) {
    printf("Memory allocation failed for Stack items\r\n");
    free(s);
    return NULL;
  }

  s->capacity = size;
  s->top = -1; // index of the "top" of stack, set to -1 as first item will be
               // in index 0

  return s;
}

int isEmpty();

void push();

void pop();

int peek();

int main() {
  Stack *myStack = createStack(10);

  // New empty stack
  printf("%p\r\n", &myStack);
  printf("%p\r\n", myStack->items);
  printf("%p\r\n", &myStack->capacity);
  printf("%p\r\n", &myStack->top);

  printf("%d\r\n", myStack->items[-1]);
  printf("%d\r\n", myStack->capacity);
  printf("%d\r\n", myStack->top);

  int y = 10;
  int *x = &y;
  printf("%d\r\n", *x);
  printf("%p\r\n", &x);
}
