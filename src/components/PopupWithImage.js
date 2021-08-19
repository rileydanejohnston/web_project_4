import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    
    constructor(popupSelector) {
        super(popupSelector);

        this._imgElement = document.querySelector('.popup__image');
        this._imgCaption = document.querySelector('.popup__caption');
    }
    open({ link, name }) {
      this._imgElement.src = link;
      this._imgElement.alt = name;
      this._imgCaption.textContent = name;
      super.open();
    }
}