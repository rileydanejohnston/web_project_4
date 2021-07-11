const toggleButton = (form, elements, settings) => {
  const button = form.querySelector('.popup__submit');
  const validElements = elements.every(element => element.validity.valid);

  if (validElements){
    button.classList.remove(settings.inactiveButtonClass);
    button.removeAttribute('disabled', false);
  }
  else {
    button.classList.add(settings.inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
};



const checkValidity = (form, element, settings) => {
  const error = document.querySelector(`#${element.id}-error`);

  if (!element.validity.valid){
    element.classList.add(settings.inputErrorClass);
    error.classList.add(settings.errorClass);
    error.textContent = element.validationMessage;
  }
  else {
    element.classList.remove(settings.inputErrorClass);
    error.textContent = '';
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

    const elements = Array.from(document.querySelectorAll(settings.inputSelector));

    validateElements(form, elements, settings);
  });
};

/***********************************************************************
                    CALL VALIDATION FUNCTION
************************************************************************/
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});