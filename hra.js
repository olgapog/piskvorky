let currentPlayer = 'circle';

const selectCircle = (event) => {
  event.target.classList.add('board__field--circle');
};

const buttonsRow1 = document.querySelectorAll('.button-row1 .button');
buttonsRow1.forEach((button) => {
  button.addEventListener('click', selectCircle);
});


/*const button1Row1 = document.querySelector('.button-row1:nth-child(1) .button');

button1Row1.addEventListener('click', selectCircle);


const selectCross = (event) => {
  event.target.classList.add('board__field--cross');
};

const button2Row1 = document.querySelector('.button-row1:nth-child(2) .button');

button2Row1.addEventListener('click', selectCross);*/


