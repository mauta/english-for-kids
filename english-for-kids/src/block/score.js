import {
  set,
  get,
} from '../utils/storage';

export default class Score {
  constructor() {
    this.dashboard = {};
  }

  load(word, localKey) {
    this.dashboard = get('score_mauta');
    this.dashboard[word][localKey] += 1;
    set('score_mauta', this.dashboard);
  }
}
