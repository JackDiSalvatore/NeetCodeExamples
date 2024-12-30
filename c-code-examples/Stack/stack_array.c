#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100 // Static Memory Allocation

typedef struct
{
  int items[MAX_SIZE];
  int top; // represents the `index` of the "top" element in the stack.
           // "-1" means the stack is empty
} Stack;

void initStack(Stack *s)
{
  s->top = -1;
}

int isEmpty(Stack *s)
{
  return s->top == -1;
};

void push(Stack *s, int val)
{
  // Check for overflow condition
  if (s->top == MAX_SIZE - 1)
  {
    printf("Stack overflow!\r\n");
    return;
  }
  printf("push(%d)\r\n", val);
  s->top = s->top + 1;
  s->items[s->top] = val;
};

void pop(Stack *s)
{
  // Check for underflow condition
  if (s->top == -1)
  {
    printf("Stack underflow!\r\n");
    return;
  }
  printf("pop()\r\n");
  s->top = s->top - 1;
  // do not need to "delete" element from array as it is a garbage value
};

int peek(Stack *s)
{
  // Check for underflow condition
  if (s->top == -1)
  {
    printf("Stack is empty\r\n");
    return -1; // return dummy value
  }
  return s->items[s->top];
};

void printStack(Stack *s)
{
  for (int i = s->top; i >= 0; i--)
  {
    printf("%d ", s->items[i]);
  }
  printf("\r\n");
}

int main()
{
  Stack stack;
  initStack(&stack);

  // New empty stack
  printf("Stack Addr   : %p\r\n", &stack);
  printf("Stack top    : %d\r\n", stack.top);
  printf("Stack isEmpty:%d\r\n", isEmpty(&stack));

  push(&stack, 5);
  push(&stack, 7);
  push(&stack, 3);

  printf("peek: %d\r\n", peek(&stack));

  pop(&stack);

  push(&stack, 1);

  printStack(&stack);
}
