import Control from '../utils/control';

export default class Burger extends Control {
  constructor(parentNode, className = '') {
    const inner = '<button class="btn-burger" type="button" aria-label="menu"><span class="btn-burger-line"></span></button>';
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
  }
}
