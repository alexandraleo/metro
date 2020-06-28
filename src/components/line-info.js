import Component from '../component.js';

const stagesMarkup = (lineInfo) => {
  let infoMap = new Map(lineInfo[`stages`]);
  let lineInfoArr = [];

  for (let [key, value] of infoMap.entries()) {
    lineInfoArr.push(`<h3>${key}</h3>
  <p>${value}</p>`);
  }
  return lineInfoArr;
};

const createInfoTemplate = (lineInfo) => {
  return `<section class="lines-page__line-info">
    <h1 class="lines-page__header">Линия ${lineInfo.number} - "${lineInfo.name}"</h1>
    <time class="lines-page__open-date visually-hidden">${lineInfo.date}</time>
    <p>${lineInfo.open}</p>
    <p>${lineInfo.about}</p>
    <div>
      ${stagesMarkup(lineInfo).join(``)}
    </div>
  </section>`;
};

export default class LineInfo extends Component {
  constructor(lineInfo) {
    super();
    this._lineInfo = lineInfo[0];
  }
  getTemplate() {
    return createInfoTemplate(this._lineInfo);
  }
}
