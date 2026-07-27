/* --------------------------------- Arrays --------------------------------- */

export const initialCards = [
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

export const body = document.querySelector(".page");
export const edit = document.querySelector(".profile__edit-button");
export const add = document.querySelector(".profile__add-button");
export const card = document.querySelector(".card");
export const editProfileModal = document.querySelector("#edit-modal");
export const addCardModal = document.querySelector("#add-modal");
export const editProfileCloseModal =
  editProfileModal.querySelector(".modal__close");
export const addCardCloseModal = addCardModal.querySelector(".modal__close");
export const profileName = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const previewImageModal = document.querySelector("#image-modal");
export const previewImageCloseModal =
  previewImageModal.querySelector(".modal__close");
export const imageSource = document.querySelector("#modal-image-view");
export const imageCaption = document.querySelector(".modal__image-caption");
export const closeButtons = document.querySelectorAll(".modal__close");
export const cardList = document.querySelector(".cards__list");
export const profileEditSubmit = editProfileModal.querySelector(".modal__save");
export const addCardSubmit = addCardModal.querySelector(".modal__save");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const modals = document.querySelectorAll(".modal");

/* -------------------------------- Form Data ------------------------------- */

export const profileTitleInput = document.querySelector("#profile-name-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const cardTitleInput = document.querySelector("#card-title-input");
export const cardUrlInput = document.querySelector("#card-url-input");
export const addCardForm = document.querySelector("#add-card-form");
export const editProfileForm = document.querySelector("#edit-profile-form");

export const settings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
