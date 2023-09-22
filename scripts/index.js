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

/* -------------------------------- Form Data ------------------------------- */

const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const addCardForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#edit-profile-form");

/* -------------------------------- Functions ------------------------------- */

function openModal(modal) {
  modal.classList.add("modal_opened");
  body.classList.add("body__no-scroll");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  body.classList.remove("body__no-scroll");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
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

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardHeader = cardElement.querySelector(".card__header");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImage.addEventListener("click", () => {
    openModal(previewImageModal);
    imageSource.src = cardImage.src;
    imageCaption.textContent = cardHeader.textContent;
    imageSource.alt = cardHeader.textContent;
  });
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardHeader.textContent = cardData.name;

  return cardElement;
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

initialCards.forEach((cardData) => renderCard(cardData, cardList));
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});
