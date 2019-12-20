/**
 * Stack data structure FILO, LIFO
 */
class Stack {
  constructor() {
    this.data = [];
  }

  push(val) {
    this.data.push(val);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    console.log(this.data);
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);

console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());

module.exports = Stack;