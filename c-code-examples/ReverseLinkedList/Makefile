CC = clang
CFLAGS = -Wall -Wextra
TARGET = reverse_linked_list

# Source and include directories
LINKED_LIST_DIR = ../SinglyLinkedList
SRC_FILES = reverse_linked_list.c $(LINKED_LIST_DIR)/singly_linked_list.c

# Include path for header files
INCLUDES = -I$(LINKED_LIST_DIR)

# Object files
OBJS = $(SRC_FILES:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(OBJS) -o $(TARGET)

%.o: %.c
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

clean:
	rm -f $(TARGET) *.o $(LINKED_LIST_DIR)/*.o

.PHONY: all clean
