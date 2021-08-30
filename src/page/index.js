import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from'../components/Api.js';
import './index.css';

import { picBtn, editBtn, addBtn, settings, newPicForm, userInfoForm, newPlaceForm, profileSelectors, initialCards, avatar } from '../utils/constants.js';



const createCard = (cardInfo, cardSelector, cardClick) => {
  return new Card(cardInfo, cardSelector, cardClick);
}

const handleCardClick = (e) => {
  const clickedPhoto = { name: e.target.alt, link: e.target.src }
  imagePopup.open(clickedPhoto);
}


const newPicInfo = {
  formSelector: '#profile-pic',
  formSubmission: ({ pic }) => {
    console.log('UNDER CONSTRUCTION');
    newPicPopup.close();
  }
}

const profileFormInfo = {
  formSelector: '#profile-popup',
  formSubmission: ({ name, about }) => {
    userProfile.setUserInfo({ name: name, about: about });
    profilePopup.close();
    
  }
};

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



const profileValidator = new FormValidator(settings, userInfoForm);
const newPlaceValidator = new FormValidator(settings, newPlaceForm);
const newPicValidator = new FormValidator(settings, newPicForm);
const userProfile = new UserInfo(profileSelectors);
const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');
const newPicPopup = new PopupWithForm(newPicInfo, '#profilePicPopup')
const imagePopup = new PopupWithImage('#photo');
const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');
const cards = new Section(sectionInfo, '.cards');



const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
      authorization: "2a32e80d-c23f-4ed9-9cf5-671c417d0702",
      "Content-Type": "application/json"
    }
});

api.loadUserInfo()
  .then((res) => {
    userProfile.setUserInfo(res);
    avatar.src = res.avatar;
  })
  .catch(() => {
    console.log(`Opps! I can't find that resource`);
  })

profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();
newPicPopup.setEventListeners();

cards.renderElements();

profileValidator.enableValidation();
newPlaceValidator.enableValidation();
newPicValidator.enableValidation();

picBtn.addEventListener('click', () => {
  newPicValidator.resetValidation();
  newPicPopup.open();
});

editBtn.addEventListener('click', () => {
  profileValidator.resetValidation();
  profilePopup.setInputs(userProfile.getUserInfo());
  profilePopup.open();
});

addBtn.addEventListener('click', () => {
  newPlaceValidator.resetValidation();
  placePopup.open();
});