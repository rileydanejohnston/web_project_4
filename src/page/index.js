import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

import { editBtn, addBtn, settings, userInfoForm, newPlaceForm, profileSelectors, profileFormInfo, placeFormInfo, sectionInfo } from '../utils/constants.js';



export const createCard = (cardInfo, cardSelector, cardClick) => {
  return new Card(cardInfo, cardSelector, cardClick);
}

export const handleCardClick = (e) => {
  const clickedPhoto = { name: e.target.alt, link: e.target.src }
  imagePopup.open(clickedPhoto);
}



const profileValidator = new FormValidator(settings, userInfoForm);
const newPlaceValidator = new FormValidator(settings, newPlaceForm);
export const userProfile = new UserInfo(profileSelectors);
export const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');

const imagePopup = new PopupWithImage('#photo');
export const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');
export const cards = new Section(sectionInfo, '.cards');



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