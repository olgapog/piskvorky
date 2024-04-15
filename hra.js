import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';




const buttonAll = document.querySelectorAll('button');


let currentPlayer = 'circle';
const CircleorCross = (event) => {
  event.target.disabled = true;
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

// Spojeni pole s button

const gameArray = [...buttonAll];
gameArray.map((button) => {
  if (button.classList.contains('board__field--circle')) {
    return '0';
  }
   else if (button.classList.contains('board__field--cross')) {
    return 'x';
   }
   else {
    return '_';
   }
});



};




buttonAll.forEach((btn) => {
  btn.addEventListener('click', CircleorCross);
})

// Restart hry
const navRestart = (event) => {
if (confirm('Do you want to start playing again?') === true) { event.setAttribute('href', 'hra.html');
}
else {
  event.preventDefault();
}
};
document.querySelector('.game-restart').addEventListener('click', navRestart);

