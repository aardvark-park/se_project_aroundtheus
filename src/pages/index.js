/* --------------------------------- Modules -------------------------------- */
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import * as Constants from "../components/Constants.js";
import "./index.css";

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

const newCardPopup = new PopupWithForm("#add-modal", (formData) => {
  console.log("newCardPopup instantiation");
  const { name, link } = formData;
  renderCard({ name, link }, Constants.cardList);
  Constants.addCardForm.reset();
  addFormValidation.disableButton();
});

const newEditPopup = new PopupWithForm("#edit-modal", (formValues) => {
  console.log(formValues);
  Constants.profileName.textContent = formValues.name;
  Constants.profileDescription.textContent = formValues.description;
  newEditPopup.closePopupWithForm();
});

const newImagePopup = new PopupWithImage("#image-modal", (evt) => {
  evt.preventDefault();
});

newEditPopup.setEventListeners();

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
  Constants.profileTitleInput.value = Constants.profileName.textContent;
  Constants.profileDescriptionInput.value =
    Constants.profileDescription.textContent;
  editFormValidation.resetValidation();
  newEditPopup.openPopup();
});
Constants.add.addEventListener("click", () => {
  newCardPopup.openPopup();
});

// ─── Todo: ───────────────────────────────────────────────────────────────────

// fix: tight coupling of Constants.js with other classes
// fix: _getInputValues in PopupWithForm.js
// set up Section.js
// set up UserInfo.js
