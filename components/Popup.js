import * as Constants from "./Constants.js";
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
      this.closePopup();
    }
  }

  /* ----------------------------- Public Methods ----------------------------- */

  openPopup() {
    // Opens the popup
    // Should be called in preexisting event handlers in index.js
    this._popupElement.classList.add("modal_opened");
  }
  closePopup() {
    //closes the popup
    const popup = document.querySelector(".modal_opened");
    popup.classList.remove("modal_opened");
  }

  setEventListeners() {
    Constants.modals.forEach((modal) => {
      modal.addEventListener("mousedown", (evt) => {
        if (
          evt.target.classList.contains("modal_opened") ||
          evt.target.classList.contains("modal__close")
        ) {
          this.closePopup();
        }
      });
    });
    document.addEventListener("keydown", this._boundHandleEscClose);

    console.log("popup.js setEventListeners");

    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form,
    // and when user presses escape key
  }
}
