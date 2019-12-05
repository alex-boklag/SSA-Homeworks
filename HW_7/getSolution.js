function getSolution(numbers, sum) {
  if (Array.isArray(numbers) !== true || typeof sum !== 'number') {
    return 'Incorrect arguments!';
  }
  if (numbers.length < 2 || numbers.length > 22) {
    return 'Please, enter a correct count of numbers (from 2 to 22).';
  }
  if (numbers.every((number) => (number >= 0 && number <= 20)) === false) {
    return 'Please, enter correct numbers the array (from 0 to 20).';
  }
  if (sum < -10 || sum > 10) {
    return 'Please, enter a correct sum (from -10 to 10).';
  }

  const variantsNumber = 2 ** (numbers.length - 1);
  for (let i = 0; i < variantsNumber; i += 1) {
    let ourSum = numbers[0];

    for (let j = 0; j < numbers.length - 1; j += 1) {
      ourSum = ((i >> j) & 1 === 1)
        ? ourSum + numbers[j + 1]
        : ourSum - numbers[j + 1];
    }

    if (ourSum === sum) return true;
  }

  return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18];
console.log(getSolution([20, 11], 9), true);
console.log(getSolution([1, 3, 4, 6, 8], -2), true);
console.log(getSolution([15, 2, 3], 10), true);
console.log(getSolution([1, 5, 3, 2, 5], -2), false);
console.log(getSolution(numbers, 9), true);