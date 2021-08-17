import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};


const newPlacePopup = document.querySelector('#newPlace');
const photoPopup = document.querySelector('#photo');

const imgPopup = photoPopup.querySelector('.popup__image');
const imgCaption = photoPopup.querySelector('.popup__caption');

const userInfoForm = document.querySelector('#profile-popup');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');

const profileValidator = new FormValidator(settings, userInfoForm);
const newPlaceValidator = new FormValidator(settings, newPlaceForm);

//const inputName = profileForm.querySelector('.popup__name');
//const inputAbout = profileForm.querySelector('.popup__about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const newPlaceTitle = newPlaceForm.querySelector('.popup__name');
const newPlaceLink = newPlaceForm.querySelector('.popup__about');

const addBtn = document.querySelector('.profile__add-button');
const editBtn = document.querySelector('.profile__edit-button');
const newPlaceSubmit = newPlaceForm.querySelector('.popup__submit');

const popups = document.querySelectorAll('.popup');

/***********************************************************/

const cardContainer = document.querySelector('.cards');


const initialCards = [
  {
    name: "St. Paul",
    link: "./images/cities/stPaul.png"
  },
  {
    name: "Los Angeles",
    link: "./images/cities/losAngeles.png"
  },
  {
    name: "Kansas City",
    link: "./images/cities/kansasCity.png"
  },
  {
    name: "Charleston",
    link: "./images/cities/charleston.png"
  },
  {
    name: "Austin",
    link: "./images/cities/austin.png"
  },
  {
    name: "Albuquerque",
    link: "./images/cities/albuquerque.png"
  },
];

/***********************************************************/
// open & close popup functions
/***********************************************************/

const openPopup = (modal) => {
  modal.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
};

const closePopup = (modal) => {
  modal.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc);
};

function closeByEsc(e){
  if (e.key === 'Escape'){
    const activePopup = document.querySelector('.popup_active');
    closePopup(activePopup);
  }
}


/***********************************************************/
// card functions
/***********************************************************/


// user clicks add card button
const getCardInfo = (event) => {
  event.preventDefault();

  addCard(newPlaceTitle.value, newPlaceLink.value);


  newPlaceTitle.value = '';
  newPlaceLink.value = '';

  newPlaceValidator.resetValidation();

  closePopup(newPlace);
}


const btnOverlayListener = (popup) => {
  popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup__close')){
      closePopup(e.currentTarget);
    }
    if (e.target.classList.contains('popup_active')){
      closePopup(e.target);
    }
  });
};

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
/* cards is the object for the place cards section (duh). 
      - renders default cards to page
      - adds new user-made cards to page                  */
/***********************************************************/
const cards = new Section(
  { 
    items: initialCards, 
    renderer: (item) => {
      const newCard = new Card(item, '#cardTemplate', handleCardClick);
      cards.addItem(newCard.getCard());
    }
  }, '.cards');



cards.renderElements();

/***********************************************************/
/* profileSelectors, profileFormInfo, and placeFormInfo hold data needed to make various class instances. 
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
  }
};

const placeFormInfo = {
  formSelector: '#place-popup',
  formSubmission: ({ input1: name, input2: link }) => {
    const addCard = new Card({ name, link }, '#cardTemplate', handleCardClick);
    cards.addItem(addCard.getCard());
    placePopup.close();
  }
};

/***********************************************************/
// class instances
/***********************************************************/
const userProfile = new UserInfo(profileSelectors);
const profilePopup = new PopupWithForm(profileFormInfo, '#editProfile');
const placePopup = new PopupWithForm(placeFormInfo, '#newPlace');

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

//addBtn.addEventListener('click', () => openPopup(newPlace));

//profileForm.addEventListener('submit', updateProfile);
//newPlaceForm.addEventListener('submit', getCardInfo);

profileValidator.enableValidation();
newPlaceValidator.enableValidation();

export { openPopup, photoPopup, imgPopup, imgCaption };