import Control from '../utils/control';
import {
  get,
  set,
} from '../utils/storage';

import sortByKey from '../utils/sort';

export default class ScoreFeild extends Control {
  constructor(parent) {
    super(parent.node, 'h2', 'score__title', 'Score');
    this.scoreBtns = new Control(parent.node, 'div', 'score__btns');
    this.scoreTrain = new Control(this.scoreBtns.node, 'button', 'score__train', 'Train hard');
    this.scoreReset = new Control(this.scoreBtns.node, 'button', 'score__reset', 'Reset');
    this.dashboardTitle = new Control(parent.node, 'div', 'dashboard__title');
    this.dashboardCategory = new Control(this.dashboardTitle.node, 'button', 'dashboard__category', 'Category');
    this.dashboardEnWord = new Control(this.dashboardTitle.node, 'button', 'dashboard__en-word', 'Word');
    this.dashboardRuWord = new Control(this.dashboardTitle.node, 'button', 'dashboard__category', 'Translation');
    this.dashboardTrain = new Control(this.dashboardTitle.node, 'button', 'dashboard__train', 'Trained');
    this.dashboardRight = new Control(this.dashboardTitle.node, 'button', 'dashboard__right', 'Correct');
    this.dashboardMistake = new Control(this.dashboardTitle.node, 'button', 'dashboard__mistake', 'Incorrect');
    this.dashboardProcent = new Control(this.dashboardTitle.node, 'button', 'dashboard__procent', 'Progress');
    this.categorySort = true;
    this.enWordSort = false;
    this.ruWordSort = false;
    this.trainSort = false;
    this.rightSort = false;
    this.mistakeSort = false;
    this.procentSort = false;
    this.dashboard = new Control(parent.node, 'div', 'dashboard');
    this.dashboardScore = get('score_mauta');

    this.dashboardScore = this.dashboardScore.sort(sortByKey('category'));

    const render = () => {
      this.dashboardScore.forEach((item) => {
        const {
          enWord,
          ruWord,
          category,
          train,
          right,
          mistake,
          procent,
        } = item;
        const dashLine = `<div class="dashboard__category">${category}</div>
      <div class="dashboard__en-word">${enWord}</div>
      <div class="dashboard__ru-word">${ruWord}</div>
      <div class="dashboard__train">${train}</div>
      <div class="dashboard__right">${right}</div>
      <div class="dashboard__mistake">${mistake}</div>
      <div class="dashboard__procent">${procent} %</div>`;
        new Control(this.dashboard.node, 'div', 'dashboard__line', dashLine);
      });
    };

    render();

    this.dashboardCategory.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.categorySort = !this.categorySort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('category', this.categorySort));
      render();
    });

    this.dashboardEnWord.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.enWordSort = !this.enWordSort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('enWord', this.enWordSort));
      render();
    });

    this.dashboardRuWord.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.ruWordSort = !this.ruWordSort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('ruWord', this.ruWordSort));
      render();
    });

    this.dashboardTrain.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.trainSort = !this.trainSort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('train', this.trainSort));
      render();
    });

    this.dashboardRight.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.rightSort = !this.rightSort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('right', this.rightSort));
      render();
    });

    this.dashboardMistake.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.mistakeSort = !this.mistakeSort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('mistake', this.mistakeSort));
      render();
    });

    this.dashboardProcent.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.procentSort = !this.procentSort;
      this.dashboardScore = this.dashboardScore.sort(sortByKey('procent', this.procentSort));
      render();
    });

    this.scoreReset.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.dashboardScore.forEach((item) => {
        item.train = 0;
        item.right = 0;
        item.mistake = 0;
      });

      set('score_mauta', this.dashboardScore);
      render();
    });

    this.scoreTrain.node.addEventListener('click', () => {
      location.hash = 'hard-words';
    });
  }
}
