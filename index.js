let rootContainer = document.querySelector('.root');
let pageContainer = rootContainer.querySelector('.page');
let form = pageContainer.querySelector('.popup__form');

let likeBtn = pageContainer.querySelectorAll('.cards__like-button');
let editBtn = pageContainer.querySelector('.profile__edit-button');
let closeBtn = pageContainer.querySelector('.popup__close');





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
  let popupContainer = pageContainer.querySelector('.popup');
  
  popupContainer.classList.toggle('popup_active');
  rootContainer.classList.toggle('root_overlay');
}
editBtn.addEventListener("click", togglePopup);
closeBtn.addEventListener("click", togglePopup);

// Profile section
function updateProfile(e){

  let profileName = pageContainer.querySelector('.profile__name');
  let profileAbout = pageContainer.querySelector('.profile__about');
  let popupName = pageContainer.querySelector('.popup__name');
  let popupAbout = pageContainer.querySelector('.popup__about');

  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;

  profileName.placeholder = popupName.value;
  profileAbout.placeholder = popupName.value;

  togglePopup();
  e.preventDefault();
}
//saveBtn.addEventListener("click", updateProfile);
form.addEventListener("submit", updateProfile);