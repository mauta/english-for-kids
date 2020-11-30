/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class Toggle extends Control {
  constructor(parentNode, className = '') {
    const inner = '<div class="button" id="button-11"><input type="checkbox" class="checkbox"><div class="knobs"><span></span></div> <div class="layer"></div></div>';
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;

    this.node.onclick = () => {
      this.isChecked = !this.isChecked;
      const root = document.querySelector(':root');
      if (this.isChecked) {
        root.style.setProperty('--bg-color', '#CDFFA6');
        root.style.setProperty('--hover-color', '#59A61E');
        root.style.setProperty('--select-color', '#8CBF64');
      } else {
        root.style.setProperty('--bg-color', '#ebf7fc');
        root.style.setProperty('--hover-color', '#03a9f4');
        root.style.setProperty('--select-color', '#74cef8');
      }
    };
  }
}
