import { templater } from '../share/templater.js';

export class View {
  constructor(templateUrl) {
    this.domFilms = document.querySelector('.films');
    this.btnSearch = document.querySelector('.btn__search');
    this.inputSearch = document.querySelector('.input__search');
    this.btnLucky = document.querySelector('.btn__lucky');
  }

  renderFilms(films, templateUrl) {
    let newsStr = '';

    films.forEach(film => {
      newsStr += this.prepareFilmsArticle(film, templateUrl);
    });

    this.domFilms.innerHTML = newsStr;
  }

  prepareFilmsArticle(data, templateUrl) {
    return templater.getHTML(data, templateUrl);
  }

  addListeners(searchFunc, luckyFunc) {
    this.btnSearch.addEventListener('click', searchFunc);
    this.inputSearch.addEventListener('keypress', event => (event.key === 'Enter') ? searchFunc() : null);
    this.btnLucky.addEventListener('click', luckyFunc);
  }
}