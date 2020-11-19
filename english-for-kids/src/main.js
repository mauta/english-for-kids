import Menu from './block/menu';
import Control from './utils/control';

const elem = new Menu(document.body, '', 'cl cl5', 'cl cl6');
elem.onChange = (ind) => {
  location.hash = ind;
};

for (let i = 0; i < 10; i += 1) {
  elem.addItem(i);
}

const el = new Control(document.body);

window.onpopstate = () => {
  switch (location.hash) {
    case '#0':
      el.node.innerHTML = 'test content 0';
      break;
    case '#1':
      el.node.innerHTML = 'test content 1';
      break;
    case '#2':
      el.node.innerHTML = 'test content 2';
      break;
    case '#3':
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
