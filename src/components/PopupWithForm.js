import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

    constructor({ formSelector, formSubmission }, popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector(formSelector);
        this._handleFormSubmission = formSubmission;
        this._inputList = this._form.querySelectorAll('.popup__input');
    }


    _getInputValues() {
      this._formValues = {};
      this._inputList.forEach(input => this._formValues[input.name] = input.value);

      return this._formValues;
    }


    setEventListeners() {
      this._submitFunction = (e) => {
        e.preventDefault();
        this._handleFormSubmission(this._getInputValues());
      }

      super.setEventListeners();
      this._form.addEventListener('submit', this._submitFunction);
    }


    close() {
      this._form.reset();
      super.close();
    }
}