import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, settings, renderLoading } from "./utils.js";
import Section from "./Section.js";
import { UserInfo } from "./UserInfo.js";

import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import { api } from "./Api.js";
const profileEditButton = document.querySelector(".profile__button");
const cardAddButton = document.querySelector(".profile__add-button");

const formProfile = document.querySelector("#form-profile");
const formCards = document.querySelector("#form-cards");

const newUserInfo = new UserInfo(".profile__name", ".profile__paragraph");

const popupProfile = new PopupWithForm("#popup-profile", (data) => {
  renderLoading("#popup-profile", true);

  api
    .setUserInfo({
      name: data.name,
      about: data.about,
    })
    .then((info) => {
      newUserInfo.setUserInfo(info.name, info.about);
    })
    .catch((err) =>
      console.error(`Ocurrió un error al guardar los datos: ${err}`)
    )
    .finally(() => {
      renderLoading("#popup-profile");
      popupProfile.close();
    });
});
const popupCards = new PopupWithForm("#popup-cards", (data) => {
  renderLoading("#popup-cards", true);

  console.log(data);
  api
    .addCard(data)
    .then((cardData) => {
      cardList.addItem(createCard(cardData));
    })
    .catch((err) =>
      console.error(`Ocurrió un error al guardar los datos: ${err}`)
    )
    .finally(() => {
      renderLoading("#popup-cards");
      popupCards.close();
      //TODO falta Validacion
    });
});
const popupImage = new PopupWithImage("#popup-image");

popupProfile.setEventListeners();
popupImage.setEventListeners();
popupCards.setEventListeners();

const createCard = (data) => {
  const newCard = new Card({ ...data });
  console.log("ver antes", newCard.getView());
  return newCard.getCard();
};

const cardList = new Section(
  {
    renderer: (data) => {
      cardList.addItem(createCard(data));
    },
  },
  ".elements"
);

const validationProfile = new FormValidator(formProfile, settings);
validationProfile.enableValidation();

const validationCard = new FormValidator(formCards, settings);
validationCard.enableValidation();

const editFormModalWindow = document.querySelector("#popup-profile");
const titleInput = editFormModalWindow.querySelector(".form__item_el_name");
const descriptionInput = editFormModalWindow.querySelector(
  ".form__item_el_about"
);

const openEditModal = () => {
  const currentUserInfo = newUserInfo.getUserInfo();
  // profileFormValidator.resetValidation();
  titleInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.job;
  popupProfile.open();
};

profileEditButton.addEventListener("click", openEditModal);

cardAddButton.addEventListener("click", () => {
  popupCards.open();
});

console.log("initialCards", api.getInitialCards());
console.log("userInfo", api.getUserInfo());

api
  .getAppInfo()
  .then(([cardsArray, userData]) => {
    newUserInfo.setUserInfo(userData.name, userData.about);
    cardList.renderItems(cardsArray);
    //ToDo Falta traer cardList, revisar funcion cuando tenga que darle funcionalidad
  })
  .catch((error) => console.error("Ocurrion un error", error));
