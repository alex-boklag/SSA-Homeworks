function getHiddenMessage(text) {
  const result = [];
  const allSentences = text.split(/[\.|\?|!]\s/);
  const wordNumbers = allSentences[0].split(/,?\s/).map(word => word.length);

  for (let i = 1; i < allSentences.length; i += 1) {
    const curSentenceInWords = allSentences[i].split(/,?\s/);
    let wordToResult = curSentenceInWords[wordNumbers[i - 1] - 1];
    if (i === 1) {
      result.push(
        wordToResult
          .match(/\w+\'?\w*/)
          .toString()
          .split('')
          .map((value, index) => (index === 0 ? value.toUpperCase() : value))
          .join('')
      );
    } else {
      result.push(wordToResult.match(/\w+\'?\w*/));
    }
  }

  return result.join(' ') + '.';
}

const text = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

console.log(getHiddenMessage(text));
