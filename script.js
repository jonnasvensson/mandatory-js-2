
let player1 = { info: 'X'};
let player2 = { info: 'O'};
let gameOver = false;
let rounds = 0;

let player = player1;

const winningArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];


let boxes = document.querySelectorAll('.box');
let button = document.querySelector('button');
let main = document.querySelector('main');

let winningBox = document.querySelector('.winningBox');
let winningTitle = document.querySelector('.winningTitle');
let tieTitle = document.querySelector('.tieTitle');

Array.from(boxes).forEach(function(box) {
  box.addEventListener('click', function(e) {
    if (gameOver) {
      return;
    }
    let checkBox = this.textContent;
    box.setAttribute('style', 'font-family: Special Elite; font-size: 100px; text-align: center; line-height: 180px;')
    if (checkBox === "") {
      this.textContent = player.info;
      rounds++;
      winningplayer2();
      console.log(player1);
      if (player.info === player1.info) {
        player = player2;
      } else {
        player = player1;
      }
    }
  });
});

let x = 'X is the winner!';
let o = 'O is the winner';


button.addEventListener('click', function(e) {
  Array.from(boxes).forEach(function(box) {
    box.innerHTML = "";
    winningBox.style.display = 'none';
    player = player1;
    gameOver = false;
  });
});


function winningplayer2() {
  let xWon = isWinner("X");
  let oWon = isWinner("O");
  if (xWon === true) {
    gameOver = true;
    winningBox.style.display = 'block';
    winningTitle.textContent = 'X';
    console.log('X won');
  } else if (oWon === true) {
    winningBox.style.display = 'block';
    winningTitle.textContent = 'O';
    console.log('O won');    
  } else if (rounds >= 9) {
    winningBox.style.display = 'block';
    tieTitle.style.display = 'block';
    console.log('Its a tie') 
  }
}

function isWinner(type) {
  for (var i = 0; i < winningArrays.length; i++) {
    let isthisWinningArray = winningArrays[i];
    let won = true;
    for (var j = 0; j < isthisWinningArray.length; j++) {
      let checkEveryBox = isthisWinningArray[j];
      console.log(checkEveryBox);
      let value = boxes[checkEveryBox].textContent;
      if (value !== type) {
        won = false;
        break;
      }
    }
    if (won) return true;
    console.log(isthisWinningArray);
  }
  return false;
}


let blink_speed = 500; 
setInterval(function () {
    winningTitle.style.visibility = (winningTitle.style.visibility === 'hidden' ? '' : 'hidden');
}, blink_speed);

setInterval(function () {
    tieTitle.style.visibility = (tieTitle.style.visibility === 'hidden' ? '' : 'hidden');
}, blink_speed);