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
      this._disableButton(this._submit);
    }
  }

  _showError(input, errorElement, errorMessage) {
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideError(input, error) {
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._errorClass);
  }

  _checkValidity(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    const errorMessage = input.validationMessage;

    if (input.validity.valid){
      this._hideError(input, errorElement);
    }
    else {
      this._showError(input, errorElement, errorMessage);
    }
  }

  _setListeners(input) {


    input.addEventListener('input', () => {
      this._checkValidity(input);
      this._toggleButton();
    });
  }

  enableValidation() {
    this._allInputs = Array.from(this._form.querySelectorAll(this._inputSelector));


    this._allInputs.forEach(input => {
      this._setListeners(input);
    });
  }
}