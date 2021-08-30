export default class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._headers = { headers: settings.headers };
  }

  _handleResponse(res) {
    if (res.ok){
      return res.json();
    }
    return Promise.reject();
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, this._headers)
      .then((res) => {
        return this._handleResponse(res);
      });
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, this._headers)
      .then((res) => {
        return this._handleResponse(res);
      });
  }
}