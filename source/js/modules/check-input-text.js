const input = document.querySelectorAll('.form__input-area');

const checkInputText = () => {
  input.forEach((elem) => {

    elem.addEventListener('input', () => {
      if (elem.value) {
        elem.classList.add('form__input-area--active');
      } else {
        elem.classList.remove('form__input-area--active');
      }
    });
  });
};

export {checkInputText};
