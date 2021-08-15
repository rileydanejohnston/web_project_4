import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    
    constructor({link: src, name: caption}) {
        super('#photo');

        this._imgElement = document.querySelector('.popup__image');
        this._src = src;
        this._caption = caption;
    }
    open() {
        this._imgElement.src = this._src;
        this._imgElement.alt = this._caption;
        this._imgElement.textContent = this._caption;
        super.open();
    }
}