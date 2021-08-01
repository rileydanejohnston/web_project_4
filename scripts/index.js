import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profilePopup = document.querySelector('#editProfile');
const newPlacePopup = document.querySelector('#newPlace');
const photoPopup = document.querySelector('#photo');

const imgPopup = photoPopup.querySelector('.popup__image');
const imgCaption = photoPopup.querySelector('.popup__caption');

const profileForm = profilePopup.querySelector('.popup__form');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');

const inputName = profileForm.querySelector('.popup__name');
const inputAbout = profileForm.querySelector('.popup__about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const newPlaceTitle = newPlaceForm.querySelector('.popup__name');
const newPlaceLink = newPlaceForm.querySelector('.popup__about');

const cardList = document.querySelector('.cards');

const addBtn = document.querySelector('.profile__add-button');
const editBtn = document.querySelector('.profile__edit-button');
const newPlaceSubmit = newPlaceForm.querySelector('.popup__submit');

const popups = document.querySelectorAll('.popup');
const forms = document.querySelectorAll('.popup__form');

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
// update profile
/***********************************************************/


function updateProfile(event) {
  event.preventDefault();

  profileName.textContent = inputName.value; 
  profileAbout.textContent = inputAbout.value;

  closePopup(profilePopup);
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

  newPlaceSubmit.setAttribute('disabled', true);
  newPlaceSubmit.classList.add('popup__submit_disabled');

  closePopup(newPlace);
}

// add initial cards & add user cards to DOM
const addCard = (cardName, cardLink) => {
  const cardInfo = {name: cardName, link: cardLink};
  const card = new Card(cardInfo, '#cardTemplate');

  cardList.prepend(card.getCard());
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
// event handlers
/***********************************************************/


addBtn.addEventListener('click', () => openPopup(newPlace));
editBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(profilePopup);
});

profileForm.addEventListener('submit', updateProfile);
newPlaceForm.addEventListener('submit', getCardInfo);

forms.forEach(form => {
  const formObject = new FormValidator(settings, form);

  formObject.enableValidation();
});

popups.forEach(btnOverlayListener);
initialCards.forEach((cardInfo) => addCard(cardInfo.name, cardInfo.link));

export { openPopup, photoPopup, imgPopup, imgCaption };