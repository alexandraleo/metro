import Component from "../component.js";

const createNewsTemplate = () => {
  return (
    `<div class="news-cards"></div>`
  );
};

export default class News extends Component {
  getTemplate() {
    return createNewsTemplate();
  }
}
