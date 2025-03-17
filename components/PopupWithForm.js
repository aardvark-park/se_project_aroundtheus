import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    this._popupElement = document.querySelector(popupSelector);
  }
}
