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
  cardArea.append(card);
}
initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

function handleOpenProfile(evt) {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupProfile.classList.add("popup__opened");
}
function handleCloseProfile(evt) {
  popupProfile.classList.remove("popup__opened");
}
function handleOpenCard(evt) {
  popupCards.classList.add("popup__opened");
}
function handleCloseCard(evt) {
  popupCards.classList.remove("popup__opened");
}
function handleOpenImage(title, link) {
  popupImage.classList.add("popup__opened");
  popupImageSrc.src = link;
  popupImageTilte.textContent = title;
}
function handleCloseImage(evt) {
  popupImage.classList.remove("popup__opened");
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
  createCard(inputCardTitle.value, inputCardLink.value);
  handleCloseCard();
});
