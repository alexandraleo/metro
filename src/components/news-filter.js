import Component from "../component.js";
import {replace} from "../render.js";
import {chooseWordsEndings} from "../data/utils.js";
export class Filter extends Component {
  constructor(data) {
    super();
    this._filterName = data.year;
    this._href = data.year;
    this._quantity = data.quantity;
    this._isActive = data.isActive;
    this._onFilterClick = this._onFilterClick.bind(this);
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  _onFilterClick() {
    const activeFilter = document.querySelector(`.filter-list__item--active`);
    if (activeFilter) {
      this._isActive = false;
      activeFilter.classList.remove(`.filter-list__item--active`);
    }
    this._isActive = !this._isActive;
    this.unbind();
    this._activeFilterUpdate();
    this.bind();
    return typeof this._onFilter === `function` && this._onFilter();
  }

  _activeFilterUpdate() {
    replace(this.getTemplate(), this._element);
  }

  bind() {
    this._element.addEventListener(`click`, this._onFilterClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onFilterClick);
  }

  update(newQuantity) {
    this._quantity = newQuantity;
  }
  getTemplate() {
    return `<li><a href="#${this._href}" class="filter-list__item ${this._isActive ? `filter-list__item--active` : ``}">${this._filterName} год
    <span class="filter-list__item-count"> - ${chooseWordsEndings(this._quantity, [`новость`, `новости`, `новостей`])}</span></a></li>`;
  }


}
