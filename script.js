
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

let xStyling = document.querySelector('.x-styling');
let oStyling = document.querySelector('.o-styling');
let noOneStyling = document.querySelector('.no-one-styling');

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
    xStyling.style.display = 'none';
    oStyling.style.display = 'none';
    noOneStyling.style.display = 'none';
    player = player1;
    gameOver = false;
  });
});


function winningplayer2() {
  let xWon = isWinner("X");
  let oWon = isWinner("O");
  if (xWon === true) {
    gameOver = true;
    xStyling.style.display = 'block';
    console.log('X won');
  } else if (oWon === true) {
    oStyling.style.display = 'block';
    console.log('O won');    
  } else if (rounds >= 9) {
    noOneStyling.style.display = 'block';
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
    let xTitle = document.querySelector('.x-title');
    xTitle.style.visibility = (xTitle.style.visibility === 'hidden' ? '' : 'hidden');
}, blink_speed);


setInterval(function () {
    let oTitle = document.querySelector('.o-title');
    oTitle.style.visibility = (oTitle.style.visibility === 'hidden' ? '' : 'hidden');
}, blink_speed);


setInterval(function () {
  let noOne = document.querySelector('.no-one');
  noOne.style.visibility = (noOne.style.visibility === 'hidden' ? '' : 'hidden');
}, blink_speed);