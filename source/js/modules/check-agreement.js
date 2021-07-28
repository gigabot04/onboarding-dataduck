const btn = document.querySelector('.form__submit');
const input = document.querySelector('.form__agreement-input');
const label = document.querySelector('.form__agreement');

label.addEventListener('click', () => {
  if (label.classList.contains('form__agreement--error')) {
    label.classList.remove('form__agreement--error');
  }
});

const checkAgreement = () => {
  btn.addEventListener('click', (evt) => {
    if (!input.checked) {
      evt.preventDefault();
      label.classList.add('form__agreement--error');
    }
  });
};

export {checkAgreement};
