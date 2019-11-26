let cardsList = [
  'A5R',
  'A7Y',
  'B8Y',
  'B3R',
  'B4R',
  'A3Y',
  'A7Y',
];

function menStillStanding(cards) {
  const teams = {
    'A': [],
    'B': []
  }
  let remainedA = 11;
  let remainedB = 11;

  cards.forEach((card) => {
    const teamName = card.match(/^\w/).toString();
    const playerNumber = +card.match(/\d+/);
    const colorCard = card.match(/\w$/).toString();

    if (!teams[teamName][playerNumber]) {
      teams[teamName][playerNumber] = colorCard;
    }
    else if (teams[teamName][playerNumber] === 'Y') {
      teams[teamName][playerNumber] = 'R';
    }
  })

  for (let i = 1; i <= 11; i++) {
    if (teams.A[i] === 'R') {
      remainedA--;
    }
    if (teams.B[i] === 'R') {
      remainedB--;
    }
  }

  return [remainedA, remainedB];
}

console.log(menStillStanding(cardsList));