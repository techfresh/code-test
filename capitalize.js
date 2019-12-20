function capitalize(str) {
  let capitalized = '';
  str.split(' ').forEach((word) => {
    capitalized += word[0].toUpperCase() + word.slice(1) + ' ';
  })
  return capitalized;
}

function capitalizeParse(str) {
  let capitalize = '';
  capitalize += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++ ) {
    if (str[i - 1] === ' ') {
      capitalize += str[i].toUpperCase();
    } else {
      capitalize += str[i];
    }
  }
  return capitalize;
}

console.log(capitalize('a short sentence'));
console.log(capitalizeParse('a short sentence'));
console.log(capitalize('look, it is working!'));
console.log(capitalizeParse('look, it is working!'));