import Popup from "./PopUp.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setEventListeners() {
    // this.popupElement.addEventListener("click", (evt) => {
    //   evt.preventDefault();
    //   this.removeCard();
    // });

    super.setEventListeners();
  }
}

export default PopupWithConfirmation;
