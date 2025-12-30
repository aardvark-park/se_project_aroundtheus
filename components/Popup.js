export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  /* ---------------------------- Private Methods ---------------------------- */

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".modal_opened");
      this.closePopup(popup);
      console.log("Popup.js _handleEscClose()");
      console.log(popup);
    }
  }

  /* ----------------------------- Public Methods ----------------------------- */

  openPopup() {
    // Opens the popup
    // Should be called in preexisting event handlers in index.js
    console.log(this._popupElement);
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }
  closePopup() {
    //closes the popup
    const popup = document.querySelector(".modal_opened");
    console.log("closed");
    console.log(this._popupElement);
    popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    console.log("Popup.js setEventListeners()");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });

    // Adds a click event listener to the close icon of popup
    // Popup should also close when user clicks on shaded area around the form,
    // and when user presses escape key
  }
}
