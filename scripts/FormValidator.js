class formValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;
    this.settings = settings;
  }

  showImputError(inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  }
  hideInputError() {}
  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(
        inputElement,
        inputElement.validationMessage,
      )}
  }
  toggleButtonState() {}
  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.inputList.forEach((inputElement) =>{
      inputElement.addEventListener("input", () => {
        this.checkInputValidity();
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
