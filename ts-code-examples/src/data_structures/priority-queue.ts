type QElement = {
  value: string;
  priority: number;
};

export function PriorityQueue() {
  const collection: QElement[] = [];

  function enqueue(element: QElement) {
    if (isEmpty()) {
      collection.push(element);
    } else {
      let isAdded = false;

      for (let i = 0; i < collection.length; i++) {
        // Insert element at correct priority
        if (element.priority < collection[i].priority) {
          collection.splice(i, 0, element);

          isAdded = true;
          return; // don't need to continue looping
        }
      }

      // lowest priority
      if (!isAdded) {
        // console.log("LOWEST PRIORITY");
        collection.push(element);
      }
    }
  }

  function dequeue() {
    return collection.shift();
  }

  function front() {
    return collection[0];
  }

  function size() {
    return collection.length;
  }

  function isEmpty() {
    return collection.length === 0;
  }

  function print() {
    console.table(collection);
  }

  return {
    enqueue,
    dequeue,
    front,
    size,
    isEmpty,
    print,
  };
}

// const pq = PriorityQueue();
// pq.enqueue({ value: "Apple", priority: 1 });
// pq.enqueue({ value: "Carrot", priority: 2 });
// pq.enqueue({ value: "Banana", priority: 1 });
// pq.enqueue({ value: "Donut", priority: 3 });
// pq.enqueue({ value: "Egg", priority: 4 });
// pq.enqueue({ value: "Cake", priority: 2 });

// pq.print();
