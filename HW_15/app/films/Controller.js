import { Model } from './Model.js';
import { View } from './View.js';

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.view.addListeners(this.handleClickSearchBtn.bind(this), this.handleClickLuckyBtn.bind(this));
    this.templateUrl = '/SSA-Homeworks/HW_15/app/films/templateFilm';
    //this.templateUrl = '/app/films/templateFilm';
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
      .then(filmsObj => this.view.renderFilms(filmsObj.results, this.templateUrl));
  }
  showTopFilms() {
    this.model.getTopFilms()
      .then(filmsObj => this.view.renderFilms(filmsObj.results, this.templateUrl));
  }
}