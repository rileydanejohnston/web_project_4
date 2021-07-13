const profilePopup = document.querySelector('#editProfile');
const newPlacePopup = document.querySelector('#newPlace');
const photoPopup = document.querySelector('#photo');

const profileForm = profilePopup.querySelector('.popup__form');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');

const inputName = profileForm.querySelector('.popup__name');
const inputAbout = profileForm.querySelector('.popup__about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const newPlaceTitle = newPlaceForm.querySelector('.popup__name');
const newPlaceLink = newPlaceForm.querySelector('.popup__about');

const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('#cardTemplate').content;
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const addBtn = document.querySelector('.profile__add-button');
const editBtn = document.querySelector('.profile__edit-button');
const closeProfileBtn = profilePopup.querySelector('.popup__close');
const closeNewPlaceBtn = newPlacePopup.querySelector('.popup__close');
const closePhotoBtn = photoPopup.querySelector('.popup__close');


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
    name: "Abuquerque",
    link: "./images/cities/albuquerque.png"
  },
];

/***********************************************************/
// toggle popup function
/***********************************************************/


function togglePopup(modal) {
  if ((modal.id === 'editProfile') && (!modal.classList.contains('popup_active')))
  {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  }

  modal.classList.toggle('popup_active');
}

/***********************************************************/
// update profile
/***********************************************************/


function updateProfile(event) {
  event.preventDefault();

  profileName.textContent = inputName.value; 
  profileAbout.textContent = inputAbout.value;

  togglePopup(profilePopup);
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


  togglePopup(newPlace);
}

// add initial cards & add user cards to DOM
const addCard = (cardName, cardLink) => {
  const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);

  newCard.querySelector('.cards__name').textContent = cardName;
  newCard.querySelector('.cards__photo').alt = cardName;
  newCard.querySelector('.cards__photo').src = cardLink;

  cardList.prepend(newCard);

  createButtonListeners(newCard);
}

// create event listener for like button, close button, picture
const createButtonListeners = (card) => {
  const likeBtn = card.querySelector('.cards__like-button');
  const closeBtn = card.querySelector('.cards__close-button');
  const pic = card.querySelector('.cards__photo');
  
  likeBtn.addEventListener('click', (event) => event.target.classList.toggle('cards__like-button_active'));

  closeBtn.addEventListener('click', () => card.remove());

  pic.addEventListener('click', (event) => {
    popupImage.src = event.target.src;
    popupImage.alt = event.target.alt;
    popupCaption.textContent = event.target.alt
    togglePopup(photoPopup);
  });
}

const closePopupEsc = (e) => {
  if (e.key === 'Escape' && profilePopup.classList.contains('popup_active')){
    togglePopup(profilePopup);
  }
  else if (e.key === 'Escape' && newPlacePopup.classList.contains('popup_active')){
    togglePopup(newPlacePopup);
  }
  else if (e.key === 'Escape' && photoPopup.classList.contains('popup_active')){
    togglePopup(photoPopup);
  }
};

const closePopupOverlay = (e) => {
  if (e.target.classList.contains('popup_active')){
    e.target.addEventListener('click', togglePopup(e.target));
  }
};


/***********************************************************/
// event handlers
/***********************************************************/


addBtn.addEventListener('click', () => togglePopup(newPlace));
editBtn.addEventListener('click', () => togglePopup(profilePopup));
closeProfileBtn.addEventListener('click', () => togglePopup(profilePopup));
closeNewPlaceBtn.addEventListener('click', () => togglePopup(newPlace));
closePhotoBtn.addEventListener('click', () => togglePopup(photoPopup));

profileForm.addEventListener('submit', updateProfile);
newPlaceForm.addEventListener('submit', getCardInfo);

document.addEventListener('keydown', closePopupEsc);
document.addEventListener('click', closePopupOverlay);

initialCards.forEach((cardInfo) => addCard(cardInfo.name, cardInfo.link));