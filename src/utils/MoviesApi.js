class MoviesApi {
  constructor() {
    this._url = "https://api.nomoreparties.co/beatfilm-movies";
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET'
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
