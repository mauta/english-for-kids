import Control from '../utils/control';
import Card from './card';
import GamePanel from './game_panel';
import Win from './win';
import Lose from './lose';
import Score from './score';
import {
  set,
  get,
} from '../utils/storage';

export default class Feild extends Control {
  constructor(parentNode, className = '', modeStatus) {
    super(parentNode, 'div', className, '');
    this.modeStatus = modeStatus;
    this.cards = [];
    this.wrongCounter = 0;
    this.attempCounter = 0;
    this.score = new Score();
    this.score.dashboard = get('score_mauta');
  }

  addItem(ourCategoryData) {
    const card = new Card(this.node, 'flip-container', ourCategoryData, this.modeStatus);
    this.cards.push(card);
  }

  playMode() {
    this.wrongCounter = 0;
    this.attempCounter = 0;
    const gamePanel = new GamePanel(this.node);
    const errAudio = new Audio();
    errAudio.src = 'assets/sound/error.mp3';
    const rightAudio = new Audio();
    rightAudio.src = 'assets/sound/right.mp3';
    const cardsShuffled = this.cards.sort(() => Math.random() - 0.5);

    let i = 0;
    let item = cardsShuffled[i];

    const playGame = () => {
      this.cards.forEach((element) => {
        element.node.classList.add('flip-container-disabled');
      });
      item = cardsShuffled[i];
      item.playSound();
      item.audio.addEventListener('ended', () => {
        this.cards.forEach((element) => {
          element.node.classList.remove('flip-container-disabled');
        });
      });
      gamePanel.btn.node.addEventListener('click', () => {
        item.playSound();
      });
    };

    setTimeout(playGame, 1000);

    this.cards.forEach((element) => {
      element.node.addEventListener('click', () => {
        this.attempCounter += 1;
        if (item.enWord === element.enWord) {
          this.score.load(item.enWord, 'right');
          element.node.style.opacity = '0.8';
          rightAudio.currentTime = 0;
          rightAudio.play();
          gamePanel.addAchieve(true);
          element.node.style.pointerEvents = 'none';
          i += 1;
          if (i < 8) {
            setTimeout(playGame, 1500);
          } else {
            if (!this.wrongCounter) {
              new Win(this.node).winStart();
            } else {
              new Lose(this.node, [this.wrongCounter, this.attempCounter]).loseStart();
            }
          }
        } else {
          this.score.load(item.enWord, 'mistake');
          this.wrongCounter += 1;
          gamePanel.addAchieve(false);
          errAudio.play();
        }
      });
    });
  }
}
