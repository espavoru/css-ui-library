(() => {
  const form = document.querySelector('.page__form');
  const list = document.querySelector('.page__list');
  const input = document.querySelector('.page__input');

  form.addEventListener('submit', e => {
    e.preventDefault();

    console.log(input.value);
    console.log(list);
  })
})()
