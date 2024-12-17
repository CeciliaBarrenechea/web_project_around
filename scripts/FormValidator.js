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

  hasInvalidInput(inputList) {
    console.log(inputList);
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this.hasInvalidInput(this.inputList)) {
      this.buttonElement.classList.add(this.settings.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this.settings.inactiveButtonClass);
    }
  }

  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.buttonElement = this.formElement.querySelector(
      this.settings.submitButtonSelector
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
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
