function spiral(n) {
  const arr = [];

  let counter = 1;
  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;

  // Init array
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  
  while (startRow <= endRow && startCol <= endCol) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = counter;
      counter++;
    }
    startRow++

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left column
    for (let i = startCol; i < endCol; i++) {
      arr[endRow][i] = counter;
      counter++;
    }
  }

  return arr;
}

console.log(spiral(3));