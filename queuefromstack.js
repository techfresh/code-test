const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(value) {
    this.stackA.push(value);
  }

  remove() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    const value = this.stackB.pop();

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return value;
  }

  peek() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    const value = this.stackB.peek();

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return value;
  }
}

const q = new Queue();
q.add('a');
q.add('b');
q.add('c');
console.log(q.remove());
console.log(q.peek());