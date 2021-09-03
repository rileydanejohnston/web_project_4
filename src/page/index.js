import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from'../components/Api.js';
import './index.css';

import { picBtn, editBtn, addBtn, settings, newPicForm, userInfoForm, newPlaceForm, profileSelectors, avatar } from '../utils/constants.js';


let cardToDelete = null;
let likeCard = null;
let cards = null;
let myId = null;


const createCard = (cardInfo, cardSelector, cardClick, deleteClick, handleLikeCard) => {
  return new Card(cardInfo, cardSelector, cardClick, deleteClick, handleLikeCard);
}

const handleLikeCard = (id, isLiked) => {
  if (isLiked){
    return api.addLike(id);
  }
  else {
    return api.removeLike(id);
  }  
}

const handleCardClick = (img) => {
  const clickedPhoto = { name: img.alt, link: img.src }
  imagePopup.open(clickedPhoto);
}


const newPicInfo = {
  formSelector: '#profile-pic',
  formSubmission: ({ pic }) => {

    api.updateProfilePic(pic)
      .then((res) => {
        console.log('Profile pic updated on the server');
        newPicPopup.close();
        avatar.style.backgroundImage = `url(${pic})`;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        newPicPopup.saveMessage(false);
      });
  }
}

const profileFormInfo = {
  formSelector: '#profile-popup',
  formSubmission: ({ name, about }) => {

    api.updateProfile(userProfile.getUserInfo())
      .then((res) => {
        userProfile.setUserInfo({ name: name, about: about });
        console.log(`The profile has been updated.`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePopup.saveMessage(false);
        profilePopup.close();
      });
  }
};

const placeFormInfo = {
  formSelector: '#place-popup',
  formSubmission: ({ title: name, link: link }) => {

    api.addCard(name, link)
      .then((res) => {
        const addCard = createCard(res, '#cardTemplate', handleCardClick, handleBinClick, handleLikeCard);
        cards.addItem(addCard.getCard(myId));
        console.log('New card was added');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        placePopup.saveMessage(false);
        placePopup.close();
      });
  }
};

const deletePopupInfo = {
  formSelector: '#confirm-form',
  formSubmission: () => {
    
    api.deleteCard(cardToDelete.id)
      .then((res) => {
        deletePopup.close();
        cardToDelete.remove();
        console.log(`Card deleted from server`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        deletePopup.saveMessage(false);
        deletePopup.close();
      });;
  }
}


const handleBinClick = (e) => {
  cardToDelete = e.target.parentElement;
  deletePopup.open();
}


const profileValidator = new FormValidator(settings, userInfoForm);
const newPlaceValidator = new FormValidator(settings, newPlaceForm);
const newPicValidator = new FormValidator(settings, newPicForm);
const userProfile = new UserInfo(profileSelectors);
const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');
const newPicPopup = new PopupWithForm(newPicInfo, '#profilePicPopup')
const imagePopup = new PopupWithImage('#photo');
const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');
const deletePopup = new PopupWithForm(deletePopupInfo,'#confirmPopup');


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
      authorization: "2a32e80d-c23f-4ed9-9cf5-671c417d0702",
      "Content-Type": "application/json"
    }
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, initialCards]) => {
    userProfile.setUserInfo(userData);
    myId = userData._id;
    avatar.style.backgroundImage = `url(${userData.avatar})`;

    const sectionInfo = {
      items: initialCards, 
      renderer: (item) => {
        const newCard = createCard(item, '#cardTemplate', handleCardClick, handleBinClick, handleLikeCard);
        cards.addItem(newCard.getCard(myId));
      }
    };

    cards = new Section(sectionInfo, '.cards');
    cards.renderElements();
  })
  .catch((err) => {
    console.log(err);
  });

profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();
newPicPopup.setEventListeners();
deletePopup.setEventListeners();

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