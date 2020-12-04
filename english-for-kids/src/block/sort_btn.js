/* eslint-disable no-unused-expressions */
import Control from '../utils/control';
import sortByKey from '../utils/sort';
import {
  get,
} from '../utils/storage';

export default class SortBtn extends Control {
  constructor(parentNode, className = '', inner, table) {
    super(parentNode, 'button', className, inner);
    this.node.setAttribute('type', 'button');
    this.dashboard = table.dashboard;
    this.dashboardScore = get('score_mauta');
    this.sortDirection = (inner === 'category');
    this.node.addEventListener('click', () => {
      inner = (inner === 'word') ? 'enWord' : inner;
      inner = (inner === 'translate') ? 'ruWord' : inner;
      this.dashboard.clear();
      this.sortDirection = !this.sortDirection;
      table.dashboardScore = this.dashboardScore.sort(sortByKey(inner, this.sortDirection));
      table.render();
    });
  }
}
