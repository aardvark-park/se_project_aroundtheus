import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    //collects data from all input fields and returns it as an object
    //data from this function should be passed to the submission handler as an argument
  }

  close() {
    console.log("PopupWithForm.js close()");
    this._popupForm.reset();
    super.close();
  }
}
