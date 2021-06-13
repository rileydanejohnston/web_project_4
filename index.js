let rootContainer = document.querySelector('.root');
let pageContainer = rootContainer.querySelector('.page');
let form = rootContainer.querySelector('.popup__form');

let likeBtn = pageContainer.querySelectorAll('.cards__like-button');
let editBtn = pageContainer.querySelector('.profile__edit-button');
let closeBtn = rootContainer.querySelector('.popup__close');

/*************************************************************/
/*************************************************************/

// like button
for (let i = 0; i < likeBtn.length; ++i)
{
  likeBtn[i].addEventListener("click", function() {
    likeBtn[i].classList.toggle('cards__like-button_active');
  });
}
/* Help src: https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist */

/*************************************************************/
/*************************************************************/

// Popup Form
function togglePopup(){
  let popupContainer = rootContainer.querySelector('.popup');
  let overlay = rootContainer.querySelector('#overlay');
  
  popupContainer.classList.toggle('popup_active');
  overlay.classList.toggle('overlay');
}
editBtn.addEventListener("click", togglePopup);
closeBtn.addEventListener("click", togglePopup);

// Profile section
function updateProfile(e){

  let profileName = pageContainer.querySelector('.profile__name');
  let profileAbout = pageContainer.querySelector('.profile__about');
  let popupName = rootContainer.querySelector('.popup__name');
  let popupAbout = rootContainer.querySelector('.popup__about');

  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;

  profileName.placeholder = popupName.value;
  profileAbout.placeholder = popupName.value;

  togglePopup();
  e.preventDefault();
}
form.addEventListener("submit", updateProfile);