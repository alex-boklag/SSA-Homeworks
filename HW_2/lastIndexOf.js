function lastIndexOf(string, searchValue, fromIndex = string.length) {
  if (!string) return -1;

  for (let i = fromIndex; i > 0; i--) {
    for (let j = 0; j < searchValue.length; j++) {
      if (string[i + j] === searchValue[j]) {
        if (j === (searchValue.length - 1)) {
          return i;
        }
      }
      else {
        break;
      }
    }
  }

  return -1;
}
console.log(lastIndexOf('балалайка', 'ла'), 'балалайка'.lastIndexOf('ла'));
console.log(lastIndexOf('балалайка', 'ла', 3), 'балалайка'.lastIndexOf('ла', 3));
console.log(lastIndexOf('балалайка', 'ла', 6), 'балалайка'.lastIndexOf('ла', 6));
console.log(lastIndexOf('балалайка', 'параллелепипед'), 'балалайка'.lastIndexOf('параллелепипед'));