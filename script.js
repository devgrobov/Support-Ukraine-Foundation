const form = document.querySelector('form');

form.addEventListener('submit', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  event.target.reset();
};