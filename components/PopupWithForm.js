import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupElement = document.querySelector(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    // this._boundHandleFormSubmit = handleFormSubmit;
    this.boundHandleFormSubmit = handleFormSubmit;
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
    console.log("setEventListeners PopupWithForm.js");
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault;

      const formData = this._getInputValues();
      this.boundHandleFormSubmit(formData);
      
    });
  }

  openPopup() {
    super.openPopup();
  }
  closePopupWithForm() {
    super.closePopup();
  }
}
