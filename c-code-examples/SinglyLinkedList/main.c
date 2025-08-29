#include <stdio.h>
#include <stdlib.h>
#include "singly_linked_list.h"

int main()
{
    printf("Singly Linked List\r\n");

    SinglyLinkedList *list = myListCreate(); // head -> tail

    // Insert head
    myListInsertHead(list, 2); // 2
    myListInsertHead(list, 3); // 3 -> 2
    myListInsertHead(list, 4); // 4 -> 3 -> 2

    // Insert tail
    myListInsertTail(list, 1); // 4 -> 3 -> 2 -> 1
    myListInsertTail(list, 0); // 4 -> 3 -> 2-> 1 -> 0

    // Insert head
    myListInsertHead(list, 5); // 5 -> 4 -> 3 -> 2 -> 1 -> 0

    printf("Starting Singly Linked List: \r\n");
    myListGetValues(list);

    // Insert at index
    // index: 0    1    2    3    4    5
    //  node: 5 -> 4 -> 3 -> 2 -> 1 -> 0

    // Insert at index 0 (head)
    printf("Insert at index 0 \r\n");
    myListInsert(list, 0, 5); // 5 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
    myListGetValues(list);

    // Insert at last index (tail)
    printf("Insert at index 6 \r\n");
    myListInsert(list, 6, 0); // 5 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    // Insert middle
    printf("Insert at index 4 \r\n");
    myListInsert(list, 4, 2); // 5 -> 5 -> 4 -> 3 -> 2 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    // Get
    printf("index[0] = %d\r\n", myListGet(list, 0)); // 5
    printf("index[5] = %d\r\n", myListGet(list, 5)); // 2
    printf("index[6] = %d\r\n", myListGet(list, 6)); // 1

    // Remove
    myListRemove(list, 1); // 5 -> 4 -> 3 -> 2 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    myListRemove(list, 3); // 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    // Remove from head
    myListRemove(list, 0); // 4 -> 3 -> 2 -> 1 -> 0 -> 0
    myListGetValues(list);

    // Remove from tail
    myListRemove(list, 5); // 4 -> 3 -> 2 -> 1 -> 0
    myListGetValues(list);

    printf("List length: %d \r\n", list->length);

    // Destroy list
    myListDestroy(list);
    printf("List: ");
    myListGetValues(list);
    printf("List length: %d \r\n", list->length);

    return 0;
}