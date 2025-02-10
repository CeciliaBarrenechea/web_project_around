export const settings = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__item_type_error",
  errorClass: "form__error_visible",
};
export const initialCards = [
  {
    name: "Door county, Wisconsin",
    link: "./images/card1.jpg",
  },
  {
    name: "Fairbanks, Alaska",
    link: "./images/card2.jpg",
  },
  {
    name: "Arches National Park",
    link: "./images/card3.jpg",
  },
  {
    name: "Bryce Canyon",
    link: "./images/card4.jpg",
  },
  {
    name: "Adirondack Mountains",
    link: "./images/card5.jpg",
  },
  {
    name: "The Grand Canyon",
    link: "./images/card6.jpg",
  },
];
const closeOnEsc = (evt) => {
  if (evt.key === "Escape") {
    handleCloseCard();
    handleCloseProfile();
    handleCloseImage();
  }
};
const closeOnClick = (evt) => {
  if (evt.target.classList.contains("popup__opened")) {
    handleCloseCard();
    handleCloseProfile();
    handleCloseImage();
  }
};
