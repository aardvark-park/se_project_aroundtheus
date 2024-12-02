export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  /* ---------------------------- Private Methods ---------------------------- */

  _handleEscClose() {
    if (evt.key === "Escape") {
      this._popupElement.close();
    }
  }

  _getInputValues() {
    //grab input values. not sure if this is going to be used at this point
  }

  /* ----------------------------- Public Methods ----------------------------- */

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    console.log("popup.js close done");
  }

  setEventListeners() {
    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", this.close());
    this._popupElement
      .querySelector(".modal__mask")
      .addEventListener("click", this.close());
  }
}
