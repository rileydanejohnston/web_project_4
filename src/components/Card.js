export default class Card {
  constructor({ name, link, likes, _id, owner }, selector, handleCardClick, handleBinClick) {
    this._text = name;
    this._link = link;
    this._likes = likes.length;
    this._cardId = _id;
    this._ownerId = owner._id;
    this._selector = selector;
    this._element = null;
    this._handleCardClick = handleCardClick;
    this._handleBinClick = handleBinClick;
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
    //const close = this._element.querySelector('.cards__close-button'); 
    const like = this._element.querySelector('.cards__like-button');
    

    //close.addEventListener('click', (e) => this._handleDeleteClick(e));
    like.addEventListener('click', (e) => this._likeCard(e));
    photo.addEventListener('click', (e) => this._enlargePhoto(e));
  }


  _getTemplate() {
    const cardTemplate = document.querySelector(`${this._selector}`).content.querySelector('.cards__item').cloneNode(true);

    return cardTemplate;
  }


  _getBinTemplate() {
    const binTemplate = document.querySelector('#binTemplate').content.querySelector('.cards__close-button').cloneNode(true);

    return binTemplate;
  }

  _setBinListener() {
    this._binIcon.addEventListener('click', (e) => this._handleBinClick(e));
  }

  _addBin() {
    this._element.prepend(this._binIcon);
  }
  
  getCard(myId) {
    this._element = this._getTemplate();

    if (myId === this._ownerId){
      this._binIcon = this._getBinTemplate();
      this._setBinListener();
      this._addBin();
    }

    this._setEventListeners();
    
    const cardImage = this._element.querySelector('.cards__photo');
    const cardName = this._element.querySelector('.cards__name');
    const likeElement = this._element.querySelector('.cards__like-count');

    this._element.id = this._cardId;
    cardImage.src = this._link;
    cardImage.alt = this._text;
    cardName.textContent = this._text;
    likeElement.textContent = this._likes;

    return this._element;
  }
}