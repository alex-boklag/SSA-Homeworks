function substr(string, start, length = string.length - start) {
  if (!string) return '';
  if (!start) return string;
  if (start < 0) start = string.length + start;
  
  let result = '';
  for (let i = start; i < start + length; i++) {
    if (string[i] === undefined) break;
    result += string[i];
  }
  return result;
}
console.log(substr('параллелепипед', 5, 3), 'параллелепипед'.substr(5, 3));
console.log(substr('параллелепипед', -5, 4), 'параллелепипед'.substr(-5, 4));
console.log(substr('параллелепипед', -2, 4), 'параллелепипед'.substr(-2, 4));