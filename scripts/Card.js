const cardTemplate = document.querySelector("#card-template").content;
const buttonTrash = document.querySelector(".button");

export default class Card {
  constructor(data, handleClickImage, deleteCardPopup, api) {
    this.id = data._id;
    this.name = data.name;
    this.link = data.link;
    this.handleClickImage = handleClickImage;
    this.isLiked = data.isLiked;
    this.deleteCardPopup = deleteCardPopup;
    this.api = api;
  }
  getTemplate() {
    return cardTemplate.querySelector(".element").cloneNode(true);
  }

  // isLiked() {
  //   return this.isLiked;
  // }

  // _updateLikesView() {
  //   if (this.isLiked) {
  //     this._likeButton.classList.add("element__photo-heart_active");
  //   } else {
  //     this._likeButton.classList.remove("element__photo-heart_active");
  //   }
  // }

  // updateLikesView(data) {
  //   this._isLiked = !this._isLiked;
  //   this._updateLikesView();
  // }

  toggleLike(e) {
    this.cardLikeButton.classList.toggle("element__photo-heart_active");
    const isActive = e.target.classList.contains("element__photo-heart_active");
    if (isActive) {
      this.api.likeCard(this.id);
    } else {
      this.api.dislikeCard(this.id);
    }
  }
  removeCard() {
    this.api.deleteCard(this.id);
    this.htmlCard.remove();
  }

  setEventListeners() {
    this.cardLikeButton.addEventListener("click", (e) => {
      this.toggleLike(e);
    });
    this.cardRemoveButton.addEventListener("click", () => {
      this.deleteCardPopup.open();
      buttonTrash.addEventListener("click", () => {
        this.removeCard();
        this.deleteCardPopup.close();
      });
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
    this._element = this.getTemplate();
    this._likeButton = this._element.querySelector(".element__photo-heart");
    // this.updateLikesView();
    this.setEventListeners();

    return this.htmlCard;
  }
}
