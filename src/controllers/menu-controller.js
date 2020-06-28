import {render, RenderPosition} from "../render.js";
import Menu from "../components/menu.js";
import {MENU_LIST as menuList} from "../data/utils.js";

let mainNode = document.querySelector(`.main`);

export default class MenuController {
  constructor(container) {
    this._container = container;
    this._activeMenuItem = Object.keys(menuList[0]);
    this._filterComponent = null;

    this._onMenuItemChange = this._onMenuItemChange.bind(this);
  }

  renderMenu() {
    const container = this._container;
    this._menuComponent = new Menu();
    this._menuComponent.setMenuChangeHandler(this._onMenuItemChange);
    render(container, this._menuComponent, RenderPosition.AFTERBEGIN);
  }

  _onMenuItemChange(menuItemName) {
    this._activeMenuItem = menuItemName;
    const classNamePart = `main-page__`;
    let newClass = classNamePart + this._activeMenuItem;
    let newPage = document.getElementsByClassName(newClass);

    if (newPage.length !== 0) {
      for (let child of mainNode.children) {
        child.classList.add(`visually-hidden`);
      }
      for (let item of newPage) {
        item.classList.remove(`visually-hidden`);
      }
    }
  }
}
