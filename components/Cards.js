export default class Card {
  constructor(card, cardSelector) {
    this._cardSelector = cardSelector;
    this._text = card.name;
    this._link = card.link;
  }

  _setEventListeners() {
    alert("just a test..");
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
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  getView() {
    console.log(this._text);
    console.log(this._name);
    console.log(this._cardSelector);
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }
}
