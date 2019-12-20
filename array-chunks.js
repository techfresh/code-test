function chunkArraySimple(arr, size) {
  const chunked = [];

  for (let i of arr) {
    const lastChunk = chunked[chunked.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunked.push([i]);
    } else {
      lastChunk.push(i);
    }
  }

  return chunked;
}

function chunkArray(arr, size) {
  const chunked = [];

  let startIndex = 0;

  while (startIndex < arr.length) {
    chunked.push(arr.slice(startIndex, (startIndex + size)));
    startIndex += size;
  }

  return chunked;
}

const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [1, 2, 3, 4, 5];
console.log(chunkArray(arr, 2));
console.log(chunkArraySimple(arr2, 2));