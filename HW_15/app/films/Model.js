export class Model {
  constructor() {
    this.apiKey = 'api_key=7b03194d5364c3fac6b159e67a4f43ed';
    this.searchLink = `https://api.themoviedb.org/3/search/movie?${this.apiKey}&query=`;
    this.luckyLink = `https://api.themoviedb.org/3/discover/movie?${this.apiKey}`;
  }

  getSearchedFilms(query) {
    return fetch(this.searchLink + query)
      .then(resp => resp.json());
  }
  getTopFilms() {
    return fetch(this.luckyLink)
      .then(resp => resp.json());
  }
}