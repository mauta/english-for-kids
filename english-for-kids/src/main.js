/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */
import Menu from './block/menu';
import Control from './utils/control';
import Card from './block/card';

fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const main = new Control(document.body, 'main', 'main', '<h1>English for kids </h1>');
  const field = new Control(main.node, 'div', 'field');
  const elem = new Menu(main.node, 'menu', 'menu__item menu__item--none', 'menu__item menu__item--selected');

  json.forEach((item) => elem.addItem(item.category, item.categoryImg));

    elem.onChange = (ind) => {
    location.hash = json[ind].category;
  };

  window.onpopstate = () => {
    field.clear();
    const categoryHash = location.hash.slice(1);
    const ourCategoryData = json.find((item) => categoryHash === item.category).data;
    // надо сделать рандоайзер для карточек
    for (let i = 0; i < ourCategoryData.length; i += 1) {
      new Card(field.node, 'card', 'card2', ourCategoryData[i]);
    }

    let index;
    for (let i = 0; i < json.length; i += 1) {
      if (elem.node.children[i].dataset.key === categoryHash) {
        index = i;
        return index;
      }
    }

    elem.select(index);
  };

  location.hash ? window.onpopstate() : elem.select(0);
});
