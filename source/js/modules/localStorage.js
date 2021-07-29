const form = document.querySelector('.form');
const inputEmail = document.querySelector('.form__input-area');
let storageEmail = '';
let isStorageSupport = true;
const loadLocalStorage = () => {
  try {
    storageEmail = localStorage.getItem('email');
    inputEmail[0].classList.add('form__input-area--active');
  } catch (err) {
    isStorageSupport = false;
  }
  if (storageEmail) {
    inputEmail.value = storageEmail;
  }

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('email', inputEmail.value);
    }
  });
};

export {loadLocalStorage};
