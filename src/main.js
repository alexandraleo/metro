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
let filterNode = document.querySelector(`.news-page__filter`);

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
const renderNewsFilter = () => {
  // let newsDates = getFilternames(newsData);
  const newsFilter = new Filter(newsData);
  render(filterNode, newsFilter, RenderPosition.AFTERBEGIN);
  // console.log(newsData);
};
// renderHelloPage();
renderMenu();
renderNewsBlock();
renderNews();
renderNewsFilter();
