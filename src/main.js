import {FilterController} from "./controllers/news-filter-controller.js";
import {LinesController} from "./controllers/lines-controller.js";
import {MenuController} from "./controllers/menu-controller.js";

let menuNode = document.querySelector(`.page-header`);
let filterNode = document.querySelector(`.news-page__filter`);
let newsDataNode = document.querySelector(`.news-page`);
let linesNode = document.querySelector(`.lines-page__list`);
let linesDataNode = document.querySelector(`.lines-page__about`);

let menuController = new MenuController(menuNode);
menuController.renderMenu();
let filterController = new FilterController(filterNode, newsDataNode);
filterController.renderFilters();
filterController.renderNews();
let linesController = new LinesController(linesNode, linesDataNode);
linesController.renderLines();
