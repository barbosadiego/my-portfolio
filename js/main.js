const items = document.querySelectorAll('.js [data-content] > ul');
const buttons = document.querySelectorAll('.js [data-buttons] > button');
const switchButton = document.querySelector('.js [data-switch]');

if (items.length && buttons.length && switchButton) {
  items[0].classList.add('active');
  buttons[0].classList.add('active');

  function aciveTab(index) {
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

// switch dark-mode
const btn = document.querySelector('[data-darkmode]');

if (btn) {
  btn.addEventListener('click', () =>
    document.querySelector('body').classList.toggle('dark'),
  );
}
