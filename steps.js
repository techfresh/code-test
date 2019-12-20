function stepsRecursion(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    stepsRecursion(n, row + 1);
    return;
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += '+';
  }
  stepsRecursion(n, row, stair);
}

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += '-';
      }
    }
    console.log(stair);
  }
}

steps(4);
stepsRecursion(4);