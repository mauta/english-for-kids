import Control from '../utils/control';
import {
  get
} from '../utils/storage';

export default class ScoreFeild extends Control {
  constructor(parentNode) {
    super(parentNode, 'h2', 'score__title', 'Score');
    this.scoreBtns = new Control(parentNode, 'div', 'score__btns');
    this.scoreTrain = new Control(this.scoreBtns.node, 'button', 'score__train', 'Train hard');
    this.scoreReset = new Control(this.scoreBtns.node, 'button', 'score__reset', 'Reset');
    this.dashboard = new Control(parentNode, 'div', 'dashboard');
    this.dashboardTitle = new Control(this.dashboard.node, 'div', 'dashboard__title');
    this.dashboardCategory = new Control(this.dashboardTitle.node, 'button', 'dashboard__category', 'Category');
    this.dashboardEnWord = new Control(this.dashboardTitle.node, 'button', 'dashboard__en-word', 'Word');
    this.dashboardRuWord = new Control(this.dashboardTitle.node, 'button', 'dashboard__category', 'Translation');
    this.dashboardTrain = new Control(this.dashboardTitle.node, 'button', 'dashboard__train', 'Trained');
    this.dashboardRight = new Control(this.dashboardTitle.node, 'button', 'dashboard__right', 'Correct');
    this.dashboardMistake = new Control(this.dashboardTitle.node, 'button', 'dashboard__mistake', 'Incorrect');
    this.dashboardProcent = new Control(this.dashboardTitle.node, 'button', 'dashboard__procent', 'Progress');

    this.dashboardScore = get('score_mauta');
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(this.dashboardScore)) {
      const procent = value.right * 100 / (value.right + value.mistake) || 0;
      const dashLine = `<div class="dashboard__category">${value.category}</div>
  <div class="dashboard__en-word">${key}</div>
  <div class="dashboard__ru-word">${value.ruWord}</div>
  <div class="dashboard__train">${value.train}</div>
  <div class="dashboard__right">${value.right}</div>
  <div class="dashboard__mistake">${value.mistake}</div>
  <div class="dashboard__procent">${procent} %</div>`;

      new Control(this.dashboard.node, 'div', 'dashboard__line', dashLine);





    }




  }




}
