/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import Control from '../utils/control';
import ExtControl from './extcontrol';

export default class Menu extends Control {
  constructor(parentNode, className = '', itemClassName = '', itemClassNameSelected = '') {
    super(parentNode, 'div', className, '');
    this.className = className;
    this.itemClassName = itemClassName;
    this.itemClassNameSelected = itemClassNameSelected;

    this.arr = [];
    this.onChange = () => {};
  }

  addItem(content, url) {
    const elem = new ExtControl(this.node, this.itemClassName, this.itemClassNameSelected, content, url, () => {
      this.select(this.arr.indexOf(elem));
    });
    elem.node.dataset.key = content;
    this.arr.push(elem);
  }

  select(ind) {
    this.arr.forEach((item) => {
      item.changeState(false);
    });

    this.arr[ind] && this.arr[ind].changeState(true);
    this.onChange(ind, this.arr[ind]);
  }
}
