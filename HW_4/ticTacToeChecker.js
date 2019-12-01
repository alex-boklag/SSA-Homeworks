const game = [
  [2, 2, 1],
  [2, 1, 1],
  [1, 1, 2]
];

function ticTacToeChecker(game) {
  for (let i = 0; i < game.length; i += 1) {
    for (let j = 0; j < game[i].length; j += 1) {
      if (game[i][j] === 0) {
        return -1;
      }
    }
  }

  const players = {};
  const modifiedGame = game.reduce((acc, val) => acc.concat(val), []).map(val => val % 2);
  //convert the game to array in binary view 

  if (modifiedGame[0] + modifiedGame[4] + modifiedGame[8] === 3) {
    players.first = 'winner';
  }
  if (modifiedGame[0] + modifiedGame[4] + modifiedGame[8] === 0) {
    players.second = 'winner';
  }
  if (modifiedGame[2] + modifiedGame[4] + modifiedGame[6] === 3) {
    players.first = 'winner';
  }
  if (modifiedGame[2] + modifiedGame[4] + modifiedGame[6] === 0) {
    players.second = 'winner';
  }
  //check diagonals

  for (let i = 0; i < modifiedGame.length; i += 3) {
    if (modifiedGame[i] + modifiedGame[i + 1] + modifiedGame[i + 2] === 3) {
      players.first = 'winner';
    }
    if (modifiedGame[i] + modifiedGame[i + 1] + modifiedGame[i + 2] === 0) {
      players.second = 'winner';
    }
  }
  //check horizontals

  for (let i = 0; i < 3; i += 1) {
    if (modifiedGame[i] + modifiedGame[i + 3] + modifiedGame[i + 6] === 3) {
      players.first = 'winner';
    }
    if (modifiedGame[i] + modifiedGame[i + 3] + modifiedGame[i + 6] === 0) {
      players.second = 'winner';
    }
  }
  //check verticals

  if (players.first === players.second) return 0;
  if (players.first === 'winner') return 1;
  if (players.second === 'winner') return 2;
}

console.log(ticTacToeChecker(game));