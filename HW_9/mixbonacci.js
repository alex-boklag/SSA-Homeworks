function mixbonacci(pattern, n) {
  if (n === 0 || pattern.length === 0) return [];

  const result = [];
  const counter = {
    fib: 0,
    tri: 0,
    tet: 0,
    pad: 0,
    jac: 0,
    pel: 0,
  }

  for (let i = 0; i < n; i += 1) {
    switch (pattern[i % pattern.length]) {
      case 'fib':
        result.push(fibonacci(counter['fib']));
        counter['fib'] += 1;
        break;
      case 'tri':
        result.push(tribonacci(counter['tri']));
        counter['tri'] += 1;
        break;
      case 'tet':
        result.push(tetranacci(counter['tet']));
        counter['tet'] += 1;
        break;
      case 'pad':
        result.push(padovan(counter['pad']));
        counter['pad'] += 1;
        break;
      case 'jac':
        result.push(jacobsthal(counter['jac']));
        counter['jac'] += 1;
        break;
      case 'pel':
        result.push(pell(counter['pel']));
        counter['pel'] += 1;
        break;
      default:
        break;
    }
  }

  return result;
}
function fibonacci(n) {
  return Math.round((((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) / Math.sqrt(5));
}
function tribonacci(n) {
  const a = (19 + 3 * Math.sqrt(33)) ** (1 / 3);
  const b = (19 - 3 * Math.sqrt(33)) ** (1 / 3);

  return Math.round(3 * ((a + b + 1) / 3) ** n / (a ** 2 + b ** 2 + 4));
}
const tetranacci = function tet(n) {
  if (n <= 2) return 0;
  if (n >= 3 && n <= 4) return 1;

  return 2 * tet(n - 1) - tet(n - 5);
}
const padovan = function pad(n) {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return 0;

  return pad(n - 2) + pad(n - 3);
}
function jacobsthal(n) {
  return (2 ** n - (-1) ** n) / 3;
}
function pell(n) {
  return Math.ceil(((1 + Math.sqrt(2)) ** n - (1 - Math.sqrt(2)) ** n) / (2 * Math.sqrt(2)));
}

const pattern =
  [
    'pad',
    'fib',
    'fib',
    'pad',
    'fib',
    'pad',
    'tri',
    'pad',
    'fib',
    'tri',
    'fib',
    'jac',
    'fib',
    'fib',
    'pel'
  ];
const length = 17;
console.log(mixbonacci(pattern, length), [1, 0, 1, 0, 1, 0, 0, 1, 2, 0, 3, 0, 5, 8, 0, 0, 13]);