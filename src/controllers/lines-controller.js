import {linesData} from "../data/lines-data.js";
import {render, replace, RenderPosition} from "../render.js";
import {Lines} from "../components/lines.js";
// import Word from "../components/word.js";


const getLines = () => {
  let lines = [];
  for (let value of Object.values(linesData)) {
    lines.push({name: value.name, number: value.number, idName: value.idName});
  }
  lines[0].isChecked = true;
  return lines;
};

export let LinesArray = getLines();
// console.log(LinesArray);

export class LinesController {
  constructor(container, linesContainer) {
    this._container = container;
    this._newsContainer = linesContainer;
    this._activeLine = LinesArray[0];
    this._filterComponent = null;
    this._newsComponent = null;

    this._onLineChange = this._onLineChange.bind(this);
  }

  renderLines() {
    const container = this._container;
    const oldComponent = this._filterComponent;
    this._filterComponent = new Lines(LinesArray);
    this._filterComponent.setFilterChangeHandler(this._onLineChange);

    if (oldComponent) {
      replace(this._filterComponent, oldComponent);
      // render(linesContainer, this._newsComponent, RenderPosition.BEFOREEND);
    } else {
      render(container, this._filterComponent, RenderPosition.BEFOREEND);
      // render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);

    }
  }

  _onLineChange(lineName) {
    this._activeLine = lineName;
    // console.log(this._activeLine);
    // this.renderNews();
  }

  // getNews() {
  //   let filterName = this._activeFilter;
  //   return linesData.filter((item) => item.name === filterName);
  // }
  // renderNews() {
  //   const newsContainer = this._newsContainer;
  //   const oldNews = this._newsComponent;
  //   let filteredNews = this.getNews();
  //   this._newsComponent = new Word(filteredNews);

  //   if (oldNews) {
  //     remove(oldNews);
  //     render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);
  //   } else {
  //     render(newsContainer, this._newsComponent, RenderPosition.BEFOREEND);
  //   }
  // }
}
