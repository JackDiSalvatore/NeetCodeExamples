class Node {
  public val: number | null;
  public next: Node | null;

  constructor(val?: number) {
    this.val = val ?? null;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  get(index: number): number {
    if (index < 0) return -1;

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr?.next ?? null; // move curr forward
    }

    if (curr && curr.val != null) return curr.val;
    else return -1;
    // else throw new Error("out of bounds!");
  }

  addAtHead(val: number): void {
    const node = new Node(val);

    node.next = this.head; // attach `node` to head of list
    this.head = node; // make `node` the head of the list

    if (this.tail == null) {
      this.tail = node;
    }
  }

  addAtTail(val: number): void {
    const node = new Node(val);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  addAtIndex(index: number, val: number): void {
    const node = new Node(val);

    // Disallow negative index
    if (index < 0) return;

    // Add to head
    if (index === 0) {
      node.next = this.head;
      this.head = node;

      if (this.tail === null) {
        // If list was empty
        this.tail = node;
      }
      return;
    }

    // If list is empty and index > 0, it's out of bounds
    if (this.head === null) {
      return; // Out of bounds - ignore the operation
    }

    // Go to position `prev` to where to add the node
    let prev = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (prev.next === null) {
        return; // Out of bounds - can't reach index
      }
      prev = prev.next;
    }

    node.next = prev.next; // attach `node` to prev
    prev.next = node;

    if (node.next === null) {
      // youre at the tail
      this.tail = node;
    }
  }

  deleteAtIndex(index: number): void {
    // Empty list
    if (this.head === null) return;

    // Disallow negative index
    if (index < 0) return;

    // Delete from head
    if (index === 0) {
      this.head = this.head.next;

      if (this.head === null) {
        // Update tail when deleting last element
        this.tail = null;
      }
      return;
    }

    let curr: Node | null = this.head;
    let prev = curr;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return; // Out of bounds
      }
      prev = curr;
      curr = curr.next;
    }

    if (curr === null) {
      return; // Out of bounds
    }

    prev.next = curr.next; // have `prev` skip over `curr`

    if (this.tail === curr) {
      this.tail = prev;
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
