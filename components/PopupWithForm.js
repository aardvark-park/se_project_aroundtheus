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
    //data from this function should be passed to the submission handler as an argument
    evt.preventDefault();
    const editProfileForm = document.querySelector("#edit-profile-form");
    // const profileTitleInput = document.querySelector("#profile-name-input");
    // const profileDescriptionInput = document.querySelector(
    //   "#profile-description-input"
    // );
    // const cardTitleInput = document.querySelector("#card-title-input");
    // const cardUrlInput = document.querySelector("#card-url-input");
    const formData = new FormData(evt.target);
    // const formDataObj = Object.fromEntries(formData.entries);
    console.log(formData);
    // return formDataObj;
  }

  handleProfileSubmit(evt) {
    evt.preventDefault();
    console.log("ProfileSubmit");
    this._getInputValues(evt);
    Constants.profileName.textContent = Constants.profileTitleInput.value;
    Constants.profileDescription.textContent =
      Constants.profileDescriptionInput.value;
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
