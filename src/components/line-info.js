import Component from '../component.js';

const stagesMarkup = (lineInfo, type) => {
  let infoMap = new Map(lineInfo[type]);
  let lineInfoArr = [];

  for (let [key, value] of infoMap.entries()) {
    lineInfoArr.push(`<div class="lines-page__stage-info">
      <h3 class="lines-page__stage-info--header">${key}</h3>
      <div class="lines-page__stage-info--text-container">
      	${Array.from(value).map((item) => (`<p>${item}</p>`.trim())).join(``)}
      </div>
    </div>`);
  }
  return lineInfoArr;
};

const createInfoTemplate = (lineInfo) => {
  if (lineInfo.number !== 6) {
    return (`<section class="lines-page__line-info ${lineInfo.idName}">
    <h1 class="lines-page__header">Линия ${lineInfo.number} </br> «${lineInfo.name}»</h1>
    <time class="lines-page__open-date visually-hidden">${lineInfo.date}</time>
    <h2>Дата открытия</h2>
    <p>${lineInfo.open}</p>
    <h2>Сведения о линии</h2>
    ${Array.from(lineInfo.about).map((item) => (`<p>${item}</p>`.trim())).join(``)}
    <h2>Перегоны</h2>
    <div>
      ${stagesMarkup(lineInfo, `stages`).join(``)}
    </div>
  </section>`);
  } else {
    return (`<section class="lines-page__line-info line__">
    <h1 class="lines-page__header">Линия ${lineInfo.number} </br> «${lineInfo.name}»</h1>
    <h2>Сведения о линии</h2>
    ${Array.from(lineInfo.about).map((item) => (`<p>${item}</p>`.trim())).join(``)}
    <h2>Цель линии</h2>
    ${Array.from(lineInfo.purpose).map((item) => (`<p>${item}</p>`.trim())).join(``)}
    <h2>Типы станционных комплексов</h2>
    ${Array.from(lineInfo.types).map((item) => (`<p>${item}</p>`.trim())).join(``)}
    <h2>Пересадочные узлы</h2>
    <div>
      ${stagesMarkup(lineInfo, `transfers`).join(``)}
    </div>
    <h2>Интересности</h2>
    <div>
      ${stagesMarkup(lineInfo, `interests`).join(``)}
    </div>
    <h2>Сроки</h2>
    ${Array.from(lineInfo.deadlines).map((item) => (`<p>${item}</p>`.trim())).join(``)}
  </section>`);
  }
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
