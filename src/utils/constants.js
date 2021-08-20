import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import stPaul from '../images/cities/stPaul.png';
import la from '../images/cities/losAngeles.png';
import kansas from '../images/cities/kansasCity.png';
import charleston from '../images/cities/charleston.png';
import austin from '../images/cities/austin.png';
import albuquerque from '../images/cities/albuquerque.png';

export const userInfoForm = document.querySelector('#profile-popup');
export const newPlaceForm = document.querySelector('#place-popup');
export const addBtn = document.querySelector('.profile__add-button');
export const editBtn = document.querySelector('.profile__edit-button');

export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

export const initialCards = [
  {
    name: "St. Paul",
    link: stPaul
  },
  {
    name: "Los Angeles",
    link: la
  },
  {
    name: "Kansas City",
    link: kansas
  },
  {
    name: "Charleston",
    link: charleston
  },
  {
    name: "Austin",
    link: austin
  },
  {
    name: "Albuquerque",
    link: albuquerque
  },
];

export const profileSelectors = {
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about'
};

export const profileFormInfo = {
  formSelector: '#profile-popup',
  formSubmission: ({ name, about }) => {
    userProfile.setUserInfo({ name: name, about: about });
    profilePopup.close();
    
  }
};

export const createCard = (cardInfo, cardSelector, cardClick) => {
  return new Card(cardInfo, cardSelector, cardClick);
}

export const placeFormInfo = {
  formSelector: '#place-popup',
  formSubmission: ({ title: name, link: link }) => {
    const addCard = createCard({ name, link }, '#cardTemplate', handleCardClick);
    cards.addItem(addCard.getCard());
    placePopup.close();
    
  }
};

export const sectionInfo = {
  items: initialCards, 
  renderer: (item) => {
    const newCard = createCard(item, '#cardTemplate', handleCardClick);
    cards.addItem(newCard.getCard());
  }
};

export const handleCardClick = (e) => {
  const clickedPhoto = { name: e.target.alt, link: e.target.src }
  imagePopup.open(clickedPhoto);
}

export const profileValidator = new FormValidator(settings, userInfoForm);
export const newPlaceValidator = new FormValidator(settings, newPlaceForm);
export const userProfile = new UserInfo(profileSelectors);
export const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');
export const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');
export const imagePopup = new PopupWithImage('#photo');
export const cards = new Section(sectionInfo, '.cards');