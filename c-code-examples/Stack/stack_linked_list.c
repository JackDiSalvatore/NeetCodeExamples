#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    struct node *prev;
    int value;
} Node;

typedef struct
{
    Node *top;
} Stack;

void initStack(Stack *s)
{
    s->top = NULL;
}

void destroyStack(Stack *s)
{
}

int isEmpty(Stack *s)
{
    return s->top == NULL;
}

void push(Stack *s, int val)
{
    Node *n = (Node *)malloc(sizeof(Node));

    n->value = val;
    n->prev = s->top;

    s->top = n;
}

void pop(Stack *s)
{
    if (s->top == NULL)
    {
        printf("stack empty!");
        return;
    }

    Node *temp = s->top;
    s->top = s->top->prev;
    free(temp);
    temp = NULL;
}

int peek(Stack *s)
{
    return s->top->value;
}

void displayStack(Stack *s)
{
    Node *temp = (Node *)malloc(sizeof(Node));
    temp = s->top;

    while (temp != NULL)
    {
        printf("%d ", temp->value);
        temp = temp->prev;
    }
    printf("\r\n");
}

int main()
{
    Stack stack;
    initStack(&stack);

    push(&stack, 1);
    push(&stack, 2);

    displayStack(&stack);

    pop(&stack);

    push(&stack, 3);

    printf("%d \r\n", peek(&stack));

    push(&stack, 4);
    push(&stack, 5);

    displayStack(&stack);

    return 0;
}
