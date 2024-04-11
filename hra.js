

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

document.querySelector('button:nth-child(1)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(2)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(3)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(4)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(5)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(6)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(7)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(8)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(9)').addEventListener('click', CircleorCross);
document.querySelector('button:nth-child(10)').addEventListener('click', CircleorCross);


const navRestart = (event) => {
if (confirm('Do you want to start playing again?') === true) { event.setAttribute('href', 'hra.html')
}
else {
  event.preventDefault();
}
};

document.querySelector('.game-restart').addEventListener('click', navRestart);

