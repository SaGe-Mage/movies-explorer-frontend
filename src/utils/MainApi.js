class MainApi {
  constructor() {
    this._url = "http://localhost:3000/";
    this._headers = {'Content-Type': 'application/json'};
  }

  _sendRequest(path, parameters) {
    parameters.credentials = 'include';
    return fetch(`${this._url}${path}`, parameters)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  register(data) {
    const {name, email, password} = data;

    return this._sendRequest("signup", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
  }

  login(data) {
    const {email, password} = data;

    return this._sendRequest("signin", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      })
    })
  }
}

const mainApi = new MainApi();

export default mainApi;
