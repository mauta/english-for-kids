import Control from '../utils/control';
import {
  get,
  set,
} from '../utils/storage';

// import sortByKey from '../utils/sort';
import SortBtn from './sort_btn';

export default class ScoreFeild extends Control {
  constructor(parent) {
    super(parent.node, 'h2', 'score__title', 'Score');
    this.scoreBtns = new Control(parent.node, 'div', 'score__btns');
    this.scoreTrain = new Control(this.scoreBtns.node, 'button', 'score__train', 'Train hard');
    this.scoreReset = new Control(this.scoreBtns.node, 'button', 'score__reset', 'Reset');
    this.dashboardTitle = new Control(parent.node, 'div', 'dashboard__title');
    this.dashboardScore = get('score_mauta');
    this.arrSortbtns = ['category', 'word', 'translate', 'train', 'right', 'mistake', 'precent'];
    this.dashboard = new Control(parent.node, 'div', 'dashboard');
    this.arrSortbtns.forEach((item) => {
      new SortBtn(this.dashboardTitle.node, `dashboard__${item}`, item, this);
    });

    this.scoreReset.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.dashboardScore.forEach((item) => {
        item.train = 0;
        item.right = 0;
        item.mistake = 0;
        item.precent = 0;
      });

      set('score_mauta', this.dashboardScore);
      this.render();
    });

    this.scoreTrain.node.addEventListener('click', () => {
      location.hash = 'hard-words';
    });
  }

  render() {
    this.dashboardScore.forEach((item) => {
      const {
        enWord,
        ruWord,
        category,
        train,
        right,
        mistake,
        precent,
      } = item;
      const dashLine = `<div class="dashboard__category">${category}</div>
    <div class="dashboard__word">${enWord}</div>
    <div class="dashboard__translate">${ruWord}</div>
    <div class="dashboard__train">${train}</div>
    <div class="dashboard__right">${right}</div>
    <div class="dashboard__mistake">${mistake}</div>
    <div class="dashboard__precent">${precent} %</div>`;
      new Control(this.dashboard.node, 'div', 'dashboard__line', dashLine);
    });
  }
}
