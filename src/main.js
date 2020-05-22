// import Hello from "./components/hello-page.js";
import Word from "./components/word.js";
import {render, RenderPosition} from "./render.js";
import {news} from "./news-data.js";

// let helloNode = document.querySelector(`.hello-page`);
let newsNode = document.querySelector(`.news-page__board`);

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

// renderHelloPage();
renderNews();
