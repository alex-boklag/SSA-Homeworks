function countdown(ms) {
  if (typeof ms !== 'number') {
    return 'Incorrect argument!';
  }

  let s = (ms < 0) ? -ms / 1000 : ms / 1000;

  let hours = Math.floor(s / 3600);
  if (hours < 10) hours = `0${hours}`;

  let minutes = Math.floor((s - hours * 3600) / 60);
  if (minutes < 10) minutes = `0${minutes}`;

  let seconds = Math.floor(s - hours * 3600 - minutes * 60);
  if (seconds < 10) seconds = `0${seconds}`;

  return (ms < 0) ? `-${hours}:${minutes}:${seconds}` : `+${hours}:${minutes}:${seconds}`;
}

console.log(countdown(-154800000), '-43:00:00');
console.log(countdown(0), '+00:00:00');
console.log(countdown(61000), '+00:01:01');
console.log(countdown(360000000), '+100:00:00');