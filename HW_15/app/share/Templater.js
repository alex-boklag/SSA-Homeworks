import { Model } from '../films/Model.js';

export class Templater {
  constructor() {
    this.model = new Model();
    this.template = '';

    if (!Templater.instance) {
      Templater.instance = this;
    }

    return Templater.instance;
  }

  static instance = false;

  getHTML(data, templateUrl) {
    this.getTemplate(templateUrl);
    const formattedData = this.model.getFormattedData(data);
    let str = this.template;

    formattedData.forEach(obj => {
      str = str.replace(new RegExp(`{{${obj.name}}}`, 'g'), obj.value);
    });

    return str;
  }

  getTemplate(templateUrl) {
    fetch(templateUrl)
      .then(prom => prom.text())
      .then(txt => this.template = txt);
  }
};