import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, settings } from "./utils.js";
import Section from "./Section.js";
import { UserInfo } from "./UserInfo.js";

import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
const profileEditButton = document.querySelector(".profile__button");
const cardAddButton = document.querySelector(".profile__add-button");

const formProfile = document.querySelector("#form-profile");
const formCards = document.querySelector("#form-cards");
const cardArea = document.querySelector(".elements");

const newUserInfo = new UserInfo(".profile__name", ".profile__paragraph");
const popupProfile = new PopupWithForm("#popup-profile");
const popupCards = new PopupWithForm("#popup-cards");
const popupImage = new PopupWithImage("#popup-image");

popupProfile.setEventListeners();
popupImage.setEventListeners();
popupCards.setEventListeners();
newUserInfo.setUserInfo("Ceci B", "Web Developer");

initialCards.forEach(function (item) {
  const newCard = new Card(item.name, item.link);
  cardArea.append(newCard.getCard());
});

const validationProfile = new FormValidator(formProfile, settings);
validationProfile.enableValidation();

const validationCard = new FormValidator(formCards, settings);
validationCard.enableValidation();

profileEditButton.addEventListener("click", () => {
  popupProfile.open();
});

cardAddButton.addEventListener("click", () => {
  popupCards.open();
});
