export default function darkThene() {
  const btn = document.querySelector('[data-darkmode]');
  const bodyEl = document.querySelector('body');

  if (btn) {
    btn.addEventListener('click', () => {
      localStorage.darkmode = true;
      bodyEl.classList.toggle('dark');
      handleDark();
    });
  }

  function handleDark() {
    const state = bodyEl.classList.contains('dark');
    localStorage.darkmode = state;
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
}
