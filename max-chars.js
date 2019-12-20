function maxChars(str) {
  const charsMap = {};

  let max = 0;
  let maxChar;

  for (let char of str) {
    charsMap[char] ? charsMap[char]++ : charsMap[char] = 1;
  }

  for (let i in charsMap) {
    if (charsMap[i] > max) {
      max = charsMap[i];
      maxChar = i;
    }
  }

  return maxChar;
}

console.log(maxChars('Hello World'));
console.log(maxChars('Sheeeeepss'));