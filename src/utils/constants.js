import { profilePopup, placePopup, cards, userProfile, createCard, handleCardClick } from '../page/index.js';
import Card from '../components/Card.js';

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

const initialCards = [
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