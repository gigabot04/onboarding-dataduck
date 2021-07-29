const input = document.querySelectorAll('.form__input-area');
const btn = document.querySelector('.form__submit');
const inputArgeement = document.querySelector('.form__agreement-input');
const labelArgeement = document.querySelector('.form__agreement');

labelArgeement.addEventListener('click', () => {
  if (labelArgeement.classList.contains('form__agreement--error')) {
    labelArgeement.classList.remove('form__agreement--error');
  }
});

const checkInput = () => {
  btn.addEventListener('click', (evt) => {
    input.forEach((element) => {
      if (!element.valid && !inputArgeement.checked) {
        evt.preventDefault();
        element.classList.add('form__input-area--error');
        labelArgeement.classList.add('form__agreement--error');
      }
    });
  });
};

export {checkInput};
