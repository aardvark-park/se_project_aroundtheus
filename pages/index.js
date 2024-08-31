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

/* --------------------------------- Classes -------------------------------- */
// let cardData = initialCards.forEach((card) => {
//   new Card(card, cardSelector, handleImageClick);
// });

initialCards.forEach((card) => {
  const cardInstance = new Card(card, "#card-template", handleImageClick);
  cardList.prepend(cardInstance.getView());
});

modals.forEach((card) => {
  const cardValidation = new Validation(card, cardSelector);
  // cardValidation.testMethod();
});

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

function renderCard(cardData, wrapper) {
  const cardElement = cardSelector(cardData);
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
  renderCard({ name, link }, cardList);
  closeModal(addCardModal);
  addCardForm.reset();
}

// added handleImageClick as a function for the cardImage event listener
function handleImageClick(card) {
  // const cardElement = cardTemplate.cloneNode(true);
  // const cardImage = cardElement.querySelector(".card__image");
  // const cardHeader = cardElement.querySelector(".card__header");
  imageSource.src = card._link; //fix private element
  imageCaption.textContent = card._name;
  imageSource.alt = card._name;
  openModal(previewImageModal);
}

//need to port this function to Cards.js get view function
// function cardSelector(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector(".card__image");
//   const cardHeader = cardElement.querySelector(".card__header");
//   // const likeButton = cardElement.querySelector(".card__like-button");
//   // const deleteButton = cardElement.querySelector(".card__delete-button");
//   // likeButton.addEventListener("click", () => {
//   //   likeButton.classList.toggle("card__like-button_active");
//   // });
//   // deleteButton.addEventListener("click", () => {
//   //   cardElement.remove();
//   // });
//   cardImage.addEventListener("click", (evt) => {
//     handleImageClick(evt);
//   });
//   cardImage.src = cardData.link;
//   cardImage.alt = cardData.name;
//   cardHeader.textContent = cardData.name;

//   return cardElement;
// }

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

// initialCards.forEach((cardData) => renderCard(cardData, cardList));

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
