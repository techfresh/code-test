function reverseInt(int) {
  const str = int.toString()
  const reversed = str.split('').reverse().join('');
  return parseInt(reversed) * Math.sign(int);
}

console.log(reverseInt(1000));
console.log(reverseInt(1003));
console.log(reverseInt(-50));