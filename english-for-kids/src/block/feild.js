import Control from '../utils/control';
import Card from './card';

export default class Feild extends Control {
  constructor(parentNode, className = '', modeStatus) {
    super(parentNode, 'div', className, '');
    this.modeStatus = modeStatus;
    this.arrAudio = ["assets/sound/bear.mp3", "assets/sound/pig.mp3", "assets/sound/dog.mp3", "assets/sound/panda.mp3"];
  }

  addItem(ourCategoryData) {
    new Card(this.node, 'flip-container', ourCategoryData, this.modeStatus);
  }

  play() {
    const btn = new Control(this.node, 'button', 'btn-repiat', 'повторить');
    const audio = this.node.querySelector('audio');

    btn.node.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
    });
  }
}
