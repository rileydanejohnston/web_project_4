export default class Card {
  constructor({ name, link }, selector, handleCardClick) {
    this._text = name;
    this._link = link;
    this._selector = selector;
    this._element = null;
    this._handleCardClick = handleCardClick;
  }


  _deleteCard() {
    this._element.remove();
  }


  _likeCard(e) {
    e.target.classList.toggle('cards__like-button_active');
  }


  _enlargePhoto(e) {
    /*
    imgPopup.src = e.target.src;
    imgPopup.alt = e.target.alt;
    imgCaption.textContent = e.target.alt;
    openPopup(photoPopup); */

    
    this._handleCardClick(e);
  }


  _setEventListeners(card) {
    const photo = card.querySelector('.cards__photo');
    const close = card.querySelector('.cards__close-button'); 
    const like = card.querySelector('.cards__like-button');
    

    close.addEventListener('click', () => this._deleteCard());
    like.addEventListener('click', (e) => this._likeCard(e));
    photo.addEventListener('click', (e) => this._enlargePhoto(e));
  }


  _getTemplate() {
    const cardTemplate = document.querySelector(`${this._selector}`).content.querySelector('.cards__item').cloneNode(true);

    this._setEventListeners(cardTemplate);

    return cardTemplate;
  }

  
  getCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.cards__photo');
    const cardName = this._element.querySelector('.cards__name');

    cardImage.src = this._link;
    cardImage.alt = this._text;
    cardName.textContent = this._text;

    return this._element;
  }
}