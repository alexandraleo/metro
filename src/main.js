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

const renderNews = () => {
  let newsDataNode = newsNode.querySelector(`.news-page__board`);
  for (let oneWord of newsData) {
    const wordElement = new Word(oneWord);
    render(newsDataNode, wordElement, RenderPosition.AFTERBEGIN);
  }
};

const getNewsFilters = (newsArray) => {
  let filtersArray = new Set();
  let filterObj = {year: ``, href: ``, quantity: 0};
  let arr = [];

  for (let word of newsArray) {
    Object.entries(word).forEach(([key, value]) => {
      if (key === `year`) {
        filtersArray.add(value);
      }
    });
  }
  filtersArray = [...filtersArray].sort((a, b) => {
    return b - a;
  });
  // filtersArray.forEach((item) => {
  //   filterObj.year = item;
  //   filterObj.href = filterObj.year;
  //   filterObj.quantity = countFilteredNews(newsArray, item);
  //   console.log(filterObj);
  //   arr.push(filterObj);
  // });
  // return arr;
  return filtersArray;
};

const filterNews = (filterName, newsArray) => {
  return newsArray.filter((item) => item.filterName);
};

const countFilteredNews = (newsArray, property) => {
  return newsArray.reduce((summ, curr) => +summ + +curr[property], 0);
};

const renderNewsFilter = () => {
  let filters = getNewsFilters(newsData);

  // console.log(filters);
  for (let filter of filters) {
    const newsFilter = new Filter(filter);
    render(filterNode, newsFilter, RenderPosition.BEFOREEND);

    newsFilter.onFilter = () => {
      let newsDataNode = document.querySelector(`.news-page__board`);
      const filteredNews = filterNews(filter.filterName, newsData);
      for (let oneWord of filteredNews) {
        const wordElement = new Word(oneWord);
        render(newsDataNode, wordElement, RenderPosition.AFTERBEGIN);
      }
    };
  }
};
// renderHelloPage();
renderMenu();
renderNewsBlock();
renderNews();
renderNewsFilter();
