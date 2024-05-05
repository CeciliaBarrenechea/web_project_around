const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__paragraph");
const inputName = document.querySelector("#input-name");
const inputJob = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");

function handleOpenProfile(evt) {
  popupProfile.classList.add("popup__opened");
}
function handleCloseProfile(evt) {
  popupProfile.classList.remove("popup__opened");
}

profileButton.addEventListener("click", handleOpenProfile);

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  handleCloseProfile();
}

formProfile.addEventListener("submit", handleSubmitProfile);
