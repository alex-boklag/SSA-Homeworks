let array = [1, 3, 6, 7, 10];

function pop(array) {
  const copyArray = [...array];
  array.length = 0;

  for (let i = 0; i < copyArray.length - 1; i += 1) {
    array[i] = copyArray[i];
  }

  return copyArray[copyArray.length - 1];
}
console.log(pop(array));
console.log(array);