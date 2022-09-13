const items = document.querySelectorAll("[data-content] > ul");
const buttons = document.querySelectorAll("[data-buttons] > button");
const switchButton = document.querySelector("[data-switch]");

items[0].classList.add('active');
buttons[0].classList.add('active');

function aciveTab(index){
  switchButton.classList.toggle('active');
  
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');

  buttons.forEach((button) => button.classList.remove('active'));
  buttons[index].classList.add('active');
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => aciveTab(index))
})