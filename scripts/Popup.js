export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.closeButton = this.popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
  close() {
    this.popupElement.classList.remove("popup_opened");
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
