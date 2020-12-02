import Control from '../utils/control';

export default class Win extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'popup-win', '<img class="popup-win__img" src = "assets/img/win.png" width="450" height="333">');
    this.audio = new Audio();
    this.audio.src = 'assets/sound/win.mp3';
  }

  winStart() {
    this.audio.currentTime = 0;
    this.audio.play();
    setTimeout(() => {
      location.hash = 'menu';
    }, 4000);
  }
}
