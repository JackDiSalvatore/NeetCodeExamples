import { SinglyLinkedList } from "../../../src/leetcode/707/singly-linked-list";

describe("SinglyLinkedList", () => {
  let list: SinglyLinkedList;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe("constructor", () => {
    test("should create an empty list", () => {
      expect(list).toBeInstanceOf(SinglyLinkedList);
    });
  });

  describe("get", () => {
    test("should return -1 for empty list", () => {
      expect(list.get(0)).toBe(-1);
      expect(list.get(5)).toBe(-1);
    });

    test("should return -1 for negative index", () => {
      list.addAtHead(1);
      expect(list.get(-1)).toBe(-1);
      expect(list.get(-5)).toBe(-1);
    });

    test("should return -1 for out of bounds index", () => {
      list.addAtHead(1);
      list.addAtHead(2);
      expect(list.get(2)).toBe(-1);
      expect(list.get(10)).toBe(-1);
    });

    test("should return correct value for valid index", () => {
      list.addAtHead(1);
      list.addAtHead(2);
      list.addAtHead(3);
      // List: 3 -> 2 -> 1
      expect(list.get(0)).toBe(3);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(1);
    });

    test("should handle single element list", () => {
      list.addAtHead(42);
      expect(list.get(0)).toBe(42);
    });
  });

  describe("addAtHead", () => {
    test("should add element to empty list", () => {
      list.addAtHead(5);
      expect(list.get(0)).toBe(5);
    });

    test("should add multiple elements at head", () => {
      list.addAtHead(1);
      list.addAtHead(2);
      list.addAtHead(3);
      // List: 3 -> 2 -> 1
      expect(list.get(0)).toBe(3);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(1);
    });

    test("should handle zero values", () => {
      list.addAtHead(0);
      expect(list.get(0)).toBe(0);
    });

    test("should handle negative values", () => {
      list.addAtHead(-5);
      expect(list.get(0)).toBe(-5);
    });
  });

  describe("addAtTail", () => {
    test("should add element to empty list", () => {
      list.addAtTail(5);
      expect(list.get(0)).toBe(5);
    });

    test("should add multiple elements at tail", () => {
      list.addAtTail(1);
      list.addAtTail(2);
      list.addAtTail(3);
      // List: 1 -> 2 -> 3
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    test("should work with mixed head and tail additions", () => {
      list.addAtHead(2);
      list.addAtTail(3);
      list.addAtHead(1);
      list.addAtTail(4);
      // List: 1 -> 2 -> 3 -> 4
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
      expect(list.get(3)).toBe(4);
    });
  });

  describe("addAtIndex", () => {
    test("should add at index 0 in empty list", () => {
      list.addAtIndex(0, 5);
      expect(list.get(0)).toBe(5);
    });

    test("should ignore addition at negative index", () => {
      list.addAtIndex(-1, 5);
      expect(list.get(0)).toBe(-1);
    });

    test("should add at beginning (index 0)", () => {
      list.addAtHead(2);
      list.addAtHead(1);
      list.addAtIndex(0, 0);
      // List: 0 -> 1 -> 2
      expect(list.get(0)).toBe(0);
      expect(list.get(1)).toBe(1);
      expect(list.get(2)).toBe(2);
    });

    test("should add at middle index", () => {
      list.addAtHead(3);
      list.addAtHead(1);
      list.addAtIndex(1, 2);
      // List: 1 -> 2 -> 3
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    test("should add at end (equivalent to addAtTail)", () => {
      list.addAtHead(1);
      list.addAtHead(2);
      list.addAtIndex(2, 3);
      // List: 2 -> 1 -> 3
      expect(list.get(0)).toBe(2);
      expect(list.get(1)).toBe(1);
      expect(list.get(2)).toBe(3);
    });

    test("should ignore addition beyond list length", () => {
      list.addAtHead(1);
      list.addAtIndex(5, 2); // Should be ignored
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(-1);
    });

    test("should handle single element list", () => {
      list.addAtHead(1);
      list.addAtIndex(1, 2);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
    });
  });

  describe("deleteAtIndex", () => {
    test("should ignore deletion from empty list", () => {
      list.deleteAtIndex(0);
      expect(list.get(0)).toBe(-1);
    });

    test("should ignore deletion at negative index", () => {
      list.addAtHead(1);
      list.deleteAtIndex(-1);
      expect(list.get(0)).toBe(1);
    });

    test("should ignore deletion beyond list length", () => {
      list.addAtHead(1);
      list.deleteAtIndex(5);
      expect(list.get(0)).toBe(1);
    });

    test("should delete single element", () => {
      list.addAtHead(1);
      list.deleteAtIndex(0);
      expect(list.get(0)).toBe(-1);
    });

    test("should delete head element", () => {
      list.addAtTail(1);
      list.addAtTail(2);
      list.addAtTail(3);
      list.deleteAtIndex(0);
      // List: 2 -> 3
      expect(list.get(0)).toBe(2);
      expect(list.get(1)).toBe(3);
      expect(list.get(2)).toBe(-1);
    });

    test("should delete middle element", () => {
      list.addAtTail(1);
      list.addAtTail(2);
      list.addAtTail(3);
      list.deleteAtIndex(1);
      // List: 1 -> 3
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(3);
      expect(list.get(2)).toBe(-1);
    });

    test("should delete tail element", () => {
      list.addAtTail(1);
      list.addAtTail(2);
      list.addAtTail(3);
      list.deleteAtIndex(2);
      // List: 1 -> 2
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(-1);
    });
  });

  describe("complex operations", () => {
    test("should handle leetcode example operations", () => {
      // Example from LeetCode problem
      list.addAtHead(7);
      list.addAtHead(2);
      list.addAtHead(1);
      // List: 1 -> 2 -> 7

      list.addAtIndex(3, 0);
      // List: 1 -> 2 -> 7 -> 0

      list.deleteAtIndex(2);
      // List: 1 -> 2 -> 0

      list.addAtHead(6);
      // List: 6 -> 1 -> 2 -> 0

      list.addAtTail(4);
      // List: 6 -> 1 -> 2 -> 0 -> 4

      expect(list.get(4)).toBe(4);

      list.addAtHead(4);
      // List: 4 -> 6 -> 1 -> 2 -> 0 -> 4

      list.addAtIndex(5, 0);
      // List: 4 -> 6 -> 1 -> 2 -> 0 -> 0 -> 4

      list.addAtHead(6);
      // List: 6 -> 4 -> 6 -> 1 -> 2 -> 0 -> 0 -> 4

      expect(list.get(0)).toBe(6);
      expect(list.get(1)).toBe(4);
      expect(list.get(2)).toBe(6);
      expect(list.get(7)).toBe(4);
    });

    test("should handle alternating add and delete operations", () => {
      list.addAtHead(1);
      list.addAtTail(2);
      list.deleteAtIndex(1);
      list.addAtIndex(1, 3);
      // List: 1 -> 3

      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(3);
      expect(list.get(2)).toBe(-1);
    });

    test("should maintain correct structure after multiple operations", () => {
      // Build: 1 -> 2 -> 3 -> 4 -> 5
      for (let i = 1; i <= 5; i++) {
        list.addAtTail(i);
      }

      // Delete middle element (3)
      list.deleteAtIndex(2);
      // List: 1 -> 2 -> 4 -> 5

      // Insert 10 at index 2
      list.addAtIndex(2, 10);
      // List: 1 -> 2 -> 10 -> 4 -> 5

      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(10);
      expect(list.get(3)).toBe(4);
      expect(list.get(4)).toBe(5);
      expect(list.get(5)).toBe(-1);
    });
  });
});
