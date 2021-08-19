import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

    constructor({ formSelector, formSubmission }, popupSelector) {
        super(popupSelector);
        this._form = document.querySelector(formSelector);
        this._handleFormSubmission = formSubmission;
    }


    _getInputValues() {
      const inputs = this._form.querySelectorAll('.popup__input');

      const inputArr = Array.from(inputs);

      const inputValues = {
        input1: inputArr[0].value,
        input2: inputArr[1].value
      };

      return inputValues;
    }


    setEventListeners() {
      this._submitFunction = (e) => {
        e.preventDefault();
        this._handleFormSubmission(this._getInputValues());
      }

      super.setEventListeners();
      this._form.addEventListener('submit', this._submitFunction);
    }


    open() {
      super.open();
    }


    close() {
      this._form.removeEventListener('submit', this._submitFunction);
      this._form.reset();
      super.close();
    }
}