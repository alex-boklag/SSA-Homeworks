import { Model } from './Model.js';
import { View } from './View.js';

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.view.addListeners(this.handleClickSearchBtn.bind(this), this.handleClickLuckyBtn.bind(this));
  }

  handleClickSearchBtn() {
    const inputValue = document.querySelector('.input__search').value;
    this.showFilms(inputValue);
  }
  handleClickLuckyBtn() {
    this.showTopFilms();
  }

  showFilms(query) {
    this.model.getSearchedFilms(query)
      .then(filmsObj => this.view.renderFilms(filmsObj.results));
  }
  showTopFilms() {
    this.model.getTopFilms()
      .then(filmsObj => this.view.renderFilms(filmsObj.results));
  }
}