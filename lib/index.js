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