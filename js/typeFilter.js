export default function typeFilter() {
  const filters = document.querySelectorAll('[data-filter]');
  filters[0].classList.add('active');

  function handleFilter(e, index) {
    const filter = e.target.dataset.filter;
    filters.forEach((filter) => filter.classList.remove('active'));
    filters[index].classList.add('active');
    filterType(filter);
  }

  function filterType(type) {
    const typeItens = [...document.querySelectorAll('[data-type]')];

    if (type === 'all') {
      typeItens.forEach((item) => item.classList.remove('hide'));
      return;
    }

    typeItens.forEach((item) => item.classList.add('hide'));
    const filteredItens = typeItens.filter(
      (item) => item.dataset.type === type,
    );

    filteredItens.forEach((item) => item.classList.remove('hide'));
  }

  filters.forEach((filter, index) => {
    filter.addEventListener('click', (e) => handleFilter(e, index));
  });
}
