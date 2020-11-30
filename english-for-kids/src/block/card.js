/* eslint-disable no-unused-expressions */
import Control from '../utils/control';
import {
  get,
} from '../utils/storage';
import Score from './score';

export default class Card extends Control {
  constructor(parentNode, className = '', data, mode) {
    super(parentNode, 'div', className);
    this.flipper = new Control(this.node, 'div', 'flipper');
    const frontInner = `<img class="card-img" src="assets/img/${data.enWord}.png" alt="${data.enWord}">
    <span class="enWord">${data.enWord}</span>`;
    this.front = new Control(this.flipper.node, 'div', 'front', frontInner);
    const btnInner = '<img src="./assets/img/reload.svg" alt="turn over" width="29" hight="29">';
    this.bntChangeling = new Control(this.front.node, 'button', 'btn-changeling', btnInner);
    const backInner = ` <img class="card-img" src="assets/img/${data.enWord}.png" alt="${data.enWord}">
    <span class="ruWord">${data.ruWord}</span>`;
    this.back = new Control(this.flipper.node, 'div', 'back', backInner);
    this.isChecked = false;
    this.className = className;
    this.isPlayMode = mode;
    this.audio = new Audio();
    this.audio.src = `assets/sound/${data.enWord}.mp3`;
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
      this.bntChangeling.node.addEventListener('click', (e) => {
        e.stopPropagation();
        this.node.classList.add('active');
        this.score.load(this.enWord, 'train');
      });

      this.node.addEventListener('mouseleave', () => {
        this.node.classList.remove('active');
      });

      this.front.node.addEventListener('click', () => {
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
