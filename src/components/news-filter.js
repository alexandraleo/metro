import Component from "../component.js";

const filterNames = [
  `2020`,
  `2019`,
  `2018`,
  `2017`,
  `2016`,
  `2015`,
  `2014`,
  `2019`
];

// TODO: переписать функцию получения имен фильтров.

export default class Filter extends Component {
  constructor() {
    super();
  }
  getTemplate() {
    return `<ul class="filter-list">
    ${Array.from(filterNames).map((name) => (`<li><a href="#">${name}</a></li>`.trim())).join(``)}<li></li>
  </ul>`;
  }
}
