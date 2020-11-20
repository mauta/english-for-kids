import Menu from './block/menu';
import Control from './utils/control';
import Card from './block/card';

fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const category = new Set();
  const arrMenu = [];

  for (let i = 0; i < json.length; i += 1) {
    category.add(json[i].category);
  }
  category.forEach((categItem) => {
    const a = json.find((item) => item.category === categItem);
    arrMenu.push([a.category, a.categoryImg]);
  });

  const elem = new Menu(document.body, '', 'cl cl5', 'cl cl6');

  arrMenu.forEach((item) => elem.addItem(item[0], item[1]));

  elem.onChange = (ind) => {
    location.hash = arrMenu[ind][0];
  };

  const el = new Control(document.body);

  window.onpopstate = () => {
    switch (location.hash) {
      case '#0':
        el.node.innerHTML = 'test content 0';
        break;
      case '#food':
        const arrrrrr = []
        json.forEach((item) => {
          if (item.category === 'animals');
          arrrrrr.push(item);
        });
        for (let i = 0; i < arrrrrr.length; i += 1) {
          new Card(el, 'card', '', arrrrrr[i].ruWord, arrrrrr[i].enWord, arrrrrr[i].bgrImg, arrrrrr[i].sound);
        }
        break;
      case '#animals':
        el.node.innerHTML = 'test content 2';
        break;
      case '#colors':
        el.node.innerHTML = 'test content 3';
        break;
      case '#4':
        el.node.innerHTML = 'test content 4';
        break;
      case '#5':
        el.node.innerHTML = 'test content 5';
        break;
      case '#6':
        el.node.innerHTML = 'test content 6';
        break;
      case '#7':
        el.node.innerHTML = 'test content 7';
        break;
      case '#8':
        el.node.innerHTML = 'test content 8';
        break;
      case '#9':
        el.node.innerHTML = 'test content 9';
        break;
      default:
        el.node.innerHTML = '';
        break;
    }

    console.log(window.location);
    const num = location.hash.slice(1);
    elem.select(num);
  };

  location.hash ? window.onpopstate() : elem.select(0);

});
