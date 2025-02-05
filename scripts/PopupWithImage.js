import Popup from "./PopUp.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.titleElement = this.popupElement.querySelector(".popup__image-title");
    this.imageElement = this.popupElement.querySelector(".popup__image-src");
  }
  open(name, link) {
    super.open();
    this.titleElement.textContent = name;
    this.imageElement.src = link;
  }
}
