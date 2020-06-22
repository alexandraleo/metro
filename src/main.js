import Menu from "./components/menu.js";
import {render, RenderPosition} from "./render.js";
import {FilterController} from "./controllers/news-filter-controller.js";
import {LinesController} from "./controllers/lines-controller.js";
// import Word from "./components/word.js";
// import News from "./components/news.js";
// import {news as newsData} from "./data/news-data.js";
// import {Filter} from "./components/news-filter.js";


let menuNode = document.querySelector(`.page-header__navigation`);
// let newsNode = document.querySelector(`.news-page`);
let filterNode = document.querySelector(`.news-page__filter`);
let newsDataNode = document.querySelector(`.news-page`);
let linesNode = document.querySelector(`.lines-page__list`);
let linesDataNode = document.querySelector(`.lines-page__about`);

const renderMenu = () => {
  const menuElement = new Menu();
  render(menuNode, menuElement, RenderPosition.AFTERBEGIN);
};

// const renderNews = (filteredNews) => {
//   for (let oneWord of filteredNews) {
//     const wordElement = new Word(oneWord);
//     render(newsDataNode, wordElement, RenderPosition.AFTERBEGIN);
//   }
// };

renderMenu();
let filterController = new FilterController(filterNode, newsDataNode);
filterController.renderFilters();
filterController.renderNews();
let linesController = new LinesController(linesNode, linesDataNode);
linesController.renderLines();
