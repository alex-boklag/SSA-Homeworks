function repeat(string, count) {
  if (count < 0 || count === Infinity) return 'RangeError';
  
  let result = '';
  for (let i = 0; i < count; i++) {
    result += string;
  }
  return result;
}
console.log(repeat('бал', 5),'бал'.repeat(5));