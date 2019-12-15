export class Templater {
  constructor(url) {
    this.url = url;
    this.templateStr = '';
    this.prepareTemplate();
  }

  prepareTemplate() {
    fetch(this.url)
      .then(prom => prom.text())
      .then(txt => this.templateStr = txt);
  }

  getHTML(article) {
    const data = this.prepareData(article);
    let str = this.templateStr;

    data.forEach(property => {
      str = str.replace(new RegExp(`{{${property.name}}}`, 'g'), property.value);
    });

    return str;
  }

  prepareData(article) {
    return Object.entries(article).map(el => {
      return {
        name: el[0],
        value: el[1]
      }
    });
  }
}