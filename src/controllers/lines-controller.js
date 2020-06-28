import {linesData} from "../data/lines-data.js";
import {render, replace, RenderPosition} from "../render.js";
import Lines from "../components/lines-list.js";
import LineInfo from "../components/line-info.js";

let linesAboutNode = document.querySelector(`.lines-page__about`);

const getLines = () => {
  let lines = [];
  for (let value of Object.values(linesData)) {
    lines.push({name: value.name, number: value.number, idName: value.idName});
  }
  return lines;
};

let linesArray = getLines();
export default class LinesController {
  constructor(linesContainer, lineInfoContainer) {
    this._linesListcontainer = linesContainer;
    this._lineInfoContainer = lineInfoContainer;
    this._activeLine = null;
    this._lineListComponent = null;
    this._lineInfoComponent = null;

    this._onLineChange = this._onLineChange.bind(this);
  }

  renderLinesList() {
    const container = this._linesListcontainer;
    const oldComponent = this._lineListComponent;
    this._lineListComponent = new Lines(linesArray);
    this._lineListComponent.setLineChangeHandler(this._onLineChange);

    if (oldComponent) {
      replace(this._lineListComponent, oldComponent);
    } else {
      render(container, this._lineListComponent, RenderPosition.AFTERBEGIN);
    }
  }

  _onLineChange(lineName) {
    this._activeLine = lineName;
    this.renderLineInfo();
  }

  getLineInfo() {
    return linesData.filter((item) => item.idName === this._activeLine);
  }
  renderLineInfo() {
    const lineInfoContainer = this._lineInfoContainer;
    const oldInfo = this._lineInfoComponent;
    let checkedLineInfo = this.getLineInfo();
    this._lineInfoComponent = new LineInfo(checkedLineInfo);
    linesAboutNode.innerHTML = null;
    if (oldInfo) {
      // remove(oldInfo);
      render(lineInfoContainer, this._lineInfoComponent, RenderPosition.BEFOREEND);
    } else {
      render(lineInfoContainer, this._lineInfoComponent, RenderPosition.BEFOREEND);
    }
    // TODO переделать на реплейс
  }
}
