const resetValidation = (btn, inactiveButtonClass) => {
  btn.classList.add(inactiveButtonClass);
  btn.setAttribute('disabled', true);
};



const toggleButton = (form, inputs, settings) => {
  const button = form.querySelector('.popup__submit');
  const validElements = inputs.every(input => input.validity.valid === true);

  if (validElements){
    button.classList.remove(settings.inactiveButtonClass);
    button.removeAttribute('disabled', false);
  }
  else {
    resetValidation(button, settings.inactiveButtonClass);
  }
};



const showError = (element, error, inputErrorClass, errorClass) => {
  element.classList.add(inputErrorClass);
  error.classList.add(errorClass);
  error.textContent = element.validationMessage;
};



const hideError = (element, error, inputErrorClass) => {
  element.classList.remove(inputErrorClass);
  error.textContent = '';
};



const checkValidity = (form, element, settings) => {
  const error = form.querySelector(`#${element.id}-error`);

  if (!element.validity.valid){
    showError(element, error, settings.inputErrorClass, settings.errorClass);
  }
  else {
    hideError(element, error, settings.inputErrorClass);
  }
};



const validateElements = (form, elements, settings) => {
  // iterate through input elements
  elements.forEach(element => {
    element.addEventListener('input', () => {
      // check validity of each element
      // depending on validity, call certain functions
      checkValidity(form, element, settings);
      toggleButton(form, elements, settings);
    });
  });
};



const enableValidation = settings => {
  // select all forms
  const forms = Array.from(document.querySelectorAll(settings.formSelector));

  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());

    const elements = Array.from(form.querySelectorAll(settings.inputSelector));

    validateElements(form, elements, settings);
  });
};



enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});