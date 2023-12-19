const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', handleCreate);
destroy.addEventListener('click', handleDestroy);

function handleCreate(evt) {
  createBoxes(input.value );
}
function createBoxes(amount) {
  let valueSize = 30;
  destroyBoxes();
  for (let i = 0; i < amount; i += 1){
    boxes.insertAdjacentHTML('beforeend', `<div style="width:${valueSize}px; height:${valueSize}px; background-color:${getRandomHexColor()}; margin: 10px 0"></div>`);
    valueSize += 10; 
  }
}
function handleDestroy(){
  destroyBoxes()
}


function destroyBoxes() {
   boxes.replaceChildren()
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
