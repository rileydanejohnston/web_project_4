import stPaul from '../images/cities/stPaul.png';
import la from '../images/cities/losAngeles.png';
import kansas from '../images/cities/kansasCity.png';
import charleston from '../images/cities/charleston.png';
import austin from '../images/cities/austin.png';
import albuquerque from '../images/cities/albuquerque.png';

export const userInfoForm = document.querySelector('#profile-popup');
export const newPlaceForm = document.querySelector('#place-popup');
export const newPicForm = document.querySelector('#profile-pic');
export const addBtn = document.querySelector('.profile__add-button');
export const editBtn = document.querySelector('.profile__edit-button');
export const picBtn = document.querySelector('.profile__avatar-btn');
export const avatar = document.querySelector('.profile__avatar');

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