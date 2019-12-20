/**
 * Memoize
 */
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

/**
 * Recursive solution
 */
let fibonacci = (n) => {
  console.log('Called' + n);
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Simple iterative solution
 */
const fibonacciSimple = (n) => {
  const numbers = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = numbers[i - 1];
    const b = numbers[i - 2];
    numbers.push(a + b);
  }
  return numbers[n];
};

const n = 100;

const start1 = new Date();
fibonacci = memoize(fibonacci);
console.log(fibonacci(n));
const end1 = new Date();
console.log('Recursive', end1 - start1);

// const start1 = new Date();
// console.log(fibonacci(20));
// const end1 = new Date();
// console.log(end1 - start1);

const start2 = new Date();
console.log(fibonacciSimple(n));
const end2 = new Date();
console.log('Simple', end2 - start2);
