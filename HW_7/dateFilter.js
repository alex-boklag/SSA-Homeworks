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

  return format.replace(/(y{4})|(y{2})|(M{1,2})|(d{1,2})|(H{1,2})|(m{1,2})|(s{1,2})/g, (name) => {
    switch (name) {
      case 'yyyy':
        return date.getFullYear();
      case 'yy':
        return date.getFullYear().toString().slice(2);
      case 'MM':
        return (date.getUTCMonth() + 1 > 9) ? date.getUTCMonth() + 1 : `0${date.getUTCMonth() + 1}`;
      case 'M':
        return date.getUTCMonth() + 1;
      case 'dd':
        return (date.getDate() > 9) ? date.getDate() : `0${date.getDate()}`;
      case 'd':
        return date.getDate();
      case 'HH':
        return (date.getUTCHours() > 9) ? date.getUTCHours() : `0${date.getUTCHours()}`;
      case 'H':
        return date.getUTCHours();
      case 'mm':
        return (date.getUTCMinutes() > 9) ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`;
      case 'm':
        return date.getUTCMinutes();
      case 'ss':
        return (date.getUTCSeconds() > 9) ? date.getUTCSeconds() : `0${date.getUTCSeconds()}`;
      case 's':
        return date.getUTCSeconds();
      default: 
        return name;
    }
  });
}

console.log(dateFilter(0, 'HH:mm'), '00:00');
console.log(dateFilter('0', 'dd/MM/yyyy/yyy'), '01/01/1970/70y');
console.log(dateFilter(new Date(0), 'd/M/yy H%m'), '1/1/70 0%0');
console.log(dateFilter(new Date(0), 'ss@mm == s@m'), '00@00 == 0@0');