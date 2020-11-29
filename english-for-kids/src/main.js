/* eslint-disable no-case-declarations */
/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */
import Menu from './block/menu';
import Control from './utils/control';
import MenuCard from './block/menu_card';
import Toggle from './block/toggle';
import Field from './block/feild';
import ScoreFeild from './block/score_field'
import {
  get,
  set,
} from './utils/storage';
import sortByKey from './utils/sort';

fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const header = new Control(document.body, 'header', 'header', '<h1>English for kids </h1>');
  const mode = new Toggle(header.node, 'mode');
  const main = new Control(document.body, 'main', 'main');
  const elem = new Menu(header.node, 'menu', 'menu__item menu__item--none', 'menu__item menu__item--selected');

  const makeScore = (data) => {
    const result = [];
    data.forEach((el) => {
      let temp = {};
      el.data.forEach((item) => {
        temp = {
          enWord: item.enWord,
          ruWord: item.ruWord,
          category: el.category,
          train: 0,
          right: 0,
          mistake: 0,
          procent: 0,
        };
        result.push(temp);
      });
    });
    return result;
  };

  const makeHard = (data, words) => {
    const result = [];
    let dataVal = [];
    for (let i = 0; i < data.length; i += 1) {
      dataVal.push(data[i].data);
    }
    dataVal = dataVal.flat();

    words.forEach((el) => {
      for (let i = 0; i < dataVal.length; i += 1) {
        if (dataVal[i].enWord === el) {
          result.push(dataVal[i]);
        }
      }
    });
    return result;
  };

  (get('score_mauta')) || set('score_mauta', makeScore(json));

  const field = new Field(main.node, 'field', mode.isChecked);

  elem.addItem('menu');
  json.forEach((item) => elem.addItem(item.category, item.categoryImg));
  elem.addItem('score');
  elem.addItem('hard-words');

  elem.onChange = (ind) => {
    location.hash = elem.content[ind];
  };

  window.onpopstate = () => {
    const categoryHash = location.hash.slice(1);
    field.clear();
    field.cards = [];
    field.modeStatus = mode.isChecked;

    switch (categoryHash) {
      case 'menu':
        for (let i = 0; i < json.length; i += 1) {
          const data = [json[i].category, json[i].categoryImg];
          new MenuCard(field.node, 'card', 'card2', data);
        }
        break;
      case 'hard-words':
        field.modeStatus = mode.isChecked;
        const dashboardScore = get('score_mauta');
        let wordsKeys = [];
        let hardWords = dashboardScore.sort(sortByKey('procent', false)).slice(0, 8);

        console.log(hardWords);
        hardWords.forEach((item) => {
          wordsKeys.push(item.enWord);
        });
        field.hardWords = makeHard(json, wordsKeys);
        console.log(field.hardWords);
        for (let i = 0; i < field.hardWords.length; i += 1) {
          field.addItem(field.hardWords[i]);
        }
        if (mode.isChecked) {
          field.playMode();
        }
        break;
      case 'score':
        new ScoreFeild(field);
        break;
      default:
        const ourCategoryData = json.find((item) => categoryHash === item.category).data;
        for (let i = 0; i < ourCategoryData.length; i += 1) {
          field.addItem(ourCategoryData[i]);
        }
        if (mode.isChecked) {
          field.playMode();
        }
    }

    let index;
    for (let i = 0; i < elem.content.length; i += 1) {
      if (elem.content[i] === categoryHash) {
        index = i;
      }
    }
    elem.select(index);
  };

  mode.node.addEventListener('click', () => {
    window.onpopstate();
  });

  location.hash ? window.onpopstate() : elem.select(0);
});
