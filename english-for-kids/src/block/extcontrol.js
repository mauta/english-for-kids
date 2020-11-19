/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class ExtControl extends Control {
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
