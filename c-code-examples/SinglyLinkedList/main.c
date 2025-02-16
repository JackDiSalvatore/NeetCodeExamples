#include <stdio.h>
#include <stdlib.h>
#include "singly_linked_list.h"

int main()
{
    printf("Hello World\r\n");

    SinglyLinkedList *list = myListCreate(); // head -> tail

    // Insert Head
    myListInsertHead(list, 2); // 2
    myListInsertHead(list, 3); // 3 -> 2
    myListInsertHead(list, 4); // 4 -> 3 -> 2

    // Insert Tail
    myListInsertTail(list, 1); // 4 -> 3 -> 2 -> 1
    myListInsertTail(list, 0); // 4 -> 3 -> 2-> 1 -> 0

    // Insert Head
    myListInsertHead(list, 5); // 5 -> 4 -> 3 -> 2 -> 1 -> 0

    printf("Starting Singly Linked List: \r\n");
    myListGetValues(list);

    // Insert at index
    // index: 0    1    2    3    4    5
    //  node: 5 -> 4 -> 3 -> 2 -> 1 -> 0

    // Insert - Head
    printf("Insert at index 0 \r\n");
    myListInsert(list, 0, 5); // 5 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
    myListGetValues(list);

    // Insert - Tail
    printf("Insert at index 6 \r\n");
    myListInsert(list, 6, 0); // 5 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    // Insert - Middle
    printf("Insert at index 4 \r\n");
    myListInsert(list, 4, 2); // 5 -> 5 -> 4 -> 3 -> 2 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    printf("List length: %d \r\n", list->length);

    return 0;
}