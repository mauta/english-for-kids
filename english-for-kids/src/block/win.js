import Control from '../utils/control';

export default class Win extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'popup-win', '<img src = "assets/img/win.png" >');
    this.audio = new Audio();
    this.audio.src = 'assets/sound/win.mp3';
  }

  winStart() {
    this.audio.currentTime = 0;
    this.audio.play();
    setTimeout(() => {
      location.hash = 'menu';
    }, 5000);
  }
}
