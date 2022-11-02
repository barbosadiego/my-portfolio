// tab navigation
import tabNav from './tabNav.js';
// dark-mode
import darkThene from './darkTheme.js';
// content filter
import typeFilter from './typeFilter.js';

// init
tabNav();
darkThene();
typeFilter();

// footer date
const dateEl = document.querySelector('[data-time]');
const atualDate = new Date().getFullYear();
dateEl.innerHTML = atualDate;
