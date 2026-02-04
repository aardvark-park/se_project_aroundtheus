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
  console.log("newCardPopup instantiation");
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, Constants.cardList);
  addCardForm.reset();
  addFormValidation.disableButton();
});

const newEditPopup = new PopupWithForm("#edit-modal", (evt) => {
  evt.preventDefault();
  console.log("form submit edit profile");
  this._getInputValues(evt);
  Constants.profileName.textContent = this.formDataObj.name;
  Constants.profileDescription.textContent = this.formDataObj.description;
  this.closePopupWithForm();
});

const newImagePopup = new PopupWithImage("#image-modal", (evt) => {
  evt.preventDefault();
});

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

// ─── Todo: ───────────────────────────────────────────────────────────────────

// refactor: pass profile submit handler through the class instantiation in index.js, currently in popupwithform.js
// event listener issues came back, need to find what's causing the issue
