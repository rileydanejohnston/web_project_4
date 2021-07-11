const checkValidity = (element, settings) => {
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
      checkValidity(element, settings);
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