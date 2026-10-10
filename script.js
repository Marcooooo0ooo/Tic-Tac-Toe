let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");
let easyButton = document.getElementById("btn-easy");
let hardButton = document.getElementById("btn-hard");
let restartButton = document.getElementById("restart");

let resultBox = document.getElementById("result");
let resultEmoji = document.getElementById("result-emoji");
let resultTitle = document.getElementById("result-title");
let resultText = document.getElementById("result-text");
let playAgainButton = document.getElementById("play-again");

let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let playerTurn = true;
let difficulty = "easy";
let timer = null;

let winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function setDifficulty(level) {
  difficulty = level;

  easyButton.classList.toggle("selected", level === "easy");
  hardButton.classList.toggle("selected", level === "hard");

  restart();
}

function restart() {
  clearTimeout(timer);

  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  playerTurn = true;

  cells.forEach(cell => {
    cell.textContent = "";
    cell.className = "cell";
  });

  resultBox.className = "result hidden";
  statusText.textContent = "Your turn (X)";
}

function play(position) {
  if (gameOver || !playerTurn || board[position] !== "") {
    return;
  }

  markCell(position, "X");

  if (gameOver) {
    return;
  }

  playerTurn = false;
  statusText.textContent = "Robot's turn (O)";
  timer = setTimeout(computerMove, 500);
}

function markCell(position, symbol) {
  board[position] = symbol;
  cells[position].textContent = symbol;
  cells[position].classList.add(symbol);

  let line = checkWin(symbol);

  if (line) {
    gameOver = true;
    line.forEach(i => cells[i].classList.add("winning"));

    if (symbol === "X") {
      showResult("win");
    } else {
      showResult("lose");
    }
  } else if (!board.includes("")) {
    gameOver = true;
    showResult("draw");
  }
}

function checkWin(symbol) {
  for (let i = 0; i < winningLines.length; i++) {
    let [a, b, c] = winningLines[i];

    if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
      return winningLines[i];
    }
  }
  return false;
}

function showResult(type) {
  let emoji;
  let title;
  let text;

  if (type === "win") {
    emoji = "🏆";
    title = "You win!";
    text = "Great job, you beat the robot!";
  } else if (type === "lose") {
    emoji = "🤖";
    title = "Robot wins!";
    text = "Don't give up, try again!";
  } else {
    emoji = "🤝";
    title = "It's a draw!";
    text = "Nobody wins this time.";
  }

  statusText.textContent = title;

  timer = setTimeout(() => {
    resultEmoji.textContent = emoji;
    resultTitle.textContent = title;
    resultText.textContent = text;
    resultBox.className = "result " + type;
  }, 800);
}

function computerMove() {
  let position;

  if (difficulty === "easy") {
    position = randomMove();
  } else {
    position = smartMove();
  }

  markCell(position, "O");

  if (!gameOver) {
    playerTurn = true;
    statusText.textContent = "Your turn (X)";
  }
}

function randomMove() {
  let free = freeCells();
  let randomIndex = Math.floor(Math.random() * free.length);
  return free[randomIndex];
}

function smartMove() {
  let winningMove = findWinningMove("O");
  if (winningMove !== null) {
    return winningMove;
  }

  let blockingMove = findWinningMove("X");
  if (blockingMove !== null) {
    return blockingMove;
  }

  if (board[4] === "") {
    return 4;
  }

  let freeCorners = [0, 2, 6, 8].filter(position => board[position] === "");
  if (freeCorners.length > 0) {
    return freeCorners[0];
  }

  return randomMove();
}

function findWinningMove(symbol) {
  for (let i = 0; i < winningLines.length; i++) {
    let [a, b, c] = winningLines[i];
    let values = [board[a], board[b], board[c]];

    let marks = values.filter(v => v === symbol).length;
    let empty = values.filter(v => v === "").length;

    if (marks === 2 && empty === 1) {
      if (board[a] === "") return a;
      if (board[b] === "") return b;
      if (board[c] === "") return c;
    }
  }
  return null;
}

function freeCells() {
  let free = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      free.push(i);
    }
  }
  return free;
}

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => play(index));
});

easyButton.addEventListener("click", () => setDifficulty("easy"));
hardButton.addEventListener("click", () => setDifficulty("hard"));
restartButton.addEventListener("click", restart);
playAgainButton.addEventListener("click", restart);

setDifficulty("easy");
