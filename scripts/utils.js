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

// This function can be located here, or it can be a public method in the PopupWithForm and PopupWithFormSubmit classes
export const renderLoading = (popupSelector, isLoading = false) => {
  const currentActiveButton = document.querySelector(
    `${popupSelector} .form__button`
  );
  console.log("current action button", currentActiveButton);
  if (isLoading) {
    currentActiveButton.textContent = "Guardando...";
  } else {
    currentActiveButton.textContent = "Guardar";
  }
};
