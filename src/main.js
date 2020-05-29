// import Hello from "./components/hello-page.js";
import Menu from "./components/menu.js";
import Word from "./components/word.js";
import {render, RenderPosition} from "./render.js";
import Filter from "./components/news-filter.js";
import {news} from "./data/news-data.js";

// let helloNode = document.querySelector(`.hello-page`);
let menuNode = document.querySelector(`.page-header__navigation`);
let newsNode = document.querySelector(`.news-page__board`);
let filterNode = document.querySelector(`.news-page__filter`);

const renderMenu = () => {
  const menuElement = new Menu();
  render(menuNode, menuElement, RenderPosition.AFTERBEGIN);
};
// const renderHelloPage = () => {
//   const helloElement = new Hello();
//   render(helloNode, helloElement, RenderPosition.BEFOREEND);
// };
const renderNews = () => {
  for (let oneWord of news) {
    const wordElement = new Word(oneWord);
    render(newsNode, wordElement, RenderPosition.AFTERBEGIN);
  }
};
const renderNewsFilter = () => {
  const newsFilter = new Filter();
  render(filterNode, newsFilter, RenderPosition.AFTERBEGIN);
};
// renderHelloPage();
renderMenu();
renderNews();
renderNewsFilter();
