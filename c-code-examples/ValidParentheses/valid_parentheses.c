#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct node
{
    char value;
    struct node *prev;
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
    // TODO
}

bool isEmpty(Stack *s)
{
    return s->top == NULL;
}

void push(Stack *s, char val)
{
    Node *n = (Node *)malloc(sizeof(Node));
    n->value = val;
    n->prev = s->top;

    s->top = n;
}

void pop(Stack *s)
{
    if (isEmpty(s))
    {
        return;
    }
    // TODO: free memory
    s->top = s->top->prev;
}

char peek(Stack *s)
{
    if (isEmpty(s))
    {
        return '\0';
    }

    return s->top->value;
}

bool isValid(char *s)
{
    Stack stack;
    initStack(&stack);

    for (; *s != '\0'; s++)
    {
        if (!isEmpty(&stack) &&
            (peek(&stack) == '(' && *s == ')' ||
             peek(&stack) == '{' && *s == '}' ||
             peek(&stack) == '[' && *s == ']'))
        {
            // printf("pop \r\n");
            pop(&stack);
        }
        else
        {
            // printf("push \r\n");
            push(&stack, *s);
        }
    }

    // TODO: free stack memory (destroy)

    return isEmpty(&stack);
}

int main()
{
    char *s = "()";
    bool result = isValid(s);
    printf("%d\r\n", result);

    printf("isValid: %d\r\n", isValid("()"));
    printf("isValid: %d\r\n", isValid("()[]{}"));
    printf("isValid: %d\r\n", isValid("(]"));
}