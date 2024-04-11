let currentPlayer = 'circle';

const selectCircle = (event) => {
  event.target.classList.add('board__field--circle');
};

const selectCross = (event) => {
  event.target.classList.add('board__field--cross');
};


document.querySelector('button:nth-child(1)').addEventListener('click', selectCircle);

document.querySelector('button:nth-child(2)').addEventListener('click', selectCross);

document.querySelector('button:nth-child(3)').addEventListener('click', selectCircle);

document.querySelector('button:nth-child(4)').addEventListener('click', selectCross);

document.querySelector('button:nth-child(5)').addEventListener('click', selectCircle);

document.querySelector('button:nth-child(6)').addEventListener('click', selectCross);

document.querySelector('button:nth-child(7)').addEventListener('click', selectCircle);

document.querySelector('button:nth-child(8)').addEventListener('click', selectCross);

document.querySelector('button:nth-child(9)').addEventListener('click', selectCircle);

document.querySelector('button:nth-child(10)').addEventListener('click', selectCross);


