function pyramidRecursion(n, row = 0, col = 0, level = '') {
  const cols = (n * 2 - 1);
  const midPoint = Math.floor(cols / 2);

  // Base case
  if (row === n) {
    return;
  }

  // String is complete
  if (level.length === cols) {
    console.log(level);
    pyramidRecursion(n, row + 1);
    return;
  }

  if ((midPoint - row) <= col && (midPoint + row) >= col) {
    level += '#';
  } else {
    level += ' ';
  }

  pyramidRecursion(n, row, col + 1, level);
}

/**
 * Calculate columns total n * 2 - 1
 * Calculate midpoint of columns, use Floor to round down
 * If midpoint + or - row is less than and greater than row, display #
 */
function pyramid(n) {
  const cols = (n * 2) - 1;
  const midpoint = Math.floor(cols / 2);

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < cols; column++) {
      if (((midpoint - row) <= column) && ((midpoint + row) >= column)) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

pyramid(5);
pyramidRecursion(3);