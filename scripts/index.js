let profilePopup = document.querySelector('#editProfile');
let newPlacePopup = document.querySelector('#newPlace');
let profileForm = profilePopup.querySelector('.popup__form');
let newPlaceForm = newPlacePopup.querySelector('.popup__form');

let inputName = profileForm.querySelector('.popup__name');
let inputAbout = profileForm.querySelector('.popup__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let newPlaceTitle = newPlaceForm.querySelector('.popup__name');
let newPlaceLink = newPlaceForm.querySelector('.popup__about');

let addBtn = document.querySelector('.profile__add-button');
let likeBtn = document.querySelectorAll('.cards__like-button');
let editBtn = document.querySelector('.profile__edit-button');
let profileCloseBtn = profilePopup.querySelector('.popup__close');
let newPlaceCloseBtn = newPlacePopup.querySelector('.popup__close');

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

function toggleNewPlacePopup() {
  newPlacePopup.classList.toggle('popup_active');
}

function createCard(event) {
  event.preventDefault();
  addCard(newPlaceTitle.value, newPlaceLink.value);
  toggleNewPlacePopup();
}

function toggleProfilePopup() {
  if (!profilePopup.classList.contains('popup_active'))
  {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  }

  profilePopup.classList.toggle('popup_active');
}


function updateProfile(event) {
  event.preventDefault();

  profileName.textContent = inputName.value; 
  profileAbout.textContent = inputAbout.value;

  toggleProfilePopup();
}


// iterate through like buttons
for (let i = 0; i < likeBtn.length; ++i)
{
  likeBtn[i].addEventListener('click', (evt) => evt.target.classList.toggle('cards__like-button_active'));
}

const addCard = function(name, link){
  const cardList = document.querySelector('.cards');
  const cardTemplate = document.querySelector('#cardTemplate').content;
  const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);

  newCard.querySelector('.cards__name').textContent = name;
  newCard.querySelector('.cards__photo').alt = name; // user photos?
  newCard.querySelector('.cards__photo').src = link;
  
  cardList.prepend(newCard);
}

addBtn.addEventListener('click', toggleNewPlacePopup);
editBtn.addEventListener('click', toggleProfilePopup);
profileCloseBtn.addEventListener('click', toggleProfilePopup);
newPlaceCloseBtn.addEventListener('click', toggleNewPlacePopup);
profileForm.addEventListener('submit', updateProfile);
newPlaceForm.addEventListener('submit', createCard);
// not sure how the best way to do this is.
// 1. pass array of link/name to addCard
// 2. pass link & name as individual values
// how will the form be handled?
document.addEventListener('onload', initialCards.forEach(function(item) {
  const name = item.name;
  const link = item.link;
  addCard(name, link);
}));