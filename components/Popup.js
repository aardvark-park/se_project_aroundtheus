export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  /* ---------------------------- Private Methods ---------------------------- */

  _setEventListeners() {}

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".modal_opened");
      this.close(popup);
      console.log("Popup.js _handleEscClose()");
      console.log(popup);
    }
  }

  /* ----------------------------- Public Methods ----------------------------- */

  open() {
    // Opens the popup
    // Should be called in preexisting event handlers in index.js
    console.log("Popup.js open()");
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    console.log("Popup.js close()");
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    console.log("Popup.js setEventListeners()");
    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form,
    // and when user presses escape key
  }
}
