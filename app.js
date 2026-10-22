let count = 0;

const counterElement = document.getElementById('counter');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

btnIncrement.addEventListener('click', () => {
  count++;
  updateCounter();
});

btnDecrement.addEventListener('click', () => {
  count--;
  updateCounter();
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

function updateCounter() {
  counterElement.textContent = count;
}
