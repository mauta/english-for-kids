import Control from '../utils/control';
import Audio from './audio';

export default class Lose extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'popup-lose', '<h2 class="popup-title">Sometimes you <span>win</span> sometimes you <span>learn</span> </h2>');
    this.audio = new Audio(this.node, 'assets/sound/lose.mp3');
    this.errors = data[0];
    this.attempts = data[1];
  }

  loseStart() {
    this.audio.node.currentTime = 0;
    this.audio.node.play();
    setTimeout(() => {
      location.hash = 'menu';
    }, 5000);
    new Control(this.node, 'span', 'lose-info', `${this.errors} mistakes of ${this.attempts} attempts`);
  }
}
