function reverse(array) {
  const length = array.length;
  for (let i = 0; i < length / 2; i += 1) {
    [array[i], array[length - i - 1]] = [array[length - i - 1], array[i]];
  }
  return array;
}
console.log(reverse([1, 3, 6, 7, 10]), [1, 3, 6, 7, 10].reverse());