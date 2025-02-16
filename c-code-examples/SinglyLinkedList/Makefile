CC = clang
CFLAGS = -Wall -Wextra
TARGET = main

# Source files
SRC_FILES = main.c singly_linked_list.c

# Object files
OBJS = $(SRC_FILES:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(OBJS) -o $(TARGET)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(TARGET) $(OBJS)

.PHONY: all clean
