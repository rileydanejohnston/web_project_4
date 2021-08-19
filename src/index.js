import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import './styles/index.css';

import stPaul from './images/cities/stPaul.png';
import la from './images/cities/losAngeles.png';
import kansas from './images/cities/kansasCity.png';
import charleston from './images/cities/charleston.png';
import austin from './images/cities/austin.png';
import albuquerque from './images/cities/albuquerque.png';


const userInfoForm = document.querySelector('#profile-popup');
const newPlaceForm = document.querySelector('#place-popup');
const addBtn = document.querySelector('.profile__add-button');
const editBtn = document.querySelector('.profile__edit-button');


const settings = {
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

/***********************************************************/
/* profileSelectors, profileFormInfo, placeFormInfo, & sectionInfo hold data needed to make various class instances. 
      - created separate from class instances for readability                                 */
/***********************************************************/

const profileSelectors = {
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about'
};

const profileFormInfo = {
  formSelector: '#profile-popup',
  formSubmission: ({ name, about }) => {
    userProfile.setUserInfo({ name: name, about: about });
    profilePopup.close();
    
  }
};

const createCard = (cardInfo, cardSelector, cardClick) => {
  return new Card(cardInfo, cardSelector, cardClick);
}

const placeFormInfo = {
  formSelector: '#place-popup',
  formSubmission: ({ title: name, link: link }) => {
    const addCard = createCard({ name, link }, '#cardTemplate', handleCardClick);
    cards.addItem(addCard.getCard());
    placePopup.close();
    
  }
};

const sectionInfo = {
  items: initialCards, 
  renderer: (item) => {
    const newCard = createCard(item, '#cardTemplate', handleCardClick);
    cards.addItem(newCard.getCard());
  }
};


const handleCardClick = (e) => {
  const clickedPhoto = { name: e.target.alt, link: e.target.src }
  imagePopup.open(clickedPhoto);
}

/***********************************************************/
// class instances
/***********************************************************/

const profileValidator = new FormValidator(settings, userInfoForm);
const newPlaceValidator = new FormValidator(settings, newPlaceForm);
const userProfile = new UserInfo(profileSelectors);
const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');
const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');
const imagePopup = new PopupWithImage('#photo');
const cards = new Section(sectionInfo, '.cards');


profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();

/***********************************************************/
// event listeners
/***********************************************************/

editBtn.addEventListener('click', () => {
  profileValidator.resetValidation();
  profilePopup.open();
});


addBtn.addEventListener('click', () => {
  newPlaceValidator.resetValidation();
  placePopup.open();
});

/***********************************************************/
// method calls
/***********************************************************/

cards.renderElements();
profileValidator.enableValidation();
newPlaceValidator.enableValidation();