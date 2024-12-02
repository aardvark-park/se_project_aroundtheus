export default class UserInfo {
  constructor({ info }) {
    this._name = info.name;
    this._job = info.job;
  }

  getUserInfo() {
    //returns an object containing info about the user
  }

  setUserInfo() {
    //takes new user data and adds it to the page
    //should be used after successful submission of the profile form
  }
}
