export default class FormValidator {
  constructor(settings, form) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = form;
  }

  _resetValidation(button) {
    button.classList.add(this._inactiveButtonClass);
    button.setAttribute('disabled', true);
  }

  _toggleButton(inputs) {
    const valid = inputs.every(input => input.validity.valid === true);
    const submitBtn = this._form.querySelector(this._submitButtonSelector);

    if (valid){
      submitBtn.classList.remove(this._inactiveButtonClass);
      submitBtn.removeAttribute('disabled', false);
    }
    else {
      this._resetValidation(submitBtn);
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
      console.log("call hide error");
    }
    else {
      this._showError(input, errorElement, errorMessage);
      console.log("call show error");
    }
  }

  _setListeners(allInputs, input) {


    input.addEventListener('input', () => {
      this._checkValidity(input);
      this._toggleButton(allInputs);
    });
  }

  enableValidation() {
    const allInputs = Array.from(this._form.querySelectorAll(this._inputSelector));


    allInputs.forEach(input => {
      this._setListeners(allInputs, input);
    });
  }
}