import Popup from "./PopUp.js";
import Card from "./Card.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this.form = this.popupElement.querySelector(".form");
    this.handleSubmit = handleSubmit;
    this.popupSelector = popupSelector;
  }
  _getInputValues() {
    const inputValues = {};
    const inputList = Array.from(this.form.elements);
    inputList.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });
    return inputValues;
  }
  handleEditProfile(values) {
    const profileName = document.querySelector(".profile__name");
    const profileJob = document.querySelector(".profile__paragraph");
    profileName.textContent = values.name;
    profileJob.textContent = values.about;
  }
  // handleAddCard(values) {
  //   const cardArea = document.querySelector(".elements");
  //   const newCard = new Card(values.title, values.link);
  //   cardArea.prepend(newCard.getCard());
  // }
  setEventListeners() {
    this.form.addEventListener("submit", (e) => {
      // e.preventDefault();
      // const values = this._getInputValues();
      // if (this.popupSelector === "#popup-profile") {
      //   this.handleEditProfile(values);
      // }
      // if (this.popupSelector === "#popup-cards") {
      //   this.handleAddCard(values);
      // }
      // this.close();
      this.handleSubmit(this._getInputValues());
    });
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
    this.popupElement.addEventListener("click", (evt) => {
      if (this.handleClickClose(evt)) {
        this.close();
      }
    });
  }
}
