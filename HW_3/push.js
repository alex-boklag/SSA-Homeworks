const array = [1, 3, 6, 7, 10];

function push(array) {
  const startArrayLength = array.length;
  const args = [...arguments];

  for (let i = startArrayLength; i < startArrayLength + args.length - 1; i += 1) {
    array[i] = args[i - startArrayLength + 1];
  }

  return array.length;
}
console.log(push(array, 11, 12, 13));
console.log(array);