export default class Card {
  constructor({ name, link, likes }, selector, handleCardClick, handleDeleteClick) {
    this._text = name;
    this._link = link;
    this._likes = likes.length;
    this._selector = selector;
    this._element = null;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }


  _deleteCard() {
    this._element.remove();
  }


  _likeCard(e) {
    e.target.classList.toggle('cards__like-button_active');
  }


  _enlargePhoto(e) {
    this._handleCardClick(e);
  }


  _setEventListeners() {
    const photo = this._element.querySelector('.cards__photo');
    const close = this._element.querySelector('.cards__close-button'); 
    const like = this._element.querySelector('.cards__like-button');
    

    close.addEventListener('click', (e) => this._handleDeleteClick(e));
    like.addEventListener('click', (e) => this._likeCard(e));
    photo.addEventListener('click', (e) => this._enlargePhoto(e));
  }


  _getTemplate() {
    const cardTemplate = document.querySelector(`${this._selector}`).content.querySelector('.cards__item').cloneNode(true);

    return cardTemplate;
  }

  
  getCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    const cardImage = this._element.querySelector('.cards__photo');
    const cardName = this._element.querySelector('.cards__name');
    const likeElement = this._element.querySelector('.cards__like-count');

    cardImage.src = this._link;
    cardImage.alt = this._text;
    cardName.textContent = this._text;
    likeElement.textContent = this._likes;

    return this._element;
  }
}