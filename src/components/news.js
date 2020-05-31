import Component from "../component.js";

export default class News extends Component {
  constructor() {
    super();

  }
  getTemplate() {
    return `<section class="news-page__board"></section>`;
  }

}
