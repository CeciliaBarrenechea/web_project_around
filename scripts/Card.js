const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
  constructor(name, link, handleClickImage) {
    this.name = name;
    this.link = link;
    this.handleClickImage = handleClickImage;
  }
  getTemplate() {
    return cardTemplate.querySelector(".element").cloneNode(true);
  }

  toggleLike() {
    this.cardLikeButton.classList.toggle("element__photo-heart_active");
  }
  removeCard() {
    this.htmlCard.remove();
  }

  setEventListeners() {
    this.cardLikeButton.addEventListener("click", () => {
      this.toggleLike();
    });
    this.cardRemoveButton.addEventListener("click", () => {
      this.removeCard();
    });
    this.cardImage.addEventListener("click", () => {
      this.handleClickImage(this.name, this.link);
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
