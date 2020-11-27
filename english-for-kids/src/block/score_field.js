import Control from '../utils/control';
import {
  get
} from '../utils/storage';

export default class ScoreFeild extends Control {
  constructor(parentNode) {
    const inner = `<div class="dashboard__category">Category</div>
  <div class="dashboard__en-word">Word</div>
  <div class="dashboard__ru-word">Translation</div>
  <div class="dashboard__train">Trained</div>
  <div class="dashboard__right">Correct</div>
  <div class="dashboard__mistake">Incorrect</div>
  <div class="dashboard__procent">%</div>`;

    super(parentNode, 'div', 'dashboard__title', inner);
    this.dashboard = get('score_mauta');

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(this.dashboard)) {
      const procent = value.right * 100 / (value.right + value.mistake);
      const dashLine = `<div class="dashboard__category">${value.category}</div>
  <div class="dashboard__en-word">${key}</div>
  <div class="dashboard__ru-word">${value.ruWord}</div>
  <div class="dashboard__train">${value.train}</div>
  <div class="dashboard__right">${value.right}</div>
  <div class="dashboard__mistake">${value.mistake}</div>
  <div class="dashboard__procent">${procent} %</div>`;

      new Control(parentNode, 'div', 'dashboard__line', dashLine);
    }
  }
}
