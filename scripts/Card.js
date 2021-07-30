export default class Card {
  constructor(data, selector) {
    this._text = data.name;
    this._link = data.link;
    this._selector = selector;
    this._element = null;
  }

  _setEventListeners(card) {
    const photo = card.querySelector('.cards__photo');
    const close = card.querySelector('.cards__close-button');
    const like = card.querySelector('.cards__like-button');

    close.addEventListener('click', () => this._element.remove());
    like.addEventListener('click', (e) => e.target.classList.toggle('cards__like-button_active'));
    photo.addEventListener('click', (e) => {
      popupImage.src = e.target.src;
      popupImage.alt = e.target.alt;
      popupCaption.textContent = e.target.alt
      openPopup(photoPopup);
    });
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
    cardName.textContent = this._text;

    return this._element;
  }
}