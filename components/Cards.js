import { openModal } from "../pages/index.js";

export default class Card {
  constructor(card, cardSelector, handleImageClick) {
    this._cardSelector = cardSelector;
    this._name = card.name;
    this._link = card.link;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        _handleDeleteButton();
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this);
      });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleImageClick() {
    imageSource.src = this._link; //fix private element
    imageCaption.textContent = this._name;
    imageSource.alt = this._name;
    console.log(this._cardSelector);
    openModal();
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
    cardImage.addEventListener("click", (evt) => {
      handleImageClick(evt);
    });
    cardImage.src = this.link;
    cardImage.alt = this.name;
    cardHeader.textContent = this.name;

    return this._cardElement;
  }
}

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardElement = cardTemplate.cloneNode(true);
const cardImage = cardElement.querySelector(".card__image");
const cardHeader = cardElement.querySelector(".card__header");
const imageSource = document.querySelector("#modal-image-view");
const imageCaption = document.querySelector(".modal__image-caption");

// openModal(editProfileModal);
