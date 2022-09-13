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
const bodyEl = document.querySelector('body')

if (btn) {
  btn.addEventListener('click', () => {
    localStorage.darkmode = true;
    bodyEl.classList.toggle('dark');
    handleDark();
  });
}

function handleDark(){
  const state = bodyEl.classList.contains('dark')
  localStorage.darkmode = state
}

function checkDark() {
  const mode = JSON.parse(localStorage.darkmode);
  if (mode) {
    bodyEl.classList.add('dark');
  } else {
    bodyEl.classList.remove('dark');
  }
}

checkDark();

//footer date
const dateEl = document.querySelector('[data-time]');
const atualDate = new Date().getFullYear();
dateEl.innerHTML = atualDate

