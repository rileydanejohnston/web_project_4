import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ formSelector, formSubmission }, popupSelector) {
        super(popupSelector);
        this._form = document.querySelector(formSelector);
        this._handleFormSubmission = formSubmission;
        super.open();
    }
    _getInputValues() {
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));

        return this._inputs;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmission(this._getInputValues());
            this.close();
        });
    }
    close() {
        this._form.reset();
        super.close();
    }
}