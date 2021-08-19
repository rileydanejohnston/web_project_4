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
// handleCardClick is the logic that handles when a card photo is clicked. The photo/caption is put into a popup
/***********************************************************/

const handleCardClick = (e) => {
  const clickedPhoto = { 
    name: e.target.alt, 
    link: e.target.src 
  }
  
  const imagePopup = new PopupWithImage(clickedPhoto);
  imagePopup.open();
}


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
  formSubmission: ({ input1: name, input2: about }) => {
    userProfile.setUserInfo({ name: name, about: about });
    profilePopup.close();
    profileValidator.resetValidation();
  }
};

const placeFormInfo = {
  formSelector: '#place-popup',
  formSubmission: ({ input1: name, input2: link }) => {
    const addCard = new Card({ name, link }, '#cardTemplate', handleCardClick);
    cards.addItem(addCard.getCard());
    placePopup.close();
    newPlaceValidator.resetValidation();
  }
};

const sectionInfo = {
  items: initialCards, 
  renderer: (item) => {
    const newCard = new Card(item, '#cardTemplate', handleCardClick);
    cards.addItem(newCard.getCard());
  }
};

/***********************************************************/
// class instances
/***********************************************************/

const profileValidator = new FormValidator(settings, userInfoForm);
const newPlaceValidator = new FormValidator(settings, newPlaceForm);
const userProfile = new UserInfo(profileSelectors);
const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');
const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');
const cards = new Section(sectionInfo, '.cards');


/***********************************************************/
// event listeners
/***********************************************************/

editBtn.addEventListener('click', () => {
  profilePopup.setEventListeners();
  profilePopup.open();
});


addBtn.addEventListener('click', () => {
  placePopup.setEventListeners();
  placePopup.open();
});

/***********************************************************/
// method calls
/***********************************************************/

cards.renderElements();
profileValidator.enableValidation();
newPlaceValidator.enableValidation();