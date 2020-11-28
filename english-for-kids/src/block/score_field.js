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

    this.dashboardScore.forEach((item) => {
      const {
        enWord,
        ruWord,
        category,
        train,
        right,
        mistake,
      } = item;

      const procent = right * 100 / (right + mistake) || 0;
      const dashLine = `<div class="dashboard__category">${category}</div>
    <div class="dashboard__en-word">${enWord}</div>
    <div class="dashboard__ru-word">${ruWord}</div>
    <div class="dashboard__train">${train}</div>
    <div class="dashboard__right">${right}</div>
    <div class="dashboard__mistake">${mistake}</div>
    <div class="dashboard__procent">${procent} %</div>`;

      new Control(this.dashboard.node, 'div', 'dashboard__line', dashLine);
    });
  }
}
