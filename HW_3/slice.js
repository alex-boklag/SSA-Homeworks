const array = [1, 3, 6, 7, 10];

function slice(array, start = 0, end = array.length) {
  if (!array || start > array.length) return [];
  if (start < 0) start = array.length + start;
  if (end < 0) end = array.length + end;
  
  let newArray = [];
  for (let i = start; i < end; i += 1) {
    if (array[i] === undefined) break;
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(slice(array, -4, -1), array.slice(-4,-1));