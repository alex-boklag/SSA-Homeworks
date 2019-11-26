let cardsList = [
  'A5R',
  'A7Y',
  'B8Y',
  'B3R',
  'B4R',
  'A3Y',
  'A7Y',
  'B12R',
];

function menStillStanding(cards) {
  const teams = {
    'A': [],
    'B': []
  }
  let remainedA = 11;
  let remainedB = 11;

  cards.forEach((card) => {
    if (remainedA >= 7 && remainedB >= 7) {

      const teamName = card.match(/^\w/).toString();
      const playerNumber = +card.match(/\d+/);
      const colorCard = card.match(/\w$/).toString();

      if (!teams[teamName][playerNumber]) {
        teams[teamName][playerNumber] = colorCard;
        if (teamName === 'A' && colorCard == 'R') {
          remainedA--;
        }
        if (teamName === 'B' && colorCard == 'R') {
          remainedB--;
        }
      }
      else if (teams[teamName][playerNumber] === 'Y') {
        teams[teamName][playerNumber] = 'R';
        if (teamName === 'A') {
          remainedA--;
        }
        if (teamName === 'B') {
          remainedB--;
        }
      }
    }
  })

  return [remainedA, remainedB];
}

console.log(menStillStanding(cardsList));