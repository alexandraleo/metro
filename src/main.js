// import Hello from "./components/hello-page.js";
import Menu from "./components/menu.js";
import Word from "./components/word.js";
import News from "./components/news.js";

import {render, RenderPosition} from "./render.js";
import {Filter} from "./components/news-filter.js";
import {news as newsData} from "./data/news-data.js";

// let helloNode = document.querySelector(`.hello-page`);
let menuNode = document.querySelector(`.page-header__navigation`);
let newsNode = document.querySelector(`.news-page`);
let filterNode = document.querySelector(`.news-page__filter-list`);

const renderMenu = () => {
  const menuElement = new Menu();
  render(menuNode, menuElement, RenderPosition.AFTERBEGIN);
};
// const renderHelloPage = () => {
//   const helloElement = new Hello();
//   render(helloNode, helloElement, RenderPosition.BEFOREEND);
// };
const renderNewsBlock = () => {
  const newsBoardElement = new News();
  render(newsNode, newsBoardElement, RenderPosition.BEFOREEND);
};

const renderNews = (filteredNews) => {
  let newsDataNode = newsNode.querySelector(`.news-page__board`);
  for (let oneWord of filteredNews) {
    const wordElement = new Word(oneWord);
    render(newsDataNode, wordElement, RenderPosition.AFTERBEGIN);
  }
};

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
  filters[0].isActive = true;
  return filters;
};

let filtersArray = getFilters();

const filterNews = (filterName, newsArray) => {
  return newsArray.filter((item) => item.year === filterName);
};

const renderNewsFilter = () => {
  let filters = getFilters();
  for (let filter of filters) {
    const newsFilter = new Filter(filter);
    render(filterNode, newsFilter, RenderPosition.BEFOREEND);

    newsFilter.onFilter = () => {
      // let newsDataNode = document.querySelector(`.news-page__board`);
      const filteredNews = filterNews(filter.year, newsData);
      // for (let oneWord of filteredNews) {
      //   const wordElement = new Word(oneWord);
      //   render(newsDataNode, wordElement, RenderPosition.AFTERBEGIN);
      // }
      renderNews(filteredNews);
    };
  }
};
// renderHelloPage();
renderMenu();
renderNewsBlock();
renderNewsFilter();
renderNews(filterNews(filtersArray[1].year, newsData), newsData);
