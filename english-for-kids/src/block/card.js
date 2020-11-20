/* eslint-disable no-unused-expressions */
import Control from '../utils/control';

export default class Card extends Control {
  constructor(parentNode, className = '', className2 = '', content , ruWord = '', enWord = '', bgrImg = '', sound = '') {
    super(parentNode, 'div', className, content, bgrImg);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
    this.bgrImg = bgrImg;
    this.ruWord = ruWord;
    this.enWord = enWord;
    this.sound = sound;
  }


  content = большой кусок хтмл со всеми плюшками

}
