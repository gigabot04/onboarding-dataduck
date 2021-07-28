
import {iosVhFix} from './utils/ios-vh-fix';
import {checkInputText} from './modules/check-input-text';
import {checkAgreement} from './modules/check-agreement';
import {checkInput} from './modules/check-input';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    checkInputText();
    checkAgreement();
    checkInput();
  });
});

