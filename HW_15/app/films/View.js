import { Templater } from '../share/Templater.js';

export class View {
  constructor() {
    this.domFilms = document.querySelector('.films');
    this.btnSearch = document.querySelector('.btn__search');
    this.inputSearch = document.querySelector('.input__search');
    this.btnLucky = document.querySelector('.btn__lucky');
    this.templater = new Templater('/HW_15/app/films/templateFilm');
  }

  renderFilms(films) {
    let newsStr = '';

    films.forEach(film => {
      newsStr += this.prepareFilmsArticle(film);
    });

    this.domFilms.innerHTML = newsStr;
  }

  prepareFilmsArticle(article) {
    return this.templater.getHTML(article);
  }

  addListeners(searchFunc, luckyFunc) {
    this.btnSearch.addEventListener('click', searchFunc);
    this.inputSearch.addEventListener('keypress', event => (event.key === 'Enter') ? searchFunc() : null);
    this.btnLucky.addEventListener('click', luckyFunc);
  }
}