import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    console.log("PopupWithImage.js close()");
    this._popupElement.reset;
    super.close();
  }
}
