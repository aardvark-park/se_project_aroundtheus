export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._handleImageClick = handleImageClick;
    this._cardSelector = cardSelector;
    this._data = data;
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
    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card_like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }

  testMethod() {
    console.log("testing");
  }
}
