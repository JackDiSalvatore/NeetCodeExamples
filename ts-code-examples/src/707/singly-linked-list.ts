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
      return;
    }

    // If list is empty and index > 0, it's out of bounds
    if (this.head === null) {
      return; // Out of bounds - ignore the operation
    }

    // Go to position `prev` to where to add the node
    let prev = this.head;
    let currentIndex = 0;

    for (let i = 0; i < index - 1; i++) {
      if (prev.next) {
        prev = prev.next;
        currentIndex++;
      }
    }

    // Out of bounds
    if (currentIndex < index - 1) return;

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
      this.head = this.head?.next ?? null;
      return;
    }

    let curr = this.head;
    let prev = curr;

    for (let i = 0; i < index; i++) {
      if (curr.next) {
        prev = curr;

        curr = curr?.next;
      }
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
