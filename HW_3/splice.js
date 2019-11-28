let array = [1, 3, 6, 7, 10];

function splice(array, start, deleteCount) {
  if (start > array.length) start = array.length - 1;
  if (start < 0) start = array.length + start;
  if (deleteCount > array.length - start) deleteCount = array.length - start;

  const deletedElements = [];
  const startArray = [...array];
  array.length = 0;

  for (let i = start; i < start + deleteCount; i += 1) {
    deletedElements.push(startArray[i]);
    delete startArray[i];
  }
  for (let i = 0; i < startArray.length; i += 1) {
    if (startArray[i] === undefined) continue;
    array.push(startArray[i]);
  }

  return deletedElements;
}
console.log(splice(array, 2, 3));
console.log(array);