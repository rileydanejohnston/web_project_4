let popup = document.querySelector('.popup');
let form = popup.querySelector('.popup__form');

let inputName = form.querySelector('.popup__name');
let inputAbout = form.querySelector('.popup__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let editBtn = document.querySelector('.profile__edit-button');
let closeBtn = popup.querySelector('.popup__close');

function togglePopup() {
  
  if (!popup.classList.contains('popup_active'))
  {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  }

  popup.classList.toggle('popup_active');
}

function updateProfile(event) {
  event.preventDefault();

  profileName.textContent = inputName.value; 
  profileAbout.textContent = inputAbout.value;

  togglePopup();
}


editBtn.addEventListener('click', togglePopup);
closeBtn.addEventListener('click', togglePopup);
form.addEventListener('submit', updateProfile);