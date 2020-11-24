/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class Card extends Control {
  constructor(parentNode, className = '', data, mode) {
    const inner = `<div class="flipper">
    <div class="front">
      <img class="card-img" src="${data.img}" alt="${data.enWord}">
      <span class="enWord">${data.enWord}</span>
      <audio src="${data.sound}"></audio>
      <button class="btn-changeling" type="button">Перевернуть</button>
    </div>
    <div class="back">
      <img class="card-img" src="${data.img}" alt="${data.enWord}">
      <span class="ruWord">${data.ruWord}</span>
    </div>
    </div>`;
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.isPlayMode = mode;
    this.bnt = this.node.querySelector('.btn-changeling');
    this.front = this.node.querySelector('.front');
    this.audio = this.node.querySelector('audio');

    this.bnt.addEventListener('click', (e) => {
      e.stopPropagation();
      this.node.classList.add('active');
    });

    this.front.addEventListener('click', (e) => {
      e.stopPropagation();
      this.audio.currentTime = 0;
      this.audio.play();
    });

    this.node.addEventListener('mouseleave', () => {
      this.node.classList.remove('active');
    });
  }

  changeMode() {
    // this.node.style.backgroundColor = (this.isPlayMode) ? 'red' : 'green';
  }
}
