/* eslint-disable no-unused-expressions */
import Control from '../utils/control';
import {
  get,
} from '../utils/storage';
import Score from './score';

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
    this.enWord = data.enWord;
    this.try = '';
    this.score = new Score();
    this.score.dashboard = get('score_mauta');

    if (this.isPlayMode) {
      this.node.classList.add('flipper--play');
      this.node.addEventListener('click', () => {
        this.try = this.enWord;
      });
    } else {
      this.bnt.addEventListener('click', (e) => {
        e.stopPropagation();
        this.node.classList.add('active');
        this.score.load(this.enWord, 'train');
      });

      this.node.addEventListener('mouseleave', () => {
        this.node.classList.remove('active');
      });

      this.front.addEventListener('click', () => {
        this.audio.currentTime = 0;
        this.audio.play();
        this.score.load(this.enWord, 'train');
      });
    }
  }

  playSound() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
