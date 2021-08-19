export default class FormValidator {
  constructor(settings, form) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = form;
    this._submit = this._form.querySelector(this._submitButtonSelector);
  }

  _disableButton() {
    this._submit.classList.add(this._inactiveButtonClass);
    this._submit.setAttribute('disabled', true);
  }

  _toggleButton() {
    const valid = this._allInputs.every(input => input.validity.valid === true);

    if (valid){
      this._submit.classList.remove(this._inactiveButtonClass);
      this._submit.removeAttribute('disabled', false);
    }
    else {
      this._disableButton();
    }
  }

  _showError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    const errorMessage = input.validationMessage;

    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);

    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _checkValidity(input) {
    if (input.validity.valid){
      this._hideError(input);
    }
    else {
      this._showError(input);
    }
  }

  _setListeners(input) {


    input.addEventListener('input', () => {
      this._checkValidity(input);
      this._toggleButton();
    });
  }

  resetValidation() {
    this._disableButton();
    this._allInputs.forEach(input => {
      this._hideError(input);   // _hidError takes input & error element.
    });
  }

  enableValidation() {
    this._allInputs = Array.from(this._form.querySelectorAll(this._inputSelector));


    this._allInputs.forEach(input => {
      this._setListeners(input);
    });
  }
}