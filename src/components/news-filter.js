import Component from "../component.js";
import {chooseWordsEndings} from "../data/utils.js";

const FILTER_ID_PREFIX = `filter__`;
const getFilterNameByID = (id) => {
  return id.substring(FILTER_ID_PREFIX.length);
};

const createFilterMarkup = (filter, isChecked) => {
  const {year, quantity} = filter;

  return (
    `<input
    type="radio"
    id="filter__${year}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? `checked` : ``}
  />
  <label for="filter__${year}" class="filter__label">
    ${year} <span class="filter__${year}-count filter__count">(${chooseWordsEndings(quantity, [`новость`, `новости`, `новостей`])})</span></label
  >`
  );
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it) => createFilterMarkup(it, it.checked)).join(`\n`);
  return `<nav class="news-page__filter-container filter container">
  ${filtersMarkup}
</nav>`;
};
export class Filter extends Component {
  constructor(filters) {
    super();
    this._filters = filters;
  }
  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const filterName = getFilterNameByID(evt.target.id);
      handler(filterName);
    });
  }
}
