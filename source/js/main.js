
import {iosVhFix} from './utils/ios-vh-fix';
import {checkInputText} from './modules/check-input-text';
import {checkAgreement} from './modules/check-agreement';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    checkInputText();
    checkAgreement();
  });
});

