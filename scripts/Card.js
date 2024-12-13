const cardTemplate = document.querySelector("#card-template").content;
export default class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  getTemplate() {
    return cardTemplate.querySelector(".element").cloneNode(true);
  }

  toogleLike() {
    this.cardLikeButton.classList.toogle("element__photo-heart_active");
  }

  setEventListeners() {
    this.cardLikeButton.addEventListener("click", function () {
      this.toogleLike();
    });
  }
  setProperties() {
    this.htmlCard = this.getTemplate();
    this.cardImage = this.htmlCard.querySelector(".element__photo");
    this.cardTitle = this.htmlCard.querySelector(".element__photo-name");
    this.cardLikeButton = this.htmlCard.querySelector(".element__photo-heart");
    this.cardRemoveButton = this.htmlCard.querySelector(
      ".element__photo-trash"
    );
    this.cardTitle.textContent = this.name;
    this.cardImage.src = this.link;
  }
  getCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}
