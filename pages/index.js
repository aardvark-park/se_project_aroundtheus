/* --------------------------------- Modules -------------------------------- */
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import * as Constants from "../components/Constants.js";
import "./index.css";

/* -------------------------------- Form Data ------------------------------- */

const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input",
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const addCardForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#edit-profile-form");

/* --------------------------------- Classes -------------------------------- */

const editFormValidation = new FormValidator(
  Constants.settings,
  Constants.editProfileModal,
);
const addFormValidation = new FormValidator(
  Constants.settings,
  Constants.addCardModal,
);
editFormValidation.enableValidation();
addFormValidation.enableValidation();

const newCardPopup = new PopupWithForm("#add-modal", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, Constants.cardList);
  addCardForm.reset();
  addFormValidation.disableButton();
});

const newEditPopup = new PopupWithForm("#edit-modal", (evt) => {
  evt.preventDefault();
  renderCard({ name, link }, Constants.cardList);
});

const newImagePopup = new PopupWithImage("#image-modal", (evt) => {
  evt.preventDefault();
});

newCardPopup.setEventListeners();

/* -------------------------------- Functions ------------------------------- */

Constants.initialCards.forEach(({ name, link }) => {
  renderCard({ name, link }, Constants.cardList);
});

function createCard(card) {
  const cardInstance = new Card(card, "#card-template", handleImageClick);
  const cardElement = cardInstance.getView();
  return cardElement;
}

function renderCard(card, wrapper) {
  const cardElement = createCard(card);
  wrapper.prepend(cardElement);
}

function handleImageClick(card) {
  Constants.imageSource.src = card.link;
  Constants.imageCaption.textContent = card.name;
  Constants.imageSource.alt = card.name;
  newImagePopup.openPopup(Constants.previewImageModal);
}

/* ----------------------------- Event Listeners ---------------------------- */

Constants.edit.addEventListener("click", () => {
  profileTitleInput.value = Constants.profileName.textContent;
  profileDescriptionInput.value = Constants.profileDescription.textContent;
  editFormValidation.resetValidation();
  newEditPopup.openPopup(Constants.editProfileModal);
});
Constants.add.addEventListener("click", () => {
  newCardPopup.openPopup(Constants.addCardModal);
});

//TODO:
// add card form submission function, evt isn't being passed properly
