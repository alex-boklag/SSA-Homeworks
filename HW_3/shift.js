let array = [1, 3, 6, 7, 10];

function shift(array) {
  const copyArray = [...array];
  array.length = 0;

  for (let i = 0; i < copyArray.length - 1; i += 1) {
    array[i] = copyArray[i+1];
  }

  return copyArray[0];
}
console.log(shift(array));
console.log(array);