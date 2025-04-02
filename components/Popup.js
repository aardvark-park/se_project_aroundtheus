export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  /* ---------------------------- Private Methods ---------------------------- */

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".modal_opened");
      close(popup);
    }
  }

  /* ----------------------------- Public Methods ----------------------------- */

  open() {
    // Opens the popup
    // Should be called in preexisting event handlers in index.js
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscapePress);
  }
  close() {
    // Closes the popup - already have the functionality for this,
    // just need to bring it in from index.js
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscapePress);
  }

  setEventListeners() {
    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form,
    // and when user presses escape key
  }
}
