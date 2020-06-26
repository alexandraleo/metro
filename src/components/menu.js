import Component from '../component.js';
import {MENU_LIST as menuList} from "../data/utils.js";

const MENU_ID_PREFIX = `menu__`;
const getMenuItemNameByID = (id) => {
  return id.substring(MENU_ID_PREFIX.length);
};

const createMenuMarkup = (menuItem) => {
  return (
    `<input
    type="radio"
    id="menu__${Object.keys(menuItem)[0]}"
    class="menu__input visually-hidden"
    name="menu"
    ${Object.keys(menuItem)[1] ? `checked` : ``}
  />
  <label for="menu__${Object.keys(menuItem)[0]}" class="menu__label">
    ${Object.values(menuItem)[0]}</label>`
  );
};

const createMenuTemplate = () => {
  const menuMarkup = menuList.map((it) => createMenuMarkup(it, it.checked)).join(`\n`);
  return `<nav class="page-header__navigation navigation">  ${menuMarkup}
</nav>`;
};
export default class Menu extends Component {
  constructor() {
    super();
  }
  set onNewsButtonClick(fn) {
    this._onNewsButtonClick = fn;
  }
  getTemplate() {
    return createMenuTemplate();
  }
  setMenuChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const menuItemName = getMenuItemNameByID(evt.target.id);
      handler(menuItemName);
    });
  }
}
