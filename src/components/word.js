import Component from '../component.js';

export default class Word extends Component {
  constructor(word) {
    super();
    this._word = word;
    this._wordDate = word.date;
    this._wordText = word.text;
    this._wordAuthor = word.author || `djtonik`;
  }

  getTemplate() {
    return `<div class="news__item">
    <time class="news__date">${this._wordDate}</time>
    <ul class="news__list">
      ${Array.from(this._wordText).map((text) => (`<li>${text}</li>`.trim())).join(``)}
    </ul>
    <span class="news__author">${this._wordAuthor}</span>
  </div>`;
  }

  // getFilterNames() {

  // }
}
