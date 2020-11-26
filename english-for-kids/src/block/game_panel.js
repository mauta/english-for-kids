/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class GamePanel extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'game-panel');
    this.leftSide = new Control(this.node, 'div', 'left-side');
    this.btn = new Control(this.node, 'button', 'btn-play', 'Play');
    this.rightSide = new Control(this.node, 'div', 'right-side');
  }

  addAchieve(isRight) {
    if (isRight) {
      const achieve = new Control(this.rightSide.node, 'div', 'achieve');
      achieve.node.style.backgroundImage = "url('assets/img/right.png')";
    } else {
      const achieve = new Control(this.leftSide.node, 'div', 'achieve');
      achieve.node.style.backgroundImage = "url('assets/img/wrong.png')";
    }
  }
}
