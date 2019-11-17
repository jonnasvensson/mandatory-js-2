
let player1 = { innerText: 'X'};
let player2 = { innerText: 'O'};
let player = 1;
let gameOver = false;
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

Array.from(boxes).forEach(function(box) {
  box.addEventListener('click', function(e) {
    if (gameOver) {
      return;
    }
    let checkBox = e.target.textContent;
    box.setAttribute('style', 'font-size: 100px; text-align: center; line-height: 185px;')
    if (player === 1 && checkBox === "") {
      e.target.innerText = player1.innerText;
      player -=1;
      winningPlayer();
      console.log(player1);
    } else if (player !== 1 && checkBox === ""){
      e.target.innerText = player2.innerText;
      player += 1;
      winningPlayer();
      console.log(player2);

    }
  });
});

let x = 'X is the winner!';
let o = 'O is the winner';

function winningPlayer() { // Hur kan jag korta ner denna bit? Finns loop i en loop längst ned!!!!
  if (boxes[0].innerText === 'X' && boxes[1].innerText === 'X' && boxes[2].innerText === 'X' ||
      boxes[3].innerText === 'X' && boxes[4].innerText === 'X' && boxes[5].innerText === 'X' ||
      boxes[6].innerText === 'X' && boxes[7].innerText === 'X' && boxes[8].innerText === 'X' ||
      boxes[0].innerText === 'X' && boxes[3].innerText === 'X' && boxes[6].innerText === 'X' ||
      boxes[1].innerText === 'X' && boxes[4].innerText === 'X' && boxes[7].innerText === 'X' ||
      boxes[2].innerText === 'X' && boxes[5].innerText === 'X' && boxes[8].innerText === 'X' ||
      boxes[0].innerText === 'X' && boxes[4].innerText === 'X' && boxes[8].innerText === 'X' ||
      boxes[2].innerText === 'X' && boxes[4].innerText === 'X' && boxes[6].innerText === 'X') {
    gameOver = true;
    alert(x);
    console.log(x);
  } else if (boxes[0].innerText === 'O' && boxes[1].innerText === 'O' && boxes[2].innerText === 'O' ||
             boxes[3].innerText === 'O' && boxes[4].innerText === 'O' && boxes[5].innerText === 'O' ||
             boxes[6].innerText === 'O' && boxes[7].innerText === 'O' && boxes[8].innerText === 'O' ||
             boxes[0].innerText === 'O' && boxes[3].innerText === 'O' && boxes[6].innerText === 'O' ||
             boxes[1].innerText === 'O' && boxes[4].innerText === 'O' && boxes[7].innerText === 'O' ||
             boxes[2].innerText === 'O' && boxes[5].innerText === 'O' && boxes[8].innerText === 'O' ||
             boxes[0].innerText === 'O' && boxes[4].innerText === 'O' && boxes[8].innerText === 'O' ||
             boxes[2].innerText === 'O' && boxes[4].innerText === 'O' && boxes[6].innerText === 'O') {
    gameOver = true;
    alert(o);
  }
}
winningPlayer();

button.addEventListener('click', function(e) {
  Array.from(boxes).forEach(function(box) {
  box.innerHTML = "";
  player = 1;
  gameOver = false;
  });
});

//Kan jag förenkla if satsen ovan?

for (var i = 0; i < winningArrays.length; i++) {
  let isthisWinningArray = winningArrays[i];
  for (var j = 0; j < isthisWinningArray.length; j++) {
    let checkEveryBox = isthisWinningArray[j];
    console.log(checkEveryBox);
  }
  console.log(isthisWinningArray);
}
