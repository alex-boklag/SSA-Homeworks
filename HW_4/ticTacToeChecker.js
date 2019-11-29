const game = [
  [1, 2, 1],
  [2, 1, 2],
  [2, 1, 2]
]

function ticTacToeChecker(game) {
  for (let i = 0; i < game.length; i += 1) {
    for (let j = 0; j < game[i].length; j += 1) {
      if (game[i][j] == 0) {
        return -1;
      }
    }
  }

  const [line1, line2, line3] = game;
  const players = {};

  for (let i = 1; i <= 2; i += 1) {
    if (line1[0] == line2[1] == line3[2] == i) players[i] = true;
    if (line1[2] == line2[1] == line3[0] == i) players[i] = true;

    if (line1[0] == line1[1] == line1[2] == i) players[i] = true;
    if (line2[0] == line2[1] == line2[2] == i) players[i] = true;
    if (line3[0] == line3[1] == line3[2] == i) players[i] = true;

    if (line1[0] == line2[0] == line3[0] == i) players[i] = true;
    if (line1[1] == line2[1] == line3[1] == i) players[i] = true;
    if (line1[2] == line2[2] == line3[2] == i) players[i] = true;
  }
  console.log(line1[0],line2[1],line3[2],1);
  if (players[1] == players[2]) {
    return 0;
  }
  if (players[1] == true) {
    return 1;
  }
  if (players[2] == true) {
    return 2;
  }
}

console.log(ticTacToeChecker(game))