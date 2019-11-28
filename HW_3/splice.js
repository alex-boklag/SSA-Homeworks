let array = [1, 3, 6, 7, 10];

function splice(array, start, deleteCount) {
  if (start > array.length) start = array.length - 1;
  if (start < 0) start = array.length + start;
  if (deleteCount > array.length - start) deleteCount = array.length - start;

  const copyArray = [...array];
  const deletedElements = [];

  for (let i = start; i < start + deleteCount; i += 1) {
    deletedElements.push(array[i]);
    delete array[i];
  }
  for (let i = 0; i < array.length; i += 1) {
    deletedElements.push(array[i]);
    delete array[i];
  }

  return deletedElements;
}
console.log(splice(array, 2, 3));
console.log(array);