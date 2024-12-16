const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-cards");
const popupImage = document.querySelector("#popup-image");
const popupImageSrc = document.querySelector(".popup__image-src");
const popupImageTilte = document.querySelector(".popup__image-title");
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

export function handleOpenProfile(evt) {
  popupProfile.classList.add("popup__opened");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeOnClick);
}
export function handleCloseProfile(evt) {
  popupProfile.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeOnClick);
}
export function handleOpenCard(evt) {
  popupCards.classList.add("popup__opened");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeOnClick);
}
export function handleCloseCard(evt) {
  popupCards.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeOnClick);
}
export function handleOpenImage(title, link) {
  popupImage.classList.add("popup__opened");
  popupImageSrc.src = link;
  popupImageTilte.textContent = title;
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeOnClick);
}
export function handleCloseImage(evt) {
  popupImage.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeOnClick);
}
