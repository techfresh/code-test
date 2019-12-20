function vowels(str) {
  let counter = 0;
  const chars = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str) {
    if (chars.includes(char)) {
      counter++;
    }
  }

  return counter;
}

function vowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels("Hello how are you"));
console.log(vowelsRegex("Hello how are you"));