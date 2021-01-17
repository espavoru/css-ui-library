(() => {
  const form = document.querySelector('.page__form');
  const list = document.querySelector('.page__list');
  const input = document.querySelector('.page__input');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const item = document.createElement('div');
    item.classList.add('page__list-item');
    item.textContent = input.value;

    list.appendChild(item);
    input.value = '';

    item.addEventListener('click', () => {
      item.remove();
    })
  })
})()
