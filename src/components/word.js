import Component from '../component.js';

const createWordMarkup = (word) => {
  // const {date, text, author} = word;
  return `<div class="news__item">
  <time class="news__date">${word.date}</time>
  <ul class="news__list">
  ${Array.from(word.text).map((item) => (`<li>${item}</li>`.trim())).join(``)}
  </ul>
  <span class="news__author">${word.author || `djtonik`}</span>
</div>`;
};

const createNewsTemplate = (news) => {
  const newsMarkup = news.map((item) => createWordMarkup(item)).join(`\n`);
  return `<section class="news-page__board">
    ${newsMarkup}
  </section>`;
};

export default class Word extends Component {
  constructor(news) {
    super();
    this._news = news;
  }
  getTemplate() {
    return createNewsTemplate(this._news);
  }
}
