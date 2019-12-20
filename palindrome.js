function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

const valid = "dad";
const error = 'tea';

console.log(palindrome(valid));
console.log(palindrome(error));