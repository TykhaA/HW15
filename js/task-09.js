const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

button.addEventListener('click', handleChangeColor);

function handleChangeColor(evt) {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
