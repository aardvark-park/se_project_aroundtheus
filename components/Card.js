export default class Card {
  constructor(card, cardSelector, handleImageClick) {
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this.name = card.name;
    this.link = card.link;
  }

  /* ----------------------------- Private Methods ---------------------------- */

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  _handleLikeButton() {
    this._likeBtn.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardSelector = null;
  }

  /* ----------------------------- Public Methods ----------------------------- */

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeBtn = this._cardElement.querySelector(".card__like-button");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardHeader = this._cardElement.querySelector(".card__header");

    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this._cardHeader.textContent = this.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
