/* --------------------------------- Modules -------------------------------- */
import Card from "../components/Cards.js";
import Validation from "../components/FormValidator.js";
/* --------------------------------- Arrays --------------------------------- */

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

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
const cardSelector = document.querySelectorAll(".card");

/* -------------------------------- Form Data ------------------------------- */

const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const addCardForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#edit-profile-form");

const settings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

/* --------------------------------- Classes -------------------------------- */

initialCards.forEach((card) => {
  const cardInstance = new Card(card, "#card-template", handleImageClick);
  cardList.prepend(cardInstance.getView());
});

const editFormValidation = new Validation(settings, editProfileModal);
const addFormValidation = new Validation(settings, addCardModal);
editFormValidation.enableValidation();
addFormValidation.enableValidation();

/* -------------------------------- Functions ------------------------------- */
function handleEscapePress(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".modal_opened");
    closeModal(popup);
  }
}

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscapePress);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscapePress);
}

function renderCard(card, wrapper) {
  const cardInstance = new Card(card, "#card-template", handleImageClick);
  const cardElement = cardInstance.getView(card.name, card.link);
  wrapper.prepend(cardElement);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  console.log(name);
  console.log(link);
  renderCard({ name, link }, cardList);
  closeModal(addCardModal);
  addCardForm.reset();
}

function handleImageClick(card) {
  imageSource.src = card._link;
  imageCaption.textContent = card._name;
  imageSource.alt = card._name;
  openModal(previewImageModal);
}

/* ----------------------------- Event Listeners ---------------------------- */

edit.addEventListener("click", () => {
  profileTitleInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});
add.addEventListener("click", () => openModal(addCardModal));
editProfileForm.addEventListener("submit", handleProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);

/* ---------------------------------- Loops --------------------------------- */

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__close")
    ) {
      closeModal(modal);
    }
  });
});
