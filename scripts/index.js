import Card from "./Card.js";
const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-cards");
const popupImage = document.querySelector("#popup-image");
const popupImageSrc = document.querySelector(".popup__image-src");
const popupImageTilte = document.querySelector(".popup__image-title");
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
const cardTemplate = document.querySelector("#card-template").content;
const cardArea = document.querySelector(".elements");
const initialCards = [
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
function createCard(name, link) {
  const card = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = card.querySelector(".element__photo");
  const cardTitle = card.querySelector(".element__photo-name");
  const cardLikeButton = card.querySelector(".element__photo-heart");
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("element__photo-heart_active");
  });
  const cardRemoveButton = card.querySelector(".element__photo-trash");
  cardRemoveButton.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function () {
    handleOpenImage(name, link);
  });
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  return card;
}
initialCards.forEach(function (item) {
  const newCard = new Card(item.name, item.link);
  cardArea.append(newCard.getCard);
});

function handleOpenProfile(evt) {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupProfile.classList.add("popup__opened");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeOnClick);
}
function handleCloseProfile(evt) {
  popupProfile.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeOnClick);
}
function handleOpenCard(evt) {
  popupCards.classList.add("popup__opened");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeOnClick);
}
function handleCloseCard(evt) {
  popupCards.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeOnClick);
}
function handleOpenImage(title, link) {
  popupImage.classList.add("popup__opened");
  popupImageSrc.src = link;
  popupImageTilte.textContent = title;
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeOnClick);
}
function handleCloseImage(evt) {
  popupImage.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeOnClick);
}

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

formCards.addEventListener("submit", function handleSubmitProfile(evt) {
  evt.preventDefault();
  const newCard = new Card(inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard.getCard);
  handleCloseCard();
});

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
