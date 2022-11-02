export default function tabNav() {}
const items = document.querySelectorAll('.js [data-content] > ul');
const buttons = document.querySelectorAll('.js [data-buttons] > button');
const switchButton = document.querySelector('.js [data-switch]');

if (items.length && buttons.length && switchButton) {
  items[0].classList.add('active');
  buttons[0].classList.add('active');

  function aciveTab(index) {
    const filter = document.getElementById('filter');
    filter.classList.toggle('hidden');

    switchButton.classList.toggle('active');

    items.forEach((item) => item.classList.remove('active'));
    items[index].classList.add('active');

    buttons.forEach((button) => button.classList.remove('active'));
    buttons[index].classList.add('active');
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => aciveTab(index));
  });
}
