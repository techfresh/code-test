function orderString(str) {
  return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagram(strA, strB) {
  return orderString(strA) === orderString(strB);
}

const strA = 'Hello';
const strB = 'elloh!   ';

console.log(anagram(strA, strB));