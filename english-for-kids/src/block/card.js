/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class Card extends Control {
  constructor(parentNode, className = '', className2 = '', data, mode) {
    const inner = `
    <img class="card-img" src="${data.img}" alt="${data.enWord}">
    <span class="ruWord">${data.ruWord}</span>
    <span class="enWord">${data.enWord}</span>
    <audio src="${data.sound}"></audio>
    <button class="btn-changeling" type="button">Перевернуть</button>`;

    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
    this.isPlayMode = mode;
  }

  changeMode() {
    this.node.style.backgroundColor = (this.isPlayMode) ? 'red' : 'green';
  }
}
