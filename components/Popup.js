export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }
  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }
  _handleEscClose(e) {
    if (e.key === 'Escape'){
      this.close();
    }
  }
  setEventListeners() {
    this._popup.addEventListener('click', e => {
      if (e.target.classList.contains('popup__close') || e.target.classList.contains('popup_active')){
        this.close();
      }
    });
  }
}