import * as Constants from "./Constants.js";
import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(evt) {
    //collects data from all input fields and returns it as an object
    evt.preventDefault();
    this.formData = new FormData(evt.target);
    this.formDataObj = Object.fromEntries(this.formData);
  }

  // handleProfileSubmit(evt) {
  //   evt.preventDefault();
  //   this._getInputValues(evt);
  //   Constants.profileName.textContent = this.formDataObj.name;
  //   Constants.profileDescription.textContent = this.formDataObj.description;
  //   this.closePopupWithForm();
  // }

  setEventListeners() {
    super.setEventListeners();
    Constants.editProfileForm.addEventListener("submit", (evt) => {
      this._handleFormSubmit(evt);
      console.log("setEventListeners editProfileForm");
    });
    Constants.addCardForm.addEventListener("submit", (evt) => {
      console.log("setEventListeners addCardForm");
      this._handleFormSubmit(evt);
    });
  }

  openPopup() {
    super.openPopup();
    this.setEventListeners();
  }
  closePopupWithForm() {
    super.closePopup();
  }
}
