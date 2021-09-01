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

const handleLikeCard = (e) => {
  const card = e.target.parentElement.parentElement.parentElement;
  const likeBtn = e.target;
  const numLikesElem = e.target.nextElementSibling;
  let serverLikes = null;

  console.log(e);

  if (e.target.classList.contains('cards__like-button_active')){
    api.removeLike(card.id)
    .then((res) => {
      serverLikes = res.likes.length;
      numLikesElem.textContent = serverLikes;
    })
    .catch(() => {
      console.log(`Cannot add a like to the server`);
    });
  }
  else {
    api.addLike(card.id)
    .then((res) => {
      serverLikes = res.likes.length;
      numLikesElem.textContent = serverLikes;
    })
    .catch(() => {
      console.log(`Cannot remove a like from the server`);
    });
  }
  
}

const handleCardClick = (e) => {
  const clickedPhoto = { name: e.target.alt, link: e.target.src }
  imagePopup.open(clickedPhoto);
}


const newPicInfo = {
  formSelector: '#profile-pic',
  formSubmission: ({ pic }) => {
    console.log(pic);
    api.updateProfilePic(pic)
      .then((res) => {
        console.log('Profile pic updated on the server');
      })
      .catch(() => {
        console.log('Updating profile pic failed');
      })
    avatar.style.backgroundImage = `url(${pic})`;
    console.log(avatar);
    newPicPopup.close();
  }
}

const profileFormInfo = {
  formSelector: '#profile-popup',
  formSubmission: ({ name, about }) => {
    userProfile.setUserInfo({ name: name, about: about });

    api.updateProfile(userProfile.getUserInfo())
      .then((res) => {
        console.log(`The profile has been updated.`);
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

const deletePopupInfo = {
  formSelector: '#confirm-form',
  formSubmission: () => {

    deletePopup.close();
    
    api.deleteCard(cardToDelete.id)
      .then((res) => {
        console.log(`Card deleted from server`);
      })
      .catch(() => {
        console.log(`Card failed to delete from the server`);
      });
    // delete card from page
    
    cardToDelete.remove();
  
  }
}


const handleBinClick = (e) => {
  console.log(e.target.parentElement);
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

api.getUserInfo()
  .then((res) => {
    userProfile.setUserInfo(res);
    myId = res._id;
    avatar.style.backgroundImage = `url(${res.avatar})`;
  })
  .catch(() => {
    console.log(`User info failed to load`);
  });



api.getCards()
  .then((res) => {

    const sectionInfo = {
      items: res, 
      renderer: (item) => {

        const newCard = createCard(item, '#cardTemplate', handleCardClick, handleBinClick, handleLikeCard);
        cards.addItem(newCard.getCard(myId));
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