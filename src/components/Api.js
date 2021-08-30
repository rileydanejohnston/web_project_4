export default class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._auth = settings.headers.authorization;
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

  updateProfile({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._auth,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        about
      })
    })
    .then((res) => {
      return this._handleResponse(res);
    })
  }
}