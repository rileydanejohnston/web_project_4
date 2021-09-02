import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

    constructor({ formSelector, formSubmission }, popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector(formSelector);
        this._handleFormSubmission = formSubmission;
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._btn = this._form.querySelector('.popup__submit');
        this._originalMsg = this._btn.textContent;
    }


    _getInputValues() {
      this._formValues = {};
      this._inputList.forEach(input => this._formValues[input.name] = input.value);

      return this._formValues;
    }


    setInputs(valuesObj) {
      
      this._inputList.forEach(item => {
        item.value = valuesObj[item.name];
      });
    }


    saveMessage(isLoading) {
      if (isLoading){
        this._btn.textContent = 'Saving...';
      }
      else {
        this._btn.textContent = this._originalMsg;
      }
    }


    setEventListeners() {
      this._submitFunction = (e) => {
        this.saveMessage(true);
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