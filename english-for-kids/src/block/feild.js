import Control from '../utils/control';
import Card from './card';
import Audio from './audio';
import GamePanel from './game_panel';
import Win from './win';
import Lose from './lose';

export default class Feild extends Control {
  constructor(parentNode, className = '', modeStatus) {
    super(parentNode, 'div', className, '');
    this.modeStatus = modeStatus;
    this.arrAudio = ['assets/sound/bear.mp3', 'assets/sound/pig.mp3', 'assets/sound/dog.mp3', 'assets/sound/panda.mp3'];
    this.cards = [];
    this.wrongCounter = 0;
    this.attempCounter = 0;
  }

  addItem(ourCategoryData) {
    const card = new Card(this.node, 'flip-container', ourCategoryData, this.modeStatus);
    this.cards.push(card);
  }

  playMode() {
    this.wrongCounter = 0;
    this.attempCounter = 0;
    const gamePanel = new GamePanel(this.node);
    const errAudio = new Audio(this.node, 'assets/sound/error.mp3');
    const rightAudio = new Audio(this.node, 'assets/sound/right.mp3');
    const cardsShuffled = this.cards.sort(() => Math.random() - 0.5);

    let i = 0;
    let item = cardsShuffled[i];

    const playGame = () => {
      item = cardsShuffled[i];
      item.playSound();
      gamePanel.btn.node.addEventListener('click', () => {
        item.playSound();
      });
    };

    setTimeout(playGame, 1000);

    this.cards.forEach((element) => {
      element.node.addEventListener('click', () => {
        this.attempCounter += 1;
        if (item.enWord === element.enWord) {
          element.node.style.opacity = '0.3';
          rightAudio.node.currentTime = 0;
          rightAudio.node.play();
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
          this.wrongCounter += 1;
          gamePanel.addAchieve(false);
          errAudio.node.play();
        }
      });
    });
  }
}
