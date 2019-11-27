function includes(string, searchString, position = 0) {
  if (!string) return false;

  for (let i = position; i < string.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      if (string[i + j] === searchString[j]) {
        if (j === (searchString.length - 1)) {
          return true;
        }
      }
      else {
        break;
      }
    }
  }

  return false;
}
console.log(includes('балалайка', 'ла'), 'балалайка'.includes('ла'));
console.log(includes('балалайка', 'ла', 3), 'балалайка'.includes('ла', 3));
console.log(includes('балалайка', 'ла', 6), 'балалайка'.includes('ла', 6));
console.log(includes('балалайка', 'параллелепипед'), 'балалайка'.includes('параллелепипед'));