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

const edit = document.querySelector(".profile__edit-button");
const add = document.querySelector(".profile__add-button");
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-modal");
const close = document.querySelector(".modal__close");
const closeAdd = document.querySelector(".modal__close-add");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardList = document.querySelector(".cards__list");
const profileEditSave = document.querySelector(".modal__save");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------- Functions ------------------------------- */

function editPopUp() {
  profileTitleInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
  return;
}

function addPopUp() {
  addCardModal.classList.add("modal_opened");
  return;
}

function closePopUp() {
  editProfileModal.classList.remove("modal_opened");
  return;
}

function closeAddPopUp() {
  addCardModal.classList.remove("modal_opened");
  return;
}

function handleProfileSave(evt) {
  evt.preventDefault();
  profileName.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
  return;
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardHeader = cardElement.querySelector(".card__header");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardHeader.textContent = cardData.name;

  return cardElement;
}

/* ----------------------------- Event Listeners ---------------------------- */

edit.addEventListener("click", editPopUp);
add.addEventListener("click", addPopUp);
close.addEventListener("click", closePopUp);
profileEditSave.addEventListener("click", handleProfileSave);

/* ---------------------------------- Loops --------------------------------- */

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
});
