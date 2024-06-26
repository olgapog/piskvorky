import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const buttonAll = document.querySelectorAll('button');
let currentPlayer = 'circle';




const CircleorCross = async (event) => {

if (currentPlayer === 'circle') {
  event.target.classList.add('board__field--circle');
  const imgCross = document.querySelector('.image-player');
  imgCross.src = 'image/cross.svg';
  currentPlayer = 'cross';
}
else {
  event.target.classList.add('board__field--cross');
  const imgCircle = document.querySelector('.image-player');
  imgCircle.src = 'image/circle.svg';
  currentPlayer = 'circle';
}
event.target.disabled = true;

// Kontrola hry o výhru
const symbol = [...buttonAll].map((btn) => {
if (btn.classList.contains('board__field--circle')) {
  return 'o';
}
else if (btn.classList.contains('board__field--cross')) {
  return 'x';
}
else {
  return '_';
}
});

const winner = findWinner(symbol);

if (winner === 'o' || winner === 'x') {
  setTimeout(() => {
  alert(`Win player with symbol ${winner}!`);
  location.reload();},200 );
}

else if (winner === 'tie') {
  setTimeout(() => {
  alert('The play is tie!');
   location.reload();}, 200 );
} 

// Ukol #5

else {
if (currentPlayer === 'cross'){
  const response = await fetch("https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
{
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    board: symbol,
    player: "x",
  }),
});

const data = await response.json();
const { x, y } = data.position;
const index = buttonAll[x + y * 10];

index.click();
}
}
};


buttonAll.forEach((btn) => {
 btn.addEventListener('click', CircleorCross);
});

//Restart hry
const navRestart = (event) => {
if (confirm('Do you want to start playing again?') === true) { event.setAttribute('href', 'hra.html');
}
else {
  event.preventDefault();
}
};
document.querySelector('.game-restart').addEventListener('click', navRestart);

