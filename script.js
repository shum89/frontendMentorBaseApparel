
const text = document.querySelector('.text');
const emailForm = text.querySelector('.text__form');
const emailInput = emailForm.querySelector('.text__email-input');
const emailError = emailForm.querySelector('.text__email-error');
const errorMessage = text.querySelector('.text__error-message');

// Valudate email

function validate(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function toggleError() {
  emailInput.classList.toggle('text__email-input_error');
  errorMessage.classList.toggle('text__error-message_hidden');
  errorMessage.classList.toggle('animation');
  emailError.classList.toggle('text__email-error_hidden');
  emailError.classList.toggle('animation');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  if (!validate(emailInput.value) && emailInput.classList.contains('text__email-input_normal')) {
    toggleError();
  } else if (validate(emailInput.value) && emailInput.classList.contains('text__email-input_error')) {
    toggleError();
  }
}

emailForm.addEventListener('submit', formSubmitHandler);

