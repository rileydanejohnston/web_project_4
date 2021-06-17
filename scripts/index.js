let popup = document.querySelector('.popup');
let inputName = popup.querySelector('.popup__name');
let inputAbout = popup.querySelector('.popup__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let editBtn = document.querySelector('.profile__edit-button');
let closeBtn = popup.querySelector('.popup__close');
let saveBtn = popup.querySelector('.popup__submit');

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
saveBtn.addEventListener('click', updateProfile);