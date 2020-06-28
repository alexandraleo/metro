import Component from "../component.js";
// import {chooseWordsEndings} from "../data/utils.js";

const LINE_ID_PREFIX = `line__`;
const getLineNameByID = (id) => {
  return id.substring(LINE_ID_PREFIX.length);
};

const createLineMarkup = (line) => {
  // const {name, number} = line;
  return (
    `<input
    type="radio"
    id="line__${line.idName}"
    class="line__input visually-hidden"
    name="lines"
    ${line.isChecked ? `checked` : ``}
  />
  <label for="line__${line.idName}" class="line__label">
  Линия ${line.number} «${line.name}»</label>`
  );
};

const createLineTemplate = (lines) => {
  const linesMarkup = lines.map((it) => createLineMarkup(it, it.checked)).join(`\n`);
  return `<nav class="lines-page__list container">
  ${linesMarkup}
</nav>`;
};
export default class Lines extends Component {
  constructor(lines) {
    super();
    this._lines = lines;
  }
  getTemplate() {
    return createLineTemplate(this._lines);
  }

  setLineChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const lineName = getLineNameByID(evt.target.id);
      handler(lineName);
    });
  }
}
