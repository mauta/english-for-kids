/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import Control from '../utils/control';
import ExtControl from './extcontrol';
import Burger from './burger';

export default class Menu extends Control {
  constructor(parentNode, className = '', itemClassName = '', itemClassNameSelected = '') {
    super(parentNode, 'div', className, '');
    this.className = className;
    this.itemClassName = itemClassName;
    this.itemClassNameSelected = itemClassNameSelected;
    this.content = [];
    this.arr = [];
    this.onChange = () => {};
    this.transLayer = new Control(this.node, 'div', 'transLayer');
    this.burger = new Burger(this.node, 'burger');

    this.transLayer.node.onclick = () => {
      this.burger.node.classList.remove('is-active');
      this.node.classList.remove('menu-active');
      this.transLayer.node.style.display = 'none';
    };

    this.burger.node.onclick = () => {
      if (this.burger.node.classList.contains('is-active')) {
        this.burger.node.classList.remove('is-active');
        this.node.classList.remove('menu-active');
        this.transLayer.node.style.display = 'none';
      } else {
        this.transLayer.node.style.display = 'block';
        this.burger.node.classList.add('is-active');
        this.node.classList.add('menu-active');
      }
    };
  }

  addItem(content, url) {
    const elem = new ExtControl(this.node, this.itemClassName, this.itemClassNameSelected, content, url, () => {
      this.select(this.arr.indexOf(elem));
      this.burger.node.classList.remove('is-active');
      this.node.classList.remove('menu-active');
      this.transLayer.node.style.display = 'none';
    });
    this.content.push(content);
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
