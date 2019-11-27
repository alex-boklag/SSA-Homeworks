function concat() {
  let result = '';

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
console.log(concat('Привет, ', 'Кевин', ', удачного дня.'), 'Привет, '.concat('Кевин', ', удачного дня.'));