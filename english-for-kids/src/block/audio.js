/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class Audio extends Control {
  constructor(parentNode, src) {
    super(parentNode, 'audio');
    this.node.setAttribute('src', src);
  }
}
