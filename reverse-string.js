function reverseStringSimple(str) {
  return str.split('').reverse().join('');
}

function reverseString(str) {
  return str.split('').reduce((acc, val) => val + acc, '');
}

const str = 'Terry';

console.log(reverseStringSimple(str));
console.log(reverseString(str));