export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._profile = null;
  }
  getUserInfo() {
    this._profile = { 
      nameValue: this._name.textContent,
      aboutValue: this._about.textContent
    };
    return this._profile;
  }
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}