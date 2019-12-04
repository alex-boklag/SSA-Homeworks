function findPartMaxProd(number) {
  if (typeof number !== 'number' || number <= 0) return 'Please, enter a pozitive number!'

  const result = [];

  if (number < 3) {
    const partition = [number];
    const maxProdValue = number;

    result.push(partition, maxProdValue);
  }
  else if (number % 3 === 0) {
    const numberTriples = Math.floor(number / 3);

    const partition = '3'.repeat(numberTriples).split('').map(v => Number(v));
    const maxProdValue = partition.reduce((prodValue, value) => value * prodValue);

    result.push(partition, maxProdValue);
  }
  else if (number % 3 === 1) {
    const numberTriples = Math.floor(number / 3) - 1;

    const partition1 = '3'.repeat(numberTriples).split('').map(v => Number(v));
    partition1.unshift(4);
    const partition2 = '3'.repeat(numberTriples).split('').map(v => Number(v));
    partition2.push(2, 2);
    const maxProdValue = partition1.reduce((prodValue, value) => value * prodValue);

    result.push(partition1, partition2, maxProdValue);
  }
  else if (number % 3 === 2) {
    const numberTriples = Math.floor(number / 3);

    const partition = '3'.repeat(numberTriples).split('').map(v => Number(v));
    partition.push(2);
    const maxProdValue = partition.reduce((prodValue, value) => value * prodValue);

    result.push(partition, maxProdValue);
  }

  return result;
}

console.log(findPartMaxProd('hello'));
console.log(findPartMaxProd(1));
console.log(findPartMaxProd(2));
console.log(findPartMaxProd(3));
console.log(findPartMaxProd(4));
console.log(findPartMaxProd(5));
console.log(findPartMaxProd(6));
console.log(findPartMaxProd(7));
console.log(findPartMaxProd(8));
console.log(findPartMaxProd(9));
console.log(findPartMaxProd(10));