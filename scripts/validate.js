const enableValidation = settings => {
  // select all forms
  const forms = Array.from(document.querySelectorAll(settings.formSelector));

  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());

    const elements = Array.from(document.querySelectorAll(settings.inputSelector));

    validateElements(elements);
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