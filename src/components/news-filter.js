import Component from "../component.js";

// const filterNames = [
//   `2020`,
//   `2019`,
//   `2018`,
//   `2017`,
//   `2016`,
//   `2015`,
//   `2014`,
//   `2019`
// ];

// TODO: переписать функцию получения имен фильтров.

export class Filter extends Component {
  constructor(news) {
    super();
    this._filterNames = this.getFilternames(news);
  }

  getTemplate() {
    return `<ul class="filter-list">
    ${this._filterNames.map((name) => (`<li><a href="#">${name}</a></li>`.trim())).join(``)}
  </ul>`;
  }

  getFilternames(news) {
    let arr = [];
    for (let word of news) {
      Object.entries(word).forEach(([key, value]) => {
        if (key === `date` && !arr.includes(value.substr(-4, 4))) {
          arr.push(value.substr(-4, 4));
        }
      });
    }
    arr.sort((a, b) => {
      return b - a;
    });
    return arr;
  }
}
