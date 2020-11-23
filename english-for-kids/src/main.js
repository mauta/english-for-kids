/* eslint-disable no-case-declarations */
/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */
import Menu from './block/menu';
import Control from './utils/control';
import Card from './block/card';
import MenuCard from './block/menu_card';
import Toggle from './block/toggle';

fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const header = new Control(document.body, 'header', 'header', '<h1>English for kids </h1>');
  const burger = new Control(header.node, 'div', 'burger');
  const mode = new Toggle(header.node, 'mode');
  const isPlayMode = mode.isChecked;
  const main = new Control(document.body, 'main', 'main');
  const field = new Control(main.node, 'div', 'field');
  const elem = new Menu(main.node, 'menu', 'menu__item menu__item--none', 'menu__item menu__item--selected');
  elem.addItem('menu');
  json.forEach((item) => elem.addItem(item.category, item.categoryImg));
  elem.addItem('score');

  elem.onChange = (ind) => {
    location.hash = elem.content[ind];
  };

  window.onpopstate = () => {
    field.clear();
    const categoryHash = location.hash.slice(1);
    const isPlayMode = mode.isChecked;

     document.body.style.backgroundColor = (isPlayMode) ? '#fcebeb' : '#ebf7fc';
    switch (categoryHash) {
      case 'menu':
        for (let i = 0; i < json.length; i += 1) {
          const data = [json[i].category, json[i].categoryImg];
          new MenuCard(field.node, 'card', 'card2', data);
        }
        break;
      case 'score':
        field.node.innerText = 'статистика';
        break;
      default:
        const ourCategoryData = json.find((item) => categoryHash === item.category).data;
        // надо сделать рандоайзер для карточек
        for (let i = 0; i < ourCategoryData.length; i += 1) {
          const car = new Card(field.node, 'card', 'card2', ourCategoryData[i], isPlayMode);
          car.changeMode();
        }
    }

    let index;
    for (let i = 0; i < elem.content.length; i += 1) {
      if (elem.content[i] === categoryHash) {
        index = i;
      }
    }
    elem.select(index);
  };

  mode.node.addEventListener('click', () => {
    window.onpopstate();
  });

  location.hash ? window.onpopstate() : elem.select(0);
});
