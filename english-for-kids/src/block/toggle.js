/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class Toggle extends Control {
  constructor(parentNode, className = '', className2 = '') {
    const inner = '<div class="button" id="button-11"><input type="checkbox" class="checkbox"><div class="knobs"><span></span></div> <div class="layer"></div></div>';
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
    this.isChecked = false;
    this.node.onclick = () => {
      this.isChecked = !this.isChecked;
    };
  }
}
