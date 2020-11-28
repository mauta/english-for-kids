import {
  set,
  get,
} from '../utils/storage';

export default class Score {
  constructor() {
    this.dashboard = [];
  }

  load(word, localKey) {
    this.dashboard = get('score_mauta');
    this.dashboard.forEach((el) => {
      if (el.enWord === word) {
        el[localKey] += 1;
      }
    });
    set('score_mauta', this.dashboard);
  }
}
