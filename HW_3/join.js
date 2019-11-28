const array = [1, 3, 6, 7, 10];

function join(array, separator = ',') {
  let string = String(array[0]);

  for (let i = 1; i < array.length; i += 1) {
    string += separator + array[i];
  }

  return string;
}
console.log(join(array, '-'), array.join('-'));