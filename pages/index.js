/* --------------------------------- Modules -------------------------------- */
import "./index.css";

//import all the classes
import * as constants from "../components/Constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

//create instances of the classes
const CardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = new Card(item, constants.cardTemplate);
      CardSection.addItem(cardEl.getView());
    },
    selector: constants.card,
  },
  constants.initialCards
);

// initialize all instances
CardSection.renderItems(constants.initialCards);

//all the rest

/* --------------------------------- TO DO: --------------------------------- */

//get Section class functioning - functions aren't working
//renderer not working atm - jk, it's section 'selector' parameter
//start on other classes
