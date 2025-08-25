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
    const profileTitleInput = document.querySelector("#profile-name-input");
    const profileDescriptionInput = document.querySelector(
      "#profile-description-input"
    );
    const cardTitleInput = document.querySelector("#card-title-input");
    const cardUrlInput = document.querySelector("#card-url-input");
  }

  handleProfileSubmit(evt) {
    evt.preventDefault();
    this._getInputValues();
    profileName.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopup(editProfileModal);
  }

  handleAddCardSubmit(evt) {
    evt.preventDefault();
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
  }
  close() {
    this._popupForm.reset();
    super.closePopup();
  }
}
