export class View {
  constructor() {
    this.domFilms = document.querySelector('.films');
    this.btnSearch = document.querySelector('.btn__search');
    this.inputSearch = document.querySelector('.input__search');
    this.btnLucky = document.querySelector('.btn__lucky');
  }

  renderFilms(films) {
    let newsStr = '';

    films.forEach(film => {
      newsStr += this.prepareFilmsArticle(film);
    });

    this.domFilms.innerHTML = newsStr;
  }

  prepareFilmsArticle(article) {
    return `<div class="card mb-3" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w200/${article.poster_path}" class="card-img-top" alt="${article.title}">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.overview}</p>
        <a href="https://image.tmdb.org/t/p/w200/${article.poster_path}" class="btn btn-primary">Open image</a>
      </div>
    </div>`;
  }

  addListeners(searchFunc, luckyFunc) {
    this.btnSearch.addEventListener('click', searchFunc);
    this.inputSearch.addEventListener('keypress', event => (event.key === 'Enter') ? searchFunc() : null);
    this.btnLucky.addEventListener('click', luckyFunc);
  }
}