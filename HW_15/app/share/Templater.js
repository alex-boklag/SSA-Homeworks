import { Model } from '../films/Model.js';

export const templater = {
  model: new Model(),
  str: '',

  getHTML(data, templateUrl) {
    this.getTemplate(templateUrl);

    const formattedData = this.model.getFormattedData(data);

    formattedData.forEach(obj => {
      this.str = this.str.replace(new RegExp(`{{${obj.name}}}`, 'g'), obj.value);
    });

    return this.str;

  },
  getTemplate(templateUrl) {
    fetch(templateUrl)
      .then(prom => prom.text())
      .then(txt => this.str = txt);
  },
};