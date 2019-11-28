const array = [1, 3, 6, 7, 10];

function fill(array, value, start = 0, end = array.length) {
  if (start < 0) start = array.length + start;
  if (end < 0) end = array.length + end;

  const arr = [...array];
  for (let i = start; i < end; i += 1) {
    arr[i] = value;
  }
  return arr;
}
console.log(fill(array, 0, -3, -2), array.fill(0, -3, -2));