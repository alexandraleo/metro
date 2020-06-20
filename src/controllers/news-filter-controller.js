import {news as newsData} from "../data/news-data.js";
import {render, replace, remove, RenderPosition} from "../render.js";
import {Filter} from "../components/news-filter.js";
import Word from "../components/word.js";


const getFilters = () => {
  let countedNews = newsData.reduce(function (allNews, word) {
    if (word.year in allNews) {
      allNews[word.year]++;
    } else {
      allNews[word.year] = 1;
    }
    return allNews;
  }, {});
  let filters = [];
  for (let [key, value] of Object.entries(countedNews)) {
    filters.push({year: key, quantity: value});
  }
  filters.sort((a, b) => {
    return b.year - a.year;
  });
  filters[0].isChecked = true;
  return filters;
};

export let filtersArray = getFilters();

export class FilterController {
  constructor(container, newsContainer) {
    this._container = container;
    this._newsContainer = newsContainer;
    this._activeFilter = filtersArray[0];
    this._filterComponent = null;
    this._newsComponent = null;

    this._onFilterChange = this._onFilterChange.bind(this);
  }

  renderFilters() {
    const container = this._container;
    const oldComponent = this._filterComponent;
    this._filterComponent = new Filter(filtersArray);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);
    const newsContainer = this._newsContainer;
    let filteredNews = this.getNews();
    this._newsComponent = new Word(filteredNews);

    if (oldComponent) {
      replace(this._filterComponent, oldComponent);
      render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);
    } else {
      render(container, this._filterComponent, RenderPosition.BEFOREEND);
      render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);

    }
  }

  _onFilterChange(filterName) {
    this._activeFilter = filterName;
    this.renderNews();
  }

  getNews() {
    let filterName = this._activeFilter;
    return newsData.filter((item) => item.year === filterName);
  }
  renderNews() {
    const newsContainer = this._newsContainer;
    const oldNews = this._newsComponent;
    let filteredNews = this.getNews();
    this._newsComponent = new Word(filteredNews);

    if (oldNews) {
      remove(oldNews);
      render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);
    } else {
      render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);
    }
  }
}
