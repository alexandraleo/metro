import Component from '../component.js';

const MENU_LIST = [
  {news: `Новости`},
  {lines: `Линии и станции`},
  {future: `Перспективы`},
  {objects: `Объекты`},
  {vagons: `Вагоны`},
  {noises: `Звуки`},
  {info: `Информация`},
  {creativity: `Творчество`}
];

export default class Menu extends Component {
  constructor() {
    super();
    this._onNewsButtonClick = this._onNewsButtonClick.bind(this);
  }
  set onNewsButtonClick(fn) {
    this._onNewsButtonClick = fn;
  }
  // _onNewsButtonClick() {
  //   if (typeof this._onNewsButtonClick === `function`) {
  //     console.log(`News`);
  //   }
  // }

  getTemplate() {
    return `<ul class="navigation-list">
    ${MENU_LIST.map((item) => (`<li><a href="#" class="navigation-list--${Object.keys(item)}">${Object.values(item)}</a></li>`.trim())).join(``)}
    </ul>`;
  }

  bind() {
    this._element.querySelector(`.navigation-list--news`).addEventListener(`click`, this._onNewsButtonClick);
  }
}
