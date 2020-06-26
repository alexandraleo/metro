export const MENU_LIST = [
  {index: `Главная`, isChecked: true},
  {news: `Новости`},
  {lines: `Линии и станции`},
  {future: `Перспективы`},
  {objects: `Объекты`},
  {vagons: `Вагоны`},
  {noises: `Звуки`},
  {info: `Информация`},
  {creativity: `Творчество`}
];


export let chooseWordsEndings = (number, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const wordIndex = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5];
  return `${number} ${words[wordIndex]}`;
};
