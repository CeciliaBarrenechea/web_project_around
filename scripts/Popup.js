export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.closeButton = this.popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    console.log(this.popupElement);
    this.popupElement.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this.popupElement.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
