
import './index.css';

import { profilePopup, placePopup, imagePopup, cards, profileValidator, newPlaceValidator, editBtn, addBtn, userProfile } from '../utils/constants.js';


profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();

cards.renderElements();

profileValidator.enableValidation();
newPlaceValidator.enableValidation();




editBtn.addEventListener('click', () => {
  profileValidator.resetValidation();

  profilePopup.setInputs(userProfile.getUserInfo());

  profilePopup.open();
});

addBtn.addEventListener('click', () => {
  newPlaceValidator.resetValidation();
  placePopup.open();
});