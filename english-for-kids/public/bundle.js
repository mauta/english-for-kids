/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block/burger.js":
/*!*****************************!*\
  !*** ./src/block/burger.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Burger; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Burger extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '') {
    const inner = '<button class="btn-burger" type="button" aria-label="menu"><span class="btn-burger-line"></span></button>';
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
  }
}


/***/ }),

/***/ "./src/block/card.js":
/*!***************************!*\
  !*** ./src/block/card.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ "./src/block/score.js");
/* eslint-disable no-unused-expressions */




class Card extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', data, mode) {
    const inner = `<div class="flipper">
    <div class="front">
      <img class="card-img" src="${data.img}" alt="${data.enWord}">
      <span class="enWord">${data.enWord}</span>
      <button class="btn-changeling" type="button">Перевернуть</button>
    </div>
    <div class="back">
      <img class="card-img" src="${data.img}" alt="${data.enWord}">
      <span class="ruWord">${data.ruWord}</span>
    </div>
    </div>`;
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.isPlayMode = mode;
    this.bnt = this.node.querySelector('.btn-changeling');
    this.front = this.node.querySelector('.front');
    this.audio = new Audio();
    this.audio.src = data.sound;
    this.enWord = data.enWord;
    this.try = '';
    this.score = new _score__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.score.dashboard = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["get"])('score_mauta');

    if (this.isPlayMode) {
      this.node.classList.add('flipper--play');
      this.node.addEventListener('click', () => {
        this.try = this.enWord;
      });
    } else {
      this.bnt.addEventListener('click', (e) => {
        e.stopPropagation();
        this.node.classList.add('active');
        this.score.load(this.enWord, 'train');
      });

      this.node.addEventListener('mouseleave', () => {
        this.node.classList.remove('active');
      });

      this.front.addEventListener('click', () => {
        this.audio.currentTime = 0;
        this.audio.play();
        this.score.load(this.enWord, 'train');
      });
    }
  }

  playSound() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}


/***/ }),

/***/ "./src/block/extcontrol.js":
/*!*********************************!*\
  !*** ./src/block/extcontrol.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtControl; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* eslint-disable no-unused-expressions */


class ExtControl extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', className2 = '', content = '', bgrImg = '', onclick) {
    super(parentNode, 'div', className, content, bgrImg);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
    this.bgrImg = bgrImg;
    this.onClick = onclick;

    this.node.onclick = () => {
      this.changeState();
      this.onClick && this.onClick(this.isChecked);
    };
  }

  changeState(newState) {
    this.isChecked = newState !== undefined ? newState : !this.isChecked;
    this.node.className = this.isChecked ? this.className2 : this.className;
  }
}


/***/ }),

/***/ "./src/block/feild.js":
/*!****************************!*\
  !*** ./src/block/feild.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feild; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/block/card.js");
/* harmony import */ var _game_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_panel */ "./src/block/game_panel.js");
/* harmony import */ var _win__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./win */ "./src/block/win.js");
/* harmony import */ var _lose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lose */ "./src/block/lose.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score */ "./src/block/score.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");








class Feild extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', modeStatus) {
    super(parentNode, 'div', className, '');
    this.modeStatus = modeStatus;
    this.cards = [];
    this.wrongCounter = 0;
    this.attempCounter = 0;
    this.score = new _score__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.score.dashboard = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_6__["get"])('score_mauta');
    this.onClickHardWords = () => {};
    this.hardWords = [];
    this.hardKeys = [];
  }

  addItem(ourCategoryData) {
    const card = new _card__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, 'flip-container', ourCategoryData, this.modeStatus);
    this.cards.push(card);
  }

  playMode() {
    this.wrongCounter = 0;
    this.attempCounter = 0;
    const gamePanel = new _game_panel__WEBPACK_IMPORTED_MODULE_2__["default"](this.node);
    const errAudio = new Audio();
    errAudio.src = 'assets/sound/error.mp3';
    const rightAudio = new Audio();
    rightAudio.src = 'assets/sound/right.mp3';
    const cardsShuffled = this.cards.sort(() => Math.random() - 0.5);

    let i = 0;
    let item = cardsShuffled[i];

    const playGame = () => {
      this.cards.forEach((element) => {
        element.node.classList.add('flip-container-disabled');
      });
      item = cardsShuffled[i];
      item.playSound();
      item.audio.addEventListener('ended', () => {
        this.cards.forEach((element) => {
          element.node.classList.remove('flip-container-disabled');
        });
      });
      gamePanel.btn.node.addEventListener('click', () => {
        item.playSound();
      });
    };

    setTimeout(playGame, 1000);

    this.cards.forEach((element) => {
      element.node.addEventListener('click', () => {
        this.attempCounter += 1;
        if (item.enWord === element.enWord) {
          this.score.load(item.enWord, 'right');
          element.node.style.opacity = '0.8';
          rightAudio.currentTime = 0;
          rightAudio.play();
          gamePanel.addAchieve(true);
          element.node.style.pointerEvents = 'none';
          i += 1;
          if (i < 8) {
            setTimeout(playGame, 1500);
          } else {
            if (!this.wrongCounter) {
              new _win__WEBPACK_IMPORTED_MODULE_3__["default"](this.node).winStart();
            } else {
              new _lose__WEBPACK_IMPORTED_MODULE_4__["default"](this.node, [this.wrongCounter, this.attempCounter]).loseStart();
            }
          }
        } else {
          this.score.load(item.enWord, 'mistake');
          this.wrongCounter += 1;
          gamePanel.addAchieve(false);
          errAudio.play();
        }
      });
    });
  }
}


/***/ }),

/***/ "./src/block/game_panel.js":
/*!*********************************!*\
  !*** ./src/block/game_panel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePanel; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* eslint-disable no-unused-expressions */


class GamePanel extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'game-panel');
    this.leftSide = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'left-side');
    this.btn = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'btn-play', 'Play');
    this.rightSide = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'right-side');
  }

  addAchieve(isRight) {
    if (isRight) {
      const achieve = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.rightSide.node, 'div', 'achieve');
      achieve.node.style.backgroundImage = "url('assets/img/right.png')";
    } else {
      const achieve = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.leftSide.node, 'div', 'achieve');
      achieve.node.style.backgroundImage = "url('assets/img/wrong.png')";
    }
  }
}


/***/ }),

/***/ "./src/block/lose.js":
/*!***************************!*\
  !*** ./src/block/lose.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lose; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Lose extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'popup-lose', '<h2 class="popup-title">Sometimes you <span>win</span> sometimes you <span>learn</span> </h2>');
    this.audio = new Audio();
    this.audio.src = 'assets/sound/lose.mp3';
    this.errors = data[0];
    this.attempts = data[1];
  }

  loseStart() {
    this.audio.currentTime = 0;
    this.audio.play();
    setTimeout(() => {
      location.hash = 'menu';
    }, 5000);
    new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'span', 'lose-info', `${this.errors} mistakes of ${this.attempts} attempts`);
  }
}


/***/ }),

/***/ "./src/block/menu.js":
/*!***************************!*\
  !*** ./src/block/menu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _extcontrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extcontrol */ "./src/block/extcontrol.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./src/block/burger.js");
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */




class Menu extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', itemClassName = '', itemClassNameSelected = '') {
    super(parentNode, 'div', className, '');
    this.className = className;
    this.itemClassName = itemClassName;
    this.itemClassNameSelected = itemClassNameSelected;
    this.content = [];
    this.arr = [];
    this.onChange = () => {};
    this.transLayer = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'transLayer');
    this.burger = new _burger__WEBPACK_IMPORTED_MODULE_2__["default"](this.node, 'burger');

    this.transLayer.node.onclick = () => {
      this.burger.node.classList.remove('is-active');
      this.node.classList.remove('menu-active');
      this.transLayer.node.style.display = 'none';
    };

    this.burger.node.onclick = () => {
      if (this.burger.node.classList.contains('is-active')) {
        this.burger.node.classList.remove('is-active');
        this.node.classList.remove('menu-active');
        this.transLayer.node.style.display = 'none';
      } else {
        this.transLayer.node.style.display = 'block';
        this.burger.node.classList.add('is-active');
        this.node.classList.add('menu-active');
      }
    };
  }

  addItem(content, url) {
    const elem = new _extcontrol__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, this.itemClassName, this.itemClassNameSelected, content, url, () => {
      this.select(this.arr.indexOf(elem));
      this.burger.node.classList.remove('is-active');
      this.node.classList.remove('menu-active');
      this.transLayer.node.style.display = 'none';
    });
    this.content.push(content);
    this.arr.push(elem);
  }

  select(ind) {
    this.arr.forEach((item) => {
      item.changeState(false);
    });

    this.arr[ind] && this.arr[ind].changeState(true);
    this.onChange(ind, this.arr[ind]);
  }
}


/***/ }),

/***/ "./src/block/menu_card.js":
/*!********************************!*\
  !*** ./src/block/menu_card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuCard; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* eslint-disable no-unused-expressions */


class MenuCard extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', className2 = '', dataArr) {
    const inner = `<img class="card-img" src="${dataArr[1]}" alt="${dataArr[0]}">
    <span class="enWord">${dataArr[0]}</span>`;
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;

    this.node.onclick = () => {
      const choice = dataArr[0];
      location.hash = choice;
    };
  }
}


/***/ }),

/***/ "./src/block/score.js":
/*!****************************!*\
  !*** ./src/block/score.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");


class Score {
  constructor() {
    this.dashboard = [];
  }

  load(word, localKey) {
    this.dashboard = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_0__["get"])('score_mauta');
    this.dashboard.forEach((el) => {
      if (el.enWord === word) {
        el[localKey] += 1;
        el.procent = +(el.right * 100 / (el.right + el.mistake)).toFixed(1) || 0;
      }
    });
    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_0__["set"])('score_mauta', this.dashboard);
  }
}


/***/ }),

/***/ "./src/block/score_field.js":
/*!**********************************!*\
  !*** ./src/block/score_field.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreFeild; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sort */ "./src/utils/sort.js");





class ScoreFeild extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parent) {
    super(parent.node, 'h2', 'score__title', 'Score');
    this.scoreBtns = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](parent.node, 'div', 'score__btns');
    this.scoreTrain = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.scoreBtns.node, 'button', 'score__train', 'Train hard');
    this.scoreReset = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.scoreBtns.node, 'button', 'score__reset', 'Reset');
    this.dashboardTitle = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](parent.node, 'div', 'dashboard__title');
    this.dashboardCategory = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__category', 'Category');
    this.dashboardEnWord = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__en-word', 'Word');
    this.dashboardRuWord = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__category', 'Translation');
    this.dashboardTrain = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__train', 'Trained');
    this.dashboardRight = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__right', 'Correct');
    this.dashboardMistake = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__mistake', 'Incorrect');
    this.dashboardProcent = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboardTitle.node, 'button', 'dashboard__procent', 'Progress');
    this.categorySort = true;
    this.enWordSort = false;
    this.ruWordSort = false;
    this.trainSort = false;
    this.rightSort = false;
    this.mistakeSort = false;
    this.procentSort = false;
    this.dashboard = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](parent.node, 'div', 'dashboard');
    this.dashboardScore = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["get"])('score_mauta');

    this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('category'));

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
        new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.dashboard.node, 'div', 'dashboard__line', dashLine);
      });
    };

    render();

    this.dashboardCategory.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.categorySort = !this.categorySort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('category', this.categorySort));
      render();
    });

    this.dashboardEnWord.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.enWordSort = !this.enWordSort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('enWord', this.enWordSort));
      render();
    });

    this.dashboardRuWord.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.ruWordSort = !this.ruWordSort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('ruWord', this.ruWordSort));
      render();
    });

    this.dashboardTrain.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.trainSort = !this.trainSort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('train', this.trainSort));
      render();
    });

    this.dashboardRight.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.rightSort = !this.rightSort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('right', this.rightSort));
      render();
    });

    this.dashboardMistake.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.mistakeSort = !this.mistakeSort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('mistake', this.mistakeSort));
      render();
    });

    this.dashboardProcent.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.procentSort = !this.procentSort;
      this.dashboardScore = this.dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_2__["default"])('procent', this.procentSort));
      render();
    });

    this.scoreReset.node.addEventListener('click', () => {
      this.dashboard.clear();
      this.dashboardScore.forEach((item) => {
        item.train = 0;
        item.right = 0;
        item.mistake = 0;
      });

      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["set"])('score_mauta', this.dashboardScore);
      render();
    });

    this.scoreTrain.node.addEventListener('click', () => {
      location.hash = 'hard-words';
    });
  }
}


/***/ }),

/***/ "./src/block/toggle.js":
/*!*****************************!*\
  !*** ./src/block/toggle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toggle; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* eslint-disable no-unused-expressions */


class Toggle extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', className2 = '') {
    const inner = '<div class="button" id="button-11"><input type="checkbox" class="checkbox"><div class="knobs"><span></span></div> <div class="layer"></div></div>';
    super(parentNode, 'div', className, inner);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
    this.isChecked = false;

    this.node.onclick = () => {
      this.isChecked = !this.isChecked;
      const root = document.querySelector(':root');
      if (this.isChecked) {
        root.style.setProperty('--bg-color', '#CDFFA6');
        root.style.setProperty('--hover-color', '#59A61E');
        root.style.setProperty('--select-color', '#8CBF64');
      } else {
        root.style.setProperty('--bg-color', '#ebf7fc');
        root.style.setProperty('--hover-color', '#03a9f4');
        root.style.setProperty('--select-color', '#74cef8');
      }
    };
  }
}


/***/ }),

/***/ "./src/block/win.js":
/*!**************************!*\
  !*** ./src/block/win.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Win; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Win extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode) {
    super(parentNode, 'div', 'popup-win', '<img src = "assets/img/win.png" >');
    this.audio = new Audio();
    this.audio.src = 'assets/sound/win.mp3';
  }

  winStart() {
    this.audio.currentTime = 0;
    this.audio.play();
    setTimeout(() => {
      location.hash = 'menu';
    }, 5000);
  }
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/menu */ "./src/block/menu.js");
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/control */ "./src/utils/control.js");
/* harmony import */ var _block_menu_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/menu_card */ "./src/block/menu_card.js");
/* harmony import */ var _block_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/toggle */ "./src/block/toggle.js");
/* harmony import */ var _block_feild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/feild */ "./src/block/feild.js");
/* harmony import */ var _block_score_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/score_field */ "./src/block/score_field.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/storage */ "./src/utils/storage.js");
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/sort */ "./src/utils/sort.js");
/* eslint-disable no-case-declarations */
/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */









fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const header = new _utils_control__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, 'header', 'header', '<h1>English for kids </h1>');
  const mode = new _block_toggle__WEBPACK_IMPORTED_MODULE_3__["default"](header.node, 'mode');
  const main = new _utils_control__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, 'main', 'main');
  const elem = new _block_menu__WEBPACK_IMPORTED_MODULE_0__["default"](header.node, 'menu', 'menu__item menu__item--none', 'menu__item menu__item--selected');

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

  (Object(_utils_storage__WEBPACK_IMPORTED_MODULE_6__["get"])('score_mauta')) || Object(_utils_storage__WEBPACK_IMPORTED_MODULE_6__["set"])('score_mauta', makeScore(json));

  const field = new _block_feild__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'field', mode.isChecked);

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
          new _block_menu_card__WEBPACK_IMPORTED_MODULE_2__["default"](field.node, 'card', 'card2', data);
        }
        break;
      case 'hard-words':
        // if (mode.isChecked) {
        //   // mode.node.onclick();
        //   mode.node.querySelector('.checkbox').checked = false;
        // }

        field.modeStatus = mode.isChecked;
        const dashboardScore = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_6__["get"])('score_mauta');
        let wordsKeys = [];
        let hardWords = dashboardScore.sort(Object(_utils_sort__WEBPACK_IMPORTED_MODULE_7__["default"])('procent', false)).slice(0, 8);
        hardWords.forEach((item) => {
          wordsKeys.push(item.enWord);
        });
        field.hardWords = makeHard(json, wordsKeys);
        for (let i = 0; i < field.hardWords.length; i += 1) {
          field.addItem(field.hardWords[i]);
        }

        if (mode.isChecked) {
          field.playMode();
        }

       break;
      case 'score':
        new _block_score_field__WEBPACK_IMPORTED_MODULE_5__["default"](field);
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


/***/ }),

/***/ "./src/utils/control.js":
/*!******************************!*\
  !*** ./src/utils/control.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Control; });
class Control {
  constructor(parentNode, tag = 'div', className = '', content = '', bgrImg = 'none') {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    this.node.style.backgroundImage = bgrImg;
    parentNode.appendChild(this.node);
  }

  clear() {
    while (this.node.firstChild) {
      this.node.lastChild.remove();
    }
  }
}


/***/ }),

/***/ "./src/utils/sort.js":
/*!***************************!*\
  !*** ./src/utils/sort.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortbyKey; });
function sortbyKey(key, direction = true) {
  return (a, b) => ((direction) ? (a[key] >= b[key] ? 1 : -1) : (a[key] <= b[key] ? 1 : -1));
};


/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/*! exports provided: set, get, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}
function get(name, subst = null) {
  return JSON.parse(window.localStorage.getItem(name) || subst);
}

function del(name) {
  localStorage.removeItem(name);
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map