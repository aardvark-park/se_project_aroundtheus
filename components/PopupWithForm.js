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
    const editProfileForm = document.querySelector("#edit-profile-form");
    this.formData = new FormData(evt.target);
    this.formDataObj = Object.fromEntries(this.formData);
  }

  handleProfileSubmit(evt) {
    evt.preventDefault();
    this._getInputValues(evt);
    Constants.profileName.textContent = this.formDataObj.name;
    Constants.profileDescription.textContent = this.formDataObj.description;
    this.closePopupWithForm();
  }

  handleAddCardSubmit(evt) {
    evt.preventDefault();
    console.log("AddCardSubmit");
    console.log(this._getInputValues);
    this._getInputValues();
    const name = cardTitleInput.value;
    const link = cardUrlInput.value;
    renderCard({ name, link }, cardList);
    newCardPopup.close(addCardModal);
    addCardForm.reset();
    addFormValidation.disableButton();
  }

  setEventListeners() {
    console.log("PopupWithForm setEventListeners");
    super.setEventListeners();
    Constants.editProfileForm.addEventListener("submit", (evt) => {
      this.handleProfileSubmit(evt);
    });
    Constants.addCardForm.addEventListener("submit", (evt) => {
      this.handleAddCardSubmit(evt);
    });
  }
  closePopupWithForm() {
    super.closePopup();
  }
}
