/**
 * Queue data structure FIFO
 */
class Queue {
  constructor() {
    this.data = [];
  }

  add(val) {
    this.data.unshift(val);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    console.log(this.data);
    return this.data[this.data.length - 1];
  }
}

const q = new Queue();

q.add(1);
q.add(2);
q.add(3);

console.log(q.peek());
console.log(q.remove());
console.log(q.peek());
console.log(q.remove());
console.log(q.peek());
console.log(q.remove());
console.log(q.peek());

module.exports = Queue;