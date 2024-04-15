

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
};

const buttonAll = document.querySelectorAll('button');
buttonAll.forEach((btn) => {
  btn.addEventListener('click', CircleorCross);
})


const navRestart = (event) => {
if (confirm('Do you want to start playing again?') === true) { event.setAttribute('href', 'hra.html');
}
else {
  event.preventDefault();
}
};
document.querySelector('.game-restart').addEventListener('click', navRestart);

