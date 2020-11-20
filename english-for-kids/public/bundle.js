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
  constructor(parentNode, className = '', className2 = '', content = '', onclick) {
    super(parentNode, 'div', className, content);
    this.isChecked = false;
    this.className = className;
    this.className2 = className2;
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
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */



class Menu extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className = '', itemClassName = '', itemClassNameSelected = '') {
    super(parentNode, 'div', className, '');
    this.className = className;
    this.itemClassName = itemClassName;
    this.itemClassNameSelected = itemClassNameSelected;

    this.arr = [];
    this.onChange = () => {};
  }

  addItem(content) {
    const elem = new _extcontrol__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, this.itemClassName, this.itemClassNameSelected, content, () => {
      this.select(this.arr.indexOf(elem));
    });
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



fetch('./data.json').then((res) => res.json()).then((json) => {
  console.log(json);
});

const elem = new _block_menu__WEBPACK_IMPORTED_MODULE_0__["default"](document.body, '', 'cl cl5', 'cl cl6');
elem.onChange = (ind) => {
  location.hash = ind;
};

for (let i = 0; i < 10; i += 1) {
  elem.addItem(i);
}

const el = new _utils_control__WEBPACK_IMPORTED_MODULE_1__["default"](document.body);

window.onpopstate = () => {
  switch (location.hash) {
    case '#0':
      el.node.innerHTML = 'test content 0';
      break;
    case '#1':
      el.node.innerHTML = 'test content 1';
      break;
    case '#2':
      el.node.innerHTML = 'test content 2';
      break;
    case '#3':
      el.node.innerHTML = 'test content 3';
      break;
    case '#4':
      el.node.innerHTML = 'test content 4';
      break;
    case '#5':
      el.node.innerHTML = 'test content 5';
      break;
    case '#6':
      el.node.innerHTML = 'test content 6';
      break;
    case '#7':
      el.node.innerHTML = 'test content 7';
      break;
    case '#8':
      el.node.innerHTML = 'test content 8';
      break;
    case '#9':
      el.node.innerHTML = 'test content 9';
      break;
    default:
      el.node.innerHTML = '';
      break;
  }

  console.log(window.location);
  const num = location.hash.slice(1);
  elem.select(num);
};

location.hash ? window.onpopstate() : elem.select(0);



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
  constructor(parentNode, tag = 'div', className = '', content = '') {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    parentNode.appendChild(this.node);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map