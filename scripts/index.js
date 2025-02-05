import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  initialCards,
  handleOpenProfile,
  handleCloseProfile,
  handleOpenCard,
  handleCloseCard,
  handleCloseImage,
  settings,
} from "./utils.js";

import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
const profileEditButton = document.querySelector(".profile__button");
const cardAddButton = document.querySelector(".profile__add-button");
const profileCloseButton = document.querySelector("#popup-close-profile");
const cardCloseButton = document.querySelector("#popup-close-card");
const ImageCloseButton = document.querySelector("#popup-close-image");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__paragraph");
const inputName = document.querySelector("#input-name");
const inputJob = document.querySelector("#input-about");
const inputCardTitle = document.querySelector("#input-card-title");
const inputCardLink = document.querySelector("#input-card-link");
const formProfile = document.querySelector("#form-profile");
const formCards = document.querySelector("#form-cards");
const cardArea = document.querySelector(".elements");
const popupProfile = new PopupWithForm("#popup-profile");
const popupCards = new PopupWithForm("#popup-cards");
const popupImage = new PopupWithImage("#popup-image");

popupProfile.setEventListeners();
popupImage.setEventListeners();
popupCards.setEventListeners();

initialCards.forEach(function (item) {
  const newCard = new Card(item.name, item.link);
  cardArea.append(newCard.getCard());
});

const validationProfile = new FormValidator(formProfile, settings);
validationProfile.enableValidation();

const validationCard = new FormValidator(formCards, settings);
validationCard.enableValidation();

profileEditButton.addEventListener("click", handleOpenProfile);
cardAddButton.addEventListener("click", handleOpenCard);
profileCloseButton.addEventListener("click", handleCloseProfile);
cardCloseButton.addEventListener("click", handleCloseCard);
ImageCloseButton.addEventListener("click", handleCloseImage);

formProfile.addEventListener("submit", function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  handleCloseProfile();
});

formCards.addEventListener("submit", function handleSubmitCards(evt) {
  evt.preventDefault();
  const newCard = new Card(inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard.getCard());
  handleCloseCard();
});
