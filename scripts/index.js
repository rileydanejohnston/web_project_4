let profilePopup = document.querySelector('#editProfile');
let newPlacePopup = document.querySelector('#newPlace');
let photoPopup = document.querySelector('#photo');

let profileForm = profilePopup.querySelector('.popup__form');
let newPlaceForm = newPlacePopup.querySelector('.popup__form');

let inputName = profileForm.querySelector('.popup__name');
let inputAbout = profileForm.querySelector('.popup__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let newPlaceTitle = newPlaceForm.querySelector('.popup__name');
let newPlaceLink = newPlaceForm.querySelector('.popup__about');

const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('#cardTemplate').content;
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

let addBtn = document.querySelector('.profile__add-button');
let editBtn = document.querySelector('.profile__edit-button');
let closeProfileBtn = profilePopup.querySelector('.popup__close');
let closeNewPlaceBtn = newPlacePopup.querySelector('.popup__close');
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
// toggle popup functions
/***********************************************************/

function toggleNewPlacePopup() {
  newPlacePopup.classList.toggle('popup_active');
}


function toggleProfilePopup() {
  if (!profilePopup.classList.contains('popup_active'))
  {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  }

  profilePopup.classList.toggle('popup_active');
}

function toggleCardPhoto() {
  photoPopup.classList.toggle('popup_active');
}
/***********************************************************/
// update profile
/***********************************************************/


function updateProfile(event) {
  event.preventDefault();

  profileName.textContent = inputName.value; 
  profileAbout.textContent = inputAbout.value;

  toggleProfilePopup();
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


  toggleNewPlacePopup();
}

// add initial cards & add user cards to DOM
const addCard = (cardName, cardLink) => {
  const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);

  newCard.querySelector('.cards__name').textContent = cardName;
  newCard.querySelector('.cards__photo').alt = cardName; // user photos?
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
    console.log(event.target);
    popupImage.src = event.target.src;
    popupCaption.innerHTML = event.target.alt
    toggleCardPhoto();
  });
}


/***********************************************************/
// event handlers
/***********************************************************/


addBtn.addEventListener('click', toggleNewPlacePopup);
editBtn.addEventListener('click', toggleProfilePopup);
closeProfileBtn.addEventListener('click', toggleProfilePopup);
closeNewPlaceBtn.addEventListener('click', toggleNewPlacePopup);
closePhotoBtn.addEventListener('click', toggleCardPhoto);

profileForm.addEventListener('submit', updateProfile);
newPlaceForm.addEventListener('submit', getCardInfo);

initialCards.forEach((cardInfo) => addCard(cardInfo.name, cardInfo.link));