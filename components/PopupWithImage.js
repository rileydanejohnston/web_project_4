import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    
    constructor({ link, name }) {
        super('#photo');

        this._imgElement = document.querySelector('.popup__image');
        this._imgCaption = document.querySelector('.popup__caption');
        this._src = link;
        this._caption = name;
    }
    open() {
      this._imgElement.src = this._src;
      this._imgElement.alt = this._caption;
      this._imgCaption.textContent = this._caption;
      super.open();
      super.setEventListeners();
    }
}