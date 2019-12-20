class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Method to insert data as head
   *
   * @param {*} data 
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
}

const list = new LinkedList();

list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');

console.log(list.size());
console.log(list.getFirst().data);
console.log(list.getLast().data);

list.removeFirst();

console.log(list.getFirst().data);

list.clear();

console.log(list.size());

module.exports = { LinkedList, Node };