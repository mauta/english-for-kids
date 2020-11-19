/* eslint-disable max-classes-per-file */
class Test {
  constructor() {
    this.arr1 = [];
  }

  add(string, func) {
    this.arr1.push(func);
  }

  remove(func) {
    const ind = this.arr1.indexOf(func);
    if (ind !== -1) {
      this.arr1.splice(ind, 1);
    }
  }

  dispatch(string, funcParam) {
    this.arr1.forEach((elem) => {
      elem(funcParam);
    });
  }
}

class Control extends Test {
  constructor(parentNode, tag = 'div', className = '', content = '') {
    super();
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    parentNode.appendChild(this.node);
  }
}

class ExtControl extends Control {
  constructor(parentNode, className = '', className2 = '', content = '', onclick) {
    super(parentNode, 'div', className, content);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
    this.onClick = onclick;

    this.node.onclick = () => {
      this.changeState();
      this.onClick && this.onClick(this.isChecked);
    };
  }

  changeState(newState) {
    this.isChecked = newState !== undefined ? newState : !this.isChecked;
    this.node.className = this.isChecked ? this.className2 : this.className;
  }
}

class Menu extends Control {
  constructor(parentNode, className = '', itemClassName = '', itemClassNameSelected = '') {
    super(parentNode, 'div', className, '');
    this.className = className;
    this.itemClassName = itemClassName;
    this.itemClassNameSelected = itemClassNameSelected;

    this.arr = [];
    this.onChange = () => {};
  }

  addItem(content) {
    const elem = new ExtControl(this.node, this.itemClassName, this.itemClassNameSelected, content, () => {
      this.select(this.arr.indexOf(elem))
    });
    this.arr.push(elem);

    elem.add('', () => {
      this.select(this.arr.indexOf(elem))
    });
  };

  select(ind) {
    this.arr.forEach((item) => {
      item.changeState(false);
    });

    this.arr[ind] && this.arr[ind].changeState(true);
    this.onChange(ind, this.arr[ind]);
  }
}

// <----------------------------------------------------------- RUN
let elem = new Menu(document.body, '', 'cl cl5', 'cl cl6');
elem.onChange = (ind) => {
  location.hash = ind;
}

for (let i = 0; i < 10; i++) {
  elem.addItem(i);
};

let el = new Control(document.body);

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
}

location.hash ? window.onpopstate() : elem.select(0);
