import { openPopup, photoPopup } from './index.js';

export default class Card {
  constructor(data, selector) {
    this._text = data.name;
    this._link = data.link;
    this._selector = selector;
    this._element = null;
  }


  _deleteCard() {
    this._element.remove();
  }


  _likeCard(e) {
    e.target.classList.toggle('cards__like-button_active');
  }


  _enlargePhoto(e) {
    const imgPopup = document.querySelector('.popup__image');
    const imgCaption = document.querySelector('.popup__caption');

    imgPopup.src = e.target.src;
    imgPopup.alt = e.target.alt;
    imgCaption.textContent = e.target.alt;

    openPopup(photoPopup);
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