import Control from '../utils/control';
import Audio from './audio';

export default class Win extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'popup-win', '<img src = "assets/img/win.png" >');
    this.audio = new Audio(this.node, 'assets/sound/win.mp3');
  }

  winStart() {
    this.audio.node.currentTime = 0;
    this.audio.node.play();
    setTimeout(() => {
      location.hash = 'menu';
    }, 5000);
  }
}
