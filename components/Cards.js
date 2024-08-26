import { openModal } from "../pages/index.js";

export default class Card {
  // cardSelector is actually a template element. You should pass a selector instead
  constructor(card, cardSelector, handleImageClick) {
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._name = card.name;
    this._link = card.link;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    // TODO - use this._cardElement - done
    this._cardElement.content
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardSelector.remove();
    this._cardSelector = null;
  }

  // _handleImageClick() {
  //   imageSource.src = this._link;
  //   imageCaption.textContent = this._name;
  //   imageSource.alt = this._name;
  //   openModal();
  // }

  getView() {
    // once you pass selector, select the template element
    this._cardElement = this._cardSelector
      .querySelector("#card-template")
      .cloneNode(true);

    this._likeBtn = this._cardElement.querySelector(".card__like-button");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardHeader = this._cardElement.querySelector(".card__header");

    this._cardImage.src = this._link;
    cardImage.alt = this._name;
    this._cardHeader.textContent = this._name;
    console.log(cardImage);

    this._setEventListeners();

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

// openModal(cardSelector);
