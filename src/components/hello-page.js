import Component from "../component.js";
export default class Hello extends Component {
  constructor() {
    super();
  }
  getTemplate() {
    return `<h1>Размышления о питерском метро</h1>
    <blockquote class="blockquote page-main__blockquote">"...Точное и неукоснительное соблюдение настоящих Правил обеспечивает слаженность всех звеньев метрополитена, чёткую и бесперебойную их работу и безопасность движения..."
        <footer class="blockquote__footer">
          <cite class="blockquote__cite">Пункт 2 ПТЭ метрополитена</cite>
        </footer>
        </blockquote>
        <p class="page-main__paragraph">Для большинства людей метро — это обычный вид транспорта. На нём они ездят по своим делам, назначают свидания, встречаются и расстаются... Они каждый день спускаются под землю, заходят в поезда, переходят с линии на линию. Таким метро предстаёт тем, кто не смотрит по сторонам. Наобщавшись вдоволь с разными уровнями и составляющими организма «метро» приходишь к выводу, что пассажирская часть составляет не более 20% от его реальных масштабов. Люди относятся к метро потребительски — их не интересует (или не успевает заинтересовать), как работает то или иное сооружение, им просто надо добраться до пункта назначения. Однако для того, чтобы в 5:25 быть готовыми к приёму первых пассажиров, обслуживанием этого огромного организма занимаются тысячи людей, труд которых зачастую не виден.</p>
        <p class="page-main__paragraph">Тем, кто видит в метро больше, чем просто транспорт, я и посвящаю этот сайт.</p>
        <p class="page-main__paragraph">Внимание! Данный сайт не имеет никакого отношения к ГУП «Петербургский Метрополитен» и ОАО «Метрострой». Это сайт о вымышленном метро в вымышленном городе.</p>

        <!-- <p class="page-main__paragraph">PS : Исправления и дополнения весьма приветствуются. Если вы нашли ошибку в тексте, выделяйте её мышкой и нажимайте Ctrl+Enter.</p> -->`;
  }
}
