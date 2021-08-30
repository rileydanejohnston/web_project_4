import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from'../components/Api.js';
import './index.css';

import { picBtn, editBtn, addBtn, settings, newPicForm, userInfoForm, newPlaceForm, profileSelectors, avatar } from '../utils/constants.js';



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

    api.updateProfile(userProfile.getUserInfo())
      .then((res) => {
        if (res){
          console.log(`All good.`);
        }
      })
      .catch(() => {
        console.log(`Failed to update the profile`);
      });

    profilePopup.close();
    
  }
};

const placeFormInfo = {
  formSelector: '#place-popup',
  formSubmission: ({ title: name, link: link }) => {

    const addCard = createCard({ name, link }, '#cardTemplate', handleCardClick);
    cards.addItem(addCard.getCard());

    api.addCard(name, link)
      .then((res) => {
        console.log('New card was added');
      })
      .catch(() => {
        console.log('Failed to add new card');
      });

    placePopup.close();
    
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
let cards = null;



const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
      authorization: "2a32e80d-c23f-4ed9-9cf5-671c417d0702",
      "Content-Type": "application/json"
    }
});

api.getUserInfo()
  .then((res) => {
    userProfile.setUserInfo(res);
    avatar.src = res.avatar;
  })
  .catch(() => {
    console.log(`User info failed to load`);
  });



api.getCards()
  .then((res) => {

    const sectionInfo = {
      items: res, 
      renderer: (item) => {
        const newCard = createCard(item, '#cardTemplate', handleCardClick);
        cards.addItem(newCard.getCard());
      }
    };

    cards = new Section(sectionInfo, '.cards');
    cards.renderElements();
  })
  .catch(() => {
    console.log(`The cards failed to load`);
  });







profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();
newPicPopup.setEventListeners();

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