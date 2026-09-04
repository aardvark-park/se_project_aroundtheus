/* --------------------------------- Modules -------------------------------- */
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import * as Constants from "../components/Constants.js";
import "./index.css";
import logo from "../images/logo.svg";
import logo_light from "../images/logo-light.svg";
import light_mode from "../images/light-mode.svg";
import dark_mode from "../images/dark-mode.svg";

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
  Constants.cardElements.push(cardInstance);
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

function themeDarkMode() {
  Constants.body.classList.remove("page__light");
  Constants.cardElements.forEach((card) => {
    card.removeLightTheme();
  });
  Constants.theme.src = light_mode;
  Constants.logo.src = logo;
  Constants.theme.style.animation = "themeSpinLeft 0.5s linear 1";
  Constants.edit.classList.remove("profile__edit-button-light");
  Constants.add.classList.remove("profile__add-button-light");
}

function themeLightMode() {
  Constants.body.classList.add("page__light");
  Constants.cardElements.forEach((card) => {
    card.addLightTheme();
  });
  Constants.theme.src = dark_mode;
  Constants.logo.src = logo_light;
  Constants.theme.style.animation = "themeSpinRight 0.5s linear 1";
  Constants.edit.classList.add("profile__edit-button-light");
  Constants.add.classList.add("profile__add-button-light");
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

Constants.theme.addEventListener("click", () => {
  if (Constants.body.classList.contains("page__light")) {
    themeDarkMode();
  } else {
    themeLightMode();
  }
});

// ─── Todo: ───────────────────────────────────────────────────────────────────

// fix: tight coupling of Constants.js with other classes
// fix: _getInputValues in PopupWithForm.js
// set up Section.js
// set up UserInfo.js
// fix: if user has browser set to prefer light mode, toggle does not function
