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
/* eslint-disable no-unused-expressions */


class Card extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', data, mode) {
    const inner = `<div class="flipper">
    <div class="front">
      <img class="card-img" src="${data.img}" alt="${data.enWord}">
      <span class="enWord">${data.enWord}</span>
      <audio src="${data.sound}"></audio>
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
    this.audio = this.node.querySelector('audio');

    this.bnt.addEventListener('click', (e) => {
      e.stopPropagation();
      this.node.classList.add('active');
    });

    if (this.isPlayMode) {
      console.log('играем');

      this.node.classList.add('flipper--play')
    } else {
      console.log('треним');

      this.bnt.addEventListener('click', (e) => {
        e.stopPropagation();
        this.node.classList.add('active');
      });

      this.node.addEventListener('mouseleave', () => {
        this.node.classList.remove('active');
      });

      this.front.addEventListener('click', (e) => {
        this.audio.currentTime = 0;
        this.audio.play();
      });
    }

    // this.node.addEventListener('click', action);
  }

  changeMode() {
    // this.node.style.backgroundColor = (this.isPlayMode) ? 'red' : 'green';
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
/* harmony import */ var _block_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/card */ "./src/block/card.js");
/* harmony import */ var _block_menu_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/menu_card */ "./src/block/menu_card.js");
/* harmony import */ var _block_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/toggle */ "./src/block/toggle.js");
/* eslint-disable no-case-declarations */
/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */






fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const header = new _utils_control__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, 'header', 'header', '<h1>English for kids </h1>');
  const mode = new _block_toggle__WEBPACK_IMPORTED_MODULE_4__["default"](header.node, 'mode');
  const main = new _utils_control__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, 'main', 'main');
  const field = new _utils_control__WEBPACK_IMPORTED_MODULE_1__["default"](main.node, 'div', 'field');
  const elem = new _block_menu__WEBPACK_IMPORTED_MODULE_0__["default"](header.node, 'menu', 'menu__item menu__item--none', 'menu__item menu__item--selected');

  elem.addItem('menu');
  json.forEach((item) => elem.addItem(item.category, item.categoryImg));
  elem.addItem('score');

  let isPlayMode = mode.isChecked;

  elem.onChange = (ind) => {
    location.hash = elem.content[ind];
  };

  window.onpopstate = () => {
    field.clear();
    const categoryHash = location.hash.slice(1);
    isPlayMode = mode.isChecked;

    field.node.style.paddingTop = (isPlayMode) ? '50px' : '0';

    switch (categoryHash) {
      case 'menu':
        for (let i = 0; i < json.length; i += 1) {
          const data = [json[i].category, json[i].categoryImg];
          new _block_menu_card__WEBPACK_IMPORTED_MODULE_3__["default"](field.node, 'card', 'card2', data);
        }
        break;
      case 'score':
        field.node.innerText = 'статистика';
        break;
      default:
        const ourCategoryData = json.find((item) => categoryHash === item.category).data;
        // надо сделать рандоайзер для карточек
        for (let i = 0; i < ourCategoryData.length; i += 1) {
          const car = new _block_card__WEBPACK_IMPORTED_MODULE_2__["default"](field.node, 'flip-container', ourCategoryData[i], isPlayMode);
          car.changeMode();
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map