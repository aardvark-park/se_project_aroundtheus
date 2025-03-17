export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  /* ---------------------------- Private Methods ---------------------------- */

  _handleEscClose() {
    // Logic for closing the popup when esc key is pressed
  }

  /* ----------------------------- Public Methods ----------------------------- */

  open() {
    // Opens the popup
    // Should be called in preexisting event handlers in index.js
  }
  close() {
    // Closes the popup
  }

  setEventListeners() {
    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form
  }
}
