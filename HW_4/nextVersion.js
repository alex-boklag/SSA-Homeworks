function nextVersion(version) {
  const arrVersion = version.split('.').map(subversion => Number(subversion));
  const newArrVersion = [];

  arrVersion.reduceRight((previous, current) => {
    if (current + previous === 10) {
      newArrVersion.unshift(0);
      return 1;
    }
    else {
      newArrVersion.unshift(current + previous);
      return 0;
    }
  }, 1)

  if (newArrVersion[0] === 0) newArrVersion[0] = 10;

  return newArrVersion.join('.');
}

console.log(nextVersion("1.2.3"),"1.2.4");
console.log(nextVersion("0.9.9"),"1.0.0");
console.log(nextVersion("1"),"2");
console.log(nextVersion("1.2.3.4.5.6.7.8"),"1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9"),"10.0");