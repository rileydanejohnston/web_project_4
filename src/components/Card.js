export default class Card {
  constructor({ name, link, likes, _id, owner }, selector, handleCardClick, handleBinClick, handleLikeCard) {
    //, addLike, removeLike
    this._text = name;
    this._link = link;
    this._likes = likes.length;
    this._cardId = _id;
    this._ownerId = owner._id;
    this._selector = selector;
    this._element = null;
    this._handleCardClick = handleCardClick;
    this._handleBinClick = handleBinClick;
    this._handleLike = handleLikeCard;
  }


  
  _updatePageLikes() {
    if (this._likeBtn.classList.contains('cards__like-button_active'))
    {
      this._likeBtn.classList.remove('cards__like-button_active');
      return false;
    }
    else {
      this._likeBtn.classList.add('cards__like-button_active');
      return true;
    }
  }


  _enlargePhoto(img) {
    this._handleCardClick(img);
  }


  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      const isLiked = this._updatePageLikes();

      this._handleLike(this._cardId, isLiked)
        .then((res) => {
          this._likeCount.textContent = res.likes.length;
          console.log('Updated likes successfully');
        })
        .catch(() => {
          console.log('Unable to update likes');
        });
    });

    this._photo.addEventListener('click', (e) => this._enlargePhoto(this._photo));
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
    
    this._photo = this._element.querySelector('.cards__photo');
    this._photoName = this._element.querySelector('.cards__name');
    this._likeBtn = this._element.querySelector('.cards__like-button');
    this._likeCount = this._element.querySelector('.cards__like-count');

    this._setEventListeners();

    this._element.id = this._cardId;
    this._photo.src = this._link;
    this._photo.alt = this._text;
    this._photoName.textContent = this._text;
    this._likeCount.textContent = this._likes;

    return this._element;
  }
}