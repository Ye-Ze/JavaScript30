const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let lastHole;
let turnOff = false;
let currentScore = 0;
function randomTime(min, max) {
  let time = Math.floor(Math.random() * (max - min) + min);
  return time;
}

function randomHole() {
  let index = randomTime(0, 6);
  let selectedHole = holes[index];
  if (selectedHole === lastHole) {
    return randomHole();
  } else {
    lastHole = selectedHole;
    return selectedHole;
  }
}

function startGame() {
  currentScore = 0;
  scoreBoard.innerHTML = currentScore;
  popUp();
  setTimeout(() => {
    turnOff = true;
  }, 10000);
}
function popUp() {
  let time = randomTime(500, 900);
  let hole = randomHole();
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (turnOff === false) {
      popUp();
    } else {
      turnOff = false;
    }
  }, time);
}

function addScore(e) {
  if (!e.isTrusted) return;
  this.classList.remove("up");
  currentScore++;
  scoreBoard.innerHTML = currentScore;
}

moles.forEach((mole) => {
  mole.addEventListener("click", addScore);
});
