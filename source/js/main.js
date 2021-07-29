
import {iosVhFix} from './utils/ios-vh-fix';
import {checkInputText} from './modules/check-input-text';
import {checkInput} from './modules/check-input';
import {loadLocalStorage} from './modules/localStorage';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    checkInputText();
    checkInput();
    loadLocalStorage();
  });
});

