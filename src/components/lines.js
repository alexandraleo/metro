import Component from "../component.js";
// import {chooseWordsEndings} from "../data/utils.js";

const LINE_ID_PREFIX = `line__`;
const getLineNameByID = (id) => {
  return id.substring(LINE_ID_PREFIX.length);
};

const createLineMarkup = (line) => {
  // const {name, number} = line;
  return (
    `<li class="line__${line.idName} ${line.isActive ? `line--active` : ``}"><a href="#${line.idName}">Линия ${line.number} «${line.name}»</a></li>`
  );
};

const createLineTemplate = (lines) => {
  const linesMarkup = lines.map((it) => createLineMarkup(it, it.isActive)).join(`\n`);
  return `<ul class="lines-list__container">
  ${linesMarkup}
</ul>`;
};
export class Lines extends Component {
  constructor(lines) {
    super();
    this._lines = lines;
  }
  getTemplate() {
    return createLineTemplate(this._lines);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      const lineName = getLineNameByID(evt.target.id);
      console.log(lineName);
      handler(lineName);
    });
  }
}
