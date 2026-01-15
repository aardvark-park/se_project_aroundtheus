/* --------------------------------- Modules -------------------------------- */
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import * as Constants from "../components/Constants.js";
import "./index.css";
/* --------------------------------- Arrays --------------------------------- */

/* -------------------------------- Elements -------------------------------- */

const body = document.querySelector(".page");
const edit = document.querySelector(".profile__edit-button");
const add = document.querySelector(".profile__add-button");
const card = document.querySelector(".card");
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-modal");
const editProfileCloseModal = editProfileModal.querySelector(".modal__close");
const addCardCloseModal = addCardModal.querySelector(".modal__close");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const previewImageModal = document.querySelector("#image-modal");
const previewImageCloseModal = previewImageModal.querySelector(".modal__close");
const imageSource = document.querySelector("#modal-image-view");
const imageCaption = document.querySelector(".modal__image-caption");
const closeButtons = document.querySelectorAll(".modal__close");
const cardList = document.querySelector(".cards__list");
const profileEditSubmit = editProfileModal.querySelector(".modal__save");
const addCardSubmit = addCardModal.querySelector(".modal__save");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const modals = document.querySelectorAll(".modal");

/* -------------------------------- Form Data ------------------------------- */

const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const addCardForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#edit-profile-form");

/* --------------------------------- Classes -------------------------------- */

const editFormValidation = new FormValidator(
  Constants.settings,
  editProfileModal
);
const addFormValidation = new FormValidator(Constants.settings, addCardModal);
editFormValidation.enableValidation();
addFormValidation.enableValidation();

const newCardPopup = new PopupWithForm("#add-modal", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardList);
  console.log("newCardPopup");
  addCardForm.reset();
  addFormValidation.disableButton();
});

const newEditPopup = new PopupWithForm("#edit-modal", (evt) => {
  evt.preventDefault();
  console.log("newEditPopup");
  renderCard({ name, link }, cardList);
});

const newImagePopup = new PopupWithImage("#image-modal", (evt) => {
  evt.preventDefault();
});

// newCardPopup.open();
// newCardPopup.close();

/* -------------------------------- Functions ------------------------------- */

Constants.initialCards.forEach(({ name, link }) => {
  renderCard({ name, link }, cardList);
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

// function handleProfileSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   closeModal(editProfileModal);
// }

// function handleAddCardSubmit(evt) {
//   evt.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardList);
//   newCardPopup.close(addCardModal);
//   addCardForm.reset();
//   addFormValidation.disableButton();
// }

function handleImageClick(card) {
  imageSource.src = card.link;
  imageCaption.textContent = card.name;
  imageSource.alt = card.name;
  newImagePopup.openPopup(previewImageModal);
}

/* ----------------------------- Event Listeners ---------------------------- */

edit.addEventListener("click", () => {
  profileTitleInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  editFormValidation.resetValidation();
  newEditPopup.openPopup(editProfileModal);
});
add.addEventListener("click", () => {
  newCardPopup.openPopup(addCardModal);
});
profileEditSubmit.addEventListener("submit", console.log("SUBMIT"));
addCardForm.addEventListener("submit", PopupWithForm.handleAddCardSubmit);

/* ---------------------------------- Loops --------------------------------- */

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__close")
    ) {
      newCardPopup.closePopupWithForm();
      //newEditPopup.closePopupWithForm();
      //newImagePopup.closePopup();
    }
  });
});

//TODO:
//_getInputValues in PopupWithForm.js
// form submitions, form validator
