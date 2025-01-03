// CREATION OF ALL ELEMENTS WITH DOM MANIPULATION:

const body = document.querySelector("body");

// H1 Creation
const h1 = document.createElement("h1");
h1.classList.add("title");
h1.innerText = "Dice Game!";
body.appendChild(h1);

// Game Board creation
const gameBoard = document.createElement("section");
gameBoard.classList.add("game-board");
body.appendChild(gameBoard);

const player1Container = document.createElement("div");
const player2Container = document.createElement("div");

player1Container.classList.add("container");
player2Container.classList.add("container");

gameBoard.appendChild(player1Container);
gameBoard.appendChild(player2Container);

// Player 1
const player1Title = document.createElement("h2");
const dice1 = document.createElement("img");

player1Title.classList.add("player-title");
dice1.classList.add("dice-1");
dice1.setAttribute("src", `./assets/dice6.png`);

player1Title.innerText = "Player 1";

player1Container.appendChild(player1Title);
player1Container.appendChild(dice1);

// Player 2
const player2Title = document.createElement("h2");
const dice2 = document.createElement("img");
dice2.setAttribute("src", `./assets/dice6.png`);

player2Title.classList.add("player-title");
dice2.classList.add("dice-2");

player2Title.innerText = "Player 2";

player2Container.appendChild(player2Title);
player2Container.appendChild(dice2);

// Roll Dice Button

const rollBtn = document.createElement("button");
rollBtn.classList.add("roll-btn");
rollBtn.innerText = "Roll the dice";
rollBtn.addEventListener("click", () => {
  rollDice();
});

body.appendChild(rollBtn);

// Winner Sign
const resultSign = document.createElement("article");
resultSign.classList.add("results-sign");
resultSign.classList.add("hidden");
const resultH2 = document.createElement("h2");

body.appendChild(resultSign);
resultSign.appendChild(resultH2);

// GAME LOGIC

// Roll the dice:
let dice1Num;
let dice2Num;

function rollDice() {
  dice1.classList.add("spin");
  dice2.classList.add("spin");

  // roll dice
  setTimeout(() => {
    dice1Num = Math.ceil(Math.random() * 6);
    dice2Num = Math.ceil(Math.random() * 6);

    // remove animation
    dice1.classList.remove("spin");
    dice2.classList.remove("spin");

    // update dice images
    dice1.setAttribute("src", `./assets/dice${dice1Num}.png`);
    dice2.setAttribute("src", `./assets/dice${dice2Num}.png`);

    // show result
    rollBtn.disabled = true;
    winnerIs();
  }, 500);
}

// Changing Result Sign

function winnerIs() {
  resultH2.innerText =
    dice1Num > dice2Num
      ? "Player 1 wins!"
      : dice1Num < dice2Num
      ? "Player 2 wins!"
      : "It's a draw!";

  resultSign.classList.remove("hidden");
  setTimeout(() => {
    resultSign.classList.add("hidden");
    rollBtn.disabled = false;
  }, 1500);
}
