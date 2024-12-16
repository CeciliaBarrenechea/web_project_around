export default class FormValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;
    this.settings = settings;
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  }
  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);

    errorElement.textContent = "";
  }
  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }
  toggleButtonState(inputList) {
    if (hasInvalidInput(inputList)) {
      this.buttonElement.classList.add(settings.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(settings.inactiveButtonClass);
    }
  }

  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputElement);
      });
    });
  }
  enableValidation() {
    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}
