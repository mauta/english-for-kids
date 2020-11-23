/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class MenuCard extends Control {
  constructor(parentNode, className = '', className2 = '', dataArr) {
    const inner = `<img class="card-img" src="${dataArr[1]}" alt="${dataArr[0]}">
    <span class="enWord">${dataArr[0]}</span>`;
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;

    this.node.onclick = () => {
      const choice = dataArr[0];
      location.hash = choice;
    };
  }
}
