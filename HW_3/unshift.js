const array = [1, 3, 6, 7, 10];

function unshift(array) {
  const startArray = [...array];
  const args = [...arguments];

  for (let i = 0; i < args.length - 1; i += 1) {
    array[i] = args[i + 1];
  }
  for (let i = args.length - 1; i < args.length + startArray.length - 1; i += 1) {
    array[i] = startArray[i - args.length + 1];
  }

  return array.length;
}
console.log(unshift(array, 11, 12, 13));
console.log(array);