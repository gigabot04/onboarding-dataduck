const input = document.querySelectorAll('.form__input-area');
const btn = document.querySelector('.form__submit');

const checkInput = () => {
  btn.addEventListener('click', (evt) => {
    input.forEach((element) => {
      if (!element.valid) {
        evt.preventDefault();
        element.classList.add('form__input-area--error');
      }
    });
  });
};

export {checkInput};
