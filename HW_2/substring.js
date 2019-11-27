function substring(string, start, end = string.length) {
  if (!string) return '';
  if (!start) return string;
  if (start < 0) start = 0;
  if (start > end) [start, end] = [end, start];
  
  let result = '';
  for (let i = start; i < end; i++) {
    if (string[i] === undefined) break;
    result += string[i];
  }
  return result;
}
console.log(substring('параллелепипед', 3, 5), 'параллелепипед'.substring(3, 5));
console.log(substring('параллелепипед', 5, 3), 'параллелепипед'.substring(5, 3));
console.log(substring('параллелепипед', -2, 4), 'параллелепипед'.substring(-2, 4));
console.log(substring('параллелепипед', 0, 50), 'параллелепипед'.substring(0, 50));