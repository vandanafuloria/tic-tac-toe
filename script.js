// /*use all facttoy fucntion
//  * console game
//  * 1 - user input logic of player 1 and player 2 one by one
//  * 2 - fill in the matrix
//  * 3- form the winner declaring function  or draw
//  * 4 -
//  * ui game
//  */

// function Players(player1, p1Name, player2, p2Name) {
//   // constructor fucntion
//   this.player1 = player1;
//   this.p1Name = p1Name;
//   this.player2 = player2;
//   this.p2Name = p2Name;
// }

// function checkWinner() {}

// function gameBoard() {
//   const players = new Players("shubham", "X", "Vandana", "O");

//   let board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""],
//   ];
//   let play = [];
//   for (let i = 0; i < 9; i++) {
//     // chance of player1 and player2

//     if (i % 2 == 0) {
//       play = prompt(`${players.p1Name}"turn!, Enter row column symbol"`);
//     } else {
//       play = prompt(`${players.p2Name}"turn!, Enter row column symbol"`);
//     }
//   }
//   const row = play[0];
//   const col = play[1];
//   const sym = play[2];
//   console.log(row, col, sym);
// }

// gameBoard();

// /*use all facttoy fucntion
//  * console game
//  * 1 - user input logic of player 1 and player 2 one by one
//  * 2 - fill in the matrix
//  * 3- form the winner declaring function  or draw
//  * 4 -
//  * ui game
//  */

// function Players(player1, p1Name, player2, p2Name) {
//   // constructor fucntion
//   this.player1 = player1;
//   this.p1Name = p1Name;
//   this.player2 = player2;
//   this.p2Name = p2Name;
// }

// function checkWinner(board) {
//   let time = 0;
//   while (time < 9) {
//     if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
//       console.log(`${board[0][0]} "is a winner"`);
//       return;
//     } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
//       console.log(`${board[0][2]} "is a winner"`);
//       return;
//     }

//     //find match in the rows

//     let win = false;
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 2; j++) {
//         if (board[i][j] == board[i][j + 1]) {
//           win = true;
//         } else {
//           win = false;
//           continue;
//         }
//       }
//       if (win == true) {
//         console.log(" row is a winner");
//         return;
//       }
//     }

//     // if match found in column

//     for (let j = 0; j < 3; j++) {
//       for (let i = 0; i < 2; i++) {
//         if (board[i][j] == board[i + 1][j]) {
//           win = true;
//         } else {
//           win = false;
//           break;
//         }
//       }
//       if (win == true) {
//         console.log("column is winnerJ");
//         return;
//       }
//     }
//   }

//   console.log("its a draw");

//
// }

// function gameBoard() {
//   const players = new Players("shubham", "X", "Vandana", "O");

//   let board = [
//     ["X", "X", "O"],
//     ["X", "X", "O"],
//     ["X", "O", ""],
//   ];

//   checkWinner(board);
//   //   let play = "";
//   //   for (let i = 0; i < 3; i++) {
//   //     // chance of player1 and player2

//   //     if (i % 2 == 0) {
//   //       play = prompt(`${players.p1Name}"turn!, Enter row column symbol"`);
//   //     } else {
//   //       play = prompt(`${players.p2Name}"turn!, Enter row column symbol"`);
//   //     }

//   //   console.log(play);
//   //    const x = play.split(" "); // extracting the row col  and symbol no;
//   //   console.log(x);

//   //   const row = x[0];
//   //   const col = x[1];
//   //   const sym =x[2];
//   //   console.log(row, col, sym);
//   //   board[row][col] = sym;

//   console.log(board);
// }

// gameBoard();
const scoreUI = document.querySelector("h3");
const pEl = document.querySelector("p");
let isRunning = false;
playGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getWinner(board) {
  for (let row of board) {
    const win = row.every((el) => el == row[0] && el != null);
    if (win) return { winner: row[0] };
  }

  for (let c = 0; c < 3; c++) {
    let same = true;
    for (let r = 0; r < 3; r++) {
      if (board[r][c] == null || board[r][c] != board[0][c]) same = false;
    }
    console.log("returning");
    if (same) return { winner: board[0][c] };
  }

  let isDiagonalSame = true;
  let isRevDiagonalSame = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] == null || board[i][i] != board[0][0])
      isDiagonalSame = false;
    if (board[i][2 - i] == null || board[i][2 - i] != board[0][2])
      isRevDiagonalSame = false;
  }
  if (isDiagonalSame) return { winner: board[0][0] };
  if (isRevDiagonalSame) return { winner: board[0][2] };

  return { winner: null };
}

function isDraw(board) {
  for (let row of board) {
    const isSame = row.every((el) => el != null);
    if (!isSame) return false;
  }
  return true;
}

// function checkWinner(board) {
//   if (
//     board[0][0] != null &&
//     board[0][0] === board[1][1] &&
//     board[1][1] === board[2][2]
//   ) {
//     console.log(`${board[0][0]} "is a winner"`);
//     return;
//   } else if (
//     board[0][2] !== null &&
//     board[0][2] === board[1][1] &&
//     board[1][1] === board[2][0]
//   ) {
//     console.log(`${board[0][2]} "is a winner"`);
//     return;
//   }

//   //find match in the rows

//   let win = false;
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//       if (board[i][j] != null && board[i][j] == board[i][j + 1]) {
//         win = true;
//       } else {
//         win = false;
//         break;
//       }
//     }
//     if (win == true) {
//       console.log(" row is a winner");
//       return;
//     }
//   }

// if match found in column

//   for (let j = 0; j < 3; j++) {
//     for (let i = 0; i < 2; i++) {
//       if (board[i][j] != null && board[i][j] == board[i + 1][j]) {
//         win = true;
//       } else {
//         win = false;
//         break;
//       }
//     }
//     if (win == true) {
//       console.log("column is winnerJ");
//       return;
//     }
//   }
// }
let scoreOfP1 = 0;
let scoreOfP2 = 0;
const scorep1 = document.querySelector(".scoreP1");
const scorep2 = document.querySelector(".scoreP2");
let currentPlayer = "X";
function togglePlayersTurn(box) {
  box.innerText = currentPlayer;
  currentPlayer = currentPlayer == "X" ? "O" : "X";
}

function playing(p1, p2) {
  document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "rgb(180, 214, 204)";
  });
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", (event) => {
      if (!isRunning) return;

      if (box.innerText != "") return;
      box.innerText = currentPlayer;

      let x = event.target.getAttribute("class");
      x = x.split(" ");
      console.log(x[1], x[2]);
      const r = x[1];
      const c = x[2];
      playGame[r][c] = box.innerText;

      togglePlayersTurn(box); // changeing name according to the turn;
      if (currentPlayer == "X") pEl.innerText = `Its ${p1} turn`;
      else pEl.innerText = `Its ${p2} turn`;
      // checkWinner(playGame);
      const res = getWinner(playGame);
      if (res.winner) {
        if (res.winner == "X") {
          pEl.innerText = `${p1} won the match`;
          scoreOfP1++;
          scorep1.innerText = scoreOfP1;
          pEl.classList.add("winner-glow");
        } else {
          pEl.innerText = `${p2} won the match`;
          scoreOfP2++;
          scorep2.innerText = scoreOfP2;
          pEl.classList.add(".winner-glow");
        }
        pEl.style.backgroundColor = "#ffb900";
        isRunning = false;
      } else if (isDraw(playGame)) {
        console.log("it s a draw");
        pEl.innerText = "Match Draw :(";

        pEl.style.backgroundColor = "#ffb900";

        isRunning = false;
      }
    });
  });
}

function UserName() {
  const playerFirst = document.querySelector("#player1");
  const playerSecond = document.querySelector("#player2");
  const p1 = playerFirst.value;
  const p2 = playerSecond.value;
  // handling invalid input
  if (p1 == "" || p2 == "") {
    alert("Choose both Players");
    return;
  }

  const p1ScoreEl = document.querySelector(".p1Score");
  const p2ScoreEl = document.querySelector(".p2Score");
  console.log(p2ScoreEl, p1ScoreEl);
  // changing the scoreboard name
  p1ScoreEl.innerText = p1;
  p2ScoreEl.innerText = p2;
  pEl.innerText = `Its ${p1} turn`; // already setting player one name
  isRunning = true;
  playing(p1, p2);

  const player1El = document.querySelector(".player1-score");
  const player2El = document.querySelector(".player2-score");

  player1El.style.bottom = "20rem"; // Move player1 down
  player2El.style.bottom = "20rem"; // Move player2 down
  player1El.style.backgroundColor = " rgb(214, 227, 151)";
  player2El.style.backgroundColor = " rgb(214, 227, 151)";
}

const dialogEl = document.querySelector(".dialog-box");
const startEl = document.querySelector(".start");

startEl.addEventListener("click", () => {
  dialogEl.showModal();
  playerFirst.value = "";
  playerSecond.value = "";
});

document.querySelector(".players").addEventListener("click", function (event) {
  event.preventDefault(); // inside form element it will prevent auto submission
  UserName();
  dialogEl.close();
});

const playgorundEl = document.querySelector(".playground");
console.log(playgorundEl);

const playerFirst = document.querySelector("#player1");
const playerSecond = document.querySelector("#player2");

function clearAllSymbols() {
  document.querySelectorAll(".box").forEach((box) => {
    box.innerText = "";
  });
  playGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const playerFirst = document.querySelector("#player1");
  console.log(playerFirst);
  const playerSecond = document.querySelector("#player2");
  const p1 = playerFirst.value;
  const p2 = playerSecond.value;
  if (p1 == "" || p2 == "") return;
  console.log(p1, p2);

  playing(p1, p2);

  isRunning = true;
  pEl.style.backgroundColor = "";
  pEl.textContent = `It's ${p1} 's turn`;
}
const resetEl = document.querySelector(".reset");
resetEl.addEventListener("click", clearAllSymbols);
