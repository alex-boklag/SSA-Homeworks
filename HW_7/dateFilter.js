function dateFilter(date, format) {
  if (!(date instanceof Date)
    && !(date instanceof Number)
    && !(date instanceof String)
    && isNaN(date)
    && !(format instanceof String)) {
    return 'Incorrect arguments.';
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  else if (typeof date === 'string') {
    date = new Date(Number(date));
  }

  const variants = {
    'yyyy': date.getFullYear(),
    'yy': date.getFullYear().toString().slice(2),
    'MM': (date.getUTCMonth() + 1 > 9) ? date.getUTCMonth() + 1 : `0${date.getUTCMonth() + 1}`,
    'M': date.getUTCMonth() + 1,
    'dd': (date.getDate() > 9) ? date.getDate() : `0${date.getDate()}`,
    'd': date.getDate(),
    'HH': (date.getUTCHours() > 9) ? date.getUTCHours() : `0${date.getUTCHours()}`,
    'H': date.getUTCHours(),
    'mm': (date.getUTCMinutes() > 9) ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`,
    'm': date.getUTCMinutes(),
    'ss': (date.getUTCSeconds() > 9) ? date.getUTCSeconds() : `0${date.getUTCSeconds()}`,
    's': date.getUTCSeconds(),
  }

  return format.replace(/(yy{1,4})|(M{1,2})|(d{1,2})|(H{1,2})|(m{1,2})|(s{1,2})/g, (name) => {
    return variants[name];
  });
}

console.log(dateFilter(0, 'HH:mm'), '00:00');
console.log(dateFilter('0', 'dd/MM/yyyy'), '01/01/1970');
console.log(dateFilter(new Date(0), 'd/M/yy H%m'), '1/1/70 0%0');
console.log(dateFilter(new Date(0), 'ss@mm == s@m'), '00@00 == 0@0');