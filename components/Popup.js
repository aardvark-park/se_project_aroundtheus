export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._boundHandleEscClose = (evt) => {
      this._handleEscClose(evt);
    };
  }

  /* ---------------------------- Private Methods ---------------------------- */

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".modal_opened");
      this.closePopup();
    }
  }

  /* ----------------------------- Public Methods ----------------------------- */

  openPopup() {
    // Opens the popup
    // Should be called in preexisting event handlers in index.js
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }
  closePopup() {
    //closes the popup
    const popup = document.querySelector(".modal_opened");
    popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._boundHandleEscClose);
  }

  setEventListeners() {
    console.log("Popup.js setEventListeners()");
    document.addEventListener("keydown", this._boundHandleEscClose);

    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form,
    // and when user presses escape key
  }
}
