/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _hamburgerMenuComponents = __webpack_require__(1);

	var _hamburgerMenuComponents2 = _interopRequireDefault(_hamburgerMenuComponents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hamburgerButton_01 = new _hamburgerMenuComponents2.default({ target: '.js-hamburger-button--01' });
	var hamburgerButton_02 = new _hamburgerMenuComponents2.default({ target: '.js-hamburger-button--02' });
	var hamburgerButton_03 = new _hamburgerMenuComponents2.default({ target: '.js-hamburger-button--03' });
	var hamburgerButton_04 = new _hamburgerMenuComponents2.default({ target: '.js-hamburger-button--04' });
	var hamburgerButton_05 = new _hamburgerMenuComponents2.default({ target: '.js-hamburger-button--05' });
	var hamburgerButton_06 = new _hamburgerMenuComponents2.default({ target: '.js-hamburger-button--06' });

	hamburgerButton_01.bindClick();
	hamburgerButton_02.bindClick();
	hamburgerButton_03.bindClick();
	hamburgerButton_04.bindClick();
	hamburgerButton_05.bindClick();
	hamburgerButton_06.bindClick();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CLASS_OPEN = 'js-hamburger-button--open';
	var CLASS_CLOSE = 'js-hamburger-button--close';

	var HamburgerButton = function () {
	  function HamburgerButton(opts) {
	    _classCallCheck(this, HamburgerButton);

	    var option = _extends({
	      target: '.js-hamburger-button',
	      other: 11
	    }, opts);
	    this.el = document.querySelector(option.target);
	  }

	  _createClass(HamburgerButton, [{
	    key: 'bindClick',
	    value: function bindClick() {
	      this.el.addEventListener('click', this._handleClick.bind(this));
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick(e) {
	      e.preventDefault();
	      var regex = /js-hamburger-button--open/;
	      if (regex.test(this.el.className) === true) {
	        this.el.classList.remove(CLASS_OPEN);
	        this.el.classList.add(CLASS_CLOSE);
	      } else {
	        this.el.classList.remove(CLASS_CLOSE);
	        this.el.classList.add(CLASS_OPEN);
	      }
	    }
	  }]);

	  return HamburgerButton;
	}();

	exports.default = HamburgerButton;

/***/ }
/******/ ]);